import type { Metadata } from "next";
import "./globals.css";
import { getOrganizationSchema, getWebsiteSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  metadataBase: new URL('https://inqwise.com'),
  title: {
    default: "Inqwise - Technology Solutions",
    template: "%s | Inqwise"
  },
  description: "Professional technology solutions with creativity and innovation. We deliver cutting-edge software development, cloud infrastructure, and digital transformation services.",
  keywords: ["technology solutions", "software development", "cloud infrastructure", "digital transformation", "IT consulting", "inqwise"],
  authors: [{ name: "Inqwise" }],
  creator: "Inqwise",
  publisher: "Inqwise",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://inqwise.com',
    siteName: 'Inqwise',
    title: 'Inqwise - Technology Solutions',
    description: 'Professional technology solutions with creativity and innovation',
    images: [
      {
        url: '/logo.svg',
        width: 180,
        height: 180,
        alt: 'Inqwise Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inqwise - Technology Solutions',
    description: 'Professional technology solutions with creativity and innovation',
    images: ['/logo.svg'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.ico',
    apple: '/logo.svg',
  },
  verification: {
    google: '',
    yandex: '',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = getOrganizationSchema();
  const websiteSchema = getWebsiteSchema();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
