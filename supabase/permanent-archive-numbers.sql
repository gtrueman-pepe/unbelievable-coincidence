-- Assign each accepted story a permanent archive number.
-- Existing stories are numbered by original submission time; future accepted
-- stories receive the next number and are never renumbered by sorting.

create sequence if not exists public.story_archive_number_seq start 1;

alter table public.stories
  add column if not exists archive_number bigint;

with numbered as (
  select
    st.id,
    row_number() over (
      order by coalesce(sub.created_at,st.published_at),st.published_at,st.id
    ) as archive_number
  from public.stories st
  left join public.submissions sub on sub.id=st.submission_id
)
update public.stories st
set archive_number=numbered.archive_number
from numbered
where st.id=numbered.id
  and st.archive_number is null;

select setval(
  'public.story_archive_number_seq',
  coalesce((select max(archive_number) from public.stories),0)+1,
  false
);

alter table public.stories
  alter column archive_number set default nextval('public.story_archive_number_seq'),
  alter column archive_number set not null;

create unique index if not exists stories_archive_number_key
  on public.stories(archive_number);

alter sequence public.story_archive_number_seq
  owned by public.stories.archive_number;

grant usage,select on sequence public.story_archive_number_seq to service_role;

drop view if exists public.published_stories;
create view public.published_stories with (security_invoker=true) as
  select id,slug,title,byline,body,published_at,archive_number,rating_count,rating_total
  from public.stories
  where display=true;
grant select on public.published_stories to anon,authenticated;
