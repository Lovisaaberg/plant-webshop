import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://kqsjzmcojzjdkhnmxbyj.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtxc2p6bWNvanpqZGtobm14YnlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkyMzU5NTIsImV4cCI6MjA2NDgxMTk1Mn0.sy9EROAab1L_Bw7tMl9ZDLjXA9QK2XOYm5U_y60TplE"

export const supabase = createClient(supabaseUrl, supabaseKey)