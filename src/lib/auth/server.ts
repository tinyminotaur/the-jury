import { cookies } from "next/headers";
import { SESSION_COOKIE, verifySessionCookieValue } from "./session";

export async function getSession() {
  const store = await cookies();
  const value = store.get(SESSION_COOKIE)?.value;
  const payload = verifySessionCookieValue(value);
  if (!payload) return { data: null };
  return { data: { user: { id: payload.userId, email: payload.email } } };
}
