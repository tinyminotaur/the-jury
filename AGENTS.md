<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## The Jury

Daily cooperative jury-deliberation game. Full spec: `file:///Users/coal/neon-library/1-Projects/the-jury/PRD.md` (vault) and the [Linear project description](https://linear.app/tiny-minotaur/project/the-jury-12c6e93eefb1) (architecture, monetization, roadmap — kept current, check it before assuming this file is complete). Linear issues: TIN-461–470.

**Deploy:** GitHub-first — push to `main`, Vercel auto-deploys via its GitHub integration (project imported at `jury.tinyminotaur.co`). No Vercel CLI/token used anywhere in this workflow.

**DB:** `@neondatabase/serverless` against Vercel Postgres (backed by Neon). **Not** `@vercel/postgres` — that package is deprecated as of this project's creation (2026-07-29); Vercel's own migration guide points new projects at Neon's SDK directly. `POSTGRES_URL` (or Neon's own env var name — confirm exact name once TIN-461 provisions the DB) is injected by Vercel.

**Auth:** passwordless email magic link via Resend. No passwords stored.

**Deliberation updates:** polling (15-30s), not WebSockets — deliberate choice, see DECISIONS.md.

**Case content:** every case must be a real historical/legal case with a Wikipedia article as its primary source (`cases.source_url`, required, displayed in-app as a citation). Case briefs are original prose paraphrasing the article, never copied verbatim — see DECISIONS.md and TIN-469.
