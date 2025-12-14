import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { getWebPageSchema, getBreadcrumbSchema } from "@/lib/structured-data";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Inqwise. Located in Bat Yam, Israel. Contact us via email at contacts@inqwise.com or reach out through Discord, LinkedIn, or GitHub.',
  keywords: ['contact', 'Inqwise contact', 'get in touch', 'Bat Yam Israel', 'technology consulting contact'],
};

export default function ContactPage() {
  const webPageSchema = getWebPageSchema(
    '/contact',
    'Contact Us',
    'Get in touch with Inqwise. Located in Bat Yam, Israel. Contact us via email at contacts@inqwise.com or reach out through Discord, LinkedIn, or GitHub.'
  );

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' }
  ]);

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "@id": "https://inqwise.com/#organization",
      "name": "Inqwise",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bat Yam",
        "addressCountry": "Israel"
      },
      "email": "contacts@inqwise.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "email": "contacts@inqwise.com",
        "availableLanguage": ["English", "Hebrew"]
      }
    }
  };

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <main className="min-h-screen bg-white">
        <Navigation />
        
        <section className="container py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Side - Get in Touch */}
            <div className="bg-black text-white p-12 rounded-lg flex flex-col justify-between min-h-[500px]">
              <div>
                <h1 className="text-4xl text-[#DC2626] mb-16" style={{ fontFamily: 'var(--font-main-heading)', fontWeight: 700 }}>Get in Touch</h1>
                
                <div className="space-y-8 mt-auto">
                  <div>
                    <p className="text-gray-300 text-sm mb-1" style={{ fontFamily: 'var(--font-body)' }}>Address:</p>
                    <p className="text-white font-medium" style={{ fontFamily: 'var(--font-body)' }}>Bat Yam ISR</p>
                  </div>
                  
                  <div>
                    <p className="text-gray-300 text-sm mb-1" style={{ fontFamily: 'var(--font-body)' }}>Email:</p>
                    <p className="text-white font-medium" style={{ fontFamily: 'var(--font-body)' }}>contacts@inqwise.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Channels */}
            <div className="flex flex-col justify-start pt-12">
              <h2 className="text-4xl text-[#DC2626] mb-12" style={{ fontFamily: 'var(--font-section-heading)', fontWeight: 600 }}>Contact channels</h2>
              
              <div className="space-y-6" style={{ fontFamily: 'var(--font-body)' }}>
                <a 
                  href="https://discord.gg/inqwise" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-2xl text-[#2B3990] hover:text-[#DC2626] transition-colors underline"
                >
                  Discord
                </a>
                <a 
                  href="https://linkedin.com/company/inqwise" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-2xl text-[#2B3990] hover:text-[#DC2626] transition-colors underline"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/inqwise" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-2xl text-[#2B3990] hover:text-[#DC2626] transition-colors underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Blue gradient background at bottom */}
        <div className="h-64 bg-gradient-to-b from-[#2B3990] to-[#1a2456]"></div>
        
        <Footer />
      </main>
    </>
  );
}