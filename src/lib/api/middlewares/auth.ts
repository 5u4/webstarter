import { getCurrentSession } from "@/lib/supabase/session";
import type { Middleware } from "openapi-fetch";

export const authMiddleware: Middleware = {
  async onRequest({ request }) {
    const session = await getCurrentSession();
    if (session?.access_token) {
      request.headers.set("Authorization", `Bearer ${session.access_token}`);
    }
    return request;
  },
};
