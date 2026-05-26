create table song_submissions (
  id uuid primary key default gen_random_uuid(),
  song text not null,
  submitted_at timestamptz not null default now()
);
