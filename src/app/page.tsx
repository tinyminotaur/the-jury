export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center gap-4 px-6 text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
          The Jury
        </h1>
        <p className="max-w-md text-lg text-zinc-600 dark:text-zinc-400">
          Scaffold is up. Case brief, deliberation, and reveal flows land in
          later issues (TIN-463 onward).
        </p>
        <p className="text-sm text-zinc-400 dark:text-zinc-600">
          Status: OK &middot; build {process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ?? "local"}
        </p>
      </main>
    </div>
  );
}
