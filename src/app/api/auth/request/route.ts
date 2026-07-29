import { randomBytes } from "crypto";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ensureSchema, sql } from "@/lib/db";

const MAGIC_LINK_TTL_MINUTES = 15;

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
  }

  await ensureSchema();

  const token = randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + MAGIC_LINK_TTL_MINUTES * 60 * 1000);

  await sql`
    INSERT INTO magic_links (token, email, expires_at)
    VALUES (${token}, ${email}, ${expiresAt.toISOString()})
  `;

  const origin = new URL(request.url).origin;
  const verifyUrl = `${origin}/api/auth/verify?token=${token}`;

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    // Resend's shared testing domain -- works without custom domain
    // verification. Swap for a verified sending domain before real launch.
    from: "The Jury <onboarding@resend.dev>",
    to: email,
    subject: "Sign in to The Jury",
    html: `<p>Click below to sign in. This link expires in ${MAGIC_LINK_TTL_MINUTES} minutes.</p><p><a href="${verifyUrl}">Sign in to The Jury</a></p>`,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
