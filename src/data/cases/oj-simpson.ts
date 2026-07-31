import type { SeedCase } from "./types";

export const ojSimpson: SeedCase = {
  slug: "oj-simpson",
  title: "O.J. Simpson — The Trial of the Century",
  drop_date: "2026-08-20",
  year: 1995,
  difficulty: 5,
  source_url: "https://en.wikipedia.org/wiki/Murder_trial_of_O._J._Simpson",
  tldr:
    "A football legend is charged with the stabbing deaths of his ex-wife and her friend. Prosecutors stack DNA and blood trail evidence; the defense says the LAPD contaminated and planted it — and that a racist detective poisoned the case.",
  key_facts: [
    "On 12 June 1994, Nicole Brown Simpson and Ronald Goldman were stabbed to death outside her Brentwood condominium; O.J. Simpson was charged with both murders.",
    "Prosecutors pointed to blood drops, DNA matches, a bloody glove, and shoe-print evidence linking Simpson to the scene and his Ford Bronco and home.",
    "The defense argued evidence was mishandled or planted, highlighted Detective Mark Fuhrman's racism, and staged a courtroom glove demonstration that did not fit Simpson's hand as worn.",
    "The televised trial ran for months before a downtown Los Angeles jury; racial distrust of the LAPD after the Rodney King case hung over every forensic claim.",
  ],
  brief: `On the night of 12 June 1994, Nicole Brown Simpson and her friend Ron Goldman were stabbed to death at the gate of her condominium on Bundy Drive in Brentwood. Nicole's former husband — Hall of Fame running back, actor, and celebrity O.J. Simpson — was charged with both murders. When he failed to surrender on schedule, the country watched a slow televised chase in a white Ford Bronco. The criminal trial that followed was billed, with only mild exaggeration, as the trial of the century.

Prosecutors Marcia Clark and Christopher Darden built what they believed was a fortress of physical evidence: blood drops consistent with Simpson leading from Bundy toward a Bronco; blood in the Bronco and at Simpson's Rockingham estate; DNA testing — then still new to many jurors — tying stains to the victims and to Simpson; a bloody glove recovered at Rockingham that appeared to match one left at Bundy; and shoe prints in a rare size and brand. They also pointed to a history of domestic violence against Nicole.

Simpson's "Dream Team" defense — Johnnie Cochran, Robert Shapiro, F. Lee Bailey, Barry Scheck, and others — did not merely deny the science. They attacked the messengers. They argued LAPD criminalists had sloppy collection and chain-of-custody failures that could contaminate DNA results. They put Detective Mark Fuhrman on trial for using racist language and suggested a glove could have been planted. In a moment that defined the case for millions of viewers, Simpson tried on the gloves in court over latex, and they appeared too tight — fuel for Cochran's refrain that if the glove does not fit, jurors must acquit.

The question for you is not celebrity or spectacle. It is whether the state has proved beyond a reasonable doubt that Simpson inflicted those wounds — or whether contamination, bias, and reasonable doubt about how the evidence was handled leave you unconvinced. The victims are dead. The blood is real. Who put it there is what you must decide.`,
  evidence: [
    {
      title: "Blood and DNA trail",
      description:
        "Prosecutors cited drops and stains at Bundy, in the Bronco, and at Rockingham, with DNA matches they said linked Simpson to both victims; the defense alleged mishandling and contamination.",
    },
    {
      title: "The gloves and the demonstration",
      description:
        "A bloody glove at Simpson's estate was offered as a match to one at the crime scene; when Simpson tried the gloves on in court, they appeared not to fit, a moment the defense hammered.",
    },
    {
      title: "LAPD credibility and Fuhrman",
      description:
        "The defense highlighted Detective Mark Fuhrman's recorded racist language and broader distrust of LAPD integrity to argue planting or bias could explain incriminating finds.",
    },
  ],
  vote_options: ["Guilty", "Not Guilty"],
  counter_arguments: {
    Guilty:
      "DNA was still unfamiliar to lay juries, and the defense made every vial and freezer look like a conspiracy. But contamination talking points do not automatically erase a trail of blood from Bundy to the Bronco to Rockingham, a history of abuse, and a timeline that left Simpson with a narrow window. Fuhrman's racism is ugly — does it prove someone planted a matching glove and a blood map across two locations? If the science holds, isn't 'the LAPD is racist' a motive to doubt, not a substitute for an alternate killer?",
    "Not Guilty":
      "The same department that mishandled the King beating asked this jury to trust its criminalists with cutting-edge DNA. Vials were mislabeled, counts did not add up, and Fuhrman — who found the Rockingham glove — was exposed as a perjurer on race. Then the gloves would not go on. Cochran's team did not need to prove who the killer was; they needed reasonable doubt. With racism, sloppiness, and a failed demonstration on the table, can you really say the state proved it beyond a reasonable doubt?",
  },
  real_verdict:
    "Not guilty on both murder counts — jury verdict 3 October 1995 after less than four hours of deliberation.",
  historical_context:
    "The acquittal split public opinion sharply along racial lines and remains one of the most dissected verdicts in U.S. history. In a 1997 civil trial, a different jury found Simpson liable for the deaths and awarded large damages to the Goldman and Brown families — a lower burden of proof and a separate proceeding from the criminal case. Wikipedia documents the trial extensively; deliberation itself was brief, so there is little public record of prolonged jury debate beyond later juror interviews.",
};
