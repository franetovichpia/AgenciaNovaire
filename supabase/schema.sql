create table if not exists public.appointments (
  id uuid primary key default gen_random_uuid(),
  client_name text not null,
  client_email text not null,
  client_phone text not null,
  meeting_type text not null,
  message text,
  appointment_date date not null,
  appointment_time time not null,
  duration_minutes integer not null default 30 check (duration_minutes = 30),
  status text not null default 'confirmed' check (status in ('confirmed', 'completed', 'cancelled')),
  created_at timestamptz not null default now()
);

create unique index if not exists appointments_unique_active_slot
on public.appointments (appointment_date, appointment_time)
where status <> 'cancelled';

alter table public.appointments enable row level security;

-- No se crean políticas públicas: las reservas se administran únicamente
-- desde las rutas seguras del servidor con SUPABASE_SERVICE_ROLE_KEY.

