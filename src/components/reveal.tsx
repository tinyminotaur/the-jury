"use client";

import { useEffect, useState } from "react";
import type { RevealData } from "@/lib/reveal";

function tally(choices: string[]): [string, number][] {
  const map = new Map<string, number>();
  for (const c of choices) map.set(c, (map.get(c) ?? 0) + 1);
  return [...map.entries()];
}

function formatDuration(ms: number): string {
  const totalMinutes = Math.round(ms / 60000);
  const h = Math.floor(totalMinutes / 60);
  const m = totalMinutes % 60;
  return h > 0 ? `${h}h ${m}m` : `${m}m`;
}

export function Reveal({
  caseId,
  groupId,
}: {
  caseId: string;
  groupId?: string;
}) {
  const [reveal, setReveal] = useState<RevealData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const url = groupId
      ? `/api/reveal?caseId=${caseId}&groupId=${groupId}`
      : `/api/reveal?caseId=${caseId}`;
    fetch(url).then(async (res) => {
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error ?? "Couldn't load the reveal.");
        return;
      }
      setReveal(data.reveal);
    });
  }, [caseId, groupId]);

  if (error) return <p className="text-sm text-zinc-400">{error}</p>;
  if (!reveal) return <p className="text-sm text-zinc-400">Loading reveal…</p>;

  const cardUrl = groupId
    ? `/api/reveal-card?caseId=${caseId}&groupId=${groupId}`
    : `/api/reveal-card?caseId=${caseId}`;

  return (
    <div className="grid gap-6">
      <h2 className="text-xl font-semibold">{reveal.theCase.title} — Reveal</h2>

      {/* Layer 1: individual votes */}
      <div className="rounded-xl border p-4">
        <p className="text-sm font-medium text-zinc-400">Initial votes</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {tally(reveal.phase1Choices).map(([choice, count]) => (
            <span key={choice} className="rounded-full border px-3 py-1 text-sm">
              {count} {choice}
            </span>
          ))}
        </div>
      </div>

      {/* Layer 2: group/solo final verdict + swing */}
      <div className="rounded-xl border p-4">
        <p className="text-sm font-medium text-zinc-400">
          {reveal.context === "group" ? "Group verdict" : "Your final verdict"}
        </p>
        <p className="mt-1 text-lg font-semibold">
          {reveal.finalChoice ?? "No consensus reached"}
          {reveal.outcomeLabel && ` (${reveal.outcomeLabel})`}
        </p>
        {reveal.deliberationDurationMs != null && (
          <p className="mt-1 text-sm text-zinc-400">
            Deliberation: {formatDuration(reveal.deliberationDurationMs)}
          </p>
        )}
        <p className="mt-1 text-sm text-amber-400">
          {reveal.swingCount > 0
            ? `${reveal.swingCount} juror${reveal.swingCount > 1 ? "s" : ""} changed their vote`
            : "No one changed their vote"}
        </p>
      </div>

      {/* Layer 3: historical outcome + community context */}
      <div className="rounded-xl border p-4">
        <p className="text-sm font-medium text-zinc-400">What actually happened</p>
        <p className="mt-1 text-lg font-semibold">{reveal.theCase.real_verdict}</p>
        {reveal.theCase.historical_context && (
          <p className="mt-2 text-sm text-zinc-300">
            {reveal.theCase.historical_context}
          </p>
        )}
        <a
          href={reveal.theCase.source_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-sm text-zinc-400 underline"
        >
          Source: Wikipedia
        </a>
        {reveal.communityStats.length > 0 && (
          <div className="mt-3 grid gap-1 text-sm text-zinc-400">
            {reveal.communityStats.map((s) => (
              <p key={s.choice}>
                {s.percent}% of juries/solo players landed on {s.choice}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* Layer 4: shareable card */}
      <a
        href={cardUrl}
        download="the-jury-reveal.png"
        className="rounded-full border px-4 py-2 text-center text-sm font-medium"
      >
        Download shareable card
      </a>
    </div>
  );
}
