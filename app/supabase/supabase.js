import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_SUPABASE_URL;
const supabasePublishableKey = process.env.NEXT_SUPABASE_PUBLISHABLE_KEY;
const supabaseServiceRole = process.env.NEXT_SERVICE_ROLE_KEY;
const supabase = createClient(
  "https://ntrtbiyiefmemqbcjsad.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50cnRiaXlpZWZtZW1xYmNqc2FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYyMjI2NDgsImV4cCI6MjA4MTc5ODY0OH0.i7uJ1qfkHIb6MFCqXG044__wVAxAbtLVPXUpXL5iMAg",
);

export default supabase;
