create extension if not exists pgcrypto;
create table public.submissions (id uuid primary key default gen_random_uuid(),created_at timestamptz not null default now(),title varchar(80) not null,email varchar(254) not null,credit_type text not null check(credit_type in ('name','initials','anonymous')),byline varchar(60) not null,body varchar(8000) not null,status text not null default 'awaiting_verification' check(status in ('awaiting_verification','pending_review','approved','rejected')),verification_token text unique,verified_at timestamptz,reviewed_at timestamptz,ip_hash text);
create table public.stories (id uuid primary key default gen_random_uuid(),submission_id uuid unique references public.submissions(id),slug text unique not null,title varchar(80) not null,byline varchar(60) not null,body varchar(8000) not null,published_at timestamptz not null default now());
alter table public.submissions enable row level security;alter table public.stories enable row level security;
create policy "Published stories are public" on public.stories for select using(true);
create view public.published_stories with (security_invoker=true) as select id,slug,title,byline,body,published_at from public.stories;
grant select on public.published_stories to anon,authenticated;
