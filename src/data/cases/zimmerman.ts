import type { SeedCase } from "./types";

export const zimmerman: SeedCase = {
  slug: "george-zimmerman",
  title: "George Zimmerman — Neighborhood Watch",
  drop_date: "2026-08-14",
  year: 2012,
  difficulty: 4,
  source_url: "https://en.wikipedia.org/wiki/Trial_of_George_Zimmerman",
  tldr:
    "A neighborhood-watch volunteer shoots an unarmed teenager after a confrontation in a Florida gated community. He claims self-defense. The state says he profiled and pursued a young man who was doing nothing wrong.",
  key_facts: [
    "On 26 February 2012, in Sanford, Florida, George Zimmerman shot Trayvon Martin, 17, during a confrontation; Martin was unarmed and carrying snacks from a convenience store.",
    "Zimmerman, on neighborhood watch, called police about a suspicious person, followed Martin despite a dispatcher's advice that officers did not need him to do that, and said Martin then attacked him.",
    "Zimmerman showed injuries to his face and the back of his head; the state charged second-degree murder, arguing he profiled Martin and created the fatal encounter.",
    "No video captured the fight; the case turns on 911 audio, physical injuries, witness scraps, and whose account of who started the violence the jury believes.",
  ],
  brief: `On a rainy evening in February 2012, seventeen-year-old Trayvon Martin was walking back from a convenience store to the townhouse where he was staying in a gated community in Sanford, Florida. George Zimmerman, a neighborhood-watch volunteer who lived in the complex, saw him, called police non-emergency to report a person he described as suspicious, and left his vehicle to follow on foot. A dispatcher told Zimmerman that officers did not need him to follow the person. Minutes later, neighbors heard cries for help and a gunshot. Martin lay dead of a single chest wound. He had been carrying candy and an iced tea. He was unarmed.

Zimmerman told police that Martin attacked him, punched him to the ground, and slammed his head against the pavement — and that he fired in fear for his life. Photos showed a bloody nose and lacerations on the back of Zimmerman's head. Florida law recognizes self-defense, including in some circumstances a right to stand one's ground without retreating; the defense asked the jury to see a watch captain overwhelmed by a younger, stronger assailant.

Prosecutors charged second-degree murder. Their story was that Zimmerman had profiled a Black teenager in a hoodie, ignored the dispatcher's guidance, pursued Martin through the complex, and forced a confrontation Martin never sought. Martin, they said, was walking home while Black in a place where Zimmerman had a pattern of calling in strangers. Who was screaming on the 911 calls became a bitterly contested point; Martin's family and Zimmerman's family each claimed the voice.

There is no video of the fight. The physical evidence shows a close-range shot and injuries to Zimmerman. It does not by itself prove who threw the first blow or whether Zimmerman's fear was reasonable. Was this a neighborhood defender who had no choice left — or a pursuer who turned suspicion into a killing? That is the question for the jury.`,
  evidence: [
    {
      title: "The non-emergency call and pursuit",
      description:
        "Zimmerman reported a suspicious person, continued after him on foot after a dispatcher said 'we don't need you to do that,' and moments later the fatal shot was fired.",
    },
    {
      title: "Zimmerman's injuries vs. an unarmed teen",
      description:
        "Zimmerman documented facial wounds and head lacerations consistent with a ground fight; Martin had no firearm or weapon — only items from the store.",
    },
    {
      title: "Competing narratives of who started it",
      description:
        "Defense: Martin sucker-punched and mounted Zimmerman, who fired in self-defense. State: Zimmerman profiled and confronted Martin, making himself the aggressor.",
    },
  ],
  vote_options: ["Guilty", "Not Guilty"],
  counter_arguments: {
    Guilty:
      "Zimmerman called police, stayed on the line, and ended the night with a bleeding head and a story that Martin was on top of him. Florida self-defense law does not require you to lose a fight before you may protect yourself. If Martin threw the first punch and kept slamming Zimmerman's head into concrete, a single shot can be lawful even if the tragedy began with a bad follow. Does 'he shouldn't have gotten out of the car' equal proof of second-degree murder beyond a reasonable doubt?",
    "Not Guilty":
      "Martin was a guest walking home with snacks. Zimmerman decided he looked wrong, ignored the dispatcher, and hunted him through the neighborhood. The state says the chase made Zimmerman the aggressor — and an aggressor cannot claim clean self-defense when the person he corners fights back. An unarmed teenager is dead because a watch volunteer would not wait for police. If you believe Zimmerman created the confrontation, can self-defense still carry the day?",
  },
  real_verdict:
    "Not guilty of second-degree murder (and the lesser-included manslaughter option) — jury verdict 13 July 2013 after roughly 16 hours of deliberation.",
  historical_context:
    "The shooting became a national flashpoint on race, guns, and Florida's self-defense laws; protests and a special prosecutor preceded the trial. Wikipedia's trial article summarizes evidence, jury instructions, and the roughly 16-hour deliberation ending in acquittal, but does not provide a full inside transcript of juror debates beyond later interviews and public reporting. Civil and public controversy continued long after the criminal case.",
};
