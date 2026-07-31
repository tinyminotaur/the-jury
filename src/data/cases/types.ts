/**
 * Shape used by the launch-case catalog (TIN-469).
 * Pre-vote fields must never state or imply the real outcome —
 * only real_verdict / historical_context may contain it.
 */
export type SeedCase = {
  slug: string;
  title: string;
  /** Calendar day this case drops (YYYY-MM-DD). Unique across the catalog. */
  drop_date: string;
  year: number;
  /** 1–2 easy, 3 medium, 4–5 hard (PRD weekly mix). */
  difficulty: 1 | 2 | 3 | 4 | 5;
  source_url: string;
  tldr: string;
  key_facts: string[];
  brief: string;
  evidence: { title: string; description: string }[];
  vote_options: [string, string];
  /** Keyed by vote_option — counter shown to whoever voted that way. */
  counter_arguments: Record<string, string>;
  real_verdict: string;
  historical_context: string;
};
