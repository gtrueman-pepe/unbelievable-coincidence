alter table public.stories add column if not exists display boolean not null default true;
alter table public.stories add column if not exists rating_count integer not null default 0 check(rating_count >= 0);
alter table public.stories add column if not exists rating_total integer not null default 0 check(rating_total >= 0);

create table if not exists public.story_ratings (
  id uuid primary key default gen_random_uuid(),
  story_id uuid not null references public.stories(id) on delete cascade,
  rating smallint not null check(rating between 1 and 5),
  voter_hash text not null,
  created_at timestamptz not null default now(),
  unique(story_id,voter_hash)
);
alter table public.story_ratings enable row level security;

drop view if exists public.published_stories;
drop policy if exists "Published stories are public" on public.stories;
drop policy if exists "Displayed stories are public" on public.stories;
create policy "Displayed stories are public" on public.stories for select using(display=true);
create view public.published_stories with (security_invoker=true) as
  select id,slug,title,byline,body,published_at,rating_count,rating_total
  from public.stories where display=true;
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
