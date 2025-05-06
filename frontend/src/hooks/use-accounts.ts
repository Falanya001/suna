// src/hooks/use-accounts.ts
import useSWR, { SWRConfiguration } from "swr";
import { createClient } from "@/lib/supabase/client";

// 1️⃣ Define exactly the shape of each “account” record
export interface Account {
  id: string;
  name: string;
  owner_id: string;
  // 👇 add any other fields you actually need:
  // created_at: string;
  // description?: string;
}

export const useAccounts = (options?: SWRConfiguration) => {
  const supabase = createClient();

  return useSWR<Account[]>(
    // the SWR cache key
    !!supabase && ["accounts"],
    // the fetcher: select id, name, owner_id from projects
    async () => {
      const { data, error } = await supabase
        .from<Account>("projects")          // ← your “accounts” live in projects
        .select("id, name, owner_id");      // ← only fetch the columns you need

      if (error) {
        throw new Error(error.message);
      }
      return data!;
    },
    options
  );
};
