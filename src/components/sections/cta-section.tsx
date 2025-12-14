import React from 'react';

const CtaSection = () => {
  return (
    <section className="bg-secondary py-20">
      <div className="container mx-auto px-10">
        <div className="flex flex-col items-center">
          <h2 className="text-center font-heading text-4xl font-semibold text-[#2B3990] mb-12 leading-[1.3]">
            Ready to Elevate Your Business?
          </h2>
          <div className="flex w-full max-w-3xl flex-row items-start gap-6">
            <div className="mt-2 h-1 w-[60px] shrink-0 bg-[#2B3990]"></div>
            <div className="flex-1 text-left">
              <p className="font-body text-base leading-[1.6] text-[#374151]">
                Take the first step toward unlocking your business’s potential.
                Discover our cutting-edge developments in high technology and
                comprehensive solutions tailored to your goals. We look forward to a
                long-term and successful collaboration.
              </p>
              <div className="mt-8 h-4 w-4 bg-[#DC2626]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;