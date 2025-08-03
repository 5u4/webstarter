import { Button } from "@/components/ui/button";
import { $api } from "@/lib/api/client";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const navigate = useNavigate();
  const { data, error } = $api.useQuery("get", "/pet/findByStatus", {
    params: { query: { status: "available" } },
  });

  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-center">
      <p>Hello world!</p>
      <Button variant="link" onClick={() => navigate({ to: "/protected" })}>
        to protected page
      </Button>
      {error ? <p className="text-destructive">Error: {error}</p> : <></>}
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <></>}
    </div>
  );
}
