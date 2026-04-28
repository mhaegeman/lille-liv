import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { differenceInMonths } from 'date-fns';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function ageInMonths(dateOfBirth: Date | string, asOf: Date = new Date()) {
  return Math.max(0, differenceInMonths(asOf, new Date(dateOfBirth)));
}

export function formatAge(months: number, locale = 'da-DK') {
  const isDanish = locale.startsWith('da');
  if (months < 12) return isDanish ? `${months} mdr.` : `${months} mo.`;

  const years = Math.floor(months / 12);
  const remaining = months % 12;
  const yearLabel = isDanish ? 'år' : years === 1 ? 'yr' : 'yrs';
  if (remaining === 0) return `${years} ${yearLabel}`;
  return isDanish
    ? `${years} ${yearLabel} ${remaining} mdr.`
    : `${years}y ${remaining}m`;
}

export function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/ø/g, 'o')
    .replace(/æ/g, 'ae')
    .replace(/å/g, 'a')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export type OpeningHours = Partial<
  Record<'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun', [string, string] | null>
>;

const ISO_DAY_KEYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'] as const;

const toMinutes = (s: string) => {
  const [h, m] = s.split(':').map(Number);
  return h * 60 + m;
};

export function isOpenNow(openingHours: OpeningHours | null | undefined, now: Date = new Date()): boolean | null {
  if (!openingHours) return null;
  const today = openingHours[ISO_DAY_KEYS[now.getDay()]];
  if (!today) return false;
  const cur = now.getHours() * 60 + now.getMinutes();
  return cur >= toMinutes(today[0]) && cur < toMinutes(today[1]);
}
