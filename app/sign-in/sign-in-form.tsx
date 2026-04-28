'use client';

import { useState, useTransition } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { createSupabaseBrowserClient } from '@/lib/supabase/client';

export function SignInForm() {
  const t = useTranslations('auth');
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    startTransition(async () => {
      const supabase = createSupabaseBrowserClient();
      const { error: signInError } = await supabase.auth.signInWithOtp({
        email,
        options: { emailRedirectTo: `${window.location.origin}/auth/callback` },
      });
      if (signInError) {
        setError(signInError.message);
        return;
      }
      const params = new URLSearchParams({ sent: '1', email });
      router.push(`/sign-in?${params}`);
    });
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <label className="block">
        <span className="text-sm font-medium text-ink">{t('email')}</span>
        <input
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full rounded-card border border-cream-300 bg-cream-50 px-4 py-2.5 text-base text-ink placeholder:text-ink-subtle focus:border-sage-300 focus:outline-none"
          placeholder="navn@eksempel.dk"
        />
      </label>
      {error && <p className="text-sm text-rust-500">{error}</p>}
      <Button type="submit" disabled={isPending} className="w-full">
        {isPending ? '…' : t('magicLink')}
      </Button>
    </form>
  );
}
