import { LoginForm } from "@/components/auth/login-form";
import { useSession } from "@/lib/supabase/session";

interface Props {
  children: React.ReactNode;
}

export function AuthGuard({ children }: Props) {
  const { data, error } = useSession();

  if (error || !data?.user) {
    return <LoginForm />;
  }

  return children;
}
