import { AUTH_MUTATION_KEYS } from "@/lib/api/auth/keys";
import { supabase } from "@/lib/supabase/client";
import type { Provider } from "@supabase/supabase-js";
import { mutationOptions } from "@tanstack/react-query";

export const oauthLoginMutationOptions = (provider: Provider) =>
  mutationOptions({
    mutationKey: AUTH_MUTATION_KEYS.oauth(provider),
    mutationFn: async () => {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: window.location.href,
        },
      });

      if (error) {
        throw new Error(error.message);
      }

      if (!data.url) {
        throw new Error("OAuth login failed");
      }
    },
  });
