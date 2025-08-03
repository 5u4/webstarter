import { Button } from "@/components/ui/button";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-center">
      <p>Hello world!</p>
      <Button variant="link" onClick={() => navigate({ to: "/protected" })}>
        to protected page
      </Button>
    </div>
  );
}
