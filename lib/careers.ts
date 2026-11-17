import type { Metadata } from 'next';
import routes from './page-routes.json';
import { en } from '../content/careers/en';
import { he } from '../content/careers/he';

export const careersRoutes = {
  en: routes.careers.en,
  he: routes.careers.he,
} as const;

export type CareersLocale = keyof typeof careersRoutes;

export const siteOrigin = 'https://inqwise.com';
export const careerEmail = 'contacts@inqwise.com';
export const careerInquiry = `mailto:${careerEmail}?subject=Career%20inquiry`;
export const careersContent = { en, he };

export function careersMetadata(locale: CareersLocale): Metadata {
  const content = careersContent[locale];
  const route = careersRoutes[locale];
  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical: `${siteOrigin}${route.path}`,
      languages: {
        'en-US': `${siteOrigin}${careersRoutes.en.path}`,
        he: `${siteOrigin}${careersRoutes.he.path}`,
        'x-default': `${siteOrigin}${careersRoutes.en.path}`,
      },
    },
    openGraph: {
      title: content.name,
      description: content.description,
      url: `${siteOrigin}${route.path}`,
      type: 'website',
      locale: route.openGraphLocale,
      alternateLocale: [careersRoutes[locale === 'en' ? 'he' : 'en'].openGraphLocale],
    },
  };
}
