import Link from 'next/link';
import { type ReactNode } from 'react';
import { getTranslations } from 'next-intl/server';
import { TabBar } from './tab-bar';

export async function AppShell({ children }: { children: ReactNode }) {
  const [t, tApp] = await Promise.all([
    getTranslations('nav'),
    getTranslations('app'),
  ]);

  const items = [
    { href: '/discover', label: t('discover'), icon: 'compass' as const },
    { href: '/journal', label: t('journal'), icon: 'book' as const },
    { href: '/profile', label: t('profile'), icon: 'user' as const },
  ];

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <aside className="hidden md:flex w-60 shrink-0 flex-col border-r border-cream-200 bg-cream-50 px-5 py-7">
        <Link href="/discover" className="mb-10 flex items-baseline gap-2">
          <span className="font-display text-2xl tracking-tight text-sage-500">
            {tApp('name')}
          </span>
          <span className="text-xs text-ink-subtle">CPH</span>
        </Link>
        <nav className="flex flex-1 flex-col gap-1">
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className="rounded-card px-3 py-2.5 text-sm font-medium text-ink hover:bg-cream-200"
            >
              {it.label}
            </Link>
          ))}
        </nav>
        <p className="mt-6 text-xs text-ink-subtle">{tApp('tagline')}</p>
      </aside>

      <main className="flex-1 pb-20 md:pb-0">{children}</main>

      <TabBar items={items} />
    </div>
  );
}
