import { neon } from "@neondatabase/serverless";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set");
}

export const sql = neon(process.env.DATABASE_URL);

let schemaEnsured = false;

/**
 * App-specific tables. Auth is fully custom (see lib/auth/session.ts,
 * lib/auth/server.ts) after dropping Neon Managed Better Auth -- users
 * and magic_links live here too, not in a separate auth service.
 *
 * Active/Deferred/Recused (PRD 2.4) are deliberately NOT stored columns —
 * they're derived from vote/message timestamps (recused = no phase-1 vote,
 * deferred = has a phase-1 vote but no phase-2 activity), computed where
 * needed (TIN-465) rather than duplicated as a status that could drift.
 */
export async function ensureSchema(): Promise<void> {
  if (schemaEnsured) return;

  await sql`CREATE TABLE IF NOT EXISTS users (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    email text UNIQUE NOT NULL,
    created_at timestamptz NOT NULL DEFAULT now()
  );`;

  // One-time-use tokens for the magic-link flow. A row is consumed
  // (used_at set) on first successful verify; expired/used tokens fail.
  await sql`CREATE TABLE IF NOT EXISTS magic_links (
    token text PRIMARY KEY,
    email text NOT NULL,
    expires_at timestamptz NOT NULL,
    used_at timestamptz,
    created_at timestamptz NOT NULL DEFAULT now()
  );`;

  await sql`CREATE TABLE IF NOT EXISTS groups (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    invite_code text UNIQUE NOT NULL,
    created_at timestamptz NOT NULL DEFAULT now()
  );`;

  await sql`CREATE TABLE IF NOT EXISTS group_members (
    group_id uuid NOT NULL REFERENCES groups(id) ON DELETE CASCADE,
    user_id text NOT NULL,
    joined_at timestamptz NOT NULL DEFAULT now(),
    PRIMARY KEY (group_id, user_id)
  );`;

  await sql`CREATE TABLE IF NOT EXISTS cases (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    slug text UNIQUE NOT NULL,
    title text NOT NULL,
    brief text NOT NULL,
    evidence jsonb NOT NULL DEFAULT '[]',
    year integer,
    real_verdict text,
    historical_context text,
    difficulty smallint NOT NULL CHECK (difficulty BETWEEN 1 AND 5),
    source_url text NOT NULL,
    drop_date date NOT NULL UNIQUE,
    created_at timestamptz NOT NULL DEFAULT now()
  );`;

  // Append-only: the current vote for a (case, group, user, phase) is the
  // latest row by created_at. This is what makes swing-rate tracking (PRD
  // 5.1/2.5) a plain query instead of a separate history table.
  await sql`CREATE TABLE IF NOT EXISTS votes (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    case_id uuid NOT NULL REFERENCES cases(id) ON DELETE CASCADE,
    group_id uuid REFERENCES groups(id) ON DELETE CASCADE,
    user_id text NOT NULL,
    phase smallint NOT NULL CHECK (phase IN (1, 2)),
    choice text NOT NULL,
    reasoning_note text,
    created_at timestamptz NOT NULL DEFAULT now()
  );`;
  await sql`CREATE INDEX IF NOT EXISTS votes_lookup_idx
    ON votes (case_id, group_id, user_id, phase, created_at);`;

  await sql`CREATE TABLE IF NOT EXISTS deliberation_messages (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    case_id uuid NOT NULL REFERENCES cases(id) ON DELETE CASCADE,
    group_id uuid NOT NULL REFERENCES groups(id) ON DELETE CASCADE,
    user_id text NOT NULL,
    body text NOT NULL,
    created_at timestamptz NOT NULL DEFAULT now()
  );`;
  await sql`CREATE INDEX IF NOT EXISTS deliberation_messages_lookup_idx
    ON deliberation_messages (case_id, group_id, created_at);`;

  schemaEnsured = true;
}
