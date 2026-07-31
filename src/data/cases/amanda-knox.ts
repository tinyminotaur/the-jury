import type { SeedCase } from "./types";

export const amandaKnox: SeedCase = {
  slug: "amanda-knox",
  title: "Amanda Knox — Murder in Perugia",
  drop_date: "2026-08-13",
  year: 2007,
  difficulty: 4,
  source_url: "https://en.wikipedia.org/wiki/Amanda_Knox",
  tldr:
    "An American student in Perugia is accused, with her boyfriend, of murdering her British roommate. The case turns on a contested interrogation, a wrongly named bar owner, and disputed forensic traces. Did she take part — or was she never there?",
  key_facts: [
    "Meredith Kercher was found stabbed to death in her locked bedroom in Perugia on 2 November 2007; roommate Amanda Knox had raised the alarm after finding blood in the bathroom and a locked door.",
    "During a long police interrogation without a lawyer, Knox named her boss, Patrick Lumumba; he was arrested, then cleared by an alibi.",
    "Knox and boyfriend Raffaele Sollecito said they had spent the night at his apartment; prosecutors alleged they acted with Rudy Guede, whose prints and DNA were tied to the scene.",
    "Forensic claims about a knife from Sollecito's kitchen and a bra clasp were sharply disputed by defense experts as contaminated or unreliable.",
  ],
  brief: `On the morning of 2 November 2007, American exchange student Amanda Knox returned to the cottage she shared in Perugia, Italy, and found something wrong: an open front door, blood in the bathroom, and her British roommate Meredith Kercher's bedroom locked. Knox called others for help. When the door was forced, Kercher was found dead from stab wounds to the neck. She had been alone in the house the night before while other flatmates were away for a holiday.

Knox told investigators she had spent the night of 1 November at the apartment of her new boyfriend, Raffaele Sollecito, after her shift at a bar was cancelled by text from the owner, Patrick Lumumba. In the days that followed she was questioned repeatedly. On the night of 5–6 November, in a long interrogation without a lawyer — Italian rules treat voluntary witnesses differently from formal suspects — she produced a statement naming Lumumba as the killer and placing herself at the cottage. Lumumba was arrested, then released when customers confirmed he had been serving at his bar all evening. Knox later said police pressure and confusion produced a false accusation; the state treated the statement as evidence of guilty knowledge.

Prosecutors built a three-person theory: Knox and Sollecito, they said, had joined Rudy Guede — a local acquaintance whose bloody fingerprints and DNA were found in Kercher's room — in a sexual assault and murder, then staged a break-in. They pointed to Knox's shifting demeanor, the Lumumba episode, alleged traces on a kitchen knife from Sollecito's flat, and a bra clasp collected weeks after the crime that they said carried Sollecito's DNA.

The defense answered that Guede's presence explained the murder without Knox, that the cottage forensics were mishandled in a circus of contamination, that the knife and clasp evidence were scientifically weak, and that an American student had been railroaded by a media narrative and a coercive interrogation. Kercher's death was real and brutal. Whether Knox was a participant or a roommate who found a crime scene is what you must decide — on the case as this first trial presents it.`,
  evidence: [
    {
      title: "The Lumumba statement",
      description:
        "After hours of interrogation without counsel, Knox named bar owner Patrick Lumumba; he was jailed, then released when his alibi held. The state calls it a window into guilt; the defense calls it a coerced false accusation.",
    },
    {
      title: "Guede at the scene",
      description:
        "Rudy Guede's bloody fingerprints and DNA were found on Kercher's belongings and in the room; he was prosecuted separately. The question for this jury is whether Knox and Sollecito were there with him.",
    },
    {
      title: "Disputed knife and bra-clasp DNA",
      description:
        "Prosecutors cited a kitchen knife from Sollecito's apartment and a bra clasp recovered late from the crime scene; defense experts attacked collection methods, possible contamination, and the strength of the matches.",
    },
  ],
  vote_options: ["Guilty", "Not Guilty"],
  counter_arguments: {
    Guilty:
      "Guede's DNA and prints put him in that room — but does that prove Knox was with him? American forensic critics say the knife and clasp evidence were compromised by messy collection. Knox's Lumumba statement came after a marathon interrogation without a lawyer or adequate interpreter, and Lumumba was innocent. If the strongest physical case is against someone else, and the confession-adjacent statement is poisoned by process, isn't reasonable doubt the honest call?",
    "Not Guilty":
      "Knox was first on the scene, gave accounts that shifted, and under questioning produced a story that sent an innocent man to jail — conduct prosecutors say reveals she knew more than a bystander. The state ties her and Sollecito to Guede through mixed forensic traces and the staged-break-in theory. Kercher died in a locked room in a shared cottage. If you believe the knife, the clasp, and the interrogation statement, can you really say the roommate next door had nothing to do with it?",
  },
  real_verdict:
    "Convicted with Sollecito in 2009 (26-year sentence for Knox); acquitted on appeal in 2011; conviction restored on retrial in 2014; definitively acquitted by Italy's Supreme Court of Cassation in 2015. Guede was convicted separately and later released.",
  historical_context:
    "The Kercher murder generated years of appellate warfare unusual to U.S. observers: Italy allows prosecution appeals of acquittals. Knox also faced a separate slander conviction related to the Lumumba accusation. The European Court of Human Rights later criticized aspects of her early police treatment. Wikipedia tracks the full conviction–acquittal–reconviction–final acquittal path; it does not offer a minute-by-minute jury-deliberation narrative for the 2009 corte d'assise, which mixes professional judges and lay jurors.",
};
