# Decisions

## 2026-07-29 — Hosting: Vercel, not the ThinkPad
**Context:** PRD targets 10k-100k concurrent users; this workspace's other services run on a personal always-on ThinkPad (neon-mcp-gateway).
**Considered:** self-hosting on the ThinkPad like the MCP gateway/Hindsight/etc. (nginx + systemd, matching `topology.tinyminotaur.co`); Vercel.
**Chose:** Vercel. tinyminotaur.co's main site and MTG Heatmap Dashboard already deploy this way; Vercel's usage-based pricing means the beta-scale build and a real growth-scale build are the same codebase, no rewrite if it takes off. Built as a friend-group beta for now — the PRD's growth numbers are north-star targets, not Phase 0 requirements.
**Side effects:** custom domain `jury.tinyminotaur.co` added in Vercel project settings (TIN-461), not nginx/systemd.

## 2026-07-29 — Deploy flow: GitHub-first, not Vercel CLI
**Context:** Vercel supports both a CLI-push workflow and a GitHub-integration workflow (auto-deploy on push + PR previews). Josh asked to confirm linking Vercel directly to GitHub.
**Considered:** Vercel CLI deploys (would need a Vercel token/local auth on this box — attempted, CLI wasn't authenticated here); GitHub-linked auto-deploy.
**Chose:** GitHub-linked. Agent creates + pushes the repo; Josh imports it into Vercel via the dashboard (one click, auto-detects Next.js). No Vercel CLI/token needed anywhere in the workflow going forward.
**Side effects:** TIN-461 (Vercel provisioning) is now blocked by TIN-462 (repo must exist first), reversed from the original ordering.

## 2026-07-29 — DB driver: @neondatabase/serverless, not @vercel/postgres
**Context:** MTG Heatmap Dashboard (the closest precedent in this workspace) uses `@vercel/postgres` for its user/session tables. Installing it here during scaffolding surfaced an npm deprecation notice: `@vercel/postgres` is deprecated — Vercel migrated its Postgres offering to Neon as a native integration and its own migration guide points new projects at Neon's SDK directly.
**Considered:** following the MTG Heatmap precedent exactly (`@vercel/postgres`); using Neon's own `@neondatabase/serverless` driver.
**Chose:** `@neondatabase/serverless`. No reason to start a new project on a package the vendor is actively steering people away from. MTG Heatmap's use of `@vercel/postgres` predates this deprecation and isn't touched by this decision — separate project, separate migration if Josh wants it later.
**Side effects:** `TIN-463`'s data-model work should target `@neondatabase/serverless`'s query API, not `@vercel/postgres`'s `sql` tagged template (similar shape, different import). Confirm the exact env var name Vercel injects for the Postgres connection string once TIN-461 provisions the DB — historically `POSTGRES_URL`, may differ under the Neon-native integration.

## 2026-07-29 — Auth: Neon Managed Better Auth (Magic Link plugin), not hand-rolled Auth.js/Lucia
**Context:** original plan (see AGENTS.md, TIN-461/463 as first written) was passwordless email magic-link auth via Auth.js or Lucia, backed by Resend. When Josh provisioned Neon Postgres through Vercel's marketplace integration (TIN-461), Vercel also auto-injected `NEON_AUTH_BASE_URL`, `VITE_NEON_AUTH_URL`, and `NEON_PROJECT_ID` — these are for Neon's own managed auth service ("Neon Auth," built on the Better Auth library), not leftover/unused vars.
**Considered:** hand-rolling magic-link auth with Auth.js or Lucia (Lucia specifically is a bad idea regardless — its own maintainer deprecated it and stopped recommending it); using Neon's Managed Better Auth, which ships a first-class Magic Link plugin (toggle in Neon Console -> Auth -> Plugins) and uses Resend as its recommended production email provider for delivery.
**Chose:** Neon Managed Better Auth with the Magic Link plugin enabled. It's already provisioned (came free with the Neon integration), needs no custom token-generation/session code from us, and uses the same Resend API key already sitting in Vercel env vars for the actual email send — the pieces Josh already set up assemble into the exact auth flow the PRD calls for, with less code to write and maintain.
**Side effects:** TIN-463 rewritten to integrate against Neon Auth's client/API instead of building magic-link logic from scratch. Need to verify during TIN-463 implementation whether the Resend key needs to be separately configured inside the Neon Console's Auth settings (Neon Auth runs on Neon's infra, not inside our Vercel deployment, so it may not auto-read our Vercel env vars) — flagged, not yet confirmed.

**Follow-up bug (found live, 2026-07-29):** the deployed sign-in page rendered a completely empty card — no email field, no button, nothing, even server-side. Root cause: `@daveyplate/better-auth-ui`'s `AuthUIProviderProps` has **separate** `magicLink` and `emailOTP` booleans, both defaulting to `false` — the `emailOTP={false}` example in `@neondatabase/auth-ui`'s own llms.txt (described there as "disable magic link option") is misleading; they are two distinct plugins/props, not one. `credentials={false}` was set correctly (no passwords), but `magicLink` was never explicitly turned on, so the form had zero enabled sign-in methods. Fix: added `magicLink` (true) to the `NeonAuthUIProvider` in `app/providers.tsx`. Lesson: this package's own docs conflated two real, separate features — verify against the actual installed `.d.ts` (as done here), not just the llms.txt/README, when a prop's behavior doesn't match what's observed live.

## 2026-07-29 — No stored `reveals`/`community_stats` table
**Context:** TIN-463 as originally scoped listed "reveals/community_stats aggregates" as a table alongside votes/messages.
**Considered:** a materialized reveals table updated on write; computing reveal data (swing rate, vote splits, cross-group stats) from `votes`/`deliberation_messages` on read.
**Chose:** compute on read. Same principle as not storing Active/Deferred/Recused as a column (see schema comment in `lib/db.ts`) — a derived value that can drift from its source is worse than a query, and case/group/vote volume is far too small for this to be a real performance problem at friend-group-beta scale. Revisit only if reveal queries actually show up as slow once TIN-468 is built.
**Side effects:** `lib/db.ts` has no `reveals` table. TIN-468 (reveal UI) computes its three layers directly from `votes`/`cases`/`deliberation_messages`.

## 2026-07-29 — Next.js 16 breaking changes hit during TIN-463 (for future reference)
**Context:** AGENTS.md warns this Next.js version has undocumented-in-training-data breaking changes. Two hit immediately when wiring Neon Auth:
1. The `middleware.ts` file convention is deprecated in favor of `proxy.ts` (same export shape — default export function + optional `config.matcher` — just a rename). `next build` prints a warning but still builds either way; only discovered the rename was mandatory-in-spirit by reading `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/proxy.md` directly.
2. Neon Auth's route handler (`auth.handler()` from `@neondatabase/auth/next/server`) hardcodes an internal `Params` type expecting `{ path: string[] }` — the catch-all route folder **must** be named `app/api/auth/[...path]/`, not `[...all]` or any other name, or TypeScript fails the build with a type-satisfaction error on `RouteHandlerConfig`. Not documented anywhere obvious; found by reading the actual installed `.d.mts` file after a build failure.
**Side effects:** `src/proxy.ts` (not `middleware.ts`), `src/app/api/auth/[...path]/route.ts` (not `[...all]`). If a future Next.js/Neon Auth upgrade changes either of these again, `npm run build`'s own type errors are the fastest way to find the real answer — faster and more reliable than searching docs/blog posts for this particular integration.

## 2026-07-29 — Deliberation thread updates: polling, not WebSockets
**Context:** PRD Section 10.1 suggests "WebSocket or pub-sub" for the deliberation thread; Section 10.3 separately describes the thread as "read-heavy, write-light" and async-friendly.
**Considered:** WebSockets (Pusher/Ably or self-hosted); Server-Sent Events; simple polling.
**Chose:** polling (15-30s interval) for MVP. On serverless (Vercel functions), a long-lived WebSocket/SSE connection is awkward and bills differently than the PRD's own framing of the thread assumes; polling is indistinguishable from real-time for an async deliberation window measured in hours, and is the simplest, cheapest thing to run. Revisit only if user feedback demands snappier updates.
**Side effects:** none yet — implemented in TIN-465.

## 2026-07-29 — Case sourcing: real cases only, Wikipedia as primary source
**Context:** Josh: "each case needs to be entirely real and use the wikipedia article as the primary source." The original PRD appendix included one explicitly fictional example case ("The Vanishing Ledger, inspired by real trials") alongside two real ones, and Section 12 flagged real-photo/court-document copyright risk without a concrete Phase 0 answer.
**Considered:** PRD's original mixed approach (real + "inspired by" cases, loose sourcing); requiring a real Wikipedia article as the primary source for every case.
**Chose:** every case must be entirely real with a Wikipedia article as its primary source. Case briefs are original prose summarizing that article's facts — never copied verbatim, since facts aren't copyrightable but Wikipedia's specific wording is (CC BY-SA, share-alike), and paraphrasing keeps that license off our own content. `cases.source_url` is a required DB field, shown in-app as a visible citation. This both resolves the copyright-risk flag from the original plan and makes the game's factual claims independently checkable, which fits the "teaches genuine history" pitch better than an unnamed advisory board would.
**Side effects:** dropped the fictional appendix example from the case-authoring scope (TIN-469); `cases.source_url` added to the schema (TIN-463); citation display added to the case-brief page (TIN-464) and the reveal's historical-outcome layer (TIN-468).
