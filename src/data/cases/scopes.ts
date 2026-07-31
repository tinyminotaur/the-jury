import type { SeedCase } from "./types";

export const scopes: SeedCase = {
  slug: "scopes-monkey-trial",
  title: "Scopes — Teaching Evolution",
  drop_date: "2026-08-01",
  year: 1925,
  difficulty: 2,
  source_url: "https://en.wikipedia.org/wiki/Scopes_trial",
  tldr:
    "A Tennessee teacher was charged with violating a state law that banned teaching human evolution. The courtroom became a national stage. Was the statute enforced correctly — or was the whole case a setup?",
  key_facts: [
    "Tennessee's Butler Act made it illegal for public-school teachers to teach that humans descended from lower animals.",
    "John Scopes, a Dayton high-school teacher and coach, agreed to stand as the defendant in a deliberate test of the law.",
    "Clarence Darrow led the defense; William Jennings Bryan joined the prosecution — both national celebrities.",
    "Scopes later said he was unsure whether he had actually taught the contested material, but he cooperated in building a record the courts could decide.",
  ],
  brief: `In 1925, Tennessee passed the Butler Act: public-school teachers could not teach that humankind had descended from a lower order of animals. The American Civil Liberties Union offered to defend anyone willing to challenge the statute. Civic leaders in Dayton, Tennessee, saw a chance to put their town on the map and recruit a defendant who would plead guilty to teaching from a textbook that covered evolutionary theory.

John T. Scopes, a young science teacher and football coach at Rhea County High School, agreed. He had substituted in a biology class that used a state-approved text containing a chapter on evolution. Whether he had personally lectured on human origins was murky even to him; what mattered for the test case was that he would stand trial so the law could be argued in open court. He was indicted, and the case quickly attracted two of the era's most famous advocates: three-time presidential candidate William Jennings Bryan for the prosecution, and Clarence Darrow for the defense.

The trial that followed was less a quiet local proceeding than a national spectacle. Reporters packed the courthouse. The defense tried to put scientific experts on the stand to explain evolutionary theory; the court largely blocked that path. In a dramatic turn, Darrow called Bryan himself as a witness on the Bible and science — an exchange that turned the courtroom into a theological debate as much as a criminal one.

Prosecutors framed a simple question: Scopes taught from materials that violated a clear statute, and the jury's job was to apply the law as written. The defense argued that the Butler Act collided with free inquiry, modern science, and the proper role of public education — and that a conviction would freeze classrooms in doctrine rather than evidence.

You do not get to rewrite Tennessee's statute. You decide whether, on the facts presented, Scopes should be found guilty of violating it. You're the jury now.`,
  evidence: [
    {
      title: "The Butler Act",
      description:
        "Tennessee law prohibiting public-school teachers from teaching that humans descended from lower animals.",
    },
    {
      title: "Textbook and classroom context",
      description:
        "Scopes was tied to a state-approved biology text that included evolutionary content; he agreed to be the named defendant in a planned challenge to the ban.",
    },
    {
      title: "Celebrity counsel",
      description:
        "Clarence Darrow for the defense and William Jennings Bryan for the prosecution turned a local indictment into a nationally watched contest over science, religion, and schooling.",
    },
  ],
  vote_options: ["Guilty", "Not Guilty"],
  counter_arguments: {
    Guilty:
      "The Butler Act was a deliberate test case, not a surprise trap — civic boosters and Scopes himself cooperated to create a prosecution so the law could be challenged. Scopes later admitted uncertainty about whether he had actually taught the banned material. If the record was staged to force a constitutional fight, how confident can you be that a criminal conviction is the right instrument — rather than letting the statute's wisdom be argued elsewhere?",
    "Not Guilty":
      "The statute was on the books, Scopes agreed to be charged under it, and the classroom materials at issue covered human evolution. A jury's role is to apply the law as written, not to decide whether evolution is true or whether the legislature should have passed the Act. If teachers can openly defy a clear criminal prohibition because they disagree with it, what is left of the legislature's authority over public schools?",
  },
  real_verdict:
    "Guilty — the jury convicted Scopes and the court imposed a $100 fine. The Tennessee Supreme Court later overturned the conviction on a technicality (the fine had been set by the judge rather than the jury, contrary to state law) while upholding the Butler Act itself.",
  historical_context:
    "The 'Scopes Monkey Trial' became the iconic U.S. clash over teaching evolution in public schools, later retold in Inherit the Wind. Contemporary coverage focused on the Darrow–Bryan courtroom theater more than on closed-door jury deliberation; Wikipedia does not preserve a detailed account of how the jurors weighed the evidence among themselves. The Butler Act remained law until repeal in 1967.",
};
