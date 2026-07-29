import { auth } from "@/lib/auth/server";
import { SignOutButton } from "./sign-out-button";

// Server components using `auth` methods must be rendered dynamically.
export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const { data: session } = await auth.getSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-6 text-center">
      <div className="flex items-center gap-3">
        <SignOutButton />
        <p className="text-lg">
          Signed in as {session?.user?.email ?? "unknown"}
        </p>
      </div>
      <p className="text-sm text-zinc-500">
        Placeholder dashboard confirming Magic Link sign-in works end to end
        (TIN-463). Case/group/vote UI lands in later issues.
      </p>
    </main>
  );
}
