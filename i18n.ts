import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export const locales = ['da', 'en'] as const;
export const defaultLocale: Locale = 'da';
export type Locale = (typeof locales)[number];

const isLocale = (v: unknown): v is Locale =>
  typeof v === 'string' && (locales as readonly string[]).includes(v);

export default getRequestConfig(async () => {
  const cookieLocale = cookies().get('NEXT_LOCALE')?.value;
  const locale = isLocale(cookieLocale) ? cookieLocale : defaultLocale;

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
    timeZone: 'Europe/Copenhagen',
    now: new Date(),
  };
});
