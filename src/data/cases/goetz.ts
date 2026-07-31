import type { SeedCase } from "./types";

export const goetz: SeedCase = {
  slug: "bernhard-goetz",
  title: "Bernhard Goetz — Subway Vigilante",
  drop_date: "2026-08-15",
  year: 1984,
  difficulty: 2,
  source_url: "https://en.wikipedia.org/wiki/1984_New_York_City_Subway_shooting",
  tldr:
    "A man shot four teenagers on a New York subway after they approached him for money. He called it self-defense against an imminent robbery. Prosecutors called it vigilantism. Where is the line?",
  key_facts: [
    "On December 22, 1984, Bernhard Goetz shot four Black teenagers on a downtown Manhattan subway car.",
    "Goetz said the teens surrounded him and demanded money; he drew an unlicensed pistol and fired, wounding all four — one left paralyzed.",
    "He fled the scene, later surrendered, and told police he had acted because he feared a repeat of a prior mugging.",
    "He faced charges including attempted murder, assault, and weapons offenses; the central dispute was whether the shootings were justified self-defense.",
  ],
  brief: `New York City in the mid-1980s was deep in a crime wave that left many riders treating the subway as a daily risk. On December 22, 1984, Bernhard Goetz boarded a downtown train. Four teenagers — Barry Allen, Troy Canty, Darrell Cabey, and James Ramseur — were on the same car. According to Goetz, they approached him, surrounded him, and asked for money in a way he read as the start of a robbery.

Goetz was carrying an unlicensed handgun. He drew it and fired, wounding all four. One shot left Darrell Cabey with a severed spinal cord and permanent paralysis. Goetz left the train and disappeared; days later he surrendered to police in New Hampshire and gave lengthy statements describing fear, prior victimization, and a belief that he had to act before he was beaten or robbed again.

The case detonated a national argument. Some New Yorkers cast Goetz as a stand-in for every rider who had felt trapped and unprotected. Others saw a man who answered a demand for money with gunfire that permanently disabled a teenager — and whose own statements, including remarks about how he fired, undercut a clean self-defense story. Race was impossible to ignore: a white shooter, four Black youths, and a city already raw over crime and policing.

Prosecutors charged attempted murder, assault, reckless endangerment, and weapons crimes. The defense argued that a reasonable person in Goetz's position could have believed deadly force was necessary to prevent a robbery and serious injury. The state argued that fear of crime is not a license to open fire once a threat has passed, and that Goetz's conduct after the first shots mattered as much as the teens' approach.

You are not voting on whether the subway felt dangerous in 1984. You are deciding whether Goetz's use of force was lawful self-defense — or a crime. You're the jury now.`,
  evidence: [
    {
      title: "The subway encounter",
      description:
        "Four teenagers approached Goetz on a Manhattan subway car and asked for money; Goetz drew a pistol and shot all four, leaving one paralyzed.",
    },
    {
      title: "Goetz's statements to police",
      description:
        "After surrendering, Goetz described fearing robbery and referenced a prior mugging; his recorded explanations of how and why he fired became central contested evidence.",
    },
    {
      title: "Unlicensed firearm",
      description:
        "Goetz carried a handgun without a New York license — a separate fact from the self-defense dispute over the shootings themselves.",
    },
  ],
  vote_options: ["Guilty", "Not Guilty"],
  counter_arguments: {
    Guilty:
      "Goetz said he feared an imminent robbery after being surrounded and asked for money — in a city where subway muggings were common, and after he himself had been attacked before. Self-defense law asks what a reasonable person could believe in that moment, not what we know after the fact about who was armed. If four people close in on a lone rider demanding cash, isn't there real doubt that drawing a gun was criminal rather than panicked self-preservation?",
    "Not Guilty":
      "Asking for money is not the same as using deadly force, and Goetz fired multiple times, permanently paralyzing one teenager. His own statements about the shootings — including how he continued after the initial threat — gave prosecutors a narrative of punishment, not pure defense. Carrying an illegal gun into that encounter also undercuts the picture of a law-abiding citizen forced into an impossible choice. Doesn't the severity and sequence of the shots raise doubt that this was only self-defense?",
  },
  real_verdict:
    "Mixed — the jury acquitted Goetz of attempted murder and assault, convicting him only on the unlicensed-firearm charge. He served about eight months in jail.",
  historical_context:
    "The case became a flashpoint in 1980s debates over crime, race, and self-defense in New York. A civil jury later awarded Darrell Cabey a large judgment against Goetz. Wikipedia summarizes the criminal trial outcome and public reaction but does not offer a rich inside account of jury-room deliberation beyond the public verdict split between major charges and the gun count.",
};
