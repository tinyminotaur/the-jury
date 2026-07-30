import Link from "next/link";

const DEMO_LABELS = ["juror2", "juror3", "juror4", "juror5"];

export default function Home() {
  const demoSecret = process.env.DEMO_MODE_SECRET;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10 bg-black px-6 py-16 font-sans">
      <main className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-50">
          The Jury
        </h1>
        <p className="max-w-md text-lg text-zinc-400">
          A daily cooperative jury-deliberation game. Read a real historical
          case, cast a private vote, deliberate, and see how you compare to
          history.
        </p>
        <Link
          href="/dashboard"
          className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-zinc-300"
        >
          Sign in
        </Link>
        <p className="text-sm text-zinc-600">
          Status: OK &middot; build {process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ?? "local"}
        </p>
      </main>

      {demoSecret && (
        <div className="w-full max-w-sm rounded-xl border border-amber-500/40 bg-amber-500/5 p-5 text-center">
          <p className="text-sm font-medium text-amber-500">Demo mode</p>
          <p className="mt-1 text-xs text-zinc-500">
            Open each of these in a separate incognito window to test group
            deliberation as multiple simulated jurors.
          </p>
          <div className="mt-4 grid gap-2">
            {DEMO_LABELS.map((label) => (
              <a
                key={label}
                href={`/api/demo/sign-in?label=${label}&secret=${demoSecret}`}
                className="rounded-full border border-amber-500/40 px-4 py-2 text-sm font-medium text-amber-500 hover:bg-amber-500/10"
              >
                Enter as {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
