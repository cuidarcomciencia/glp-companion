import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Tipos para o banco de dados
export interface UserProfile {
  id: string;
  email: string;
  name: string;
  medication: string;
  dose: string;
  start_date: string;
  weight: number;
  height: number;
  gender: string;
  has_diabetes: boolean;
  has_cardiovascular: boolean;
  target_weight: number;
  created_at: string;
  updated_at: string;
}

export interface MedicationReminder {
  id: string;
  user_id: string;
  medication_name: string;
  dose: string;
  time: string;
  days_of_week: string[];
  is_active: boolean;
  created_at: string;
}

export interface ProgressEntry {
  id: string;
  user_id: string;
  date: string;
  weight: number;
  mood: string;
  symptoms: Record<string, string>;
  notes?: string;
  created_at: string;
}
