import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth/server";
import { ensureSchema, sql } from "@/lib/db";
import { acceptMajority } from "@/lib/deliberation";

const ERROR_MESSAGES: Record<string, string> = {
  not_found: "No deliberation found for this case",
  already_resolved: "Deliberation has already concluded",
  not_in_warning_window: "Majority can only be accepted in the final 15 minutes",
  no_majority: "Votes are tied -- no majority to accept",
};

export async function POST(
  request: Request,
  { params }: { params: Promise<{ groupId: string }> }
) {
  const { groupId } = await params;
  const { data: session } = await getSession();
  if (!session?.user) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => ({}));
  const caseId = typeof body.caseId === "string" ? body.caseId : "";
  if (!caseId) {
    return NextResponse.json({ error: "caseId is required" }, { status: 400 });
  }

  await ensureSchema();
  const [membership] = await sql`
    SELECT 1 FROM group_members WHERE group_id = ${groupId} AND user_id = ${session.user.id}
  `;
  if (!membership) {
    return NextResponse.json(
      { error: "You're not a member of that group" },
      { status: 403 }
    );
  }

  const { deliberation, error } = await acceptMajority(caseId, groupId);
  if (error) {
    return NextResponse.json(
      { error: ERROR_MESSAGES[error] ?? error },
      { status: 409 }
    );
  }

  return NextResponse.json({ deliberation });
}
