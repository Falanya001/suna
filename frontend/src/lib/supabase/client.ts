import { createBrowserClient } from "@supabase/ssr";

export const createClient = () => {
  // Base URL from environment (frontend origin)
  let baseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  
  // Ensure the URL uses http/https
  if (baseUrl && !baseUrl.startsWith('http')) {
    baseUrl = `http://${baseUrl}`;
  }
  
  // Use root URL; Supabase client will handle /auth/v1/*, /rest/v1/*, etc.
  return createBrowserClient(
    baseUrl,
    supabaseAnonKey,
  );
};
