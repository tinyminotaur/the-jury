"use client";

import { createAuthClient } from "better-auth/client";
import { magicLinkClient } from "better-auth/client/plugins";

// Talks DIRECTLY to Neon's hosted auth domain (NEXT_PUBLIC_NEON_AUTH_URL),
// not through our own /api/auth proxy. The session cookie Neon Auth sets
// is scoped to its own domain (SameSite=None, meant for cross-site use) --
// going through our proxy first meant the magic-link verify redirect
// bounced through Neon's raw domain and set a cookie our own app could
// never see. Matches Neon's own official example (see DECISIONS.md).
// Using Better Auth's client directly (not @neondatabase/auth/next's
// wrapper) because that wrapper doesn't expose a way to register plugins
// like magicLinkClient.
export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_NEON_AUTH_URL,
  plugins: [magicLinkClient()],
});
