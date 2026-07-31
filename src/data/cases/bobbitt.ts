import type { SeedCase } from "./types";

export const bobbitt: SeedCase = {
  slug: "lorena-bobbitt",
  title: "Lorena Bobbitt — Assault or Survival?",
  drop_date: "2026-08-08",
  year: 1993,
  difficulty: 2,
  source_url: "https://en.wikipedia.org/wiki/John_and_Lorena_Bobbitt",
  tldr:
    "After a night of alleged sexual assault, a woman injured her sleeping husband with a kitchen knife and fled. She said she had endured abuse for years. The state called it malicious wounding. What do you believe?",
  key_facts: [
    "In June 1993, Lorena Bobbitt attacked her husband John while he slept, severing his penis with a knife from their kitchen, then left the apartment.",
    "Lorena told police she had been raped that night and described a marriage marked by alleged abuse; John denied the assault narrative.",
    "John was tried separately on a marital-sexual-assault charge tied to that night and was acquitted before Lorena's assault case was decided.",
    "Lorena faced malicious-wounding charges; the defense argued she acted in a traumatized state after prolonged abuse, not from calculated cruelty.",
  ],
  brief: `In the early hours of June 23, 1993, in Manassas, Virginia, Lorena Bobbitt cut her husband John with a kitchen knife while he slept, severing his penis, and drove away. She discarded the severed organ; it was later recovered and surgically reattached. Within hours the story was national news — equal parts crime report and late-night punchline — while the people inside it described a marriage that had already been cracking.

Lorena told investigators that John had sexually assaulted her that night and that she had suffered ongoing physical and sexual abuse during the marriage. She said she left the bedroom in a dissociated rage, grabbed the knife, and only afterward understood what she had done. John denied raping her and contested the portrait of himself as an abuser. Each side produced witnesses and competing histories of a young marriage under stress.

The legal system split the dispute into two tracks. John was prosecuted for marital sexual assault related to that night; a jury acquitted him. Lorena was charged with malicious wounding for the knife attack. Her defense did not claim the injury never happened — the medical facts were plain — but argued that years of alleged abuse and the trauma of that night left her in a state where criminal intent for malicious wounding could not be cleanly assigned.

Prosecutors asked the jury to separate sympathy from law: a sleeping person is not a lawful target, and severing a body part is a grave assault even inside a miserable marriage. They argued impulse and anger are not a free pass. The defense asked jurors to see the act as the breaking point of a victim who had been trapped, not as sadism.

You are not scoring tabloid fame. On the malicious-wounding charge arising from the attack, should Lorena Bobbitt be found guilty — or not? You're the jury now.`,
  evidence: [
    {
      title: "The June 1993 attack",
      description:
        "Lorena injured John while he slept, using a kitchen knife to sever his penis, then fled; the organ was recovered and surgically reattached.",
    },
    {
      title: "Competing accounts of the marriage",
      description:
        "Lorena alleged rape that night and a pattern of abuse; John denied the sexual-assault claim and disputed her characterization of the relationship.",
    },
    {
      title: "Parallel prosecution of John",
      description:
        "John was tried on a marital-sexual-assault charge connected to that night and acquitted before Lorena's wounding case reached its verdict.",
    },
  ],
  vote_options: ["Guilty", "Not Guilty"],
  counter_arguments: {
    Guilty:
      "If Lorena's account of repeated abuse and a sexual assault that night is credible, the knife attack may read as a trauma response rather than cold malice — especially when she left in chaos and later cooperated with recovering what she had discarded. Malicious wounding requires a culpable mental state; a mind flooded by fear and humiliation is not the same as a sadistic plan. Doesn't her story create doubt about the intent the charge requires?",
    "Not Guilty":
      "John was asleep. Whatever the jury believed about the marriage, attacking an unconscious person with a knife is the kind of harm criminal law exists to punish. A separate jury already rejected the rape charge against him; treating Lorena's narrative as settled fact risks retrying that case through the back door. If rage after a fight excuses catastrophic bodily injury, where does assault law stop?",
  },
  real_verdict:
    "Not Guilty by reason of insanity — the jury found Lorena Bobbitt not guilty of malicious wounding on that ground; she was ordered to a brief psychiatric evaluation and released.",
  historical_context:
    "The Bobbitt trials dominated U.S. pop culture in 1993–94 and became a shorthand in conversations about domestic violence, gender, and media sensationalism. Wikipedia summarizes both prosecutions and the insanity acquittal; it does not provide a detailed inside narrative of how Lorena's jurors deliberated beyond the public verdict and the short subsequent hospital hold.",
};
