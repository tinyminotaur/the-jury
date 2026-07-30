import Link from "next/link";
import { notFound } from "next/navigation";
import { getSession } from "@/lib/auth/server";
import { ensureSchema, sql } from "@/lib/db";
import { getTodaysCase, seedCases } from "@/lib/cases";
import { getDeliberation, resolveIfPossible } from "@/lib/deliberation";
import { CaseBallot, VotedSummary } from "@/app/dashboard/case-ballot";
import { DeliberationRoom } from "./deliberation-room";

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

  const phase1Vote = theCase
    ? (
        await sql`
          SELECT choice, reasoning_note FROM votes
          WHERE case_id = ${theCase.id} AND user_id = ${user.id}
            AND group_id = ${group.id} AND phase = 1
        `
      )[0]
    : null;

  let deliberation = null;
  let currentChoice: string | null = null;
  if (theCase && phase1Vote) {
    deliberation = await resolveIfPossible(theCase.id, group.id);
    if (!deliberation) {
      // checkQuorumAndMaybeStart only runs on vote submission -- also
      // check here so a page reload after someone else's vote (which
      // crossed quorum) picks up deliberation starting without a new vote.
      deliberation = await getDeliberation(theCase.id, group.id);
    }

    const [latest] = await sql`
      SELECT choice FROM votes
      WHERE case_id = ${theCase.id} AND user_id = ${user.id}
        AND group_id = ${group.id} AND phase IN (1, 2)
      ORDER BY created_at DESC
      LIMIT 1
    `;
    currentChoice = latest?.choice ?? phase1Vote.choice;
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold">
            {group.name}
            {user.email.startsWith("demo+") && (
              <span className="ml-2 rounded-full bg-amber-500/20 px-2 py-0.5 text-xs text-amber-400">
                {user.email.replace("demo+", "").replace("@thejury.test", "")}
              </span>
            )}
          </h1>
          <p className="text-sm text-zinc-400">
            {memberCount} {memberCount === 1 ? "member" : "members"} ·
            invite code <span className="font-mono">{group.invite_code}</span>
          </p>
        </div>
        <Link href="/dashboard" className="text-sm underline">
          Dashboard
        </Link>
      </div>

      {!theCase ? (
        <p className="text-center text-zinc-400">
          No case has dropped yet. Check back soon.
        </p>
      ) : !phase1Vote ? (
        <CaseBallot theCase={theCase} groupId={group.id} />
      ) : deliberation ? (
        <DeliberationRoom
          theCase={theCase}
          groupId={group.id}
          currentUserId={user.id}
          initialChoice={currentChoice!}
        />
      ) : (
        <VotedSummary
          theCase={theCase}
          choice={phase1Vote.choice}
          reasoningNote={phase1Vote.reasoning_note}
        />
      )}
    </main>
  );
}
