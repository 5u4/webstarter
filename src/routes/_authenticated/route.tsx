import { AuthGuard } from "@/components/auth/auth-guard";
import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated")({
  component: () => (
    <AuthGuard>
      <Outlet />
    </AuthGuard>
  ),
});
