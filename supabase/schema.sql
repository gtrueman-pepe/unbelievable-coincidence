create extension if not exists pgcrypto;
create table public.submissions (id uuid primary key default gen_random_uuid(),created_at timestamptz not null default now(),title varchar(80) not null,email varchar(254) not null,credit_type text not null check(credit_type in ('name','initials','anonymous')),byline varchar(60) not null,body varchar(8000) not null,status text not null default 'awaiting_verification' check(status in ('awaiting_verification','pending_review','approved','rejected')),verification_token text unique,verified_at timestamptz,reviewed_at timestamptz,ip_hash text);
create table public.stories (id uuid primary key default gen_random_uuid(),submission_id uuid unique references public.submissions(id),slug text unique not null,title varchar(80) not null,byline varchar(60) not null,body varchar(8000) not null,published_at timestamptz not null default now(),display boolean not null default true,rating_count integer not null default 0 check(rating_count >= 0),rating_total integer not null default 0 check(rating_total >= 0));
create table public.story_ratings (id uuid primary key default gen_random_uuid(),story_id uuid not null references public.stories(id) on delete cascade,rating smallint not null check(rating between 1 and 5),voter_hash text not null,created_at timestamptz not null default now(),unique(story_id,voter_hash));
alter table public.submissions enable row level security;alter table public.stories enable row level security;
alter table public.story_ratings enable row level security;
create policy "Displayed stories are public" on public.stories for select using(display=true);
create view public.published_stories with (security_invoker=true) as select id,slug,title,byline,body,published_at,rating_count,rating_total from public.stories where display=true;
grant select on public.published_stories to anon,authenticated;

create or replace function public.rate_story(p_story_id uuid,p_rating smallint,p_voter_hash text)
returns table(rating_count integer,rating_total integer)
language plpgsql security definer set search_path=public as $$
begin
  if p_rating < 1 or p_rating > 5 then raise exception 'invalid rating'; end if;
  if not exists(select 1 from public.stories where id=p_story_id and display=true) then raise exception 'story unavailable'; end if;
  insert into public.story_ratings(story_id,rating,voter_hash) values(p_story_id,p_rating,p_voter_hash);
  update public.stories set rating_count=stories.rating_count+1,rating_total=stories.rating_total+p_rating where id=p_story_id;
  return query select stories.rating_count,stories.rating_total from public.stories where id=p_story_id;
end $$;
revoke all on function public.rate_story(uuid,smallint,text) from public,anon,authenticated;
grant execute on function public.rate_story(uuid,smallint,text) to service_role;
