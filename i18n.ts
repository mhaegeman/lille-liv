import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export const locales = ['da', 'en'] as const;
export const defaultLocale = 'da';
export type Locale = (typeof locales)[number];

export default getRequestConfig(async () => {
  const cookieLocale = cookies().get('NEXT_LOCALE')?.value;
  const locale: Locale =
    cookieLocale && (locales as readonly string[]).includes(cookieLocale)
      ? (cookieLocale as Locale)
      : defaultLocale;

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
    timeZone: 'Europe/Copenhagen',
    now: new Date(),
  };
});
