import type { SeedCase } from "./types";

export const saccoVanzetti: SeedCase = {
  slug: "sacco-vanzetti",
  title: "Sacco and Vanzetti — Justice or Prejudice?",
  drop_date: "2026-08-07",
  year: 1921,
  difficulty: 5,
  source_url: "https://en.wikipedia.org/wiki/Sacco_and_Vanzetti",
  tldr:
    "Two Italian immigrant anarchists are tried for a payroll murder in Braintree. Ballistics clash. Alibis clash. The country is hunting Reds. Are they killers — or convenient enemies?",
  key_facts: [
    "On April 15, 1920, a paymaster and a guard were shot during a shoe-company payroll robbery in Braintree, Massachusetts.",
    "Nicola Sacco and Bartolomeo Vanzetti, Italian-born anarchists, were arrested weeks later carrying guns and denied anarchist ties at first.",
    "Prosecutors offered eyewitness identifications, a cap, and ballistics linking a bullet to Sacco's pistol; defense experts disputed the match.",
    "The trial unfolded amid the Red Scare, with Judge Webster Thayer openly hostile to anarchists outside — and sometimes inside — the courtroom.",
  ],
  brief: `On a April afternoon in 1920, two men carrying a shoe-factory payroll in Braintree, Massachusetts, were ambushed. Guard Alessandro Berardelli and paymaster Frederick Parmenter were shot; the killers fled in a Buick with the cash boxes. Shell casings and bullets pointed to .32-caliber automatics. The stolen payroll was never cleanly recovered.

Police hunting Italian anarchists after a wave of bombings soon focused on a circle around a man named Mario Buda. On May 5, Nicola Sacco, a shoemaker, and Bartolomeo Vanzetti, a fish peddler, were arrested after arriving with others at a garage connected to that circle. Both were armed. Both initially lied about guns and politics. Sacco carried a .32 Colt and cartridges similar in make to casings from the murder scene; Vanzetti carried a .38 revolver the state would argue matched the slain guard's missing gun.

Neither man was a quiet bystander in radical politics. They followed the militant anarchist Luigi Galleani; the federal government considered Galleanists among its most dangerous opponents. To prosecutors, the guns, the falsehoods, and eyewitnesses who placed the pair near the robbery told a simple story of political bandits funding the cause.

To the defense, the case was a frame soaked in prejudice. Italian alibi witnesses placed Vanzetti selling fish; Sacco's work records and supporters contested the timeline. Defense ballistics experts said the fatal bullet did not match Sacco's Colt. Eyewitnesses who were certain in court had been shaky or contradictory earlier — including a woman who claimed a detailed view of a gunman in a moving car from dozens of feet away. The men's radicalism, the defense said, explained why they were armed and evasive when arrested (fear of deportation raids), not why they would rob a payroll.

Judge Webster Thayer, who had publicly thundered against Bolshevism and anarchism, kept the courtroom under heavy guard. Outside, the Red Scare made "Italian anarchist" almost a synonym for guilt. Inside, the jury was asked to decide a narrower question: did the Commonwealth prove these two men committed the Braintree murders?

Identity, ballistics, bias, and fear — which tips the scale? You're the jury now.`,
  evidence: [
    {
      title: "Guns and cartridges at arrest",
      description:
        "Sacco carried a loaded .32 Colt and mixed .32 cartridges resembling casings from the scene; Vanzetti carried a .38 revolver the state linked to the murdered guard's missing weapon.",
    },
    {
      title: "Conflicting ballistics testimony",
      description:
        "State experts said the fatal bullet's rifling matched Sacco's pistol; defense experts testified the bullet did not match test fires from that gun.",
    },
    {
      title: "Eyewitness identifications under fire",
      description:
        "Some witnesses placed Sacco or Vanzetti at or near the robbery; others could not identify them, and key accounts were attacked as too certain after fleeting glimpses.",
    },
  ],
  vote_options: ["Guilty", "Not Guilty"],
  counter_arguments: {
    Guilty:
      "When a state's case needs a hostile judge, disputed bullet matches, and eyewitnesses who grow more certain with time, prejudice may be doing the work proof should do. Alibi witnesses and defense firearms experts directly contradict the Commonwealth. Armed anarchists fearing deportation have reasons to lie that have nothing to do with Braintree. If the fatal bullet could have come from any of hundreds of thousands of similar Colts, where is proof beyond a reasonable doubt?",
    "Not Guilty":
      "They were arrested with the right caliber of firepower, lied immediately, and were tied by multiple witnesses to the getaway car's orbit. Cartridges in Sacco's pocket mirrored the unusual mix at the murder scene. Felony-murder rules can sweep in the man in the car even when who fired which shot is messy. In a payroll massacre this brazen, isn't skepticism about 'anti-Italian hysteria' just a way to ignore hard physical links?",
  },
  real_verdict:
    "Convicted of first-degree murder after a few hours of deliberation on July 14, 1921; sentenced to death. Executed in the electric chair on August 23, 1927, after failed appeals and a governor's advisory-committee review. In 1977 Massachusetts Governor Michael Dukakis proclaimed they had been unfairly tried and convicted, without issuing a pardon.",
  historical_context:
    "The case became an international cause célèbre; later ballistics tests (including 1961) have been read by some as linking Sacco's gun to the fatal bullet, while critics still dispute chain of custody and possible evidence tampering. Wikipedia documents worldwide protests and the Lowell Committee's affirmation of the verdict; it notes the 1921 jury deliberated only a few hours but does not provide a detailed inside narrative of those deliberations.",
};
