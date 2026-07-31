import type { SeedCase } from "./types";

export const vonBulow: SeedCase = {
  slug: "claus-von-bulow",
  title: "Claus von Bülow — Insulin and Coma",
  drop_date: "2026-08-11",
  year: 1980,
  difficulty: 3,
  source_url: "https://en.wikipedia.org/wiki/Claus_von_B%C3%BClow",
  tldr:
    "A Newport socialite's wife slipped into a coma. Prosecutors say her husband injected insulin for her fortune and his mistress. He says her habits and health explain everything. Was it attempted murder?",
  key_facts: [
    "Sunny von Bülow fell into a temporary coma in 1979 and an irreversible coma in 1980 at the couple's Newport mansion.",
    "A blood test after the second collapse showed high insulin; prosecutors tied a black bag with syringes and insulin to Claus.",
    "Claus stood to inherit substantially and was involved with actress Alexandra Isles, who testified about divorce talk and a chilling account of the first episode.",
    "The defense argued Sunny's comas came from alcohol, pills, and chronic illness — not an injected overdose.",
  ],
  brief: `Martha "Sunny" von Bülow was an American heiress; Claus von Bülow was the Cambridge-educated Danish-born consultant and socialite who married her in 1966. They lived between New York and Clarendon Court, a grand house in Newport, Rhode Island. By the late 1970s the marriage was strained. Claus had a mistress. Sunny drank heavily and used sedatives.

At Christmas 1979, Sunny collapsed into a coma from which she recovered. A year later, again over the holidays, she collapsed once more — this time into a persistent vegetative state from which she would never wake. Hospital testing after the second crisis showed low blood sugar and a strikingly high insulin reading. That single lab result became the spine of a criminal case.

Sunny's children from a prior marriage grew suspicious. A private investigator and family lawyer focused on a locked closet in the Newport house. Inside, they said, was a black bag containing syringes and insulin — the "smoking gun" the state would put before a Newport jury. Prosecutors argued Claus wanted both Sunny's fortune and a life with Alexandra Isles, and that insulin was the perfect murder weapon: a body chemical that could look like natural disease.

Isles testified that Claus described watching Sunny fade after a night of eggnog and Seconal during the first episode — and claimed he said he almost let her die before calling a doctor. Maid and family testimony filled in a portrait of motive and opportunity.

Claus denied injecting anything. His camp stressed that low blood sugar has many causes, that the insulin test was not repeated, and that Sunny's own drug and alcohol use — including a massive aspirin ingestion weeks before the final coma — offered an alternative medical story. They challenged how the black bag was found and whether the needle evidence truly proved an injection.

Two competing narratives, one irreversible coma, and a fortune in the balance: did Claus attempt to murder Sunny with insulin, or did prosecutors build a society scandal out of ambiguous medicine? You're the jury now.`,
  evidence: [
    {
      title: "Elevated insulin reading",
      description:
        "After the 1980 collapse, a blood test showed high insulin alongside low blood sugar — the medical cornerstone of the state's injection theory.",
    },
    {
      title: "Black bag with syringes and insulin",
      description:
        "Family investigators reported finding a bag containing syringes and insulin in a closet Claus had recently kept locked at the Newport mansion.",
    },
    {
      title: "Mistress Alexandra Isles's testimony",
      description:
        "Isles told jurors Claus described watching Sunny deteriorate after an argument and nearly allowing her to die before summoning help.",
    },
  ],
  vote_options: ["Guilty", "Not Guilty"],
  counter_arguments: {
    Guilty:
      "Hypoglycemia is common; a one-time insulin number is a thin reed for attempted murder. Sunny drank, took Seconal, and had recently swallowed a huge dose of aspirin on her own — behavior that points to self-harm and illness, not a husband's syringe. The black bag was found by a motivated family search team, not in a clean police chain of custody. If the needle had been injected through skin, experts later argued, exterior insulin residue would likely have been wiped away. Isn't the medical case too contested for proof beyond a reasonable doubt?",
    "Not Guilty":
      "A locked closet, a bag of insulin and needles, a sky-high insulin lab value, a rich wife in the way, and a mistress waiting — that is classic motive-plus-means. Isles's account of Claus watching Sunny slide toward death is not the story of a frantic husband. The defense's 'she did it to herself' theory has to explain away every piece of physical evidence the family found. When fortune, opportunity, and insulin line up this neatly, what exactly is still ambiguous?",
  },
  real_verdict:
    "Convicted in 1982 on two counts of attempted murder and sentenced to 30 years; both convictions reversed on appeal in 1984. Acquitted on all charges at a 1985 retrial.",
  historical_context:
    "Alan Dershowitz helped lead the appellate and retrial strategy; the second defense called multiple university medical experts who disputed exogenous insulin as the cause of the comas. The case inspired the film Reversal of Fortune. Wikipedia recounts both trial outcomes and the medical dispute in detail but does not offer a granular account of jury deliberations beyond the guilty and later not-guilty verdicts.",
};
