import React from 'react';

const FooterContact = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Column */}
        <div className="bg-black text-white flex flex-col justify-center py-24 px-16 min-h-[360px]">
          <h2 className="font-section-heading text-accent-red text-[36px] font-semibold mb-8">
            Get in Touch
          </h2>
          <div className="font-footer text-base space-y-4">
            <p>Address: Bat Yam ISR</p>
            <p>
              Email: <a href="mailto:contacts@inqwise.com" className="hover:underline">contacts@inqwise.com</a>
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-white text-dark-gray flex flex-col justify-center py-24 px-16 min-h-[360px]">
          <h2 className="font-section-heading text-accent-red text-[36px] font-semibold mb-8">
            Contact channels
          </h2>
          <div className="font-body text-lg space-y-4">
            <a href="https://discord.gg/7RtfkfEPgk" target="_blank" rel="noopener noreferrer" className="block text-primary-blue hover:underline">
              Discord
            </a>
            <a href="https://www.linkedin.com/company/inqwise" target="_blank" rel="noopener noreferrer" className="block text-primary-blue hover:underline">
              LinkedIn
            </a>
            <a href="https://github.com/inqwise" target="_blank" rel="noopener noreferrer" className="block text-primary-blue hover:underline">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterContact;