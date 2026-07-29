"use client";

import { useState } from "react";
import type { Case } from "@/lib/cases";

function CaseBrief({ theCase }: { theCase: Case }) {
  const [showEvidence, setShowEvidence] = useState(false);

  return (
    <div className="grid gap-6">
      <div>
        <h1 className="text-2xl font-semibold">{theCase.title}</h1>
        <p className="mt-1 text-sm text-zinc-400">
          {theCase.year && `${theCase.year} · `}
          {"★".repeat(theCase.difficulty)}
          {"☆".repeat(5 - theCase.difficulty)}
        </p>
      </div>

      <div className="whitespace-pre-line leading-relaxed text-zinc-200">
        {theCase.brief}
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
                <li key={i} className="rounded-lg border p-3 text-sm">
                  <p className="font-medium">{item.title}</p>
                  <p className="mt-1 text-zinc-400">{item.description}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export function VotedSummary({
  theCase,
  choice,
  reasoningNote,
}: {
  theCase: Case;
  choice: string;
  reasoningNote: string | null;
}) {
  return (
    <div className="grid gap-6">
      <CaseBrief theCase={theCase} />
      <div className="rounded-xl border p-6">
        <p className="text-lg font-medium">Your vote: {choice}</p>
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

export function CaseBallot({ theCase }: { theCase: Case }) {
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
    return (
      <VotedSummary
        theCase={theCase}
        choice={submitted.choice}
        reasoningNote={submitted.reasoningNote}
      />
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
