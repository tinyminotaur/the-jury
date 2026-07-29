import Link from "next/link";
import { notFound } from "next/navigation";
import { getSession } from "@/lib/auth/server";
import { ensureSchema, sql } from "@/lib/db";
import { getTodaysCase, seedCases } from "@/lib/cases";
import { CaseBallot, VotedSummary } from "@/app/dashboard/case-ballot";

export default async function GroupCasePage({
  params,
}: {
  params: Promise<{ groupId: string }>;
}) {
  const { groupId } = await params;
  const { data: session } = await getSession();
  const user = session!.user;

  await ensureSchema();

  const [group] = await sql`
    SELECT g.id, g.name, g.invite_code
    FROM groups g
    JOIN group_members gm ON gm.group_id = g.id
    WHERE g.id = ${groupId} AND gm.user_id = ${user.id}
  `;
  if (!group) {
    notFound();
  }

  const [{ count: memberCount }] = await sql`
    SELECT count(*)::int FROM group_members WHERE group_id = ${group.id}
  `;

  await seedCases();
  const theCase = await getTodaysCase();

  const existingVote = theCase
    ? (
        await sql`
          SELECT choice, reasoning_note FROM votes
          WHERE case_id = ${theCase.id} AND user_id = ${user.id}
            AND group_id = ${group.id} AND phase = 1
        `
      )[0]
    : null;

  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold">{group.name}</h1>
          <p className="text-sm text-zinc-400">
            {memberCount} {memberCount === 1 ? "member" : "members"} ·
            invite code <span className="font-mono">{group.invite_code}</span>
          </p>
        </div>
        <Link href="/groups" className="text-sm underline">
          All groups
        </Link>
      </div>

      {!theCase ? (
        <p className="text-center text-zinc-400">
          No case has dropped yet. Check back soon.
        </p>
      ) : existingVote ? (
        <VotedSummary
          theCase={theCase}
          choice={existingVote.choice}
          reasoningNote={existingVote.reasoning_note}
        />
      ) : (
        <CaseBallot theCase={theCase} groupId={group.id} />
      )}
    </main>
  );
}
