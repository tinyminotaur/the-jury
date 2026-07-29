import Link from "next/link";
import { getSession } from "@/lib/auth/server";
import { ensureSchema, sql } from "@/lib/db";
import { CreateGroupForm, JoinGroupForm } from "./group-forms";

export default async function GroupsPage() {
  const { data: session } = await getSession();
  const user = session!.user;

  await ensureSchema();
  const groups = await sql`
    SELECT g.id, g.name,
      (SELECT count(*)::int FROM group_members gm2 WHERE gm2.group_id = g.id) AS member_count
    FROM groups g
    JOIN group_members gm ON gm.group_id = g.id
    WHERE gm.user_id = ${user.id}
    ORDER BY g.created_at DESC
  `;

  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Your groups</h1>
        <Link href="/dashboard" className="text-sm underline">
          Solo view
        </Link>
      </div>

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
    </main>
  );
}
