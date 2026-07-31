import type { SeedCase } from "./types";

export const leopoldLoeb: SeedCase = {
  slug: "leopold-loeb",
  title: "Leopold and Loeb — Death or Mercy?",
  drop_date: "2026-08-22",
  year: 1924,
  difficulty: 2,
  source_url: "https://en.wikipedia.org/wiki/Leopold_and_Loeb",
  tldr:
    "Two wealthy Chicago teenagers kidnapped and killed fourteen-year-old Bobby Franks for a 'perfect crime.' They confessed. Clarence Darrow begs the court not to hang them. Death — or life?",
  key_facts: [
    "Nathan Leopold, 19, and Richard Loeb, 18, lured neighbor Bobby Franks into a rental car on May 21, 1924, and killed him.",
    "They dumped the body near Wolf Lake, sent a ransom demand, and were undone partly by eyeglasses left at the scene.",
    "Both confessed; each blamed the other for the fatal blows. They pleaded guilty, so the hearing decided punishment, not guilt.",
    "Clarence Darrow's marathon plea attacked capital punishment and urged the judge to spare their lives because of youth and forces beyond their control.",
  ],
  brief: `They did not deny it.

Nathan Leopold and Richard Loeb were privileged University of Chicago students — prodigies from Kenwood mansions — who decided that Nietzsche's "superman" idea licensed a perfect crime. After months of planning, they chose Bobby Franks, a fourteen-year-old neighbor who had played tennis at the Loeb house. On May 21, 1924, they offered him a ride, struck him with a taped chisel, and killed him in the car. After dark they stripped the body, poured acid on the face, and hid it in a culvert by Wolf Lake. They mailed a ransom note and even telephoned the Franks family as "George Johnson."

The scheme collapsed almost immediately. Bobby's body was found before the ransom could be paid. A pair of eyeglasses with an uncommon hinge, sold to only a few Chicago customers, led police to Leopold. Alibis crumbled when Leopold's chauffeur confirmed the family's car was in the shop. Under questioning, both young men confessed, then disagreed about who struck the killing blows. They spoke of thrill, superiority, and disappointment that murder did not feel transformative.

The families hired Clarence Darrow. Facing a public hungry for the gallows, Darrow abandoned any insanity-acquittal fantasy before a jury. Leopold and Loeb pleaded guilty to murder and kidnapping. What followed was not a trial on whether they did it — they had — but a sentencing hearing before Judge John R. Caverly: death, or imprisonment.

For over a month the state put on witness after witness documenting the kidnapping's cruelty. The defense answered with psychiatrists and a philosophy of mitigation: youth, endocrine and psychological abnormality, warped education, a city bathed in postwar cheapening of life. Darrow's closing ran some eight hours. He argued that hanging two boys would be easy popularity, not justice; that the state teaches violence when it kills; that mercy for the immature is how civilization moves forward.

Judge Caverly alone would choose. The killing is admitted. The only question left is the one that still divides death-penalty debates: do Leopold and Loeb hang, or do they live out their days behind bars? You're the court now.`,
  evidence: [
    {
      title: "Confessions and guilty pleas",
      description:
        "Both men confessed in detail and pleaded guilty, removing factual innocence from the hearing and leaving only the sentence.",
    },
    {
      title: "Planned kidnapping and concealment",
      description:
        "Months of preparation, a rental car, a typed ransom scheme, acid used on the body, and disposal at Wolf Lake showed deliberation rather than sudden passion.",
    },
    {
      title: "Darrow's mitigation case",
      description:
        "Defense experts and Darrow's summation stressed the defendants' youth, claimed psychological abnormality, and the moral case against retributive execution.",
    },
  ],
  vote_options: ["Death", "Life imprisonment"],
  counter_arguments: {
    Death:
      "They are eighteen and nineteen — brilliant, yes, but still barely past childhood in the eyes of the law's older mercies. A guilty plea already spares the state a circus jury trial. Killing them adds two more bodies without restoring Bobby Franks. If the justice system is supposed to be better than a thrill crime rooted in 'superman' vanity, doesn't answering Nietzsche with a noose prove their philosophy right? Darrow asks whether mercy for the young is weakness — or the point.",
    "Life imprisonment":
      "This was not a bar fight. It was a rehearsed kidnapping of a child, complete with ransom theater and acid on a corpse. Leopold and Loeb wanted to prove they stood above the law; capital punishment exists for exactly that defiance. Youth did not stop them from choosing a victim who had trusted a neighbor's smile. If life in prison still lets 'supermen' survive their experiment, what deterrent is left for the next perfect crime?",
  },
  real_verdict:
    "On September 10, 1924, Judge Caverly sentenced both to life imprisonment for murder plus 99 years for kidnapping — not death. He cited youth and precedent more than Darrow's philosophy. Loeb was killed by a fellow inmate in 1936; Leopold was paroled in 1958.",
  historical_context:
    "Darrow's summation became one of the most famous anti-death-penalty speeches in American legal history. Because the defendants pleaded guilty, there was no jury verdict on guilt; Wikipedia describes the judge's stated rationale (youth and precedent) but not a jury deliberation, since sentencing rested with the court alone.",
};
