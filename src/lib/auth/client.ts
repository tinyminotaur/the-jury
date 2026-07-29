"use client";

import { createAuthClient } from "better-auth/client";
import { magicLinkClient } from "better-auth/client/plugins";

// Talks to our own same-origin proxy (app/api/auth/[...path]/route.ts),
// which forwards to NEON_AUTH_BASE_URL server-side. Using Better Auth's
// client directly (not @neondatabase/auth/next's wrapper) because that
// wrapper doesn't expose a way to register plugins like magicLinkClient.
//
// createAuthClient requires an absolute URL (throws on a bare path like
// "/api/auth"). The server-side value here is never actually used for a
// real request -- this module also evaluates during SSR of the "use
// client" pages that import it, so it just needs to not crash the build.
const baseURL =
  typeof window !== "undefined"
    ? `${window.location.origin}/api/auth`
    : "http://localhost/api/auth";

export const authClient = createAuthClient({
  baseURL,
  plugins: [magicLinkClient()],
});
