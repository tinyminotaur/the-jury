import type { SeedCase } from "./types";

export const pistorius: SeedCase = {
  slug: "oscar-pistorius",
  title: "Oscar Pistorius — The Bathroom Door",
  drop_date: "2026-08-17",
  year: 2013,
  difficulty: 3,
  source_url: "https://en.wikipedia.org/wiki/Oscar_Pistorius",
  tldr:
    "A Paralympic champion fired four shots through a locked bathroom door in his Pretoria home, killing his girlfriend. He says he thought she was an intruder. Prosecutors say he knew who was behind the door.",
  key_facts: [
    "In the early hours of 14 February 2013, Oscar Pistorius fired four shots through a locked toilet door at his Pretoria residence; Reeva Steenkamp died from the wounds.",
    "Pistorius admitted firing the shots but said he believed an intruder was in the bathroom.",
    "Prosecutors argued he knew Steenkamp was behind the door after an argument earlier that night.",
    "Under South African law the fact-finder must choose between murder (intent, including foresight of death) and culpable homicide (negligent killing).",
  ],
  brief: `In the early morning of Valentine's Day 2013, Oscar Pistorius — the South African sprinter known worldwide as the Blade Runner for competing on carbon-fiber prostheses at both the Paralympics and the Olympics — fired four shots through a locked toilet door in his Pretoria home. Behind that door was his girlfriend, Reeva Steenkamp, a model and paralegal. She died from the gunshot wounds.

Pistorius never denied pulling the trigger. His account was that he had woken to what he believed was an intruder in the bathroom, retrieved a firearm, and fired in self-defense through the closed door without realizing Steenkamp was the person on the other side. He said he had thought she was still in bed. The defense framed the tragedy as a catastrophic mistake born of fear in a country where home invasion was a lived anxiety for many residents.

Prosecutors told a different story. They argued that the couple had argued that night, that Steenkamp had fled to the bathroom and locked herself in, and that Pistorius knew exactly who was behind the door when he fired. Neighbors' accounts of raised voices, the sequence of movements through the house, and the choice to fire multiple rounds into a small enclosed space without a warning shot were all offered as evidence that this was not a panicked response to an unknown threat.

South African criminal law drew a sharp line between the two outcomes the court would consider. Murder required intent — including the foresight that firing into that cubicle would kill or seriously injure whoever was inside (the doctrine of dolus eventualis). Culpable homicide covered negligent killing: a wrongful death caused without that intent. Both sides agreed Steenkamp was dead because of Pistorius's shots. The fight was over what he knew, what he foresaw, and whether his fear of an intruder was genuine or a cover for something else.

You are deciding between murder and culpable homicide. The bathroom door is closed. Four shots have been fired. What did Oscar Pistorius believe — and what should the law hold him responsible for?`,
  evidence: [
    {
      title: "Four shots through a locked door",
      description:
        "Pistorius admitted firing four rounds through the locked toilet door of his Pretoria home; Steenkamp was fatally wounded behind it.",
    },
    {
      title: "Competing accounts of the night",
      description:
        "Defense: he believed an intruder was inside and thought Steenkamp was still in bed. Prosecution: the couple had argued and he knew she had locked herself in the bathroom.",
    },
    {
      title: "South African legal fork",
      description:
        "The case turns on murder (intent, including foresight that shots into the cubicle would kill) versus culpable homicide (negligent killing without that intent).",
    },
  ],
  vote_options: ["Guilty of murder", "Guilty of culpable homicide"],
  counter_arguments: {
    "Guilty of murder":
      "Pistorius has always admitted he fired the shots — the dispute is what he believed in those seconds. South Africa's high rate of home invasion made fear of an intruder a plausible, not exotic, reaction. If he genuinely thought Steenkamp was still in bed and that someone else was behind the door, the killing may be a terrible mistake rather than intentional murder. Does foresight of death in the abstract equal knowing he was killing his girlfriend? Culpable homicide exists precisely for wrongful deaths born of negligence and panic rather than intent.",
    "Guilty of culpable homicide":
      "He fired four heavy-calibre rounds into a tiny locked toilet cubicle — a space where whoever was inside had nowhere to go. Prosecutors say neighbors heard arguing, that Steenkamp had fled there, and that he knew who was behind the door. Even on his own intruder story, South African law asks whether he foresaw that shooting through that door would kill someone. Firing without a warning shot into an enclosed space is hard to cast as mere negligence. Doesn't that point to murder under dolus eventualis rather than culpable homicide?",
  },
  real_verdict:
    "Initially found guilty of culpable homicide (2014), then upgraded to murder on appeal by the Supreme Court of Appeal (2015); sentence ultimately increased on further appeal. Released on parole in January 2024.",
  historical_context:
    "Judge Thokozile Masipa first convicted Pistorius of culpable homicide and sentenced him to five years. Prosecutors appealed on the application of dolus eventualis; a five-judge SCA panel unanimously substituted a murder conviction, holding he must have foreseen that firing into the cubicle would kill whoever was inside. After sentencing and further appeals over term length, he served years in prison before parole in 2024. Wikipedia covers the legal appeals in detail; it does not narrate a classic jury-deliberation story because South African High Court criminal trials of this kind are decided by a judge (with assessors), not a lay jury.",
};
