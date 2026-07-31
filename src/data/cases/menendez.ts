import type { SeedCase } from "./types";

export const menendez: SeedCase = {
  slug: "menendez-brothers",
  title: "The Menendez Brothers — Murder or Self-Defense?",
  drop_date: "2026-08-04",
  year: 1989,
  difficulty: 3,
  source_url: "https://en.wikipedia.org/wiki/Menendez_brothers",
  tldr:
    "Two brothers killed their parents in the family mansion, first blamed intruders, then said they had lived through years of abuse and fired in fear. Murder — or a claim of self-defense the jury must weigh?",
  key_facts: [
    "In August 1989, Lyle and Erik Menendez shot and killed their parents, José and Kitty Menendez, in the family's Beverly Hills home.",
    "The brothers initially described a mob-style attack by unknown intruders; attention later fixed on their spending after the deaths and on inconsistencies in that story.",
    "Erik eventually described the shootings to his psychologist; that disclosure helped bring the brothers into focus as suspects.",
    "At trial the defense argued years of sexual and physical abuse and a fear-driven killing; prosecutors argued a planned murder motivated by hatred and inheritance.",
  ],
  brief: `On the night of August 20, 1989, José Menendez — a powerful entertainment executive — and his wife Kitty were shot to death in the den of their Beverly Hills mansion. Their sons, Lyle and Erik, told police a story of armed intruders and a random slaughter. For a time, that was the public frame: a wealthy family hit by outsiders.

The frame did not hold. In the months after the funerals, the brothers spent freely — cars, watches, travel — while living on the estate's aftermath. Investigators dug into the household. Then Erik Menendez spoke to a psychologist about what had really happened that night. The professional confidence around that session became its own legal fight, but the core admission was explosive: the sons, not strangers, had fired the shots.

Arrested and charged with murder, Lyle and Erik offered a defense that inverted the morality play. They said José had subjected them to years of sexual abuse, that Kitty had been violent and complicit or willfully blind, and that on the night of the shootings they believed their lives were in danger — that the parents were about to act against them after threats and a rising confrontation. The killings, on that telling, were the panic of victims who saw no escape, not a cold plot for money.

Prosecutors called the abuse narrative a calculated rewrite. They pointed to the shotgun purchases, the reloading, the initial false intruder story, and the lifestyle binge as proof of deliberation and motive: eliminate the parents, inherit the fortune, invent trauma when the first story collapsed. Whether abuse occurred, they argued, did not turn a massacre in the den into lawful self-defense under California law.

You are sitting where a criminal jury sits: not as therapists, not as tabloid audiences. Should the brothers be convicted of murder for killing their parents — or does their account raise a defense that means not guilty? You're the jury now.`,
  evidence: [
    {
      title: "The Beverly Hills shootings",
      description:
        "José and Kitty Menendez were killed by multiple shotgun blasts in their home in August 1989; their sons were eventually charged with the murders.",
    },
    {
      title: "First story and later spending",
      description:
        "The brothers initially blamed unknown intruders; after the deaths they engaged in conspicuous spending that fueled suspicion about motive.",
    },
    {
      title: "Confession path and abuse defense",
      description:
        "Erik's disclosures to a psychologist helped expose the brothers' role; at trial the defense centered on alleged long-term abuse and fear, while the state called the killings a planned murder for inheritance.",
    },
  ],
  vote_options: ["Guilty", "Not Guilty"],
  counter_arguments: {
    Guilty:
      "If the brothers endured years of sexual and physical abuse and believed a deadly confrontation was imminent, the law's self-defense doctrines exist precisely for victims who see no safe exit. A false first story can be panic and shame as easily as proof of greed. Before you treat shotgun blasts as pure calculation, doesn't the abuse claim — if you credit it — create doubt that this was murder rather than a terror-driven act?",
    "Not Guilty":
      "Buying shotguns, killing both parents in a barrage, inventing intruders, then spending the estate's money is the classic shape of a planned murder dressed up later as trauma. Self-defense usually requires an immediate unlawful threat — not a retroactive autobiography offered after the cover story fails. Even genuine childhood harm does not license execution in the den. Doesn't the sequence of lies and spending undercut the fear narrative?",
  },
  real_verdict:
    "Guilty — after first trials ended in hung juries, a retrial convicted Lyle and Erik Menendez of first-degree murder; each received life in prison without parole.",
  historical_context:
    "The Menendez cases were among the early 1990s' most televised American murder trials. Wikipedia recounts the hung first juries, the successful retrial, and later resentencing/parole-related developments decades afterward. Detailed minute-by-minute jury-room deliberation from the first panels is not fully preserved in the public secondary record; what is clear is that those juries could not agree, and a later jury did.",
};
