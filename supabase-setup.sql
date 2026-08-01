-- ============================================================
-- Shaolin One · Supabase setup
-- À exécuter dans le SQL Editor de ton projet Supabase
-- ============================================================

-- Table 1 : état de chaque semaine (une ligne par utilisateur × semaine)
CREATE TABLE IF NOT EXISTS week_state (
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  week_id TEXT NOT NULL,
  data JSONB NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (user_id, week_id)
);

CREATE INDEX IF NOT EXISTS idx_week_state_user ON week_state(user_id, week_id);

-- Table 2 : historique fin des séances cardio (append-only)
CREATE TABLE IF NOT EXISTS cardio_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  week_id TEXT NOT NULL,
  type TEXT NOT NULL,
  duration NUMERIC,
  km NUMERIC,
  deniv NUMERIC,
  phase TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_cardio_history_user ON cardio_history(user_id, date);

-- ============================================================
-- Row Level Security : chaque utilisateur ne voit QUE ses données
-- ============================================================

ALTER TABLE week_state ENABLE ROW LEVEL SECURITY;
ALTER TABLE cardio_history ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "own_week_state" ON week_state;
CREATE POLICY "own_week_state" ON week_state
  FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "own_cardio_history" ON cardio_history;
CREATE POLICY "own_cardio_history" ON cardio_history
  FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- ============================================================
-- Optionnel : trigger pour mettre à jour updated_at automatiquement
-- ============================================================
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_week_state_updated_at ON week_state;
CREATE TRIGGER trg_week_state_updated_at
BEFORE UPDATE ON week_state
FOR EACH ROW EXECUTE FUNCTION update_updated_at();
