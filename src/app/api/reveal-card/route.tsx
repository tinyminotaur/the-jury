import { ImageResponse } from "next/og";
import { getSession } from "@/lib/auth/server";
import { ensureSchema, sql } from "@/lib/db";
import { getGroupRevealData, getSoloRevealData } from "@/lib/reveal";

function tally(choices: string[]): [string, number][] {
  const map = new Map<string, number>();
  for (const c of choices) map.set(c, (map.get(c) ?? 0) + 1);
  return [...map.entries()];
}

export async function GET(request: Request) {
  const { data: session } = await getSession();
  if (!session?.user) {
    return new Response("unauthorized", { status: 401 });
  }

  const url = new URL(request.url);
  const caseId = url.searchParams.get("caseId") ?? "";
  const groupId = url.searchParams.get("groupId");
  if (!caseId) {
    return new Response("caseId is required", { status: 400 });
  }

  await ensureSchema();
  if (groupId) {
    const [membership] = await sql`
      SELECT 1 FROM group_members WHERE group_id = ${groupId} AND user_id = ${session.user.id}
    `;
    if (!membership) return new Response("forbidden", { status: 403 });
  }

  const reveal = groupId
    ? await getGroupRevealData(caseId, groupId)
    : await getSoloRevealData(caseId, session.user.id);
  if (!reveal) {
    return new Response("not resolved yet", { status: 409 });
  }

  const votesTally = tally(reveal.phase1Choices);
  const communityLine = reveal.communityStats
    .map((s) => `${s.percent}% ${s.choice}`)
    .join(" · ");

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#09090b",
          color: "white",
          padding: "56px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 36, fontWeight: 700 }}>
          🏛️ THE JURY
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#a1a1aa", marginTop: 8 }}>
          {reveal.theCase.title}
        </div>

        <div style={{ display: "flex", flexDirection: "column", marginTop: 32, gap: 8 }}>
          <div style={{ display: "flex", fontSize: 20, color: "#a1a1aa" }}>
            Phase 1 votes
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            {votesTally.map(([choice, count]) => (
              <div key={choice} style={{ display: "flex", fontSize: 28 }}>
                {count} {choice}
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", marginTop: 32, gap: 4 }}>
          <div style={{ display: "flex", fontSize: 20, color: "#a1a1aa" }}>
            {reveal.context === "group" ? "Final verdict" : "Your final verdict"}
          </div>
          <div style={{ display: "flex", fontSize: 40, fontWeight: 700 }}>
            {reveal.finalChoice ? reveal.finalChoice.toUpperCase() : "NO CONSENSUS"}
            {reveal.outcomeLabel ? ` (${reveal.outcomeLabel})` : ""}
          </div>
          <div style={{ display: "flex", fontSize: 20, color: "#fbbf24" }}>
            {reveal.swingCount > 0
              ? `⚡ ${reveal.swingCount} juror${reveal.swingCount > 1 ? "s" : ""} changed their mind`
              : "No one changed their mind"}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", marginTop: 32, gap: 4 }}>
          <div style={{ display: "flex", fontSize: 20, color: "#a1a1aa" }}>
            Real outcome
          </div>
          <div style={{ display: "flex", fontSize: 28, fontWeight: 700 }}>
            {reveal.theCase.real_verdict}
          </div>
        </div>

        {communityLine && (
          <div style={{ display: "flex", fontSize: 18, color: "#71717a", marginTop: 32 }}>
            Community: {communityLine}
          </div>
        )}
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        "Content-Disposition": 'attachment; filename="the-jury-reveal.png"',
      },
    }
  );
}
