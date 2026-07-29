"use client";

// TEMPORARY debug probe -- remove once the empty-sign-in-form bug is found.
import { useContext } from "react";
import { AuthUIContext } from "@daveyplate/better-auth-ui";

export function DebugAuthContext() {
  const ctx = useContext(AuthUIContext);
  return (
    <pre
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        background: "red",
        color: "white",
        padding: 8,
        zIndex: 9999,
        fontSize: 12,
        maxWidth: "100vw",
        overflow: "auto",
      }}
    >
      {JSON.stringify(
        {
          magicLink: ctx?.magicLink,
          emailOTP: ctx?.emailOTP,
          credentials: ctx?.credentials,
          basePath: ctx?.basePath,
          viewPathsKeys: ctx?.viewPaths ? Object.keys(ctx.viewPaths) : null,
        },
        null,
        2
      )}
    </pre>
  );
}
