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

export default function HomePage() {
  return (
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
  );
}