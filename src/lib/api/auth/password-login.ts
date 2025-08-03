import { AUTH_MUTATION_KEYS } from "@/lib/api/auth/keys";
import { supabase } from "@/lib/supabase/client";
import { mutationOptions } from "@tanstack/react-query";
import { z } from "zod";

export const passwordLoginFormSchema = z.object({
  email: z.email(),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

export const passwordLoginMutationOptions = () =>
  mutationOptions({
    mutationKey: AUTH_MUTATION_KEYS.login(),
    mutationFn: async (values: z.infer<typeof passwordLoginFormSchema>) => {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      });

      if (error) {
        throw new Error(error.message);
      }

      if (!data.user) {
        throw new Error("Login failed");
      }

      return data;
    },
  });
