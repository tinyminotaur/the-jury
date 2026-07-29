<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## The Jury

Daily cooperative jury-deliberation game. Full spec: `file:///Users/coal/neon-library/1-Projects/the-jury/PRD.md` (vault) and the [Linear project description](https://linear.app/tiny-minotaur/project/the-jury-12c6e93eefb1) (architecture, monetization, roadmap — kept current, check it before assuming this file is complete). Linear issues: TIN-461–470.

**Deploy:** GitHub-first — push to `main`, Vercel auto-deploys via its GitHub integration (project imported at `jury.tinyminotaur.co`). No Vercel CLI/token used anywhere in this workflow.

**DB:** `@neondatabase/serverless` against Vercel Postgres (backed by Neon), using `DATABASE_URL`. **Not** `@vercel/postgres` — that package is deprecated as of this project's creation (2026-07-29); Vercel's own migration guide points new projects at Neon's SDK directly.

**Auth:** fully custom passwordless email magic link. **Not** Neon Managed Better Auth or `@daveyplate/better-auth-ui` — tried both, hit a UI-kit context-propagation bug and then a cross-domain session-cookie limitation Neon's own docs admit isn't fully supported yet for a Vercel-app + neon.tech-auth-backend deployment. See `lib/auth/session.ts` (signed cookie, HMAC via `NEON_AUTH_COOKIE_SECRET` repurposed as a generic session secret), `lib/db.ts` (`users`/`magic_links` tables), `app/api/auth/{request,verify,sign-out}/route.ts`. Resend sends the email directly. Full story in DECISIONS.md — read it before reaching for any Better Auth / Neon Auth package again for this project.

**Deliberation updates:** polling (15-30s), not WebSockets — deliberate choice, see DECISIONS.md.

**Case content:** every case must be a real historical/legal case with a Wikipedia article as its primary source (`cases.source_url`, required, displayed in-app as a citation). Case briefs are original prose paraphrasing the article, never copied verbatim — see DECISIONS.md and TIN-469.
