// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://ycbtnjbvrfugazwgsyef.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljYnRuamJ2cmZ1Z2F6d2dzeWVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4OTc5MjAsImV4cCI6MjA2OTQ3MzkyMH0.SWtl6JetbvOQp_3sLMxte0eOhnLxCM6bVJ0rFcz1h18";

export const supabase = createClient(supabaseUrl, supabaseAnonKey)