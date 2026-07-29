import { createHmac, timingSafeEqual } from "crypto";

const SESSION_COOKIE = "jury_session";
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 30; // 30 days

export type SessionPayload = {
  userId: string;
  email: string;
  exp: number; // unix seconds
};

// Repurposes the existing NEON_AUTH_COOKIE_SECRET env var (already
// provisioned in Vercel) as a generic session-signing secret, now that
// Neon Managed Better Auth itself is no longer in use -- avoids adding
// yet another env var round trip. See DECISIONS.md.
function getSecret(): string {
  const secret = process.env.NEON_AUTH_COOKIE_SECRET;
  if (!secret) {
    throw new Error("NEON_AUTH_COOKIE_SECRET is not set");
  }
  return secret;
}

function sign(value: string): string {
  return createHmac("sha256", getSecret()).update(value).digest("base64url");
}

export function createSessionCookieValue(payload: Omit<SessionPayload, "exp">): string {
  const full: SessionPayload = {
    ...payload,
    exp: Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS,
  };
  const data = Buffer.from(JSON.stringify(full)).toString("base64url");
  const signature = sign(data);
  return `${data}.${signature}`;
}

export function verifySessionCookieValue(value: string | undefined): SessionPayload | null {
  if (!value) return null;
  const [data, signature] = value.split(".");
  if (!data || !signature) return null;

  const expectedSignature = sign(data);
  const a = Buffer.from(signature);
  const b = Buffer.from(expectedSignature);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null;

  try {
    const payload = JSON.parse(Buffer.from(data, "base64url").toString()) as SessionPayload;
    if (payload.exp < Math.floor(Date.now() / 1000)) return null;
    return payload;
  } catch {
    return null;
  }
}

export { SESSION_COOKIE, SESSION_TTL_SECONDS };
