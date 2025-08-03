import { AUTH_MUTATION_KEYS } from "@/lib/api/auth/keys";
import { supabase } from "@/lib/supabase/client";
import { mutationOptions } from "@tanstack/react-query";
import { z } from "zod";

export const passwordSignUpFormSchema = z
  .object({
    email: z.email(),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    passwordConfirm: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords don't match",
    path: ["passwordConfirm"],
  });

export const passwordSignUpMutationOptions = () =>
  mutationOptions({
    mutationKey: AUTH_MUTATION_KEYS.signup(),
    mutationFn: async (values: z.infer<typeof passwordSignUpFormSchema>) => {
      const { data, error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
      });

      if (error) {
        throw new Error(error.message);
      }

      if (!data.user) {
        throw new Error("User creation failed");
      }

      return data;
    },
  });
