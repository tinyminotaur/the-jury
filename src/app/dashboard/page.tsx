import Link from "next/link";
import { getSession } from "@/lib/auth/server";
import { ensureSchema, sql } from "@/lib/db";
import { getTodaysCase, seedCases } from "@/lib/cases";
import { SignOutButton } from "./sign-out-button";
import { CaseBallot, SoloPhase2, VotedSummary } from "./case-ballot";

export default async function DashboardPage() {
  const { data: session } = await getSession();
  const user = session!.user;

  await ensureSchema();
  await seedCases();
  const theCase = await getTodaysCase();

  let phase1Vote = null;
  let phase2Vote = null;
  if (theCase) {
    [phase1Vote] = await sql`
      SELECT choice, reasoning_note FROM votes
      WHERE case_id = ${theCase.id} AND user_id = ${user.id}
        AND group_id IS NULL AND phase = 1
    `;
    [phase2Vote] = await sql`
      SELECT choice FROM votes
      WHERE case_id = ${theCase.id} AND user_id = ${user.id}
        AND group_id IS NULL AND phase = 2
    `;
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-zinc-400">Signed in as {user.email}</p>
        <div className="flex items-center gap-4">
          <Link href="/groups" className="text-sm underline">
            My groups
          </Link>
          <SignOutButton />
        </div>
      </div>

      {!theCase ? (
        <p className="text-center text-zinc-400">
          No case has dropped yet. Check back soon.
        </p>
      ) : phase2Vote ? (
        <VotedSummary
          theCase={theCase}
          choice={phase2Vote.choice}
          reasoningNote={phase1Vote?.reasoning_note ?? null}
          initialChoice={phase1Vote?.choice}
        />
      ) : phase1Vote ? (
        <SoloPhase2
          theCase={theCase}
          phase1Choice={phase1Vote.choice}
          phase1ReasoningNote={phase1Vote.reasoning_note}
        />
      ) : (
        <CaseBallot theCase={theCase} />
      )}
    </main>
  );
}
