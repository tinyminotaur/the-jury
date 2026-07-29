import { AuthView, authViewPaths } from "@daveyplate/better-auth-ui";
import { DebugAuthContext } from "./debug-context";

export function generateStaticParams() {
  return Object.values(authViewPaths).map((pathname) => ({ pathname }));
}

export default async function AuthPage({
  params,
}: {
  params: Promise<{ pathname: string }>;
}) {
  const { pathname } = await params;

  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-1 items-center justify-center p-4">
      <DebugAuthContext />
      <AuthView pathname={pathname} />
    </main>
  );
}
