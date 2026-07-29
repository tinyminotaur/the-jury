"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function CreateGroupForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "error">(
    "idle"
  );
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const res = await fetch("/api/groups", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      setStatus("error");
      setError(data.error ?? "Something went wrong. Try again.");
      return;
    }

    router.push(`/groups/${data.group.id}`);
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-3 rounded-xl border p-4">
      <label htmlFor="group-name" className="text-sm font-medium">
        Create a group
      </label>
      <input
        id="group-name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="The Hendersons + Alex"
        required
        className="rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm outline-none focus:border-zinc-400"
      />
      {error && <p className="text-sm text-red-400">{error}</p>}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black disabled:opacity-50"
      >
        {status === "submitting" ? "Creating..." : "Create group"}
      </button>
    </form>
  );
}

export function JoinGroupForm() {
  const router = useRouter();
  const [inviteCode, setInviteCode] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "error">(
    "idle"
  );
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const res = await fetch("/api/groups/join", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ inviteCode: inviteCode.trim() }),
    });
    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      setStatus("error");
      setError(data.error ?? "Something went wrong. Try again.");
      return;
    }

    router.push(`/groups/${data.group.id}`);
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-3 rounded-xl border p-4">
      <label htmlFor="invite-code" className="text-sm font-medium">
        Join with an invite code
      </label>
      <input
        id="invite-code"
        value={inviteCode}
        onChange={(e) => setInviteCode(e.target.value)}
        placeholder="a1b2c3d4"
        required
        className="rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm outline-none focus:border-zinc-400"
      />
      {error && <p className="text-sm text-red-400">{error}</p>}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full border px-4 py-2 text-sm font-medium disabled:opacity-50"
      >
        {status === "submitting" ? "Joining..." : "Join group"}
      </button>
    </form>
  );
}
