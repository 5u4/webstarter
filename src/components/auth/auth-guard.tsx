import { AuthForm } from "@/components/auth/auth-form";
import { useSession } from "@/lib/supabase/session";

interface Props {
  children: React.ReactNode;
}

export function AuthGuard({ children }: Props) {
  const { data, error } = useSession();

  if (error || !data?.user) {
    return (
      <div className="flex flex-col min-h-screen w-full items-center justify-center">
        <AuthForm />
      </div>
    );
  }

  return children;
}
