import type { SeedCase } from "./types";

/** Day 0 / already live — keep as the first drop so current testing is undisturbed. */
export const annaPou: SeedCase = {
  slug: "anna-pou-katrina",
  title: "Dr. Anna Pou — Mercy or Murder?",
  drop_date: "2026-07-29",
  year: 2005,
  difficulty: 5,
  source_url: "https://en.wikipedia.org/wiki/Anna_Pou",
  tldr:
    "A surgeon gave dying patients high-dose sedatives as a hospital collapsed during Hurricane Katrina. She was charged with four counts of second-degree murder. Mercy, or murder?",
  key_facts: [
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
  vote_options: ["Guilty", "Not Guilty"],
  counter_arguments: {
    Guilty:
      "Consider the conditions: no power, no water, temperatures over 100°F, and no realistic evacuation timeline for patients who could not physically be moved. Every survivor account describes chaos, with medical staff forced into impossible triage decisions with no established protocol. The prosecution's case rests heavily on toxicology alone -- but morphine and midazolam are standard end-of-life comfort medications, and using them under crisis conditions isn't automatically evidence of intent to kill. Doesn't the sheer chaos of the situation create real reasonable doubt about what was actually intended?",
    "Not Guilty":
      '23 of 41 bodies tested positive for morphine, midazolam, or both -- a striking pattern for a hospital, and these drugs in these doses go beyond routine comfort care. Some patients were reportedly not in imminent danger of dying before receiving these doses. The state\'s own Attorney General, after investigating directly, called it "plain and simple homicide" -- a serious conclusion from an official who reviewed the evidence firsthand. Doesn\'t the scale and pattern of the toxicology findings alone raise real doubt about the "it was just compassionate care" explanation?',
  },
  real_verdict:
    "No indictment -- a Louisiana grand jury declined to charge her in July 2007; the case never went to trial.",
  historical_context:
    "Became a landmark case in disaster medicine and triage ethics, cited in hospital emergency-preparedness reform afterward. Wikipedia's article does not detail a jury deliberation story because the case never reached a trial jury.",
};
