import { sql } from "./db";
import { getCaseById, type Case } from "./cases";
import { getDeliberation } from "./deliberation";

export type RevealData = {
  theCase: Case;
  context: "solo" | "group";
  phase1Choices: string[]; // Layer 1: this jury's initial vote split
  finalChoice: string | null; // null for a hung jury -- no consensus reached
  swingCount: number;
  totalJurors: number;
  deliberationDurationMs: number | null; // group only
  outcomeLabel: "Unanimous" | "Majority" | "Hung Jury" | null; // group only
  communityStats: { choice: string; percent: number }[]; // Layer 3
};

async function getCommunityStats(
  caseId: string
): Promise<{ choice: string; percent: number }[]> {
  const groupFinals = await sql`
    SELECT final_choice AS choice FROM deliberations
    WHERE case_id = ${caseId} AND status != 'pending' AND final_choice IS NOT NULL
  `;
  const soloFinals = await sql`
    SELECT choice FROM votes
    WHERE case_id = ${caseId} AND group_id IS NULL AND phase = 2
  `;
  const all = [...groupFinals, ...soloFinals];
  const total = all.length;
  const tally = new Map<string, number>();
  for (const row of all) tally.set(row.choice, (tally.get(row.choice) ?? 0) + 1);
  return [...tally.entries()].map(([choice, count]) => ({
    choice,
    percent: total ? Math.round((count / total) * 100) : 0,
  }));
}

export async function getGroupRevealData(
  caseId: string,
  groupId: string
): Promise<RevealData | null> {
  const theCase = await getCaseById(caseId);
  const deliberation = await getDeliberation(caseId, groupId);
  if (!theCase || !deliberation || deliberation.status === "pending") {
    return null;
  }

  const phase1Votes = await sql`
    SELECT choice FROM votes
    WHERE case_id = ${caseId} AND group_id = ${groupId} AND phase = 1
  `;
  const [{ swing_count: swingCount }] = await sql`
    SELECT count(DISTINCT user_id)::int AS swing_count FROM votes
    WHERE case_id = ${caseId} AND group_id = ${groupId} AND phase = 2
  `;

  return {
    theCase,
    context: "group",
    phase1Choices: phase1Votes.map((v) => v.choice),
    finalChoice: deliberation.final_choice,
    swingCount,
    totalJurors: phase1Votes.length,
    deliberationDurationMs: deliberation.resolved_at
      ? new Date(deliberation.resolved_at).getTime() -
        new Date(deliberation.started_at).getTime()
      : null,
    outcomeLabel:
      deliberation.status === "unanimous"
        ? "Unanimous"
        : deliberation.status === "majority"
          ? "Majority"
          : "Hung Jury",
    communityStats: await getCommunityStats(caseId),
  };
}

export async function getSoloRevealData(
  caseId: string,
  userId: string
): Promise<RevealData | null> {
  const theCase = await getCaseById(caseId);
  const [phase1] = await sql`
    SELECT choice FROM votes
    WHERE case_id = ${caseId} AND user_id = ${userId} AND group_id IS NULL AND phase = 1
  `;
  const [phase2] = await sql`
    SELECT choice FROM votes
    WHERE case_id = ${caseId} AND user_id = ${userId} AND group_id IS NULL AND phase = 2
  `;
  if (!theCase || !phase1 || !phase2) return null;

  return {
    theCase,
    context: "solo",
    phase1Choices: [phase1.choice],
    finalChoice: phase2.choice,
    swingCount: phase1.choice !== phase2.choice ? 1 : 0,
    totalJurors: 1,
    deliberationDurationMs: null,
    outcomeLabel: null,
    communityStats: await getCommunityStats(caseId),
  };
}
