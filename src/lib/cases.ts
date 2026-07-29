import { sql } from "./db";

export type Case = {
  id: string;
  slug: string;
  title: string;
  brief: string;
  evidence: { title: string; description: string }[];
  vote_options: string[];
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
    SELECT id, slug, title, brief, evidence, vote_options, year,
           real_verdict, historical_context, difficulty, source_url, drop_date
    FROM cases
    WHERE drop_date <= CURRENT_DATE
    ORDER BY drop_date DESC
    LIMIT 1
  `;
  return (row as Case) ?? null;
}

/**
 * One real, Wikipedia-sourced test case so TIN-464 (Phase 1 ballot flow)
 * has something real to render and vote on. Bulk case authoring (20-25
 * cases per the launch plan) is TIN-469's job, not this seed.
 */
export async function seedCases(): Promise<void> {
  const brief = `When Hurricane Katrina struck New Orleans on August 29, 2005, Memorial Medical Center lost power, air conditioning, and water pressure within days. Temperatures inside climbed past 100°F. Evacuation by boat and helicopter was slow and chaotic, and by September 1st, dozens of critically ill patients -- many on the seventh floor, run by LifeCare for long-term acute care -- had still not been moved.

Dr. Anna Pou, an ear-nose-throat surgeon who had stayed behind to help, worked alongside nurses Lori Budo and Cheri Landry to care for patients too sick or too heavy to carry down nine flights of stairs in the dark. When mortuary workers recovered bodies from the hospital after the storm, the count reached 45 -- the highest of any hospital in the city. Toxicology testing later found morphine, the sedative midazolam, or both in 23 of 41 bodies examined.

Louisiana's Attorney General, Charles Foti, called it "not euthanasia; this is plain and simple homicide," and in July 2006 Pou was arrested and charged with four counts of second-degree murder. Prosecutors argued the drug combination and dosages were consistent with intentional killing, not pain management, and that patients who might have survived evacuation were given doses without their consent.

Pou's defense argued the opposite: that she and the nurses were practicing compassionate, standard end-of-life care under conditions no medical protocol had ever anticipated -- no reliable evacuation timeline, no working equipment, no realistic hope of safely moving some patients at all. They argued intent, not outcome, was what mattered, and that the intent was to ease suffering, not end life.

A Louisiana grand jury heard the evidence in July 2007 and declined to indict Pou on any charge. The case never went to trial. The state later paid over $450,000 of her legal fees, and lawmakers issued a formal apology.

Was this a doctor making an impossible call under the worst conditions imaginable -- or something else? The grand jury's answer was clear. Whether it was the right one is still debated.`;

  const evidence = JSON.stringify([
    {
      title: "Toxicology findings",
      description:
        "23 of 41 recovered bodies tested positive for morphine, midazolam, or both.",
    },
    {
      title: "Attorney General's public statement",
      description:
        "Charles Foti's 2006 characterization of the deaths as homicide, not euthanasia.",
    },
    {
      title: "Grand jury outcome",
      description:
        "July 2007: grand jury declined to indict Dr. Pou on any of the four second-degree murder counts.",
    },
  ]);

  await sql`
    INSERT INTO cases (
      slug, title, brief, evidence, vote_options, year,
      real_verdict, historical_context, difficulty, source_url, drop_date
    )
    VALUES (
      'anna-pou-katrina',
      'Dr. Anna Pou — Mercy or Murder?',
      ${brief},
      ${evidence}::jsonb,
      '["Guilty", "Not Guilty"]'::jsonb,
      2005,
      'No indictment -- a Louisiana grand jury declined to charge her in July 2007; the case never went to trial.',
      'Became a landmark case in disaster medicine and triage ethics, cited in hospital emergency-preparedness reform afterward.',
      5,
      'https://en.wikipedia.org/wiki/Anna_Pou',
      CURRENT_DATE
    )
    ON CONFLICT (slug) DO NOTHING
  `;
}
