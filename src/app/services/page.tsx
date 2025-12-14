import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { getWebPageSchema, getBreadcrumbSchema, getServiceSchema } from "@/lib/structured-data";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Comprehensive technology services including DevFinOps solutions, fintech development, digital surveys, compliance & security, custom software, DevOps consulting, and IoT solutions.',
  keywords: ['DevFinOps', 'fintech solutions', 'digital surveys', 'compliance', 'security', 'custom software', 'DevOps', 'CI/CD', 'IoT solutions'],
};

export default function ServicesPage() {
  const webPageSchema = getWebPageSchema(
    '/services',
    'Our Services',
    'Comprehensive technology services including DevFinOps solutions, fintech development, digital surveys, compliance & security, custom software, DevOps consulting, and IoT solutions.'
  );

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' }
  ]);

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": getServiceSchema(
          "DevFinOps Solutions",
          "Automation of development and financial processes with maximum resource optimization, clustered server connections, Zero Trust framework, and environment orchestration."
        )
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": getServiceSchema(
          "Fintech Solutions",
          "Consulting and development of financial strategies, development and implementation of highly efficient and scalable fintech products."
        )
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": getServiceSchema(
          "Digital Survey Solutions",
          "Development and implementation of digital survey systems for data collection and analysis with data protection compliance."
        )
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": getServiceSchema(
          "Custom Software Development",
          "Development of custom software solutions tailored to specific needs, integration with existing systems, support and maintenance."
        )
      }
    ]
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <main className="min-h-screen bg-white">
        <Navigation />
        
        {/* Header with decorative circuit image */}
        <section className="w-full py-16 px-4">
          <div className="flex flex-col items-center text-center max-w-6xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center justify-center gap-4 mb-8">
                <h1 className="text-6xl" style={{ fontFamily: 'var(--font-main-heading)', fontWeight: 700 }}>
                  our services
                </h1>
              </div>
              <p className="text-lg text-[#DC2626] font-semibold" style={{ fontFamily: 'var(--font-body)' }}>
                Our company can offer the following services:
              </p>
            </div>
          </div>
        </section>

        {/* DevFinOps Solutions */}
        <section className="w-full py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl text-[#2B3990] mb-6" style={{ fontFamily: 'var(--font-section-heading)', fontWeight: 600 }}>DevFinOps Solutions:</h2>
            <div className="space-y-4 leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-dark-gray)' }}>
              <p>Automation of development and financial processes with maximum resource optimization.</p>
              <p>Development and implementation of clustered server connections to ensure flexibility and infrastructure reliability.</p>
              <p>Implementation of a Zero Trust framework to enhance security and reduce cloud resource costs.</p>
              <p>Automation of environment orchestration for dynamic management of computing resources.</p>
            </div>
          </div>
        </section>

        {/* Fintech Solutions */}
        <section className="w-full py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl text-[#2B3990] mb-6" style={{ fontFamily: 'var(--font-section-heading)', fontWeight: 600 }}>Fintech Solutions:</h2>
            <div className="space-y-4 leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-dark-gray)' }}>
              <p>Consulting and development of financial strategies based on data analysis.</p>
              <p>Development and implementation of highly efficient and scalable fintech products.</p>
            </div>
          </div>
        </section>

        {/* Digital Survey Solutions */}
        <section className="w-full py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl text-[#2B3990] mb-6" style={{ fontFamily: 'var(--font-section-heading)', fontWeight: 600 }}>Digital Survey Solutions:</h2>
            <div className="space-y-4 leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-dark-gray)' }}>
              <p>Development and implementation of digital survey systems for data collection and analysis.</p>
              <p>Ensuring data protection and compliance at every stage of processing.</p>
            </div>
          </div>
        </section>

        {/* Compliance and Security Services */}
        <section className="w-full py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl text-[#2B3990] mb-6" style={{ fontFamily: 'var(--font-section-heading)', fontWeight: 600 }}>Compliance and Security Services:</h2>
            <div className="space-y-4 leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-dark-gray)' }}>
              <p>Consulting on the implementation and support of a Zero Trust framework to ensure data security.</p>
              <p>Continuous updates to processes and systems in line with the latest security requirements.</p>
            </div>
          </div>
        </section>

        {/* Additional Services Section */}
        <section className="w-full py-16 px-4">
          <div className="max-w-7xl mx-auto bg-black text-white py-16 px-12 rounded-lg">
            <h2 className="text-2xl text-center mb-12 text-[#DC2626]" style={{ fontFamily: 'var(--font-section-heading)', fontWeight: 600 }}>
              In addition to the services listed above, our company can offer the following:
            </h2>
            
            <div className="grid md:grid-cols-3 gap-12">
              {/* Custom Software Development */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-6 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M 20 50 A 30 30 0 0 1 80 50" fill="none" stroke="white" strokeWidth="4"/>
                    <circle cx="20" cy="50" r="5" fill="white"/>
                    <circle cx="80" cy="50" r="5" fill="white"/>
                  </svg>
                </div>
                <h3 className="text-xl mb-4 text-[#DC2626]" style={{ fontFamily: 'var(--font-service-title)', fontWeight: 600 }}>Custom Software Development:</h3>
                <div className="text-sm leading-relaxed space-y-3" style={{ fontFamily: 'var(--font-body)' }}>
                  <p>Development of custom software solutions tailored to the specific needs of the client.</p>
                  <p>Integration of new solutions with existing systems and infrastructure.</p>
                  <p>Support and maintenance of developed solutions throughout their lifecycle.</p>
                </div>
              </div>

              {/* DevOps and CI/CD Consulting */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-6 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="30" r="15" fill="none" stroke="white" strokeWidth="4"/>
                    <circle cx="50" cy="70" r="15" fill="none" stroke="white" strokeWidth="4"/>
                    <line x1="50" y1="45" x2="50" y2="55" stroke="white" strokeWidth="4"/>
                  </svg>
                </div>
                <h3 className="text-xl mb-4 text-[#DC2626]" style={{ fontFamily: 'var(--font-service-title)', fontWeight: 600 }}>DevOps and CI/CD Consulting:</h3>
                <div className="text-sm leading-relaxed space-y-3" style={{ fontFamily: 'var(--font-body)' }}>
                  <p>Implementation and optimization of DevOps practices to accelerate the development and deployment of applications.</p>
                  <p>Configuration of CI/CD pipelines to automate code testing and deployment processes.</p>
                  <p>Support and training of development teams in the use of DevOps tools and methodologies.</p>
                </div>
              </div>

              {/* IoT Solutions */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-6 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M 80 50 A 30 30 0 0 1 20 50" fill="none" stroke="white" strokeWidth="4"/>
                    <circle cx="80" cy="50" r="5" fill="white"/>
                    <circle cx="20" cy="50" r="5" fill="white"/>
                  </svg>
                </div>
                <h3 className="text-xl mb-4 text-[#DC2626]" style={{ fontFamily: 'var(--font-service-title)', fontWeight: 600 }}>IoT Solutions:</h3>
                <div className="text-sm leading-relaxed space-y-3" style={{ fontFamily: 'var(--font-body)' }}>
                  <p>Design and development of IoT systems for various industries, including manufacturing, agriculture, and smart cities.</p>
                  <p>Integration of IoT devices with cloud services and analytics platforms for real-time data collection and processing.</p>
                  <p>Ensuring security and privacy of data in IoT networks.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </main>
    </>
  );
}