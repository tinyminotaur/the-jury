import type { SeedCase } from "./types";

export const borden: SeedCase = {
  slug: "lizzie-borden",
  title: "Lizzie Borden — The Axe Murders",
  drop_date: "2026-08-05",
  year: 1892,
  difficulty: 4,
  source_url: "https://en.wikipedia.org/wiki/Lizzie_Borden",
  tldr:
    "A prosperous Fall River couple were killed with an axe in their own house. Their adult daughter was the one put on trial. Circumstantial case — or reasonable doubt?",
  key_facts: [
    "Andrew Borden and his wife Abby were killed with multiple axe blows inside their Fall River, Massachusetts home on August 4, 1892.",
    "Lizzie Borden, Andrew's daughter from a prior marriage, lived in the house and reported discovering her father's body; she became the focus of suspicion and was charged with the murders.",
    "No eyewitness identified the killer; the prosecution built a circumstantial case around opportunity, household tensions, and physical clues.",
    "The defense stressed gaps in the forensic timeline, alternative explanations for evidence, and the absence of a clear, witnessed act.",
  ],
  brief: `On a hot August morning in 1892, Andrew Borden — a wealthy, frugal Fall River businessman — and his second wife, Abby, were murdered in their locked-up family home. Both were struck repeatedly with a sharp-edged weapon; the ferocity of the wounds shocked a city that still thought of itself as orderly and respectable.

Lizzie Borden, Andrew's unmarried adult daughter, was in or about the house that morning. She told neighbors and police she had found her father dead on the sitting-room sofa and that Abby was missing until searchers found her upstairs. Within days, attention fixed on Lizzie: servants and family dynamics, a reported attempt to buy poison days earlier, burned dress fabric, and the question of who else could have entered, killed twice, and left without being seen.

Prosecutors argued motive rooted in money and resentment — Andrew's tight purse strings, friction with the stepmother, and an inheritance that would look very different if both parents were gone. They pointed to opportunity: Lizzie had the house, the time window, and inconsistent statements about her movements. Physical items — a handleless hatchet head found in the basement, clothing that might have been destroyed — were offered as the thin forensic thread tying her to the scene.

The defense answered that circumstantial stacks of suspicion are not proof beyond a reasonable doubt. No one saw Lizzie strike a blow. Timeline reconstructions left room for an intruder. Forensic science of the 1890s was primitive by modern standards, and some of the state's prized clues admitted innocent explanations. Trying a respectable Sunday-school teacher for axe murder on inference alone, they argued, asked the jury to leap where the evidence only pointed.

Victorian New England watched a spectacle: gender, class, and family secrets on trial beside the bodies. Your task is colder. Given what was shown in court, should Lizzie Borden be found guilty of the murders — or not? You're the jury now.`,
  evidence: [
    {
      title: "Double homicide in a closed house",
      description:
        "Andrew and Abby Borden were killed by repeated axe blows inside their Fall River home on the morning of August 4, 1892, with no eyewitness to the attacks.",
    },
    {
      title: "Opportunity and household context",
      description:
        "Lizzie lived in the home, reported the discovery of her father's body, and was present during the window when both killings occurred; prosecutors emphasized family tensions and inheritance stakes.",
    },
    {
      title: "Circumstantial physical clues",
      description:
        "Investigators highlighted items such as a basement hatchet head and questions about destroyed clothing — contested links rather than a witnessed murder weapon in hand.",
    },
  ],
  vote_options: ["Guilty", "Not Guilty"],
  counter_arguments: {
    Guilty:
      "No witness saw the blows, the forensic links were disputed even then, and an unlocked-era house still leaves room for someone else to have entered and escaped. A capital case built on inconsistency, rumor, and ambiguous objects asks you to fill gaps with imagination. If the state cannot close the timeline or put the weapon cleanly in her hands, isn't that the definition of reasonable doubt?",
    "Not Guilty":
      "Two people were butchered in a short span inside a home Lizzie knew intimately, while she offered shifting accounts of where she was. Who else had the access, the grievance over money and the stepmother, and the chance to destroy clothing afterward? Circumstantial evidence convicts every day when the alternative theories require an invisible killer who vanishes without a trace. Doesn't the pattern of opportunity and conduct weigh heavier than the absence of an eyewitness?",
  },
  real_verdict:
    "Not Guilty — the jury acquitted Lizzie Borden. No one else was ever charged with the murders.",
  historical_context:
    "The acquittal did not end public suspicion; Borden remained a folkloric figure and the rhyme about the 'forty whacks' outlived the trial record. Wikipedia covers the investigation, trial evidence, and verdict in detail but does not preserve a minute-by-minute account of jury deliberation beyond the public result that she walked free and the case stayed officially unsolved.",
};
