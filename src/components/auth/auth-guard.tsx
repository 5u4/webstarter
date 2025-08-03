import { AuthForm } from "@/components/auth/auth-form";
import { useSession } from "@/lib/supabase/session";

interface Props {
  children: React.ReactNode;
}

export function AuthGuard({ children }: Props) {
  const { data, error } = useSession();

  if (error || !data?.user) {
    return <AuthForm />;
  }

  return children;
}
