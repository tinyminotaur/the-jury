import type { SeedCase } from "./types";

export const ulbricht: SeedCase = {
  slug: "silk-road-ulbricht",
  title: "Ross Ulbricht — The Silk Road",
  drop_date: "2026-08-09",
  year: 2013,
  difficulty: 2,
  source_url: "https://en.wikipedia.org/wiki/Ross_Ulbricht",
  tldr:
    "A libertarian programmer built a Tor-hidden marketplace where bitcoin bought narcotics by the ton. Prosecutors say he was Dread Pirate Roberts. He says someone else wore the mask. Who ran Silk Road?",
  key_facts: [
    "Silk Road operated as a Tor hidden service from 2011 until a 2013 FBI seizure, using bitcoin for anonymous drug and contraband sales.",
    "Ross Ulbricht was arrested in a San Francisco public library with his laptop open and logged into the site's admin interface.",
    "He faced charges including continuing criminal enterprise, narcotics distribution via the internet, and money-laundering conspiracy — not a murder-for-hire count in the New York trial.",
    "The defense argued Ulbricht created the site but later handed control to others who used the Dread Pirate Roberts alias.",
  ],
  brief: `In early 2011, an anonymous marketplace appeared on the Tor network under a romantic name: Silk Road. Buyers and sellers traded almost entirely in bitcoin. Listings ranged from cannabis and MDMA to fake IDs and hacking tools. The site's administrator posted as "Dread Pirate Roberts," a handle borrowed from The Princess Bride, and framed the market as a libertarian experiment — commerce without coercion, beyond the reach of drug laws.

Federal investigators spent years peeling back the anonymity. An IRS agent linked early forum posts announcing the site under the username "altoid" to a personal email that contained a real name: Ross William Ulbricht, a physics graduate from Austin with a soft spot for Austrian economics. In October 2013, FBI agents staged a distraction in a San Francisco library branch, seized Ulbricht's open laptop before he could encrypt it, and shut Silk Road down.

Prosecutors charged Ulbricht with running a continuing criminal enterprise, distributing narcotics over the internet, conspiring to launder money, trafficking in fraudulent identity documents, and conspiring to hack computers. Their case rested on chat logs, a personal journal outlining the site's launch, bitcoin wallets tied to commission fees, and the circumstances of the arrest itself. They also introduced allegations that Dread Pirate Roberts had tried to commission murders of people who threatened the marketplace — claims the New York indictment did not charge as separate counts, but which the government used to paint the operator as more than a hands-off webmaster.

Ulbricht's lawyers did not deny that Silk Road was a vast illegal bazaar. They contested identity and control. They argued that Ulbricht may have started the site, then passed the Dread Pirate Roberts mantle to others — and that chat logs and admin activity could not be pinned to him alone. The defense also attacked how investigators obtained server data and digital evidence.

The jury's job was narrower than the headlines: did this man knowingly operate the marketplace crimes charged? You're the jury now.`,
  evidence: [
    {
      title: "Laptop seizure at arrest",
      description:
        "Agents grabbed Ulbricht's open, logged-in laptop in a San Francisco library before he could shut it down or encrypt the session.",
    },
    {
      title: "Username trail to a real name",
      description:
        "Early Silk Road announcements under 'altoid' were linked to a help-forum post that included Ulbricht's personal email address.",
    },
    {
      title: "Journal and chat records",
      description:
        "Prosecutors introduced diary entries describing the marketplace's creation and administrator chat logs attributed to Dread Pirate Roberts.",
    },
  ],
  vote_options: ["Guilty", "Not Guilty"],
  counter_arguments: {
    Guilty:
      "Even if Ulbricht sketched the idea, the defense says the Dread Pirate Roberts account changed hands — and Tor markets are designed so operators can swap control without leaving a clean paper trail. Digital attribution is messy: usernames get reused, servers get compromised, and undercover agents were inside the site for months. Two investigators in the broader Silk Road probe were later themselves accused of corruption. Does a journal and a laptop login, without airtight proof he alone held the keys the whole time, erase reasonable doubt?",
    "Not Guilty":
      "He was arrested mid-session, admin panel open, on a machine packed with material matching the operator's voice. The 'altoid' trail leads to his email; the diary describes founding the market in the first person. Silk Road took a cut of every illegal sale — that is the definition of running the enterprise, not browsing it. If the mask fit this tightly at the moment of arrest, what alternative operator theory still holds?",
  },
  real_verdict:
    "Convicted in 2015 on all counts; sentenced to two life terms plus 40 years, concurrent, without parole. In January 2025 he received a full presidential pardon and was released.",
  historical_context:
    "Murder-for-hire allegations — payments allegedly totaling hundreds of thousands of dollars targeting people who threatened the site — were introduced at trial and weighed at sentencing, though Ulbricht was not convicted on a murder-for-hire count in the New York case; a separate Maryland indictment on that theory was later dropped. Appeals to the Second Circuit and Supreme Court failed. Wikipedia summarizes the trial outcome and sentence in detail but does not provide a rich inside account of jury-room deliberation.",
};
