import type { SeedCase } from "./types";

export const holmes: SeedCase = {
  slug: "elizabeth-holmes-theranos",
  title: "Elizabeth Holmes — Blood from a Fingerprick?",
  drop_date: "2026-08-14",
  year: 2018,
  difficulty: 2,
  source_url: "https://en.wikipedia.org/wiki/Elizabeth_Holmes",
  tldr:
    "A Stanford dropout told the world a drop of blood could run hundreds of lab tests. Investors poured in hundreds of millions. Then the machines failed the hype. Visionary disruption — or wire fraud?",
  key_facts: [
    "Elizabeth Holmes founded Theranos in 2003, claiming revolutionary tests from tiny fingerprick blood volumes.",
    "The company raised on the order of $700 million and reached a peak private valuation around $9 billion before journalistic and regulatory scrutiny.",
    "A 2015 Wall Street Journal investigation reported the Edison device was unreliable and that Theranos ran many tests on third-party machines.",
    "Federal prosecutors charged Holmes with wire fraud and conspiracy schemes aimed at investors (and separately at patients); she pleaded not guilty.",
  ],
  brief: `Elizabeth Holmes was nineteen when she left Stanford to build a company that promised to "democratize healthcare." Theranos, she said, could run a full menu of laboratory tests from a few drops of blood taken from a fingertip — no armful of vials, no waiting, no mystery. She cultivated a Steve Jobs aesthetic, assembled a board stacked with former secretaries of state and defense, and struck a retail partnership with Walgreens. Magazines put her on their covers. Forbes briefly treated her as a billionaire.

Inside the company, scientists and product managers later described a culture of secrecy and fear. The proprietary Edison devices struggled with accuracy. Whistleblowers talked. In October 2015, Wall Street Journal reporter John Carreyrou published an investigation alleging that Theranos diluted tiny samples and ran many assays on conventional commercial analyzers while still selling the fingerprick dream. Regulators piled on: lab inspections, a ban on Holmes's operating certified labs, voided test results, the collapse of the Walgreens deal.

The SEC accused Holmes and president Ramesh "Sunny" Balwani of raising hundreds of millions through false claims — including inflated revenue figures and overstated military use of the technology. Holmes settled civil fraud charges, surrendering voting control and millions of shares. Criminal prosecutors then indicted her on wire-fraud and conspiracy counts, alleging two overlapping schemes: one to deceive investors, another to deceive doctors and patients.

At trial, the government walked jurors through faked demonstrations, rosy financials that did not match reality, and validation reports that papered over failure. Holmes took the stand for days. She said she believed in the technology, that subordinates misled her about its readiness, and that Balwani — her romantic partner and COO — dominated her decision-making. She denied intending to cheat anyone.

Investors lost fortunes when Theranos dissolved. Patients received results the company later had to correct. The criminal jury's investor-fraud question is pointed: did Holmes knowingly run a scheme to obtain money by false pretenses, or did a founder honestly overpromise a moonshot that failed? You're the jury now.`,
  evidence: [
    {
      title: "Carreyrou / WSJ revelations",
      description:
        "Reporting alleged Theranos's Edison tests were inaccurate and that the company quietly used standard commercial analyzers for much of its workload.",
    },
    {
      title: "Fundraising claims vs. reality",
      description:
        "Civil and criminal cases focused on statements to investors about technology performance, revenue (including a claimed nine-figure stream against minimal actual sales), and supposed military adoption.",
    },
    {
      title: "Regulatory lab findings",
      description:
        "CMS inspections found serious deficiencies at Theranos labs; regulators moved to ban Holmes from owning or operating certified clinical laboratories.",
    },
  ],
  vote_options: ["Guilty", "Not Guilty"],
  counter_arguments: {
    Guilty:
      "Silicon Valley is built on ambitious forecasts; a failed product is not automatically a crime. Holmes testified she was misled by her own scientists and controlled by Balwani. Board members and world-famous backers diligenced the company and still wrote checks. If optimistic demos and aggressive timelines were shared beliefs inside Theranos rather than a knowing lie, where is intent to defraud beyond a reasonable doubt?",
    "Not Guilty":
      "You do not 'misspeak' your way into claiming a $100 million revenue year when the real number has four digits, or demo blood tests the machine cannot perform. Whistleblowers, regulators, and documents show a pattern of concealment, not confusion. Investors were not buying a maybe — they were sold a working revolution. When the gap between pitch and product is this engineered, isn't that the definition of wire fraud?",
  },
  real_verdict:
    "In January 2022 the jury convicted Holmes on four investor-related counts (three wire fraud, one conspiracy) and acquitted her on patient-related fraud counts; three other investor counts ended without a verdict and were later dismissed. She was sentenced to 11¼ years in federal prison (later adjusted under revised guidelines) and ordered, jointly with Balwani, to pay hundreds of millions in restitution.",
  historical_context:
    "Balwani was tried separately and also convicted. Holmes's Ninth Circuit appeal of the conviction and sentence was rejected. Wikipedia details the split verdict by count and the sentencing follow-ups; it does not provide an extensive private account of jury deliberation beyond the public split outcome.",
};
