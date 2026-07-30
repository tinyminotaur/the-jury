import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth/server";
import { ensureSchema, sql } from "@/lib/db";
import { resolveIfPossible } from "@/lib/deliberation";

async function requireMembership(userId: string, groupId: string) {
  const [membership] = await sql`
    SELECT 1 FROM group_members WHERE group_id = ${groupId} AND user_id = ${userId}
  `;
  return Boolean(membership);
}

export async function GET(request: Request) {
  const { data: session } = await getSession();
  if (!session?.user) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const url = new URL(request.url);
  const caseId = url.searchParams.get("caseId") ?? "";
  const groupId = url.searchParams.get("groupId") ?? "";
  if (!caseId || !groupId) {
    return NextResponse.json(
      { error: "caseId and groupId are required" },
      { status: 400 }
    );
  }

  await ensureSchema();
  if (!(await requireMembership(session.user.id, groupId))) {
    return NextResponse.json(
      { error: "You're not a member of that group" },
      { status: 403 }
    );
  }

  const messages = await sql`
    SELECT dm.id, dm.user_id, dm.body, dm.created_at, u.email
    FROM deliberation_messages dm
    JOIN users u ON u.id = dm.user_id
    WHERE dm.case_id = ${caseId} AND dm.group_id = ${groupId}
    ORDER BY dm.created_at ASC
  `;
  const deliberation = await resolveIfPossible(caseId, groupId);
  return NextResponse.json({ messages, deliberation });
}

export async function POST(request: Request) {
  const { data: session } = await getSession();
  if (!session?.user) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => ({}));
  const caseId = typeof body.caseId === "string" ? body.caseId : "";
  const groupId = typeof body.groupId === "string" ? body.groupId : "";
  const messageBody =
    typeof body.body === "string" ? body.body.trim().slice(0, 2000) : "";

  if (!caseId || !groupId || !messageBody) {
    return NextResponse.json(
      { error: "caseId, groupId, and body are required" },
      { status: 400 }
    );
  }

  await ensureSchema();
  if (!(await requireMembership(session.user.id, groupId))) {
    return NextResponse.json(
      { error: "You're not a member of that group" },
      { status: 403 }
    );
  }

  const [message] = await sql`
    INSERT INTO deliberation_messages (case_id, group_id, user_id, body)
    VALUES (${caseId}, ${groupId}, ${session.user.id}, ${messageBody})
    RETURNING id, user_id, body, created_at
  `;
  return NextResponse.json({ message }, { status: 201 });
}
