import { type EmailOtpType } from '@supabase/supabase-js';
import { createServerClient } from '@supabase/ssr';
import { type NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const tokenHash = request.nextUrl.searchParams.get('token_hash');
  const type = request.nextUrl.searchParams.get(
    'type'
  ) as EmailOtpType | null;

  const successResponse = NextResponse.redirect(
    new URL('/admin', request.url)
  );

  if (tokenHash && type) {
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll();
          },

          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) => {
              successResponse.cookies.set(name, value, options);
            });
          },
        },
      }
    );

    const { error } = await supabase.auth.verifyOtp({
      token_hash: tokenHash,
      type,
    });

    if (!error) {
      return successResponse;
    }

    console.error('Email verification failed:', error.message);
  }

  return NextResponse.redirect(
    new URL('/login?error=verification_failed', request.url)
  );
}
