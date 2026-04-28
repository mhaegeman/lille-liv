'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export type IconName = 'compass' | 'book' | 'user';

export interface TabBarItem {
  href: string;
  label: string;
  icon: IconName;
}

const ICON_PROPS = {
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const;

export function TabBar({ items }: { items: TabBarItem[] }) {
  const pathname = usePathname() ?? '';

  return (
    <nav
      className="md:hidden fixed bottom-0 inset-x-0 z-30 border-t border-cream-200 bg-cream-50/95 backdrop-blur"
      aria-label="Primary"
    >
      <ul className="grid grid-cols-3">
        {items.map((it) => {
          const active = pathname === it.href || pathname.startsWith(it.href + '/');
          return (
            <li key={it.href}>
              <Link
                href={it.href}
                className={cn(
                  'flex flex-col items-center gap-1 py-2.5 text-xs font-medium',
                  active ? 'text-sage-500' : 'text-ink-muted',
                )}
              >
                <Icon name={it.icon} />
                <span>{it.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function Icon({ name }: { name: IconName }) {
  switch (name) {
    case 'compass':
      return (
        <svg {...ICON_PROPS} aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path d="m15.5 8.5-2 5-5 2 2-5z" />
        </svg>
      );
    case 'book':
      return (
        <svg {...ICON_PROPS} aria-hidden>
          <path d="M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2z" />
          <path d="M4 19V5" />
        </svg>
      );
    case 'user':
      return (
        <svg {...ICON_PROPS} aria-hidden>
          <circle cx="12" cy="8" r="3.5" />
          <path d="M5 20a7 7 0 0 1 14 0" />
        </svg>
      );
  }
}
