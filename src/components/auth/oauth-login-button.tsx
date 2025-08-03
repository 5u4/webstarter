import { Button } from "@/components/ui/button";
import { useAuthMutating } from "@/lib/api/auth/keys";
import { oauthLoginMutationOptions } from "@/lib/api/auth/oauth-login";
import { cn } from "@/lib/utils";
import type { Provider } from "@supabase/supabase-js";
import { useMutation } from "@tanstack/react-query";
import { LoaderCircleIcon } from "lucide-react";

interface Props extends React.ComponentPropsWithoutRef<"button"> {
  provider: Provider;
}

export function OAuthLoginButton({ className, provider, ...props }: Props) {
  const authMutating = useAuthMutating();
  const { mutate, error, isPending } = useMutation(
    oauthLoginMutationOptions(provider)
  );

  return (
    <>
      {error && (
        <div className="text-destructive text-sm">
          {error.message ?? "An error occurred during log in."}
        </div>
      )}

      <Button
        variant="outline"
        className={cn(className, "w-full capitalize")}
        disabled={authMutating > 0}
        onClick={() => mutate()}
        {...props}
      >
        {isPending ? <LoaderCircleIcon className="animate-spin" /> : <></>}
        Continue with {provider}
      </Button>
    </>
  );
}
