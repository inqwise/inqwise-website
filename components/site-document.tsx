import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../app/globals.css';
const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Inqwise — Open software, shared knowledge',
  description: 'Explore Inqwise’s growing collection of open-source projects, libraries, and utilities. Get help using them and contribute to what comes next.',
  icons: { icon: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/inqwise-logo.png` },
};
export default function SiteDocument({ children, language = 'en' }: Readonly<{ children: React.ReactNode; language?: 'en' | 'he' }>) {
  return <html lang={language} dir={language === 'he' ? 'rtl' : 'ltr'}><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
