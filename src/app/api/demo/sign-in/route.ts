import { NextResponse } from "next/server";
import { ensureSchema, sql } from "@/lib/db";
import { createSessionCookieValue, SESSION_COOKIE, SESSION_TTL_SECONDS } from "@/lib/auth/session";

// TEMPORARY testing aid -- lets Josh simulate multiple jurors (open several
// incognito windows, each hitting this with a different `label`) to test
// group deliberation without needing real second/third email accounts
// (Resend sandbox only delivers to one verified address). Gated entirely
// on DEMO_MODE_SECRET existing + matching -- unset that env var to disable
// this route completely before real users show up. See DECISIONS.md.
export async function GET(request: Request) {
  const url = new URL(request.url);
  const secret = url.searchParams.get("secret") ?? "";
  const label = (url.searchParams.get("label") ?? "").trim();
  const groupId = url.searchParams.get("groupId");

  const expected = process.env.DEMO_MODE_SECRET;
  if (!expected || secret !== expected) {
    return new Response("Not found", { status: 404 });
  }
  if (!label) {
    return new Response("label is required", { status: 400 });
  }

  const slug = label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const email = `demo+${slug}@thejury.test`;

  await ensureSchema();

  const [user] = await sql`
    INSERT INTO users (email)
    VALUES (${email})
    ON CONFLICT (email) DO UPDATE SET email = EXCLUDED.email
    RETURNING id, email
  `;

  if (groupId) {
    const [group] = await sql`SELECT 1 FROM groups WHERE id = ${groupId}`;
    if (group) {
      await sql`
        INSERT INTO group_members (group_id, user_id)
        VALUES (${groupId}, ${user.id})
        ON CONFLICT DO NOTHING
      `;
    }
  }

  const cookieValue = createSessionCookieValue({ userId: user.id, email: user.email });
  const redirectTo = groupId ? `/groups/${groupId}` : "/dashboard";
  const response = NextResponse.redirect(new URL(redirectTo, url.origin));
  response.cookies.set(SESSION_COOKIE, cookieValue, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_TTL_SECONDS,
  });
  return response;
}
