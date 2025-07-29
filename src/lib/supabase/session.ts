import { supabase } from "@/lib/supabase/client";
import { type Session } from "@supabase/supabase-js";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

let cachedSession: Session | null = null;
let sessionPromise: Promise<Session | null> | null = null;
let lastFetch = 0;
const CACHE_DURATION = 5 * 60 * 1000;

export async function getCurrentSession(): Promise<Session | null> {
  const now = Date.now();

  // Return cached session if still valid
  if (
    cachedSession &&
    cachedSession.expires_at &&
    cachedSession.expires_at > now / 1000 &&
    now - lastFetch < CACHE_DURATION
  ) {
    return cachedSession;
  }

  // Return existing promise if one is in flight
  if (sessionPromise) {
    return sessionPromise;
  }

  sessionPromise = supabase.auth
    .getSession()
    .then(({ data: { session } }) => {
      cachedSession = session;
      lastFetch = Date.now();
      sessionPromise = null;
      return session;
    })
    .catch((error) => {
      sessionPromise = null;
      throw error;
    });

  return sessionPromise;
}

// Clear cache when auth state changes
supabase.auth.onAuthStateChange(() => {
  cachedSession = null;
  sessionPromise = null;
  lastFetch = 0;
});

export function useSession() {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["session"],
    queryFn: getCurrentSession,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      // Invalidate both manual cache and React Query cache
      cachedSession = null;
      sessionPromise = null;
      lastFetch = 0;
      queryClient.invalidateQueries({ queryKey: ["session"] });
    });

    return () => subscription.unsubscribe();
  }, [queryClient]);

  return query;
}
