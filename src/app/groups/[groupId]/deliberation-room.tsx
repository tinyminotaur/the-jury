"use client";

import { useCallback, useEffect, useState } from "react";
import type { Case } from "@/lib/cases";
import { Reveal } from "@/components/reveal";

type DeliberationState = {
  status: "pending" | "unanimous" | "majority" | "hung";
  final_choice: string | null;
  clock_ends_at: string;
};

type Message = {
  id: string;
  user_id: string;
  body: string;
  created_at: string;
  email: string;
};

const WARNING_WINDOW_MS = 15 * 60 * 1000;

function formatRemaining(ms: number): string {
  if (ms <= 0) return "0:00";
  const totalSeconds = Math.floor(ms / 1000);
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  return h > 0 ? `${h}h ${m}m` : `${m}:${s.toString().padStart(2, "0")}`;
}

export function DeliberationRoom({
  theCase,
  groupId,
  currentUserId,
  initialChoice,
}: {
  theCase: Case;
  groupId: string;
  currentUserId: string;
  initialChoice: string;
}) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [deliberation, setDeliberation] = useState<DeliberationState | null>(
    null
  );
  const [currentChoice, setCurrentChoice] = useState(initialChoice);
  const [messageBody, setMessageBody] = useState("");
  const [now, setNow] = useState(() => Date.now());
  const [error, setError] = useState<string | null>(null);

  const poll = useCallback(async () => {
    const res = await fetch(
      `/api/deliberation-messages?caseId=${theCase.id}&groupId=${groupId}`
    );
    if (!res.ok) return;
    const data = await res.json();
    setMessages(data.messages);
    setDeliberation(data.deliberation);
  }, [theCase.id, groupId]);

  useEffect(() => {
    // poll() is async -- its setState calls happen after an await, in a
    // later microtask, not synchronously within this effect body.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    poll();
    const interval = setInterval(poll, 10000);
    return () => clearInterval(interval);
  }, [poll]);

  useEffect(() => {
    const tick = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(tick);
  }, []);

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    const body = messageBody.trim();
    if (!body) return;
    setError(null);

    const res = await fetch("/api/deliberation-messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ caseId: theCase.id, groupId, body }),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error ?? "Couldn't send that message. Try again.");
      return;
    }

    setMessageBody("");
    poll();
  }

  async function changeVote(choice: string) {
    setError(null);
    const res = await fetch("/api/votes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ caseId: theCase.id, groupId, choice, phase: 2 }),
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error ?? "Couldn't change your vote. Try again.");
      return;
    }
    setCurrentChoice(choice);
    poll();
  }

  async function acceptMajority() {
    setError(null);
    const res = await fetch(`/api/groups/${groupId}/accept-majority`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ caseId: theCase.id }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      setError(data.error ?? "Couldn't accept a majority verdict.");
      return;
    }
    setDeliberation(data.deliberation);
  }

  if (deliberation && deliberation.status !== "pending") {
    return <Reveal caseId={theCase.id} groupId={groupId} />;
  }

  const msRemaining = deliberation
    ? new Date(deliberation.clock_ends_at).getTime() - now
    : null;
  const inWarningWindow = msRemaining !== null && msRemaining <= WARNING_WINDOW_MS;

  return (
    <div className="grid gap-6">
      <div className="rounded-xl border p-4">
        <div className="flex items-center justify-between">
          <p className="text-sm text-zinc-400">
            Deliberating —{" "}
            {msRemaining !== null ? formatRemaining(msRemaining) : "…"}{" "}
            remaining
          </p>
          <p className="text-sm">
            Your vote: <span className="font-medium">{currentChoice}</span>
          </p>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {theCase.vote_options
            .filter((option) => option !== currentChoice)
            .map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => changeVote(option)}
                className="rounded-full border px-3 py-1 text-xs"
              >
                Change to: {option}
              </button>
            ))}
        </div>

        {error && <p className="mt-2 text-sm text-red-400">{error}</p>}

        {inWarningWindow && (
          <div className="mt-4 rounded-lg border border-amber-500/50 bg-amber-500/10 p-3">
            <p className="text-sm">
              15 minutes left. Reach unanimous, or accept a majority verdict
              now?
            </p>
            <button
              type="button"
              onClick={acceptMajority}
              className="mt-2 rounded-full bg-amber-500 px-3 py-1 text-xs font-medium text-black"
            >
              Accept majority verdict
            </button>
          </div>
        )}
      </div>

      <div className="rounded-xl border">
        <div className="max-h-96 overflow-y-auto p-4">
          {messages.length === 0 ? (
            <p className="text-sm text-zinc-500">
              No messages yet. Start the discussion.
            </p>
          ) : (
            <ul className="grid gap-3">
              {messages.map((m) => (
                <li key={m.id}>
                  <p className="text-xs text-zinc-500">
                    {m.user_id === currentUserId ? "You" : m.email.split("@")[0]}
                  </p>
                  <p className="text-sm">{m.body}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
        <form onSubmit={sendMessage} className="flex gap-2 border-t p-3">
          <input
            value={messageBody}
            onChange={(e) => setMessageBody(e.target.value)}
            placeholder="Say something..."
            className="flex-1 rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm outline-none focus:border-zinc-400"
          />
          <button
            type="submit"
            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
