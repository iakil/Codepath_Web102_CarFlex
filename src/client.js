import { createClient } from '@supabase/supabase-js'

const URL = "https://vhploaensluxyprbsdjp.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZocGxvYWVuc2x1eHlwcmJzZGpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExNjc3NDgsImV4cCI6MTk5Njc0Mzc0OH0.aptjxObQ5x05qPMit65vWrFOcOEs9eWOfymaNVjofGI";


export const supabase = createClient(URL, API_KEY);


