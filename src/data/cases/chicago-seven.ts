import type { SeedCase } from "./types";

export const chicagoSeven: SeedCase = {
  slug: "chicago-seven",
  title: "The Chicago Seven — Conspiracy to Riot?",
  drop_date: "2026-08-10",
  year: 1969,
  difficulty: 3,
  source_url: "https://en.wikipedia.org/wiki/Chicago_Seven",
  tldr:
    "Antiwar organizers came to the 1968 Democratic convention. Streets erupted. The government put seven of them on trial for conspiracy and crossing state lines to incite a riot. Protest politics — or a police riot pinned on defendants?",
  key_facts: [
    "Seven activists were tried after chaotic protests outside the 1968 Democratic National Convention in Chicago.",
    "Charges included conspiracy and crossing state lines with intent to incite a riot under a new federal anti-riot statute.",
    "Judge Julius Hoffman ran a bitterly contentious courtroom; codefendant Bobby Seale's case was severed after he was bound and gagged.",
    "Undercover officers testified about planning and inflammatory talk; defense witnesses included writers, musicians, and former Attorney General Ramsey Clark.",
  ],
  brief: `August 1968: Chicago hosted the Democratic National Convention while the Vietnam War tore the country apart. Thousands of demonstrators — from the National Mobilization Committee to End the War in Vietnam to Abbie Hoffman's Yippies — poured into parks and streets. Permits were scarce. Police, National Guard, and federal agents flooded the city. Night after night, clubs, tear gas, and cameras turned Michigan Avenue into a national spectacle. A later federal study would call much of the street violence a "police riot," even while noting that some protesters had come looking for confrontation.

In 1969 the Justice Department indicted eight organizers under brand-new anti-riot provisions of the Civil Rights Act. The original Chicago Eight included Black Panther leader Bobby Seale; after Seale's case was severed mid-trial — following courtroom clashes that ended with him chained and gagged before the jury — the remaining defendants became known as the Chicago Seven: Rennie Davis, David Dellinger, John Froines, Tom Hayden, Abbie Hoffman, Jerry Rubin, and Lee Weiner.

Prosecutors argued the men had crossed state lines intending to spark disorder, citing undercover testimony about threats to break windows, provoke police, and teach the making of incendiary devices. The government called dozens of witnesses to paint a coordinated plan behind the convention-week chaos.

The defense cast the prosecution as a political show trial. They said organizers had sought peaceful, permitted protest; that city officials and police had manufactured the violence; and that satirical Yippie stunts were being criminalized as conspiracy. Celebrity witnesses testified. Former Attorney General Ramsey Clark was barred from addressing the jury after the defense tried to put him on. Judge Julius Hoffman traded insults with defendants and counsel for months, flooding the record with contempt citations.

When the case finally reached the jury, the central questions were stark: Did these defendants conspire, and did they travel interstate intending to incite a riot — or were they scapegoats for a city that lost control of its streets? You're the jury now.`,
  evidence: [
    {
      title: "Undercover police testimony",
      description:
        "Officers who infiltrated protest circles claimed defendants discussed confronting police, breaking windows, and building incendiary devices.",
    },
    {
      title: "Walker Report findings",
      description:
        "A presidential commission investigation characterized much of the convention-week violence as a police riot while acknowledging provocation by some demonstrators.",
    },
    {
      title: "Courtroom conduct and severed Seale trial",
      description:
        "Judge Hoffman's clashes with defendants — including binding and gagging Bobby Seale before declaring a mistrial as to him — framed the atmosphere the remaining jury saw.",
    },
  ],
  vote_options: ["Guilty", "Not Guilty"],
  counter_arguments: {
    Guilty:
      "The Walker Report itself called the worst street violence a police riot. Organizers had drafted nonviolence plans; many permits were denied; and Abbie Hoffman joked that the defendants 'couldn't agree on lunch,' let alone a conspiracy. Undercover quotes are easy to cherry-pick from months of political theater. If the state needed a new riot statute and a hostile judge to turn protest into felony intent, isn't that reasonable doubt about who really planned the violence?",
    "Not Guilty":
      "Undercover officers put planning talk — windows, bombs, baiting police — in the defendants' own mouths before the first gas canister flew. They came from out of state, publicized disruption, and then watched Michigan Avenue burn on live TV. A jury can reject 'police riot' as a blanket excuse and still find that crossing state lines with intent to incite disorder was exactly what the statute forbids. Don't the words and logistics of the organizers matter more than the chaos that followed?",
  },
  real_verdict:
    "All seven acquitted of conspiracy. Davis, Dellinger, Hayden, Hoffman, and Rubin convicted of crossing state lines with intent to incite a riot; Froines and Weiner acquitted on all counts. In 1972 the Seventh Circuit reversed the convictions; the government declined to retry.",
  historical_context:
    "Judge Hoffman issued mass contempt sentences while the jury deliberated; most contempt findings were later reversed or retried lightly. The appeals court censured both the judge and prosecutors for courtroom conduct. Wikipedia covers the verdict counts and appeal thoroughly; it notes the jury returned its decision after several days but does not detail private jury-room deliberation beyond the split outcome across charges.",
};
