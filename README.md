# Unbelievable Coincidence

A mobile-first, moderated collection of true coincidence stories, built for Next.js, Vercel, Supabase, Cloudflare Turnstile, and Resend.

## Launch setup

1. Create a Supabase project and run `supabase/schema.sql` in its SQL editor.
2. In Supabase Authentication, enable email magic links and add `https://unbelievablecoincidence.com/auth/callback` as a redirect URL.
3. Create a Cloudflare Turnstile widget for the production domain.
4. Verify the sending domain in Resend.
5. Import this repository into Vercel and add every variable from `.env.example`.
6. Add `unbelievablecoincidence.com` in Vercel Domains and point the registrar DNS records as Vercel instructs.

Only `OWNER_EMAIL` can enter `/admin`. Visitors must pass Turnstile and verify their email before a submission reaches moderation. Published stories are publicly readable; emails and pending submissions are not.

## Local development

Copy `.env.example` to `.env.local`, fill in credentials, then run `npm install` and `npm run dev`.

## Editorial flow

Submission → bot check → private email verification → owner notification → `/admin` review → publication.
