import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { getWebPageSchema, getBreadcrumbSchema, getTechArticleSchema } from "@/lib/structured-data";
import type { Metadata } from 'next';
import Image from "next/image";

export const metadata: Metadata = {
  title: 'About Us - Our Expertise',
  description: 'Learn about Inqwise expertise in DevFinOps, fintech solutions, video advertising, digital surveys, and compliance. We combine professionalism with creativity to deliver innovative technology solutions.',
  keywords: ['DevFinOps', 'fintech', 'cloud infrastructure', 'zero trust', 'digital surveys', 'compliance', 'security', 'video ads'],
};

export default function AboutPage() {
  const webPageSchema = getWebPageSchema(
    '/about',
    'About Us - Our Expertise',
    'Learn about Inqwise expertise in DevFinOps, fintech solutions, video advertising, digital surveys, and compliance. We combine professionalism with creativity to deliver innovative technology solutions.'
  );

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' }
  ]);

  const techArticleSchema = getTechArticleSchema(
    'Inqwise Expertise - DevFinOps and Technology Solutions',
    'Comprehensive overview of Inqwise technology expertise including DevFinOps methodology, fintech solutions, video advertising systems, digital surveys, and compliance standards.',
    ['DevFinOps', 'Cloud Computing', 'Zero Trust Architecture', 'Fintech', 'Digital Surveys', 'Security Compliance']
  );

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }}
      />
      <main className="min-h-screen bg-white">
        <Navigation />
        
        {/* Header: "our expertise" */}
        <section className="w-full py-16 px-4">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="mb-16">
              <div className="relative w-full max-w-[1400px] mx-auto mb-8">
                <Image
                  src="/star.png"
                  alt="Our Expertise"
                  width={1400}
                  height={840}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* DevFinOps Section */}
        <section className="w-full py-12 px-4">
          <div className="max-w-6xl mx-auto text-left">
            <h2 className="text-2xl mb-6 text-[#2B3990]" style={{ fontFamily: 'var(--font-section-heading)', fontWeight: 600 }}>DevFinOps</h2>
            <div className="space-y-4 leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-dark-gray)' }}>
              <p>
                The DevFinOps methodology is built upon the following key principles: maximum automation, small 
                development teams, and non-trivial architectural solutions. DevFinOps involves continuous interaction with the 
                virtual environment at all stages from design and development to testing and optimization. We take into 
                account optimization for specific systems and the expected load, all within the framework of a defined budget.
              </p>
              
              <div className="mt-6">
                <h3 className="font-bold mb-4">Key Benefits:</h3>
                <ul className="space-y-3 list-none">
                  <li className="flex gap-2">
                    <span className="font-bold flex-shrink-0">•</span>
                    <div>
                      <span className="font-bold">Clustered Server Connections:</span> Utilizing short-term free resources of cloud services through clustered server 
                      connections ensuring reliability, flexibility and computing resources at a low cost.
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold flex-shrink-0">•</span>
                    <div>
                      <span className="font-bold">Zero Trust Structure:</span> This structure allows for the most efficient distribution of system deployment across 
                      multiple cloud service providers simultaneously, helping to achieve the best prices from cloud providers and 
                      increasing system resilience.
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold flex-shrink-0">•</span>
                    <div>
                      <span className="font-bold">Environment Orchestration Automation:</span> The automated orchestration system dynamically scales, reduces, 
                      and relocates computing resources depending on the current load and pricing policy, ensuring optimal 
                      resource usage.
                    </div>
                  </li>
                </ul>
              </div>

              <p className="mt-6">
                The DevFinOps methodology is aimed at creating highly efficient solutions that not only meet modern 
                requirements but also exceed our clients' expectations. With DevFinOps, your projects will be ready for any 
                challenges and changes while remaining cost-effective and reliable.
              </p>

              <p className="italic text-sm mt-4">
                The product can support over a million users while handling unlimited volumes of data.
              </p>
            </div>
          </div>
        </section>

        {/* Fintech Section */}
        <section className="w-full py-12 px-4">
          <div className="max-w-6xl mx-auto text-left">
            <h2 className="text-2xl mb-6 text-[#2B3990]" style={{ fontFamily: 'var(--font-section-heading)', fontWeight: 600 }}>Fintech</h2>
            <div className="leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-dark-gray)' }}>
              <p>
                From 2015 to 2023, a product was developed: a multilevel computing system that integrates the roles of 
                employer, accountant, and employee. The project operates online and has no analogs on the market. Data was 
                collected and analyzed, forming the basis for the strategy and timeline for developing a final product that fully 
                meets client expectations. Throughout the product development period, extensive testing was conducted 
                to ensure smooth and efficient future operation. The product can support over a million users while processing 
                unlimited volumes of data.
              </p>
            </div>
          </div>
        </section>

        {/* Video Ads Section */}
        <section className="w-full py-12 px-4">
          <div className="max-w-6xl mx-auto text-left">
            <h2 className="text-2xl mb-6 text-[#2B3990]" style={{ fontFamily: 'var(--font-section-heading)', fontWeight: 600 }}>Video Ads</h2>
            <div className="leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-dark-gray)' }}>
              <h3 className="font-bold mb-2">Experience in Video Advertising:</h3>
              <p>
                The project collects and analyzes data on viewed advertisements, with the capability to process over a million 
                events per minute. Clients can view processed statistical data in near real-time.
              </p>
            </div>
          </div>
        </section>

        {/* Digital Surveys Section */}
        <section className="w-full py-12 px-4">
          <div className="max-w-6xl mx-auto text-left">
            <h2 className="text-2xl mb-6 text-[#2B3990]" style={{ fontFamily: 'var(--font-section-heading)', fontWeight: 600 }}>Digital Surveys</h2>
            <div className="leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-dark-gray)' }}>
              <p>
                As part of our digital survey system project, we developed a solution capable of processing large volumes of 
                data. The platform efficiently collects and analyzes information from various types of surveys while supporting 
                complex data structures. The conditional rules provide flexible navigation within forms 
                based on user responses. The highly customizable system configuration allows surveys to be tailored to the 
                specific needs of clients, ensuring a high level of data protection at every stage of processing.
              </p>
            </div>
          </div>
        </section>

        {/* Compliance and Security Section */}
        <section className="w-full py-12 px-4">
          <div className="max-w-6xl mx-auto text-left">
            <h2 className="text-2xl mb-6 text-[#2B3990]" style={{ fontFamily: 'var(--font-section-heading)', fontWeight: 600 }}>Compliance and Security</h2>
            <div className="leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-dark-gray)' }}>
              <p>
                At Inqwise, we strictly adhere to the Zero Trust concept, allowing us to ensure the highest level of security for all 
                our clients. We follow leading industry standards, guaranteeing that your sensitive data is protected at all stages 
                of processing. Our team continuously updates knowledge and processes in line with the latest requirements and 
                regulations to keep your data safe and compliant with all necessary standards.
              </p>
            </div>
          </div>
        </section>

        {/* Professionalism Section with Icon */}
        <div className="flex flex-col items-center py-8 px-4">
          <div className="relative w-full max-w-[700px] mx-auto">
            <Image
              src="/professionalism.png"
              alt="Professionalism"
              width={700}
              height={350}
              className="w-full h-auto"
            />
          </div>
        </div>

        <section className="w-full bg-black text-white py-16">
          <div className="max-w-4xl mx-auto text-center px-4">
            <div className="text-left">
              <p className="leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                We possess a high level of expertise and extensive experience in the field of high technology, including architecture, 
                design, construction, deployment, support, and system upgrades. We offer a full range of services, ensuring 
                accountability, reliability, and stability at every stage of work. In our activities, we combine professionalism with 
                ambition, striving to tackle complex challenges and constantly achieve more. We make a significant and tangible 
                contribution to the development of technology and the improvement of society's quality of life.
              </p>
            </div>
          </div>
        </section>

        {/* Creativity Section with Icon */}
        <section className="w-full bg-[#2B3990] text-white py-16">
          <div className="max-w-4xl mx-auto text-center px-4">
            <div className="relative w-full max-w-[700px] mx-auto mb-8">
              <Image
                src="/creativity-red2.png"
                alt="Creativity"
                width={700}
                height={420}
                className="w-full h-auto"
              />
            </div>
            <h2 className="text-5xl mb-6" style={{ fontFamily: 'var(--font-main-heading)', fontWeight: 700 }}>crea<span className="text-[#DC2626] italic">t</span>ivity</h2>
            <div className="text-left">
              <p className="leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                An unconventional approach to solving the most challenging tasks. Development and search for alternative 
                and non-obvious solutions to implement the most 'impossible' projects. Creation of innovative, unique, and high-tech 
                projects that meet all the demands of our partners.
              </p>
            </div>
          </div>
        </section>
        
        <Footer />
      </main>
    </>
  );
}