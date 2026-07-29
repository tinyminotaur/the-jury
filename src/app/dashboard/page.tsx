import { getSession } from "@/lib/auth/server";
import { ensureSchema, sql } from "@/lib/db";
import { getTodaysCase, seedCases } from "@/lib/cases";
import { SignOutButton } from "./sign-out-button";
import { CaseBallot } from "./case-ballot";

export default async function DashboardPage() {
  const { data: session } = await getSession();
  const user = session!.user;

  await ensureSchema();
  await seedCases();
  const theCase = await getTodaysCase();

  const existingVote = theCase
    ? (
        await sql`
          SELECT choice FROM votes
          WHERE case_id = ${theCase.id} AND user_id = ${user.id}
            AND group_id IS NULL AND phase = 1
        `
      )[0]
    : null;

  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-zinc-400">Signed in as {user.email}</p>
        <SignOutButton />
      </div>

      {!theCase ? (
        <p className="text-center text-zinc-400">
          No case has dropped yet. Check back soon.
        </p>
      ) : existingVote ? (
        <div className="rounded-xl border p-6 text-center">
          <p className="text-lg font-medium">
            You already voted: {existingVote.choice}
          </p>
          <p className="mt-2 text-sm text-zinc-400">
            {theCase.title} — you&apos;ll see how it compares to history at
            reveal.
          </p>
        </div>
      ) : (
        <CaseBallot theCase={theCase} />
      )}
    </main>
  );
}
