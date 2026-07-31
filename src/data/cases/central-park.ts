import type { SeedCase } from "./types";

export const centralPark: SeedCase = {
  slug: "central-park-five",
  title: "The Central Park Five — A Night in the Park",
  drop_date: "2026-08-24",
  year: 1989,
  difficulty: 5,
  source_url: "https://en.wikipedia.org/wiki/Central_Park_jogger_case",
  tldr:
    "A woman jogging in Central Park is beaten and raped. Five teenagers confess on videotape after long police interrogations — then say they were coerced. In a city terrified of crime, are the confessions proof or pressure?",
  key_facts: [
    "On the night of 19 April 1989, Trisha Meili was assaulted and raped while jogging in Central Park; she was found hours later, critically injured, with no memory of the attack.",
    "That same night, groups of teenagers were in the park amid reports of other assaults and robberies; police focused on Antron McCray, Kevin Richardson, Yusef Salaam, Raymond Santana, and Korey Wise.",
    "After hours of interrogation — much of it untaped — several gave videotaped statements implicating themselves as accomplices; all later recanted, alleging coercion and lies by detectives.",
    "No DNA from the five matched samples from the rape kit; prosecutors still argued the confessions and the night's pattern of violence proved guilt.",
  ],
  brief: `Late on 19 April 1989, in a New York City raw with fear of street crime, a 28-year-old investment banker went for a run in Central Park. Hours later, Trisha Meili was found in a ravine north of the 102nd Street Crossing — bound, barely alive, so badly beaten that she would spend days in a coma. She could not say who attacked her.

That same night, dozens of teenagers had entered the park. Police received reports of other robberies and assaults. By the following day, investigators had five Harlem teens in custody whose names would define the case: Antron McCray, Kevin Richardson, Yusef Salaam, Raymond Santana, and Korey Wise — ages 14 to 16. Under questioning that lasted many hours, with parents present for some videotaped sessions but not for all of the earlier interrogation, several gave statements describing a pack attack on the female jogger. On tape, none claimed to have been the sole rapist; each described helping restrain her or watching while others assaulted her. Detectives treated the statements as breakthroughs.

Within weeks every one of those accounts was withdrawn. The teens said they had been frightened, exhausted, and fed details — that they told police what they thought would let them go home. Defense lawyers stressed that large stretches of interrogation were never recorded, that stories disagreed on where and how the rape happened, and that forensic testing had not tied their DNA to the rape-kit evidence. Prosecutors answered that teenagers caught in a night of "wilding" violence had confessed in front of cameras and parents, that inconsistencies were expected when many hands took part, and that Meili's catastrophic injuries demanded accountability.

You are sitting where the 1990 juries sat. You have recanted confessions, a devastated victim with no memory, a city demanding answers, and no DNA match to these five. Do the tapes prove they did it — or only that frightened kids said what police wanted to hear?`,
  evidence: [
    {
      title: "Videotaped statements",
      description:
        "After lengthy interrogations, several of the teens gave taped accounts implicating themselves as participants or lookouts in the attack on the jogger; all later said the statements were coerced.",
    },
    {
      title: "DNA without a match to the five",
      description:
        "Biological samples from the assault did not match the five defendants; the state still argued that group violence and the confessions established guilt.",
    },
    {
      title: "A night of other park attacks",
      description:
        "Police tied the teens to a broader spree of assaults and robberies in the park that night, offering that pattern as context for the jogger attack.",
    },
  ],
  vote_options: ["Guilty", "Not Guilty"],
  counter_arguments: {
    Guilty:
      "Confessions pulled from exhausted teenagers after unrecorded hours of questioning are among the most unreliable evidence in criminal law — especially when every defendant promptly recanted. The taped stories clash on basic facts of where and how. And the DNA from the rape does not match these five. In a media panic about 'wilding,' isn't it possible the wrong kids were fed a narrative until they repeated it on camera?",
    "Not Guilty":
      "Multiple teens described a pack assault on the jogger, some with parents in the room for the taping. Prosecutors say you do not expect perfect harmony from a chaotic group crime. Meili nearly died; other victims were attacked in the park the same night. If you believe the statements were voluntary enough to trust, doesn't 'no DNA match' mean only that not every attacker left a sample — not that these five were elsewhere?",
  },
  real_verdict:
    "The five were convicted in 1990 on varying counts tied to the jogger assault and other attacks that night. In 2002 those convictions were vacated after serial rapist Matias Reyes confessed that he alone attacked Meili; his DNA matched the rape-kit evidence. They became known as the Exonerated Five. New York City later settled their civil suit for $41 million.",
  historical_context:
    "Reyes's 2002 confession and the DNA match led Manhattan DA Robert Morgenthau's office to recommend vacating the convictions — a landmark wrongful-conviction reversal. Debates persist in some police and prosecutorial circles about whether others could have been involved; the official legal outcome is full vacatur. The case reshaped public understanding of false confessions, especially by juveniles. Wikipedia details the trials, media frenzy (including a full-page newspaper ad calling for harsh punishment), and exoneration; treat the 1990 jury's evidence world as separate from what only emerged twelve years later — that separation is the pedagogical point of this drop.",
};
