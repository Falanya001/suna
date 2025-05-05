// auth-test.ts

import { createClient } from "@supabase/supabase-js";

// Use your local Supabase credentials here (from .env.local)
const supabase = createClient(
  "http://127.0.0.1:54321", // NEXT_PUBLIC_SUPABASE_URL
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0"      // NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function testAuth() {
  const email = "raqenice@cyclelove.cc";
  const password = "Lolhaha@001";

  // SIGN UP
  const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (signUpError) {
    console.error("Signup failed:", signUpError.message);
  } else {
    console.log("Signup success:", signUpData);
  }

  // LOGIN
  const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (signInError) {
    console.error("Login failed:", signInError.message);
  } else {
    console.log("Login success:", signInData);
  }
}

testAuth();
