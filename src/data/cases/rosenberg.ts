import type { SeedCase } from "./types";

export const rosenberg: SeedCase = {
  slug: "rosenberg-espionage",
  title: "The Rosenbergs — Atomic Espionage",
  drop_date: "2026-08-24",
  year: 1951,
  difficulty: 3,
  source_url: "https://en.wikipedia.org/wiki/Julius_and_Ethel_Rosenberg",
  tldr:
    "A New York couple is charged with conspiracy to pass radar, sonar, and nuclear secrets to the Soviet Union at the dawn of the Cold War. The star witness is the wife's brother. Spies — or victims of a Red Scare?",
  key_facts: [
    "Julius and Ethel Rosenberg were tried in 1951 in federal court in New York for conspiracy to commit espionage for the Soviet Union.",
    "The indictment covered transmission of classified information on radar, sonar, jet propulsion, and nuclear weapons designs during and after World War II.",
    "Ethel's brother, David Greenglass — a former Manhattan Project machinist at Los Alamos — testified that he passed bomb sketches to Julius and that Ethel typed notes.",
    "The defense denied the spy ring story, attacked Greenglass's credibility as a deal-seeking relative, and argued Cold War panic was substituting for proof.",
  ],
  brief: `In March 1951, with the Korean War underway and fear of Soviet atomic power gripping Washington, Julius and Ethel Rosenberg sat in a Manhattan federal courtroom charged with conspiracy to commit espionage. The government said the couple had funneled classified military and nuclear information to the USSR — material touching radar, sonar, jet aircraft, and the design of atomic weapons. If true, they were at the center of the most damaging spy case of the early Cold War. If false, they were a Jewish left-wing couple being made into an example.

The prosecution's pivotal witness was David Greenglass, Ethel's brother. Greenglass had worked as a machinist on the Manhattan Project at Los Alamos. He testified that Julius recruited him to pass secrets, that he delivered sketches of an implosion-type bomb lens, and that Ethel typed up handwritten notes in the Rosenbergs' apartment so the information could be transmitted more cleanly. Courier Harry Gold and other names from the Klaus Fuchs spy chain were woven into the same narrative. Prosecutor Irving Saypol asked the jury to see a disciplined underground cell, not a family quarrel.

The Rosenbergs pleaded not guilty. Their lawyer, Emmanuel Bloch, argued that Greenglass was saving himself and his wife Ruth with a story tailored to what the FBI wanted to hear — including late changes about where and how notes were typed. The defense cast the case as guilt by Communist association in an atmosphere where accusation alone could destroy a life. Julius had worked at Army Signal Corps labs and lost his job over Party ties; the defense said politics was being dressed up as atomic treason.

Judge Irving Kaufman made clear he considered the charged conduct among the gravest imaginable in peacetime. Your job is narrower: did the government prove a conspiracy to spy? Greenglass's testimony is either the spine of the truth or the word of a brother bargaining for his own neck. Decide which.`,
  evidence: [
    {
      title: "David Greenglass's testimony",
      description:
        "Ethel's brother described passing Los Alamos bomb-related sketches to Julius and claimed Ethel typed the notes for delivery to Soviet contacts.",
    },
    {
      title: "Espionage conspiracy charge",
      description:
        "The indictment alleged a network moving classified radar, sonar, jet, and nuclear information to the Soviet Union — not a single document in isolation.",
    },
    {
      title: "Credibility and Cold War climate",
      description:
        "Defense: Greenglass changed details and bargained for leniency; the case unfolded amid intense anti-Communist pressure that could inflate thin proof into a capital spy drama.",
    },
  ],
  vote_options: ["Guilty", "Not Guilty"],
  counter_arguments: {
    Guilty:
      "The government's atomic tale rests heavily on a brother who admitted spying and then pointed at his sister to cut a deal. Typing stories shifted late. In 1951, juries were told the Rosenbergs had given Stalin the bomb — a claim easy to feel and hard to check from the jury box. If Greenglass lied about Ethel to save Ruth, and Julius's 'ring' is built from that same mouth, is conspiracy proved beyond a reasonable doubt — or only feared?",
    "Not Guilty":
      "Greenglass was not a stranger with a grudge; he was a Los Alamos insider who confessed to passing bomb sketches and walked the jury through how the Rosenbergs allegedly moved them. Couriers and co-defendants populated the same map. Cold War panic is real — but so was Soviet espionage. When a participant describes recruitment, sketches, and typing in the living room, can you dismiss the whole conspiracy as Red Scare theater?",
  },
  real_verdict:
    "Guilty of conspiracy to commit espionage (March 1951). Both were sentenced to death and executed at Sing Sing on 19 June 1953 — the only American civilians executed for espionage in the Cold War.",
  historical_context:
    "Decades of declassified Venona decrypts, Morton Sobell's later statements, and Greenglass's 2001 admission that he may have lied about Ethel typing the notes have led many historians to conclude Julius was a Soviet agent while Ethel's role was thinner than the trial claimed — possibly awareness without the operational acts that sent her to the chair. Their sons still seek her exoneration. Wikipedia covers appeals, clemency fights, and post-Cold War archives; it does not preserve a detailed lay-jury deliberation transcript from 1951 beyond the swift guilty verdict.",
};
