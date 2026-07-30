import { sql } from "./db";

const WARNING_WINDOW_MS = 15 * 60 * 1000; // PRD 2.2: 15-min warning + majority option
const CLOCK_SMALL_GROUP_MS = 3 * 60 * 60 * 1000; // <=4 members: 3 hours
const CLOCK_LARGE_GROUP_MS = 6 * 60 * 60 * 1000; // 5-8 members: 6 hours

export type Deliberation = {
  case_id: string;
  group_id: string;
  started_at: string;
  clock_ends_at: string;
  status: "pending" | "unanimous" | "majority" | "hung";
  final_choice: string | null;
  resolved_at: string | null;
};

export async function getDeliberation(
  caseId: string,
  groupId: string
): Promise<Deliberation | null> {
  const [row] = await sql`
    SELECT * FROM deliberations WHERE case_id = ${caseId} AND group_id = ${groupId}
  `;
  return (row as Deliberation) ?? null;
}

/**
 * PRD 2.2: quorum is all-vote for groups of 2-4, >=50% for groups of 5-8.
 * Called after every Phase 1 vote in a group context. No-op once a
 * deliberation row already exists (ON CONFLICT DO NOTHING).
 */
export async function checkQuorumAndMaybeStart(
  caseId: string,
  groupId: string
): Promise<void> {
  const [{ member_count: memberCount }] = await sql`
    SELECT count(*)::int AS member_count FROM group_members WHERE group_id = ${groupId}
  `;
  const [{ voter_count: voterCount }] = await sql`
    SELECT count(DISTINCT user_id)::int AS voter_count FROM votes
    WHERE case_id = ${caseId} AND group_id = ${groupId} AND phase = 1
  `;

  const quorumMet =
    memberCount <= 4 ? voterCount >= memberCount : voterCount * 2 >= memberCount;
  if (!quorumMet) return;

  const clockMs = memberCount <= 4 ? CLOCK_SMALL_GROUP_MS : CLOCK_LARGE_GROUP_MS;
  const clockEndsAt = new Date(Date.now() + clockMs).toISOString();

  await sql`
    INSERT INTO deliberations (case_id, group_id, clock_ends_at)
    VALUES (${caseId}, ${groupId}, ${clockEndsAt})
    ON CONFLICT (case_id, group_id) DO NOTHING
  `;
}

/**
 * Latest vote per active juror (someone who cast a Phase 1 vote) --
 * phase 2 if they've changed their mind since, otherwise their original
 * Phase 1 choice still stands. Recused (never voted Phase 1) excluded.
 */
export async function getCurrentGroupVotes(
  caseId: string,
  groupId: string
): Promise<{ userId: string; choice: string }[]> {
  const rows = await sql`
    SELECT DISTINCT ON (user_id) user_id, choice
    FROM votes
    WHERE case_id = ${caseId} AND group_id = ${groupId} AND phase IN (1, 2)
      AND user_id IN (
        SELECT user_id FROM votes
        WHERE case_id = ${caseId} AND group_id = ${groupId} AND phase = 1
      )
    ORDER BY user_id, created_at DESC
  `;
  return rows.map((r) => ({ userId: r.user_id, choice: r.choice }));
}

/**
 * Auto-resolves unanimous (all active jurors currently agree) or hung
 * (clock expired with no consensus and no accepted majority). Majority is
 * NOT auto-resolved here -- PRD 2.2 makes it an explicit choice, see
 * acceptMajority(). Safe to call on every page load/poll; no-ops once
 * status is no longer 'pending'.
 */
export async function resolveIfPossible(
  caseId: string,
  groupId: string
): Promise<Deliberation | null> {
  const deliberation = await getDeliberation(caseId, groupId);
  if (!deliberation || deliberation.status !== "pending") return deliberation;

  const votes = await getCurrentGroupVotes(caseId, groupId);
  const allSame =
    votes.length > 0 && votes.every((v) => v.choice === votes[0].choice);

  if (allSame) {
    return resolve(caseId, groupId, "unanimous", votes[0].choice);
  }

  if (new Date(deliberation.clock_ends_at).getTime() <= Date.now()) {
    return resolve(caseId, groupId, "hung", null);
  }

  return deliberation;
}

export async function acceptMajority(
  caseId: string,
  groupId: string
): Promise<{ deliberation: Deliberation | null; error?: string }> {
  const deliberation = await resolveIfPossible(caseId, groupId);
  if (!deliberation) return { deliberation: null, error: "not_found" };
  if (deliberation.status !== "pending") {
    return { deliberation, error: "already_resolved" };
  }

  const timeRemaining =
    new Date(deliberation.clock_ends_at).getTime() - Date.now();
  if (timeRemaining > WARNING_WINDOW_MS) {
    return { deliberation, error: "not_in_warning_window" };
  }

  const votes = await getCurrentGroupVotes(caseId, groupId);
  const tally = new Map<string, number>();
  for (const v of votes) tally.set(v.choice, (tally.get(v.choice) ?? 0) + 1);

  let topChoice: string | null = null;
  let topCount = 0;
  let tied = false;
  for (const [choice, count] of tally) {
    if (count > topCount) {
      topChoice = choice;
      topCount = count;
      tied = false;
    } else if (count === topCount) {
      tied = true;
    }
  }

  if (!topChoice || tied) {
    return { deliberation, error: "no_majority" };
  }

  const resolved = await resolve(caseId, groupId, "majority", topChoice);
  return { deliberation: resolved };
}

async function resolve(
  caseId: string,
  groupId: string,
  status: "unanimous" | "majority" | "hung",
  finalChoice: string | null
): Promise<Deliberation> {
  const [row] = await sql`
    UPDATE deliberations
    SET status = ${status}, final_choice = ${finalChoice}, resolved_at = now()
    WHERE case_id = ${caseId} AND group_id = ${groupId} AND status = 'pending'
    RETURNING *
  `;
  // Someone else's concurrent request may have resolved it first -- fetch
  // whatever the actual final state is rather than assume ours won.
  return (row as Deliberation) ?? (await getDeliberation(caseId, groupId))!;
}

export function msRemaining(deliberation: Deliberation): number {
  return new Date(deliberation.clock_ends_at).getTime() - Date.now();
}

export function isInWarningWindow(deliberation: Deliberation): boolean {
  return (
    deliberation.status === "pending" &&
    msRemaining(deliberation) <= WARNING_WINDOW_MS
  );
}
