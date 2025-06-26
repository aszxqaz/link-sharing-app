import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://akjylyhuoniexoavrnfg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFranlseWh1b25pZXhvYXZybmZnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MDkzNTQxMywiZXhwIjoyMDY2NTExNDEzfQ.x_Aoja6eCeMJM63v4lThdZaOqS-0dOC0dYkZk7TgVt0"
);
