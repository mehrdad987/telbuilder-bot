-- Fix RLS policies to allow anonymous access for Telegram users
-- This is needed because Telegram Mini Apps don't use Supabase auth

-- Drop existing policies
DROP POLICY IF EXISTS "Users can read their own data" ON telbuilders_users;
DROP POLICY IF EXISTS "Users can insert their own data" ON telbuilders_users;
DROP POLICY IF EXISTS "Users can update their own data" ON telbuilders_users;

-- Create new policies that allow anonymous access
CREATE POLICY "Allow anonymous read access"
  ON telbuilders_users FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Allow anonymous insert access"
  ON telbuilders_users FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow anonymous update access"
  ON telbuilders_users FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);

-- Also allow authenticated users (for future use)
CREATE POLICY "Allow authenticated read access"
  ON telbuilders_users FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated insert access"
  ON telbuilders_users FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated update access"
  ON telbuilders_users FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
