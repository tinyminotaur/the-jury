import type { SeedCase } from "./types";

export const amistad: SeedCase = {
  slug: "amistad-mutiny",
  title: "The Amistad — Property or People?",
  drop_date: "2026-08-02",
  year: 1839,
  difficulty: 2,
  source_url: "https://en.wikipedia.org/wiki/United_States_v._The_Amistad",
  tldr:
    "Africans seized a Spanish schooner after being illegally sold into slavery, then washed up in U.S. waters. Spain's claimants called them cargo. Abolitionists called them free people. What should the United States do?",
  key_facts: [
    "Mende captives from West Africa were kidnapped, sold in Cuba in violation of Spanish and international bans on the African slave trade, and loaded onto the schooner La Amistad.",
    "They took over the ship, killing the captain and cook, and tried to force a return to Africa; the remaining crew instead steered toward U.S. waters.",
    "A U.S. revenue cutter seized the vessel near Long Island; Spanish claimants demanded the captives and cargo be returned under treaty obligations.",
    "The legal fight asked whether the Africans were property to be restored to Spanish owners — or free persons illegally enslaved who could not be handed back as merchandise.",
  ],
  brief: `In 1839, a group of Mende people from West Africa were captured, sold through the illegal Atlantic trade, and transported to Cuba. There, in defiance of Spanish law and international agreements that had already outlawed the African slave trade, they were sold again and put aboard the Spanish schooner La Amistad bound for another Cuban port.

At sea, the captives rose up. They killed the captain and the cook, took control of the vessel, and demanded to be sailed home to Africa. The two Spanish survivors who remained aboard instead manipulated the course, and the Amistad drifted into waters off Long Island. A U.S. ship seized the schooner; the Africans were jailed in Connecticut while competing claims poured in.

Spanish owners and Spanish diplomats insisted the captives were lawful property and that treaty commitments required the United States to restore ship, cargo, and enslaved people to Spanish claimants. Salvage claimants wanted a share of the vessel's value. Abolitionist lawyers argued something more fundamental: these men and women had never been lawfully enslaved. They had been kidnapped and sold in a trade Spain itself prohibited. If they were free people fighting for their liberty, returning them as cargo would make the United States a partner in illegal enslavement.

The case moved through federal courts amid a national argument over slavery, sovereignty, and whether international comity could override a claim to freedom. President Van Buren's administration faced pressure to appease Spain. Abolitionists framed the Amistad Africans as the clearest possible test: when people illegally torn from their homes seize a ship to escape bondage, does American law see property — or persons?

You are not rewriting the Constitution. You are deciding what this ship carried when it entered American jurisdiction: merchandise to be returned to Spanish claimants, or free people who must be released. You're the jury now.`,
  evidence: [
    {
      title: "Illegal African trade",
      description:
        "The captives had been taken from West Africa and sold in Cuba after Spain and other powers had already banned the African slave trade — a fact central to the claim they were never lawful property.",
    },
    {
      title: "The uprising at sea",
      description:
        "The Africans seized La Amistad, killed the captain and cook, and attempted to force a return to Africa before the ship was intercepted near Long Island.",
    },
    {
      title: "Competing claims in U.S. custody",
      description:
        "Spanish claimants invoked treaty obligations to recover vessel and captives; abolitionist counsel argued the Africans were free persons illegally enslaved and could not be restored as cargo.",
    },
  ],
  vote_options: ["Return to Spanish claimants", "Free the captives"],
  counter_arguments: {
    "Return to Spanish claimants":
      "If the Africans were kidnapped and sold in a trade Spain itself had outlawed, calling them 'cargo' under a treaty would endorse an illegal enslavement the United States was not obliged to complete. A mutiny to escape unlawful bondage is not the same as piracy against legitimate owners. Doesn't recognizing them as free people illegally held cut through the property claim entirely?",
    "Free the captives":
      "Spain was a treaty partner demanding restoration of a Spanish vessel and what it claimed as Spanish property. Handing the captives over — or refusing — was also a foreign-policy act with consequences for diplomacy and for other shipping disputes. If American courts can dissolve foreign property claims whenever they find the underlying trade immoral, how stable are treaty obligations in a world still full of slave regimes?",
  },
  real_verdict:
    "Free the captives — in 1841 the U.S. Supreme Court held that the Amistad Africans were free people illegally enslaved and were not the property of the Spanish claimants; they were not returned to Spain.",
  historical_context:
    "United States v. The Amistad was decided by the Supreme Court, not a criminal trial jury; Justice Joseph Story wrote for the Court, and former president John Quincy Adams argued for the Africans. Wikipedia's account centers on the litigation and diplomacy rather than jury deliberation, because the decisive forum was the high court. Survivors later returned to Africa with missionary help; the case remains a landmark in American antislavery legal history.",
};
