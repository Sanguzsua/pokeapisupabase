// src/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mdaaxgndxkwgpbtyfdfp.supabase.co/';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kYWF4Z25keGt3Z3BidHlmZGZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczMzY1NzMsImV4cCI6MjA2MjkxMjU3M30.ptUH5TXeWjaXd8W_RBeJPGjob29721xYuWRz0Ktf110';
export const supabase = createClient(supabaseUrl, supabaseKey);