import z from "zod";

const schema = z.object({
  VITE_SERVER_URL: z.url(),
  VITE_SUPABASE_URL: z.url(),
  VITE_SUPABASE_ANON_KEY: z.string(),
});

export const env = schema.parse(import.meta.env);
