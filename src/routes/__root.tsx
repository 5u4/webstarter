import { Toaster } from "@/components/ui/sonner";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="flex flex-col min-h-screen w-full items-center justify-center">
        <Outlet />
      </div>
      <Toaster />
      <ReactQueryDevtools />
      <TanStackRouterDevtools />
    </>
  ),
});
