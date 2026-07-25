'use client';

import { useState } from 'react';
import { createBrowserClient } from '@supabase/ssr';

export default function Login() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  async function login(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setErrorMessage('');

    const email = new FormData(event.currentTarget).get('email') as string;

    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setErrorMessage(error.message);
      setSending(false);
      return;
    }

    setSent(true);
    setSending(false);
  }

  return (
    <main className="login">
      <div className="eyebrow">Owner access</div>
      <h1>Editorial desk</h1>

      {sent ? (
        <p>
          Check your email for the secure sign-in link. Open it in this same
          browser.
        </p>
      ) : (
        <form onSubmit={login}>
          <label>
            Email
            <input type="email" name="email" required />
          </label>

          {errorMessage && <p role="alert">{errorMessage}</p>}

          <button disabled={sending}>
            {sending ? 'Sending…' : 'Send sign-in link'}
          </button>
        </form>
      )}
    </main>
  );
}
