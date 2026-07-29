"use client";

import { useRouter } from "next/navigation";

export function SignOutButton() {
  const router = useRouter();

  return (
    <button
      onClick={async () => {
        await fetch("/api/auth/sign-out", { method: "POST" });
        router.push("/auth/sign-in");
        router.refresh();
      }}
      className="rounded-full border px-3 py-1.5 text-sm"
    >
      Sign out
    </button>
  );
}
