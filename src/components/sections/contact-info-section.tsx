import { MapPin, Mail, Link as LinkIcon } from 'lucide-react';
import React from 'react';

const ContactInfoSection = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-10 text-center flex flex-col items-center bg-gray-50 shadow-lg hover:shadow-xl transition-shadow">
            <MapPin className="w-8 h-8 text-accent-red mb-6" aria-hidden="true" />
            <h3 className="font-service-title text-xl font-semibold text-accent-red mb-4">
              Address
            </h3>
            <p className="font-body text-base text-dark-gray">
              Bat Yam, ISR
            </p>
          </div>
          
          <div className="p-10 text-center flex flex-col items-center bg-gray-50 shadow-lg hover:shadow-xl transition-shadow">
            <LinkIcon className="w-8 h-8 text-accent-red mb-6" aria-hidden="true" />
            <h3 className="font-service-title text-xl font-semibold text-accent-red mb-4">
              Contact channels
            </h3>
            <div className="flex flex-col space-y-2 font-body text-base">
              <a href="https://discord.gg/7RtfkfEPgk" target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:underline">
                Discord
              </a>
              <a href="https://www.linkedin.com/company/inqwise" target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:underline">
                LinkedIn
              </a>
              <a href="https://github.com/inqwise" target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:underline">
                GitHub
              </a>
            </div>
          </div>

          <div className="p-10 text-center flex flex-col items-center bg-gray-50 shadow-lg hover:shadow-xl transition-shadow">
            <Mail className="w-8 h-8 text-accent-red mb-6" aria-hidden="true" />
            <h3 className="font-service-title text-xl font-semibold text-accent-red mb-4">
              Email
            </h3>
            <a href="mailto:contacts@inqwise.com" className="font-body text-base text-primary-blue hover:underline">
              contacts@inqwise.com
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;