import { NextRequest, NextResponse } from "next/server";
import { SESSION_COOKIE, verifySessionCookieValue } from "@/lib/auth/session";

export default function proxy(request: NextRequest) {
  const value = request.cookies.get(SESSION_COOKIE)?.value;
  const session = verifySessionCookieValue(value);

  if (!session) {
    const url = new URL("/auth/sign-in", request.url);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
