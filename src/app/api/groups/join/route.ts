import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth/server";
import { ensureSchema, sql } from "@/lib/db";

const MAX_GROUP_SIZE = 8; // PRD 4.3: groups are 1-8 members

export async function POST(request: Request) {
  const { data: session } = await getSession();
  if (!session?.user) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => ({}));
  const inviteCode =
    typeof body.inviteCode === "string" ? body.inviteCode.trim() : "";
  if (!inviteCode) {
    return NextResponse.json(
      { error: "inviteCode is required" },
      { status: 400 }
    );
  }

  await ensureSchema();

  const [group] = await sql`
    SELECT id, name FROM groups WHERE invite_code = ${inviteCode}
  `;
  if (!group) {
    return NextResponse.json({ error: "Invalid invite code" }, { status: 404 });
  }

  const [{ count }] = await sql`
    SELECT count(*)::int FROM group_members WHERE group_id = ${group.id}
  `;
  const [alreadyMember] = await sql`
    SELECT 1 FROM group_members
    WHERE group_id = ${group.id} AND user_id = ${session.user.id}
  `;

  if (!alreadyMember && count >= MAX_GROUP_SIZE) {
    return NextResponse.json({ error: "This group is full" }, { status: 409 });
  }

  await sql`
    INSERT INTO group_members (group_id, user_id)
    VALUES (${group.id}, ${session.user.id})
    ON CONFLICT DO NOTHING
  `;

  return NextResponse.json({ group });
}
