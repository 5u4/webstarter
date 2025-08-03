import type { Provider } from "@supabase/supabase-js";
import { useIsMutating } from "@tanstack/react-query";

export const AUTH_MUTATION_KEYS = {
  login: () => ["auth", "login"],
  signup: () => ["auth", "signup"],
  oauth: (provider: Provider) => ["auth", "oauth", provider],
} as const;

export const useAuthMutating = () =>
  useIsMutating({
    mutationKey: ["auth"],
  });
