import type { SeedCase } from "./types";

export const ellsberg: SeedCase = {
  slug: "pentagon-papers-ellsberg",
  title: "Daniel Ellsberg — The Pentagon Papers",
  drop_date: "2026-08-04",
  year: 1971,
  difficulty: 3,
  source_url: "https://en.wikipedia.org/wiki/Daniel_Ellsberg",
  tldr:
    "A defense analyst copied a top-secret history of the Vietnam War and gave it to newspapers. The government charged him under the Espionage Act. Whistleblower — or criminal?",
  key_facts: [
    "Daniel Ellsberg, a RAND Corporation analyst with high-level clearance, helped produce a classified Defense Department study of U.S. decision-making in Vietnam.",
    "In 1971 he leaked large portions of that study — the Pentagon Papers — to the press; major newspapers began publishing despite government efforts to stop them.",
    "Federal prosecutors charged Ellsberg and colleague Anthony Russo with Espionage Act violations, theft of government property, and conspiracy — exposure that carried the possibility of more than a century in prison.",
    "The legal fight asked whether copying and disclosing classified history of a war was criminal betrayal — or justified exposure of official deception.",
  ],
  brief: `Daniel Ellsberg was not a fringe activist when he copied the Pentagon Papers. He was a former Marine officer and a trusted analyst at the RAND Corporation, cleared to work on a massive classified Defense Department history of American involvement in Vietnam. The study documented decades of internal assessments that often diverged sharply from what administrations had told the public about the war's progress and prospects.

By 1969–1970, Ellsberg had concluded that the gap between classified knowledge and public justification was itself a moral emergency. He photocopied thousands of pages and, in 1971, got them into the hands of journalists. The New York Times began publishing; the Nixon administration sought to block further publication. Other papers picked up the documents. The country read, in the government's own record, a narrative of escalation and doubt that official speeches had soft-pedaled.

Then the criminal case arrived. Ellsberg and Anthony Russo were indicted on Espionage Act counts, theft of government property, and conspiracy. Prosecutors cast the leak as a reckless breach of national security: classified materials exist so that sensitive diplomatic and military information is not dumped into the open on one man's say-so. The statutory exposure was enormous — publicly discussed as totaling up to 115 years if every count stuck.

Ellsberg's defenders answered that the Papers were historical analysis, not troop movements for tomorrow's battle, and that the public could not consent to a war while being systematically misled about its premises. They framed prosecution under espionage statutes as a tool to punish political disclosure rather than to catch spies for a foreign power.

The newspapers' right to publish and Ellsberg's criminal liability were related fights with different legal postures. Your question is narrower: on the charges brought against him for taking and disclosing the study, should Ellsberg be found guilty — or not? You're the jury now.`,
  evidence: [
    {
      title: "The classified study",
      description:
        "Ellsberg copied a top-secret Defense Department history of Vietnam decision-making produced while he worked as a cleared RAND analyst.",
    },
    {
      title: "Disclosure to the press",
      description:
        "In 1971 major newspapers published portions of the leak; the administration tried to halt publication as a threat to national security.",
    },
    {
      title: "The indictment's stakes",
      description:
        "Ellsberg and Russo faced Espionage Act, theft, and conspiracy charges that, in aggregate charging rhetoric, carried the possibility of more than a century in prison.",
    },
  ],
  vote_options: ["Guilty", "Not Guilty"],
  counter_arguments: {
    Guilty:
      "If the Papers chiefly exposed official deception about a war sold to the public on incomplete premises, treating Ellsberg as an ordinary spy collapses a vital distinction. Democratic consent depends on an informed public — and Espionage Act charging aimed at historical analysis can chill the only people who can document that deception. Doesn't the nature of what was disclosed create real doubt that this was the kind of betrayal the statute was built for?",
    "Not Guilty":
      "Clearance is a trust: Ellsberg swore to protect classified material, then systematically copied and released it on his own moral calculus. Allowing each analyst to decide which secrets the country may see dissolves classification itself. Prosecutors do not have to prove he sold secrets to Moscow to prove he stole and disclosed what the law still forbade. If 'I thought the public should know' is a full defense, what classified program survives?",
  },
  real_verdict:
    "Charges dismissed — in May 1973 the trial judge threw out the case because of governmental misconduct in gathering evidence against Ellsberg (including illegal break-in and wiretap-related abuses tied to the same Nixon-era apparatus later exposed in Watergate). This was not a jury acquittal on the merits.",
  historical_context:
    "The Pentagon Papers episode reshaped U.S. debates over prior restraint (the companion newspaper litigation) and whistleblowing. Ellsberg's criminal case ended by judicial dismissal for prosecutorial and investigative misconduct, not by a jury verdict of not guilty — Wikipedia's account emphasizes that distinction. The same White House 'plumbers' milieu that targeted Ellsberg figured in the Watergate scandals that brought down Nixon's presidency.",
};
