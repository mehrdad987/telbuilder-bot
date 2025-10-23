/*
  # Create Telegram Users Table

  1. New Tables
    - `telbuilders_users`
      - `id` (uuid, primary key) - Internal user ID
      - `telegram_id` (bigint, unique) - Telegram user ID
      - `username` (text) - Telegram username
      - `first_name` (text) - User's first name
      - `last_name` (text) - User's last name
      - `photo_url` (text) - Profile photo URL
      - `language_code` (text) - User's language preference
      - `created_at` (timestamptz) - When user first logged in
      - `last_login` (timestamptz) - Last login timestamp

  2. Security
    - Enable RLS on `telbuilders_users` table
    - Add policy for users to read their own data
    - Add policy for users to insert their own data
    - Add policy for users to update their own data

  3. Important Notes
    - Telegram ID is stored as bigint for large number support
    - Username can be null as not all Telegram users have usernames
    - Photo URL stores the profile picture link
*/

CREATE TABLE IF NOT EXISTS telbuilders_users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  telegram_id bigint UNIQUE NOT NULL,
  username text,
  first_name text,
  last_name text,
  photo_url text,
  language_code text,
  created_at timestamptz DEFAULT now(),
  last_login timestamptz DEFAULT now()
);

ALTER TABLE telbuilders_users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read their own data"
  ON telbuilders_users FOR SELECT
  TO authenticated
  USING (telegram_id::text = auth.jwt()->>'sub');

CREATE POLICY "Users can insert their own data"
  ON telbuilders_users FOR INSERT
  TO authenticated
  WITH CHECK (telegram_id::text = auth.jwt()->>'sub');

CREATE POLICY "Users can update their own data"
  ON telbuilders_users FOR UPDATE
  TO authenticated
  USING (telegram_id::text = auth.jwt()->>'sub')
  WITH CHECK (telegram_id::text = auth.jwt()->>'sub');

CREATE INDEX IF NOT EXISTS idx_telbuilders_users_telegram_id ON telbuilders_users(telegram_id);