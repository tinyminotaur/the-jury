import { NextResponse } from "next/server";
import { ensureSchema, sql } from "@/lib/db";
import { createSessionCookieValue, SESSION_COOKIE, SESSION_TTL_SECONDS } from "@/lib/auth/session";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const token = url.searchParams.get("token");
  const signInUrl = new URL("/auth/sign-in", url.origin);

  if (!token) {
    signInUrl.searchParams.set("error", "missing_token");
    return NextResponse.redirect(signInUrl);
  }

  await ensureSchema();

  const [link] = await sql`
    SELECT token, email, expires_at, used_at FROM magic_links WHERE token = ${token}
  `;

  if (!link || link.used_at || new Date(link.expires_at) < new Date()) {
    signInUrl.searchParams.set("error", "invalid_or_expired_link");
    return NextResponse.redirect(signInUrl);
  }

  await sql`UPDATE magic_links SET used_at = now() WHERE token = ${token}`;

  const [user] = await sql`
    INSERT INTO users (email)
    VALUES (${link.email})
    ON CONFLICT (email) DO UPDATE SET email = EXCLUDED.email
    RETURNING id, email
  `;

  const cookieValue = createSessionCookieValue({ userId: user.id, email: user.email });

  const response = NextResponse.redirect(new URL("/dashboard", url.origin));
  response.cookies.set(SESSION_COOKIE, cookieValue, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_TTL_SECONDS,
  });
  return response;
}
