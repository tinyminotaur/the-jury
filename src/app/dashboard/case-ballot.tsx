"use client";

import { useState } from "react";
import type { Case } from "@/lib/cases";
import { Reveal } from "@/components/reveal";

function evidenceIcon(title: string): string {
  const t = title.toLowerCase();
  if (t.includes("toxicology") || t.includes("test")) return "🧪";
  if (t.includes("statement") || t.includes("said")) return "📢";
  if (t.includes("timeline") || t.includes("condition")) return "🏥";
  if (t.includes("testimony") || t.includes("witness")) return "🗣️";
  return "📄";
}

function CaseBrief({ theCase }: { theCase: Case }) {
  const [showEvidence, setShowEvidence] = useState(false);
  const [showFullBrief, setShowFullBrief] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border">
      <div className="bg-gradient-to-br from-indigo-950 via-zinc-900 to-amber-950 p-6">
        <div className="text-4xl">⚖️</div>
        <h1 className="mt-3 text-2xl font-bold text-white">{theCase.title}</h1>
        <div className="mt-2 flex items-center gap-3 text-sm text-zinc-300">
          {theCase.year && <span>{theCase.year}</span>}
          <span>
            <span className="text-amber-400">{"★".repeat(theCase.difficulty)}</span>
            <span className="text-zinc-600">{"★".repeat(5 - theCase.difficulty)}</span>
          </span>
        </div>
      </div>

      <div className="grid gap-5 p-6">
        {theCase.tldr && (
          <div className="rounded-xl border border-indigo-500/30 bg-indigo-500/10 p-4">
            <p className="text-xs font-semibold tracking-wide text-indigo-400 uppercase">
              TL;DR
            </p>
            <p className="mt-1 text-base font-medium text-zinc-100">
              {theCase.tldr}
            </p>
          </div>
        )}

        {theCase.key_facts.length > 0 && (
          <ul className="grid gap-2">
            {theCase.key_facts.map((fact, i) => (
              <li key={i} className="flex gap-2 text-sm text-zinc-200">
                <span className="text-amber-400">▸</span>
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        )}

        <div>
          <button
            type="button"
            onClick={() => setShowFullBrief((v) => !v)}
            className="text-sm text-zinc-400 underline"
          >
            {showFullBrief ? "Hide" : "Read"} the full account
          </button>
          {showFullBrief && (
            <div className="mt-3 whitespace-pre-line text-sm leading-relaxed text-zinc-300">
              {theCase.brief}
            </div>
          )}
        </div>

        <a
          href={theCase.source_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-zinc-400 underline"
        >
          Source: Wikipedia
        </a>

        {theCase.evidence.length > 0 && (
          <div>
            <button
              type="button"
              onClick={() => setShowEvidence((v) => !v)}
              className="text-sm underline"
            >
              {showEvidence ? "Hide" : "Show"} evidence exhibits (
              {theCase.evidence.length})
            </button>
            {showEvidence && (
              <ul className="mt-3 grid gap-3">
                {theCase.evidence.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 rounded-lg border p-3 text-sm"
                  >
                    <span className="text-xl leading-none">
                      {evidenceIcon(item.title)}
                    </span>
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="mt-1 text-zinc-400">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export function VotedSummary({
  theCase,
  choice,
  reasoningNote,
  initialChoice,
}: {
  theCase: Case;
  choice: string;
  reasoningNote: string | null;
  /** Pass when the final choice differs from an earlier one (solo swing). */
  initialChoice?: string;
}) {
  return (
    <div className="grid gap-6">
      <CaseBrief theCase={theCase} />
      <div className="rounded-xl border p-6">
        <p className="text-lg font-medium">
          Your vote: {choice}
          {initialChoice && initialChoice !== choice && (
            <span className="ml-2 text-sm font-normal text-amber-400">
              (changed from {initialChoice})
            </span>
          )}
        </p>
        {reasoningNote ? (
          <p className="mt-3 whitespace-pre-line text-sm text-zinc-300">
            &ldquo;{reasoningNote}&rdquo;
          </p>
        ) : (
          <p className="mt-3 text-sm text-zinc-500">
            No reasoning note added.
          </p>
        )}
        <p className="mt-4 text-sm text-zinc-400">
          Locked in. You&apos;ll see how it compares to history at reveal.
        </p>
      </div>
    </div>
  );
}

/**
 * Solo's Phase 2 adaptation (PRD 2.3): no group to deliberate with, so
 * instead the player sees the strongest case against their own vote and
 * can affirm it or change their mind. Concludes immediately on submit.
 */
export function SoloPhase2({
  theCase,
  phase1Choice,
}: {
  theCase: Case;
  phase1Choice: string;
}) {
  const [status, setStatus] = useState<"idle" | "submitting" | "error">(
    "idle"
  );
  const [error, setError] = useState<string | null>(null);
  const [finalChoice, setFinalChoice] = useState<string | null>(null);

  const counterArgument = theCase.counter_arguments[phase1Choice];

  async function submitFinal(choice: string) {
    setStatus("submitting");
    setError(null);

    const res = await fetch("/api/votes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ caseId: theCase.id, choice, phase: 2 }),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setStatus("error");
      setError(data.error ?? "Something went wrong. Try again.");
      return;
    }

    setFinalChoice(choice);
  }

  if (finalChoice) {
    return <Reveal caseId={theCase.id} />;
  }

  return (
    <div className="grid gap-6">
      <CaseBrief theCase={theCase} />
      <div className="grid gap-4 rounded-xl border p-6">
        <p className="text-sm text-zinc-400">
          Your initial vote: <span className="text-white">{phase1Choice}</span>
        </p>

        {counterArgument && (
          <div>
            <p className="text-sm font-medium">
              The strongest case against your vote:
            </p>
            <p className="mt-2 text-sm text-zinc-300">{counterArgument}</p>
          </div>
        )}

        {error && <p className="text-sm text-red-400">{error}</p>}

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => submitFinal(phase1Choice)}
            disabled={status === "submitting"}
            className="flex-1 rounded-full bg-white px-4 py-2 text-sm font-medium text-black disabled:opacity-50"
          >
            Keep my vote: {phase1Choice}
          </button>
          {theCase.vote_options
            .filter((option) => option !== phase1Choice)
            .map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => submitFinal(option)}
                disabled={status === "submitting"}
                className="flex-1 rounded-full border px-4 py-2 text-sm font-medium disabled:opacity-50"
              >
                Change to: {option}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}

export function CaseBallot({
  theCase,
  groupId,
}: {
  theCase: Case;
  groupId?: string;
}) {
  const [choice, setChoice] = useState<string | null>(null);
  const [reasoningNote, setReasoningNote] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "error">(
    "idle"
  );
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<{
    choice: string;
    reasoningNote: string | null;
  } | null>(null);

  const wordCount = reasoningNote.trim()
    ? reasoningNote.trim().split(/\s+/).length
    : 0;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!choice) return;
    setStatus("submitting");
    setError(null);

    const res = await fetch("/api/votes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        caseId: theCase.id,
        choice,
        reasoningNote,
        groupId,
      }),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setStatus("error");
      setError(data.error ?? "Something went wrong. Try again.");
      return;
    }

    setSubmitted({ choice, reasoningNote: reasoningNote.trim() || null });
  }

  if (submitted) {
    // Solo: straight into the Phase 2 counter-argument adaptation (no
    // group to wait on). Group: locked-in, waiting on Phase 2 deliberation
    // (TIN-465) -- just show the standard confirmation for now.
    return groupId ? (
      <VotedSummary
        theCase={theCase}
        choice={submitted.choice}
        reasoningNote={submitted.reasoningNote}
      />
    ) : (
      <SoloPhase2 theCase={theCase} phase1Choice={submitted.choice} />
    );
  }

  return (
    <div className="grid gap-6">
      <CaseBrief theCase={theCase} />

      <form onSubmit={handleSubmit} className="grid gap-4 border-t pt-6">
        <div className="flex gap-3">
          {theCase.vote_options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setChoice(option)}
              className={`flex-1 rounded-full border px-4 py-2 text-sm font-medium ${
                choice === option ? "bg-white text-black" : "text-white"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="grid gap-1.5">
          <label htmlFor="reasoning" className="text-sm">
            Why did you decide this way? (optional, 50-200 words)
          </label>
          <textarea
            id="reasoning"
            value={reasoningNote}
            onChange={(e) => setReasoningNote(e.target.value)}
            rows={4}
            className="rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm outline-none focus:border-zinc-400"
          />
          <p className="text-xs text-zinc-500">{wordCount} words</p>
        </div>

        {error && <p className="text-sm text-red-400">{error}</p>}

        <button
          type="submit"
          disabled={!choice || status === "submitting"}
          className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black disabled:opacity-50"
        >
          {status === "submitting" ? "Submitting..." : "Submit vote"}
        </button>
      </form>
    </div>
  );
}
