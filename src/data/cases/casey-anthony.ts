import type { SeedCase } from "./types";

export const caseyAnthony: SeedCase = {
  slug: "casey-anthony",
  title: "Casey Anthony — What Happened to Caylee?",
  drop_date: "2026-08-12",
  year: 2008,
  difficulty: 4,
  source_url: "https://en.wikipedia.org/wiki/Death_of_Caylee_Anthony",
  tldr:
    "A toddler vanished for 31 days before anyone called police. Her mother told shifting stories. Remains turned up near the family home. Florida sought death. Accident cover-up — or murder?",
  key_facts: [
    "Two-year-old Caylee Anthony was last seen in mid-June 2008; her grandmother reported her missing 31 days later.",
    "Casey Anthony told police a nanny had kidnapped the child — a nanny investigators could not find — and falsely claimed she worked at Universal Studios.",
    "Caylee's skeletal remains were found in December 2008 in woods near the Anthony home; the medical examiner ruled homicide by undetermined means.",
    "The state sought the death penalty, alleging chloroform and duct tape; the defense said Caylee drowned in the family pool and that the death was concealed.",
  ],
  brief: `On June 16, 2008, Casey Anthony left her parents' Orlando home with her two-year-old daughter, Caylee. For the next month, relatives later said, Casey offered rotating explanations — a nanny, a work trip to Tampa — whenever anyone asked where the little girl was. On July 15, Cindy Anthony called 9-1-1. She had not seen her granddaughter in thirty-one days. She also told dispatchers that Casey's recovered car smelled like a dead body; she later walked that phrasing back as panic and exaggeration.

Casey told investigators Caylee had been taken by a babysitter named Zenaida Fernandez-Gonzalez. The apartment Casey pointed to had been vacant for months. She also claimed to work at Universal Studios; when detectives walked her onto the lot, she eventually admitted she did not. She was arrested on false-statement and related charges while the search for Caylee continued.

In December, a meter reader led police to a wooded lot near the Anthony house. Inside a laundry bag and blanket were a child's skeletal remains. Duct tape was associated with the skull. Chief medical examiner Jan Garavaglia ruled the death a homicide but listed the means as undetermined — there was no clear toxicology trail on bone, and the body had been exposed for months.

Florida indicted Casey for first-degree murder, aggravated child abuse, and aggravated manslaughter, and announced it would seek death. Prosecutors built a circumstantial case: Casey wanted her old party life back; someone had searched the family computer for chloroform; cadaver dogs alerted on the car and yard; air samples from the trunk were said to show decomposition chemistry; a hair in the trunk showed postmortem banding; duct tape was the alleged murder weapon.

Defense attorney Jose Baez offered a different story in opening statements: Caylee accidentally drowned in the backyard pool on June 16, and Casey's father, George, helped hide the body to avoid a neglect investigation. The defense blasted the state's forensics as oversold — "fantasy forensics," phantom stickers, disputed computer searches — and reminded jurors that Casey did not have to prove what happened.

No one disputes Caylee is dead, or that her mother lied to police. The murder question is harder: did the state prove Casey killed her daughter beyond a reasonable doubt? You're the jury now.`,
  evidence: [
    {
      title: "Thirty-one-day silence and false nanny story",
      description:
        "Casey did not report Caylee missing and told police a nanny kidnapped the child — a claim that collapsed when the named apartment proved long vacant.",
    },
    {
      title: "Remains with duct tape near the family home",
      description:
        "Skeletal remains identified as Caylee's were found in woods nearby; duct tape was recovered in connection with the skull, and the ME ruled homicide by undetermined means.",
    },
    {
      title: "Trunk odor and forensic circumstantial case",
      description:
        "Witnesses described a decomposition-like smell from Casey's car; the state also cited chloroform-related computer activity, dog alerts, and contested trunk air testing.",
    },
  ],
  vote_options: ["Guilty", "Not Guilty"],
  counter_arguments: {
    Guilty:
      "Homicide by undetermined means is not the same as proving who did it or how. No DNA on the duct tape, no clear cause of death, and forensic claims the defense called experimental or wrong — including a chloroform-search count later exposed as software error. Lying about a nanny is despicable and explains misdemeanor charges; it does not automatically equal first-degree murder. If accidental drowning plus panic is still in play, hasn't the state left reasonable doubt on the capital counts?",
    "Not Guilty":
      "A mother parties for a month while her toddler is missing, invents a kidnapper, and the child's bones turn up blocks from home with duct tape by the skull. The car stank; dogs alerted; the ME called it homicide. People who find an accidental drowning do not build a secret disposal and a fictional nanny. When every innocent explanation requires a larger conspiracy, isn't the straightforward reading that Casey ended Caylee's life?",
  },
  real_verdict:
    "Acquitted of first-degree murder, aggravated manslaughter, and aggravated child abuse; convicted on four misdemeanor counts of lying to law enforcement (two later overturned on appeal). Released shortly after sentencing based on time served.",
  historical_context:
    "The trial drew massive cable-news and social-media attention; Time called it a defining 'social media trial.' Jurors later told reporters the state never proved a cause of death and that emotion alone was not enough. Wikipedia covers public reaction and juror interviews extensively; private deliberation detail beyond those interviews is limited.",
};
