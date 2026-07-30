import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth/server";
import { ensureSchema, sql } from "@/lib/db";
import { getGroupRevealData, getSoloRevealData } from "@/lib/reveal";

export async function GET(request: Request) {
  const { data: session } = await getSession();
  if (!session?.user) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const url = new URL(request.url);
  const caseId = url.searchParams.get("caseId") ?? "";
  const groupId = url.searchParams.get("groupId");
  if (!caseId) {
    return NextResponse.json({ error: "caseId is required" }, { status: 400 });
  }

  await ensureSchema();

  if (groupId) {
    const [membership] = await sql`
      SELECT 1 FROM group_members WHERE group_id = ${groupId} AND user_id = ${session.user.id}
    `;
    if (!membership) {
      return NextResponse.json(
        { error: "You're not a member of that group" },
        { status: 403 }
      );
    }
  }

  const reveal = groupId
    ? await getGroupRevealData(caseId, groupId)
    : await getSoloRevealData(caseId, session.user.id);

  if (!reveal) {
    return NextResponse.json(
      { error: "Not resolved yet" },
      { status: 409 }
    );
  }

  return NextResponse.json({ reveal });
}
