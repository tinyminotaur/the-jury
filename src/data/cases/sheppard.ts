import type { SeedCase } from "./types";

export const sheppard: SeedCase = {
  slug: "sam-sheppard",
  title: "Sam Sheppard — The Bedroom Murder",
  drop_date: "2026-08-12",
  year: 1954,
  difficulty: 3,
  source_url: "https://en.wikipedia.org/wiki/Sam_Sheppard",
  tldr:
    "A pregnant woman is beaten to death in her Bay Village bedroom. Her osteopath husband says a bushy-haired intruder did it. The Cleveland press already has a verdict. Did Sam kill Marilyn?",
  key_facts: [
    "On July 4, 1954, Marilyn Reese Sheppard, who was pregnant, was bludgeoned in bed in the couple's lakeside home near Cleveland.",
    "Sam Sheppard said he fell asleep downstairs, woke to screams, fought a white 'form' or bushy-haired intruder, and was knocked unconscious twice.",
    "Their young son slept through the attack; the family dog was not reported to bark; Sam's watch and ring were found discarded outside.",
    "Local papers ran headlines demanding his arrest; prosecutors highlighted his affair with lab technician Susan Hayes as motive.",
  ],
  brief: `The night before Independence Day, 1954, Dr. Sam Sheppard and his wife Marilyn hosted neighbors at their home on Lake Erie in Bay Village, Ohio. Sam, an osteopathic physician, dozed on a daybed while Marilyn saw the guests out. Before dawn she was dead — beaten so savagely in their bedroom that blood painted the walls and trailed through the house.

Sam's story never wavered in its outline. He heard Marilyn cry his name, ran upstairs, saw a light-garmented figure, and was clubbed into blackness. He came to, checked his wife, found their seven-year-old son Chip still asleep next door, heard a noise below, chased an intruder to the beach, and was knocked out again. At 5:40 a.m. he called a neighbor in desperation. When help arrived, Sam was shirtless, his pants wet, a bloodstain on the knee, appearing shocked. Personal items — his watch, keys, fraternity ring — turned up in a bag in the shrubbery, as if a burglary had been staged or interrupted.

From the first days, Cleveland newspapers treated Sheppard as the obvious killer. Front-page editorials demanded an inquest and asked why he was not already in jail. Coroner Samuel Gerber obliged with a public inquest. Police and reporters circled the same themes: no dog barking, a son who never woke, a husband with comparatively little blood on him despite a crimson crime scene, and — once it surfaced — Sam's affair with hospital technician Susan Hayes.

At trial the state argued marital trouble and the Hayes relationship gave Sam reason to eliminate a pregnant wife. The defense answered with medical testimony that Sam's neck injuries and reflex losses could not be faked, with the mismatch between the slaughterhouse bedroom and his relatively clean clothes, and with Marilyn's chipped teeth, which counsel said suggested she bit an attacker who was not Sam. Character witnesses and two people who claimed to have seen a bushy-haired man near the house rounded out the intruder theory.

The jury sat in a city already saturated with headlines. Did Sam Sheppard murder Marilyn, or did a real intruder escape while the press convicted the husband? You're the jury now.`,
  evidence: [
    {
      title: "Crime-scene blood vs. Sam's clothing",
      description:
        "Marilyn's bedroom was heavily spattered, yet the prominent blood evidence on Sam reported at the scene was a stain on his trousers — a contrast the defense hammered.",
    },
    {
      title: "Affair with Susan Hayes",
      description:
        "Prosecutors presented Sam's relationship with a 24-year-old hospital lab technician as the motive for killing his pregnant wife.",
    },
    {
      title: "Claimed intruder and Sam's injuries",
      description:
        "Sheppard described fighting a bushy-haired form; a neurosurgeon testified to cervical injury and reflex loss the defense said could not be simulated.",
    },
  ],
  vote_options: ["Guilty", "Not Guilty"],
  counter_arguments: {
    Guilty:
      "An affair is not a murder weapon. The house was a bloodbath and Sam was not; that cuts against a bare-handed husband as much as it cuts for him. Doctors documented real head and neck trauma. Chip slept, the dog stayed quiet — odd facts, not proof. And when newspapers act as prosecutor before jury selection, how much of the state's case is evidence and how much is a city that already chose its villain? Isn't the bushy-haired intruder still possible enough for reasonable doubt?",
    "Not Guilty":
      "Husbands who discover a massacre call the police first, not a neighbor after a beach wrestling match with a faceless 'form.' No forced-entry story sits easily beside a silent dog and a sleeping child in the next room. The Hayes affair supplies motive the intruder theory lacks. Stolen items dumped in the yard look like staging. When the only witness to the phantom killer is the man who benefits from Marilyn's death, why believe him?",
  },
  real_verdict:
    "Convicted of second-degree murder in December 1954 and sentenced to life. The U.S. Supreme Court overturned the conviction in 1966 in Sheppard v. Maxwell, citing a 'carnival atmosphere' and due-process violations. Acquitted at a 1966 retrial.",
  historical_context:
    "F. Lee Bailey led the successful habeas and retrial effort; blood-spatter analyst Paul Kirk's work featured in the second trial. Sheppard's son later lost a civil wrongful-imprisonment suit. Wikipedia covers media misconduct and the Supreme Court ruling in depth; it notes the first jury deliberated four days and the retrial jury about twelve hours, without a detailed inside deliberation narrative.",
};
