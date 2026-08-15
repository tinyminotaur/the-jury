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

const CASE_COLUMNS = `id, slug, title, tldr, key_facts, brief, evidence, vote_options,
  counter_arguments, year, real_verdict, historical_context, difficulty, source_url, drop_date`;

/**
 * "Today's case" is the most recent case whose drop_date has arrived --
 * lets us seed a case ahead of time without it appearing early, and means
 * there's always a case to show once at least one has dropped.
 */
export async function getTodaysCase(): Promise<Case | null> {
  const [row] = await sql`
    SELECT ${sql.unsafe(CASE_COLUMNS)} FROM cases
    WHERE drop_date <= CURRENT_DATE
    ORDER BY drop_date DESC
    LIMIT 1
  `;
  return (row as Case) ?? null;
}

export async function getCaseById(caseId: string): Promise<Case | null> {
  const [row] = await sql`
    SELECT ${sql.unsafe(CASE_COLUMNS)} FROM cases WHERE id = ${caseId}
  `;
  return (row as Case) ?? null;
}

type SeedCase = {
  slug: string;
  title: string;
  tldr: string;
  keyFacts: string[];
  brief: string;
  evidence: { title: string; description: string }[];
  voteOptions: string[];
  counterArguments: Record<string, string>;
  year: number;
  realVerdict: string;
  historicalContext: string;
  difficulty: number;
  sourceUrl: string;
  /** SQL expression for drop_date, e.g. "CURRENT_DATE" or "CURRENT_DATE + 1". Only applied on first insert. */
  dropDateExpr: string;
};

// IMPORTANT: tldr/keyFacts/brief/evidence/counterArguments may never
// reveal or imply the real outcome -- all shown before/during voting.
// realVerdict/historicalContext are reveal-only (TIN-468) and the
// source_url link itself is never rendered before the reveal either.
//
// Swallows errors (e.g. a drop_date collision between seed cases) rather
// than throwing -- this runs on every relevant page load, so one bad seed
// shouldn't take down pages that don't even need it.
async function upsertCase(c: SeedCase): Promise<void> {
  try {
    await runUpsert(c);
  } catch (err) {
    console.error(`seedCases: failed to upsert "${c.slug}"`, err);
  }
}

async function runUpsert(c: SeedCase): Promise<void> {
  await sql`
    INSERT INTO cases (
      slug, title, tldr, key_facts, brief, evidence, vote_options,
      counter_arguments, year, real_verdict, historical_context,
      difficulty, source_url, drop_date
    )
    VALUES (
      ${c.slug},
      ${c.title},
      ${c.tldr},
      ${JSON.stringify(c.keyFacts)}::jsonb,
      ${c.brief},
      ${JSON.stringify(c.evidence)}::jsonb,
      ${JSON.stringify(c.voteOptions)}::jsonb,
      ${JSON.stringify(c.counterArguments)}::jsonb,
      ${c.year},
      ${c.realVerdict},
      ${c.historicalContext},
      ${c.difficulty},
      ${c.sourceUrl},
      ${sql.unsafe(c.dropDateExpr)}
    )
    ON CONFLICT (slug) DO UPDATE SET
      tldr = EXCLUDED.tldr,
      key_facts = EXCLUDED.key_facts,
      brief = EXCLUDED.brief,
      evidence = EXCLUDED.evidence,
      counter_arguments = EXCLUDED.counter_arguments
  `;
}

/**
 * A couple of real, Wikipedia-sourced test cases so the ballot/reveal flow
 * has something real to render and vote on. Bulk case authoring (20-25
 * cases per the launch plan) is TIN-469's job, not this seed.
 */
export async function seedCases(): Promise<void> {
  await upsertCase({
    slug: "anna-pou-katrina",
    title: "Dr. Anna Pou — Mercy or Murder?",
    tldr:
      "A surgeon gave dying patients high-dose sedatives as a hospital collapsed during Hurricane Katrina. She was charged with four counts of second-degree murder. Mercy, or murder?",
    keyFacts: [
      "Memorial Medical Center lost power and water in 100°F+ heat, with no realistic evacuation plan for its sickest patients.",
      "23 of 41 recovered bodies tested positive for morphine, midazolam, or both.",
      "Dr. Anna Pou faced four counts of second-degree murder if convicted.",
      "The defense called it standard end-of-life comfort care; prosecutors called it intentional killing.",
    ],
    brief: `When Hurricane Katrina struck New Orleans on August 29, 2005, Memorial Medical Center lost power, air conditioning, and water pressure within days. Temperatures inside climbed past 100°F. Evacuation by boat and helicopter was slow and chaotic, and by September 1st, dozens of critically ill patients -- many on the seventh floor, run by LifeCare for long-term acute care -- had still not been moved.

Dr. Anna Pou, an ear-nose-throat surgeon who had stayed behind to help, worked alongside nurses Lori Budo and Cheri Landry to care for patients too sick or too heavy to carry down nine flights of stairs in the dark. When mortuary workers recovered bodies from the hospital after the storm, the count reached 45 -- the highest of any hospital in the city. Toxicology testing later found morphine, the sedative midazolam, or both in 23 of 41 bodies examined.

Louisiana's Attorney General, Charles Foti, called it "not euthanasia; this is plain and simple homicide," and in July 2006 Pou was arrested and charged with four counts of second-degree murder. Prosecutors argued the drug combination and dosages were consistent with intentional killing, not pain management, and that patients who might have survived evacuation were given doses without their consent.

Pou's defense argued the opposite: that she and the nurses were practicing compassionate, standard end-of-life care under conditions no medical protocol had ever anticipated -- no reliable evacuation timeline, no working equipment, no realistic hope of safely moving some patients at all. They argued intent, not outcome, was what mattered, and that the intent was to ease suffering, not end life.

The facts, the toxicology, and the two competing explanations were all public well before the case was ultimately decided. Was this a doctor making an impossible call under the worst conditions imaginable, or was it homicide? You're the jury now.`,
    evidence: [
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
        title: "Hospital conditions timeline",
        description:
          "By September 1, 2005, the hospital had no power, no air conditioning, and indoor temperatures above 100°F, with the sickest patients still not evacuated.",
      },
    ],
    voteOptions: ["Guilty", "Not Guilty"],
    counterArguments: {
      Guilty:
        "Consider the conditions: no power, no water, temperatures over 100°F, and no realistic evacuation timeline for patients who could not physically be moved. Every survivor account describes chaos, with medical staff forced into impossible triage decisions with no established protocol. The prosecution's case rests heavily on toxicology alone -- but morphine and midazolam are standard end-of-life comfort medications, and using them under crisis conditions isn't automatically evidence of intent to kill. Doesn't the sheer chaos of the situation create real reasonable doubt about what was actually intended?",
      "Not Guilty":
        "23 of 41 bodies tested positive for morphine, midazolam, or both -- a striking pattern for a hospital, and these drugs in these doses go beyond routine comfort care. Some patients were reportedly not in imminent danger of dying before receiving these doses. The state's own Attorney General, after investigating directly, called it \"plain and simple homicide\" -- a serious conclusion from an official who reviewed the evidence firsthand. Doesn't the scale and pattern of the toxicology findings alone raise real doubt about the \"it was just compassionate care\" explanation?",
    },
    year: 2005,
    realVerdict:
      "No indictment -- a Louisiana grand jury declined to charge her in July 2007; the case never went to trial.",
    historicalContext:
      "Became a landmark case in disaster medicine and triage ethics, cited in hospital emergency-preparedness reform afterward.",
    difficulty: 5,
    sourceUrl: "https://en.wikipedia.org/wiki/Anna_Pou",
    dropDateExpr: "CURRENT_DATE",
  });

  await upsertCase({
    slug: "ellsberg-pentagon-papers",
    title: "Daniel Ellsberg — Whistleblower or Criminal?",
    tldr:
      "A former military analyst leaked 7,000 pages of secret Vietnam War documents to the press. He faced up to 115 years in prison under the Espionage Act. Whistleblower, or criminal?",
    keyFacts: [
      "Ellsberg secretly copied a classified 7,000-page Pentagon study on U.S. decisions in the Vietnam War and gave it to major newspapers in 1971.",
      "He was charged in 1973 under the Espionage Act plus theft and conspiracy -- a combination carrying a maximum sentence of 115 years.",
      "The documents showed several administrations privately doubted the war could be won while publicly claiming otherwise.",
      "Prosecutors said he broke the law and endangered national security; his defense said he had a moral duty to expose government deception.",
    ],
    brief: `In 1971, Daniel Ellsberg, a former military analyst who had worked on a classified Pentagon study of U.S. decision-making in Vietnam, secretly photocopied roughly 7,000 pages of that study and gave them to The New York Times, The Washington Post, and other newspapers. The documents -- which came to be known as the Pentagon Papers -- showed that multiple U.S. administrations had continued and expanded the war in Vietnam while privately believing, in many cases, that it could not be won, even as they publicly projected confidence.

The government moved quickly to try to stop publication, arguing the leak endangered national security and ongoing diplomatic and military operations. Ellsberg went into hiding before surrendering to authorities in Boston. In January 1973, he went to trial in Los Angeles, charged under the Espionage Act of 1917 along with theft and conspiracy counts -- a combination carrying a maximum sentence of 115 years in prison.

Prosecutors argued that Ellsberg had no right to unilaterally decide which government secrets the public should see, regardless of what the documents contained, and that leaking classified material -- even material that was merely embarrassing rather than actively dangerous -- was a serious federal crime with real national security consequences.

Ellsberg's defense argued the opposite: that the Pentagon Papers documented years of official deception about a war that had already cost tens of thousands of American lives, and that exposing that deception served a higher public interest than the classification stamp on the documents. He maintained he had acted out of conscience, not malice, and that democratic accountability depended on the public knowing what its government actually believed, not just what it said publicly.

Was Ellsberg a criminal who broke a clear law regardless of his motives -- or a whistleblower whose disclosure the public had a right to see? You're the jury now.`,
    evidence: [
      {
        title: "The Pentagon Papers themselves",
        description:
          "A 7,000-page classified Pentagon study showing multiple administrations privately doubted the Vietnam War could be won while publicly claiming otherwise.",
      },
      {
        title: "The charges",
        description:
          "Espionage Act violations plus theft and conspiracy counts, carrying a maximum sentence of 115 years.",
      },
      {
        title: "Ellsberg's public statements",
        description:
          "He said he leaked the documents to end what he saw as a war built on years of official deception, and was prepared to accept the legal consequences.",
      },
    ],
    voteOptions: ["Guilty", "Not Guilty"],
    counterArguments: {
      Guilty:
        "Consider what the documents actually showed: years of officials privately doubting a war they publicly defended, while thousands of American lives were spent on it. Ellsberg didn't sell secrets to a foreign power or reveal active troop positions -- he exposed his own government's dishonesty to its own citizens. If the classification system was being used to hide embarrassment rather than protect genuine security, doesn't the public's right to know outweigh the technical violation?",
      "Not Guilty":
        "Whatever his motives, Ellsberg was not elected, appointed, or authorized to decide what the American public should know about classified government operations -- he made that call unilaterally, for everyone, without any legal process. The Espionage Act exists precisely because individual judgment about which secrets are \"worth\" revealing isn't a defense to violating classification law. If every government employee could leak whatever they personally believed the public deserved to know, could any government function or protect legitimate secrets at all?",
    },
    year: 1971,
    realVerdict:
      "Dismissed -- Judge William Byrne threw out all charges on May 11, 1973, citing government misconduct after learning of an illegal break-in at Ellsberg's psychiatrist's office and warrantless FBI wiretapping targeting him. The case never reached a jury verdict.",
    historicalContext:
      "The dismissal came amid the wider Watergate scandal and helped expose the Nixon administration's \"White House Plumbers\" unit, formed partly in retaliation for the leak. Ellsberg is now widely regarded as a foundational figure in modern whistleblower protections.",
    difficulty: 4,
    sourceUrl: "https://en.wikipedia.org/wiki/Daniel_Ellsberg",
    dropDateExpr: "CURRENT_DATE",
  });
}
