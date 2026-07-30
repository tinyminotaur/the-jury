import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth/server";
import { ensureSchema, sql } from "@/lib/db";
import { checkQuorumAndMaybeStart, resolveIfPossible } from "@/lib/deliberation";

// Phase 1 (initial ballot, one shot -- solo or group) or Phase 2:
// - solo Phase 2 (TIN-466): one shot, affirm or change once.
// - group Phase 2 (TIN-465): repeatable -- each row is a vote change
//   during deliberation, tracked for swing rate. Only allowed while that
//   group's deliberation is still 'pending'.
export async function POST(request: Request) {
  const { data: session } = await getSession();
  if (!session?.user) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => ({}));
  const caseId = typeof body.caseId === "string" ? body.caseId : "";
  const choice = typeof body.choice === "string" ? body.choice : "";
  const groupId = typeof body.groupId === "string" ? body.groupId : null;
  const phase = body.phase === 2 ? 2 : 1;
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

  if (groupId) {
    const [membership] = await sql`
      SELECT 1 FROM group_members
      WHERE group_id = ${groupId} AND user_id = ${session.user.id}
    `;
    if (!membership) {
      return NextResponse.json(
        { error: "You're not a member of that group" },
        { status: 403 }
      );
    }
  }

  const groupPhase2 = Boolean(groupId) && phase === 2;

  if (!groupPhase2) {
    const [existing] = groupId
      ? await sql`
          SELECT id FROM votes
          WHERE case_id = ${caseId} AND user_id = ${session.user.id}
            AND group_id = ${groupId} AND phase = ${phase}
        `
      : await sql`
          SELECT id FROM votes
          WHERE case_id = ${caseId} AND user_id = ${session.user.id}
            AND group_id IS NULL AND phase = ${phase}
        `;
    if (existing) {
      return NextResponse.json(
        { error: "You've already voted on this case" },
        { status: 409 }
      );
    }
  }

  if (phase === 2) {
    const [phase1Vote] = groupId
      ? await sql`
          SELECT id FROM votes
          WHERE case_id = ${caseId} AND user_id = ${session.user.id}
            AND group_id = ${groupId} AND phase = 1
        `
      : await sql`
          SELECT id FROM votes
          WHERE case_id = ${caseId} AND user_id = ${session.user.id}
            AND group_id IS NULL AND phase = 1
        `;
    if (!phase1Vote) {
      return NextResponse.json(
        { error: "Cast a Phase 1 vote first" },
        { status: 409 }
      );
    }
  }

  if (groupPhase2) {
    const deliberation = await resolveIfPossible(caseId, groupId!);
    if (!deliberation || deliberation.status !== "pending") {
      return NextResponse.json(
        { error: "Deliberation has already concluded" },
        { status: 409 }
      );
    }
  }

  const [vote] = await sql`
    INSERT INTO votes (case_id, group_id, user_id, phase, choice, reasoning_note)
    VALUES (${caseId}, ${groupId}, ${session.user.id}, ${phase}, ${choice}, ${reasoningNote})
    RETURNING id, choice, created_at
  `;

  if (groupId && phase === 1) {
    await checkQuorumAndMaybeStart(caseId, groupId);
  }
  if (groupId && phase === 2) {
    await resolveIfPossible(caseId, groupId);
  }

  return NextResponse.json({ vote }, { status: 201 });
}
