import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ulcbvhsvevuactudjawz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVsY2J2aHN2ZXZ1YWN0dWRqYXd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAxNzU4NjksImV4cCI6MjAxNTc1MTg2OX0.7-9v9KIhfnK9gYsn4VwWVcoIvECvtAF15TTkJK41xO8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
