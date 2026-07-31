import { SEED_CASES } from "@/data/cases";
import { sql } from "./db";

export type Case = {
  id: string;
  slug: string;
  title: string;
  tldr: string;
  key_facts: string[];
  brief: string;
  evidence: { title: string; description: string }[];
  vote_options: string[];
  counter_arguments: Record<string, string>;
  year: number | null;
  real_verdict: string | null;
  historical_context: string | null;
  difficulty: number;
  source_url: string;
  drop_date: string;
};

/**
 * "Today's case" is the most recent case whose drop_date has arrived --
 * lets us seed a case ahead of time without it appearing early, and means
 * there's always a case to show once at least one has dropped.
 */
export async function getTodaysCase(): Promise<Case | null> {
  const [row] = await sql`
    SELECT id, slug, title, tldr, key_facts, brief, evidence, vote_options, counter_arguments,
           year, real_verdict, historical_context, difficulty, source_url, drop_date
    FROM cases
    WHERE drop_date <= CURRENT_DATE
    ORDER BY drop_date DESC
    LIMIT 1
  `;
  return (row as Case) ?? null;
}

export async function getCaseById(caseId: string): Promise<Case | null> {
  const [row] = await sql`
    SELECT id, slug, title, tldr, key_facts, brief, evidence, vote_options, counter_arguments,
           year, real_verdict, historical_context, difficulty, source_url, drop_date
    FROM cases
    WHERE id = ${caseId}
  `;
  return (row as Case) ?? null;
}

/**
 * Upsert the launch catalog (TIN-469). Idempotent on slug.
 * Content lives in src/data/cases/ — this function only loads it into Postgres.
 * drop_date is set on insert only so a later re-seed cannot reshuffle the calendar.
 */
export async function seedCases(): Promise<void> {
  for (const c of SEED_CASES) {
    const keyFacts = JSON.stringify(c.key_facts);
    const evidence = JSON.stringify(c.evidence);
    const voteOptions = JSON.stringify(c.vote_options);
    const counterArguments = JSON.stringify(c.counter_arguments);

    await sql`
      INSERT INTO cases (
        slug, title, tldr, key_facts, brief, evidence, vote_options, counter_arguments, year,
        real_verdict, historical_context, difficulty, source_url, drop_date
      )
      VALUES (
        ${c.slug},
        ${c.title},
        ${c.tldr},
        ${keyFacts}::jsonb,
        ${c.brief},
        ${evidence}::jsonb,
        ${voteOptions}::jsonb,
        ${counterArguments}::jsonb,
        ${c.year},
        ${c.real_verdict},
        ${c.historical_context},
        ${c.difficulty},
        ${c.source_url},
        ${c.drop_date}::date
      )
      ON CONFLICT (slug) DO UPDATE SET
        title = EXCLUDED.title,
        tldr = EXCLUDED.tldr,
        key_facts = EXCLUDED.key_facts,
        brief = EXCLUDED.brief,
        evidence = EXCLUDED.evidence,
        vote_options = EXCLUDED.vote_options,
        counter_arguments = EXCLUDED.counter_arguments,
        year = EXCLUDED.year,
        real_verdict = EXCLUDED.real_verdict,
        historical_context = EXCLUDED.historical_context,
        difficulty = EXCLUDED.difficulty,
        source_url = EXCLUDED.source_url
    `;
  }
}
