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
