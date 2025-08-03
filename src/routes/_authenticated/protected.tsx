import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase/client";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/protected")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-full">
      <p>Hello "/protected"!</p>
      <Button onClick={() => supabase.auth.signOut()}>Log out</Button>
    </div>
  );
}
