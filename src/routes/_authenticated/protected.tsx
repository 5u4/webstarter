import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase/client";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/protected")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-center gap-2">
      <p>Hello "/protected"!</p>
      <Button onClick={() => supabase.auth.signOut()}>Log out</Button>
    </div>
  );
}
