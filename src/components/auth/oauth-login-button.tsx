import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase/client";
import { cn } from "@/lib/utils";
import type { Provider } from "@supabase/supabase-js";
import { useState } from "react";
import { toast } from "sonner";

interface Props extends React.ComponentPropsWithoutRef<"button"> {
  provider: Provider;
}

export function OAuthLoginButton({ className, provider, ...props }: Props) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSocialLogin = async () => {
    setIsLoading(true);

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: window.location.href,
        },
      });

      if (error) {
        toast.error(
          error instanceof Error ? error.message : "An error occurred"
        );
      }
    } catch (error: unknown) {
      toast.error(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      className={cn(className, "w-full")}
      disabled={isLoading}
      onClick={() => handleSocialLogin()}
      {...props}
    >
      Continue with {provider}
    </Button>
  );
}
