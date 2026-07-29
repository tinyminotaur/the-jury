import { randomBytes } from "crypto";
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth/server";
import { ensureSchema, sql } from "@/lib/db";

// Minimal groups CRUD to prove the auth + schema wiring end to end
// (TIN-463 acceptance criteria). Real group-formation UX/invite flow is TIN-467.

export async function GET() {
  const { data: session } = await auth.getSession();
  if (!session?.user) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  await ensureSchema();
  const groups = await sql`
    SELECT g.id, g.name, g.invite_code, g.created_at
    FROM groups g
    JOIN group_members gm ON gm.group_id = g.id
    WHERE gm.user_id = ${session.user.id}
    ORDER BY g.created_at DESC
  `;
  return NextResponse.json({ groups });
}

export async function POST(request: Request) {
  const { data: session } = await auth.getSession();
  if (!session?.user) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => ({}));
  const name = typeof body.name === "string" ? body.name.trim() : "";
  if (!name) {
    return NextResponse.json({ error: "name is required" }, { status: 400 });
  }

  await ensureSchema();
  const inviteCode = randomBytes(4).toString("hex");
  const [group] = await sql`
    INSERT INTO groups (name, invite_code)
    VALUES (${name}, ${inviteCode})
    RETURNING id, name, invite_code, created_at
  `;
  await sql`
    INSERT INTO group_members (group_id, user_id)
    VALUES (${group.id}, ${session.user.id})
    ON CONFLICT DO NOTHING
  `;

  return NextResponse.json({ group }, { status: 201 });
}
