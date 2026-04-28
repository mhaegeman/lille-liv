import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { SignInForm } from './sign-in-form';

export default async function SignInPage({
  searchParams,
}: {
  searchParams: { sent?: string; email?: string };
}) {
  const [t, tApp] = await Promise.all([
    getTranslations('auth'),
    getTranslations('app'),
  ]);
  const sent = searchParams.sent === '1';

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream-100 px-5">
      <div className="w-full max-w-md">
        <Link href="/discover" className="mb-8 flex items-center justify-center">
          <span className="font-display text-3xl tracking-tight text-sage-500">
            {tApp('name')}
          </span>
        </Link>

        <div className="rounded-card bg-cream-50 border border-cream-200 p-7 shadow-soft">
          {sent ? (
            <>
              <h1 className="font-display text-2xl text-ink mb-2">
                {t('checkEmail')}
              </h1>
              <p className="text-ink-muted text-sm leading-relaxed">
                {t('checkEmailDescription', { email: searchParams.email ?? '—' })}
              </p>
            </>
          ) : (
            <>
              <h1 className="font-display text-2xl text-ink mb-1">
                {t('signInTitle')}
              </h1>
              <p className="text-ink-muted text-sm mb-6">{t('signInSubtitle')}</p>
              <SignInForm />
              <p className="mt-5 text-xs text-ink-subtle">{t('termsHint')}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
