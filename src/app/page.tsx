import React from 'react';
import Navigation from '@/components/sections/navigation';
import HeroSection from '@/components/sections/hero-section';
import KeyboardSection from '@/components/sections/keyboard-section';
import FeaturesSection from '@/components/sections/features-section';
import ContactInfoSection from '@/components/sections/contact-info-section';
import ServicesHeader from '@/components/sections/services-header';
import ServicesList from '@/components/sections/services-list';
import AdditionalServices from '@/components/sections/additional-services';
import CtaSection from '@/components/sections/cta-section';
import FooterContact from '@/components/sections/footer-contact';
import Footer from '@/components/sections/footer';
import { getWebPageSchema, getBreadcrumbSchema } from '@/lib/structured-data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inqwise - Technology Solutions',
  description: 'Professional technology solutions with creativity and innovation. We deliver cutting-edge software development, cloud infrastructure, and digital transformation services.',
  keywords: ['technology solutions', 'software development', 'cloud infrastructure', 'DevFinOps', 'fintech solutions', 'digital transformation'],
};

export default function HomePage() {
  const webPageSchema = getWebPageSchema(
    '/',
    'Inqwise - Technology Solutions',
    'Professional technology solutions with creativity and innovation. We deliver cutting-edge software development, cloud infrastructure, and digital transformation services.'
  );

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="min-h-screen">
        <Navigation />
        <HeroSection />
        <KeyboardSection />
        <FeaturesSection />
        <ContactInfoSection />
        <ServicesHeader />
        <ServicesList />
        <AdditionalServices />
        <CtaSection />
        <FooterContact />
        <Footer />
      </main>
    </>
  );
}