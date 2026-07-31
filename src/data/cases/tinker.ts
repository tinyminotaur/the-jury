import type { SeedCase } from "./types";

export const tinker: SeedCase = {
  slug: "tinker-v-des-moines",
  title: "Tinker v. Des Moines — Armbands at School",
  drop_date: "2026-08-06",
  year: 1965,
  difficulty: 1,
  source_url:
    "https://en.wikipedia.org/wiki/Tinker_v._Des_Moines_Independent_Community_School_District",
  tldr:
    "Students wore black armbands to school to protest the Vietnam War and were suspended. Do pupils shed their First Amendment rights at the schoolhouse gate — or may administrators ban the symbol?",
  key_facts: [
    "In December 1965, Des Moines students including Mary Beth Tinker, John Tinker, and Christopher Eckhardt planned to wear black armbands to protest the Vietnam War and support a Christmas truce.",
    "School officials learned of the plan and adopted a policy: students wearing armbands would be asked to remove them and suspended if they refused.",
    "The students wore the armbands anyway, were suspended, and sued, arguing the ban violated their free-speech rights under the First Amendment.",
    "The dispute asked how far public schools may go in suppressing silent, political student expression to keep order.",
  ],
  brief: `In December 1965, a handful of Des Moines students decided on a quiet form of protest. They would wear black armbands to school to mourn the dead in Vietnam and to support calls for a holiday truce. Word of the plan reached administrators. Before the first armband appeared in a hallway, the school district announced a rule: anyone who wore one would be told to take it off, and refusal meant suspension.

Mary Beth Tinker, her brother John, and Christopher Eckhardt wore the armbands anyway. They were sent home. The protest was silent — no walkout, no disruption of class lectures in the record the families emphasized — yet the district insisted it had to act before symbols inflamed a community already divided by the war. Other political buttons and symbols, students' lawyers noted, had not drawn the same preemptive ban, which made the armband rule look selective rather than neutral.

The families sued in federal court. They argued that public-school students do not forfeit the First Amendment when they cross onto campus, and that a silent band of cloth was classic political speech. School officials answered that their job was to keep classrooms focused and safe, and that they were entitled to head off a demonstration they believed could spark hostility among students and parents. Lower courts sided with the schools, treating discipline and the anticipation of disturbance as enough. On appeal, the question sharpened into a constitutional rule for public education: do students retain free-speech rights inside school, and if so, when can officials override them?

School advocates argued that classrooms are not public parks. Administrators need authority to head off controversy that could fracture the learning environment, and waiting for a riot before acting is not required. Student advocates answered that fear of unpopular opinion is not a blank check — especially when the expression is passive, political, and aimed at national policy rather than at harassing classmates.

This is not a criminal prosecution. It is the civic question the courts were asked to settle: may the school ban the armbands, or may the students wear them as protected speech? You're the jury now.`,
  evidence: [
    {
      title: "The armband plan",
      description:
        "Des Moines students organized to wear black armbands in December 1965 as a silent protest related to the Vietnam War and a proposed truce.",
    },
    {
      title: "Preemptive school policy",
      description:
        "Administrators banned the armbands after learning of the plan and suspended students who wore them and refused to remove them.",
    },
    {
      title: "First Amendment claim",
      description:
        "The suspended students sued, arguing that punishing silent political expression violated their constitutional free-speech rights as public-school pupils.",
    },
  ],
  vote_options: ["School may ban the armbands", "Students may wear the armbands"],
  counter_arguments: {
    "School may ban the armbands":
      "If the armbands were a quiet, passive symbol — not a walkout or a shouting match — banning them because officials feared controversy looks like viewpoint discrimination dressed up as order. Students do not shed basic constitutional protections when they enter a public school. Should anticipation of community disagreement alone erase political speech that has not actually disrupted class?",
    "Students may wear the armbands":
      "Schools are responsible for hundreds of minors in a confined space; administrators often must act before a spark becomes a fight. Vietnam was already splitting towns, and a rule applied in advance can look like neutral crowd control rather than censorship. If every contested symbol requires waiting for chaos, haven't we stripped schools of the practical authority the job demands?",
  },
  real_verdict:
    "Students may wear the armbands — in 1969 the Supreme Court ruled 7–2 for the students, holding that student speech may not be suppressed unless officials can show it would materially and substantially disrupt the school (the 'substantial disruption' test).",
  historical_context:
    "Tinker v. Des Moines was a Supreme Court constitutional case, not a criminal jury trial — there is no jury-deliberation story to tell. Wikipedia focuses on the litigation path and Justice Fortas's majority opinion; the lasting doctrine is that students retain First Amendment rights in school subject to the substantial-disruption limit, a standard still cited in later student-speech disputes.",
};
