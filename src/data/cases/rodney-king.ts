import type { SeedCase } from "./types";

export const rodneyKing: SeedCase = {
  slug: "rodney-king-officers",
  title: "The Rodney King Officers — Excessive Force?",
  drop_date: "2026-08-19",
  year: 1992,
  difficulty: 3,
  source_url: "https://en.wikipedia.org/wiki/Rodney_King",
  tldr:
    "After a high-speed chase, a bystander filmed LAPD officers striking an unarmed Black motorist on the ground. Four officers face state charges of assault and excessive force. Was the force criminal — or a lawful response to resistance?",
  key_facts: [
    "On 3 March 1991, after a freeway and street chase, LAPD officers subdued Rodney King; a bystander, George Holliday, recorded the encounter on videotape.",
    "King was treated for a fractured facial bone, a broken ankle, and multiple bruises and lacerations; toxicology later showed alcohol and traces of marijuana, not PCP.",
    "Four officers — Stacey Koon, Laurence Powell, Timothy Wind, and Theodore Briseno — were tried in Simi Valley on state charges tied to assault and excessive force.",
    "Officers said King resisted restraint and appeared under the influence; the video shows repeated baton strikes and kicks after he was on the ground.",
  ],
  brief: `Just after midnight on 3 March 1991, California Highway Patrol officers tried to stop a car speeding on the Foothill Freeway in Los Angeles. The driver, Rodney King, did not pull over. The pursuit spilled onto surface streets, joined by LAPD units and a helicopter, before ending in a residential area of Lake View Terrace.

What happened next became one of the most watched pieces of evidence in American criminal history. From a nearby balcony, plumbing salesman George Holliday filmed officers striking King with batons and kicking him as he lay on the ground. Portions of that tape aired on local and then national television. King was taken to a hospital with a fractured facial bone, a broken ankle, and extensive bruising. He was unarmed.

Four LAPD officers — Sergeant Stacey Koon and Officers Laurence Powell, Timothy Wind, and Theodore Briseno — were charged under California law with assault and related excessive-force counts. The state trial was moved to Simi Valley in Ventura County. Prosecutors argued the video spoke for itself: after King was down, officers continued "power strokes" to joints and limbs far beyond what was needed to handcuff a compliant suspect. Hospital nurses later said officers accompanying King joked about how many times they had hit him.

The defense asked jurors to watch the tape differently — and to hear what came before Holliday's camera started rolling. Officers described a long chase, a suspect who seemed to ignore commands, a belief (later unsupported by toxicology for PCP) that he was on dangerous drugs, and a charge toward Officer Powell that they cast as an attack rather than an attempt to flee. They argued baton use and a "swarm" technique were within LAPD policy for a large, resisting man who kept trying to rise.

The jury must decide a narrow question: on this record, in this state courtroom, did these officers commit criminal assault through excessive force — or were they using lawful force under chaotic, high-stress conditions? The tape is evidence. So is the chase that came before it. You are the jury now.`,
  evidence: [
    {
      title: "The Holliday videotape",
      description:
        "Amateur footage showing King on the ground being struck with batons and kicked; officers acknowledged dozens of blows after tasering and attempts to restrain him.",
    },
    {
      title: "King's injuries",
      description:
        "Medical findings included a fractured facial bone, a broken right ankle, and multiple bruises and lacerations after the arrest.",
    },
    {
      title: "Officers' justification",
      description:
        "Defense account: high-speed pursuit, perceived resistance and possible intoxication, and baton 'power strokes' ordered as policy-compliant force until he could be handcuffed.",
    },
  ],
  vote_options: ["Guilty", "Not Guilty"],
  counter_arguments: {
    Guilty:
      "The camera missed the chase and the first moments of the stop. Officers described a suspect who led police on a dangerous pursuit, seemed not to comply, and then rushed toward Powell — conduct they say justified escalation under department training. They believed he might be on PCP; policy allowed continued baton strikes while a large man kept rising. If the early resistance was real, does a partial video of the ending prove criminal intent rather than ugly but lawful force?",
    "Not Guilty":
      "The nation watched an unarmed man on the ground absorbing strike after strike. Prosecutors counted dozens of baton hits and kicks after he was already down; Koon himself ordered blows to joints. King left with a fractured face and a broken ankle. Toxicology did not support the PCP theory the officers floated. When a civilian tape shows prolonged beating of a prone suspect, isn't 'he was resisting' the claim that always needs the hardest look?",
  },
  real_verdict:
    "State jury in Simi Valley acquitted the four officers of the main assault charges (April 1992), with a mistrial on one count against Powell — a verdict that helped spark the 1992 Los Angeles riots. In a later federal civil-rights trial, Koon and Powell were convicted; Wind and Briseno were acquitted.",
  historical_context:
    "The state acquittals on 29 April 1992 triggered days of deadly unrest in Los Angeles. A federal jury later convicted Koon and Powell of violating King's civil rights and acquitted the other two. King won a civil judgment against the city. Wikipedia and contemporary coverage discuss jury composition, venue change to Simi Valley, and public reaction extensively; firsthand deliberation detail beyond juror interviews after the fact is limited in the main article.",
};
