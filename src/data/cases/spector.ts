import type { SeedCase } from "./types";

export const spector: SeedCase = {
  slug: "phil-spector",
  title: "Phil Spector — The House in Alhambra",
  drop_date: "2026-08-23",
  year: 2003,
  difficulty: 2,
  source_url: "https://en.wikipedia.org/wiki/Phil_Spector",
  tldr:
    "A legendary music producer brings an actress home to his Alhambra mansion; she is found shot dead in a chair. He says she killed herself. Prosecutors say he pulled the trigger.",
  key_facts: [
    "On 3 February 2003, actress Lana Clarkson was found dead of a gunshot wound to the mouth at Phil Spector's Pyrenees Castle mansion in Alhambra, California.",
    "Spector described the death as an 'accidental suicide' and claimed she 'kissed the gun'; the prosecution charged him with murder.",
    "Spector's driver testified that Spector came out of the house with a gun and said words to the effect of 'I think I killed somebody.'",
    "Forensic experts clashed over whether the wound pattern and blood evidence fit suicide, homicide, or an ambiguous close-range shooting.",
  ],
  brief: `Phil Spector built a myth as the architect of the Wall of Sound — the producer behind hits for the Ronettes, the Righteous Brothers, and later work with the Beatles. By 2003 he lived largely in seclusion in a turreted mansion in Alhambra known as the Pyrenees Castle, with a reputation for volatility and an obsession with guns that friends and colleagues had whispered about for years.

In the early hours of 3 February 2003, Spector left the House of Blues in Los Angeles with Lana Clarkson, a working actress who was hosting that night. They went to his mansion. By morning Clarkson was dead in a chair, shot through the mouth. Spector's chauffeur, waiting outside, later told police that Spector emerged holding a firearm and said something like "I think I killed somebody." That call and that statement became pillars of the state's case.

Spector's public line was starkly different. He told an interviewer the death was an "accidental suicide" — that Clarkson had kissed the gun. The defense theory at trial cast her as depressed and impulsive, arguing the forensics of a contact wound to the mouth fit self-inflicted injury better than murder by a third party. Pathologists dueled over blood spatter, gunshot residue, and what a struggle would have left behind.

Prosecutors answered that Spector had a documented history of threatening women with guns, that a suicide made little sense in the home of a man she had just met, and that the driver's contemporaneous account — Spector with a gun, speaking of having killed someone — was a confession in all but formality. Clarkson could not testify. The physical scene and the words spoken in the driveway are what remain.

Was this a tragic suicide in a stranger's castle, or a homicide by one of pop music's most famous producers? That is the choice before you.`,
  evidence: [
    {
      title: "The driver's account",
      description:
        "Adriano de Souza reported seeing Spector leave the house with a gun and saying he thought he had killed somebody — prompting the emergency call.",
    },
    {
      title: "Spector's suicide claim",
      description:
        "Spector publicly called Clarkson's death an accidental suicide and said she kissed the gun; defense experts argued the oral gunshot was consistent with self-infliction.",
    },
    {
      title: "Scene and forensic dispute",
      description:
        "Clarkson was found slumped in a chair with a gunshot wound to the mouth; prosecution and defense pathologists disagreed on whether blood and residue patterns showed homicide or suicide.",
    },
  ],
  vote_options: ["Guilty", "Not Guilty"],
  counter_arguments: {
    Guilty:
      "A contact wound to the mouth is a classic suicide presentation, and the defense put experts on the stand to say the science fits self-infliction. Clarkson had career disappointments; Spector says she grabbed the gun. Drivers hear fragments and panic. If forensic ambiguity is real, does 'I think I killed somebody' — spoken in shock after a suicide in his house — prove he pulled the trigger beyond a reasonable doubt?",
    "Not Guilty":
      "She had known him for hours, not years — yet died in his chair with his gun. The driver puts a firearm in Spector's hand and a near-confession in his mouth before any lawyer could script it. Prosecutors sketched a pattern of Spector menacing women with weapons. Suicide theories asked the jury to believe a guest ended her life on a first visit while the homeowner merely watched. Doesn't the driveway statement collapse that story?",
  },
  real_verdict:
    "First trial (2007) ended in a hung jury (reported 10–2 for conviction). Retrial convicted Spector of second-degree murder in April 2009; he was sentenced to 19 years to life and died in prison in 2021.",
  historical_context:
    "Judge Larry Paul Fidler declared a mistrial when the first jury could not agree. The second jury convicted after about 18 days of deliberation. Wikipedia summarizes both trials and the driver's testimony but does not provide a full inside account of either jury's negotiations beyond the hung outcome and the eventual guilty verdict.",
};
