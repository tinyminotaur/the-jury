import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth/server";
import { ensureSchema, sql } from "@/lib/db";

// Phase 1 (solo) ballot only for now -- group_id is always null here.
// Per-group Phase 1 voting (a user in a group votes once per group they're
// in, per PRD 4.3) lands with group formation, TIN-467.
export async function POST(request: Request) {
  const { data: session } = await getSession();
  if (!session?.user) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => ({}));
  const caseId = typeof body.caseId === "string" ? body.caseId : "";
  const choice = typeof body.choice === "string" ? body.choice : "";
  const reasoningNote =
    typeof body.reasoningNote === "string" && body.reasoningNote.trim()
      ? body.reasoningNote.trim()
      : null;

  if (!caseId || !choice) {
    return NextResponse.json(
      { error: "caseId and choice are required" },
      { status: 400 }
    );
  }

  await ensureSchema();

  const [existing] = await sql`
    SELECT id FROM votes
    WHERE case_id = ${caseId} AND user_id = ${session.user.id}
      AND group_id IS NULL AND phase = 1
  `;
  if (existing) {
    return NextResponse.json(
      { error: "You've already voted on this case" },
      { status: 409 }
    );
  }

  const [vote] = await sql`
    INSERT INTO votes (case_id, group_id, user_id, phase, choice, reasoning_note)
    VALUES (${caseId}, NULL, ${session.user.id}, 1, ${choice}, ${reasoningNote})
    RETURNING id, choice, created_at
  `;

  return NextResponse.json({ vote }, { status: 201 });
}
