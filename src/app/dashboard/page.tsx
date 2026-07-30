import Link from "next/link";
import { getSession } from "@/lib/auth/server";
import { ensureSchema, sql } from "@/lib/db";
import { getTodaysCase, seedCases } from "@/lib/cases";
import { Reveal } from "@/components/reveal";
import { CreateGroupForm, JoinGroupForm } from "@/app/groups/group-forms";
import { SignOutButton } from "./sign-out-button";
import { CaseBallot, SoloPhase2 } from "./case-ballot";

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

  const groups = await sql`
    SELECT g.id, g.name,
      (SELECT count(*)::int FROM group_members gm2 WHERE gm2.group_id = g.id) AS member_count
    FROM groups g
    JOIN group_members gm ON gm.group_id = g.id
    WHERE gm.user_id = ${user.id}
    ORDER BY g.created_at DESC
  `;

  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col gap-8 p-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-zinc-400">Signed in as {user.email}</p>
        <SignOutButton />
      </div>

      <section className="grid gap-6">
        <h1 className="text-lg font-semibold">Solo</h1>
        {!theCase ? (
          <p className="text-center text-zinc-400">
            No case has dropped yet. Check back soon.
          </p>
        ) : phase2Vote ? (
          <Reveal caseId={theCase.id} />
        ) : phase1Vote ? (
          <SoloPhase2 theCase={theCase} phase1Choice={phase1Vote.choice} />
        ) : (
          <CaseBallot theCase={theCase} />
        )}
      </section>

      <section className="grid gap-4 border-t pt-8">
        <h2 className="text-lg font-semibold">Your groups</h2>

        {groups.length === 0 ? (
          <p className="text-sm text-zinc-400">
            You&apos;re not in any groups yet.
          </p>
        ) : (
          <ul className="grid gap-3">
            {groups.map((group) => (
              <li key={group.id}>
                <Link
                  href={`/groups/${group.id}`}
                  className="block rounded-xl border p-4 hover:border-zinc-500"
                >
                  <p className="font-medium">{group.name}</p>
                  <p className="text-sm text-zinc-400">
                    {group.member_count}{" "}
                    {group.member_count === 1 ? "member" : "members"}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        )}

        <div className="grid gap-4 sm:grid-cols-2">
          <CreateGroupForm />
          <JoinGroupForm />
        </div>
      </section>
    </main>
  );
}
