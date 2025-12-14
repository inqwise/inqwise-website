import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-[var(--color-primary-blue)] text-white w-full">
      <div className="max-w-[1200px] mx-auto px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="text-center md:text-left">
            <h1 className="font-[var(--font-main-heading)] text-5xl font-bold leading-tight">
              <span className="text-[var(--color-accent-red)]">Welcome</span>
              <br />
              to INQWISE
            </h1>
          </div>
          <div className="font-[var(--font-body)] text-center md:text-left">
            <p className="text-base leading-[1.6] mb-6">
              We are an innovative company at the intersection of technology and business, offering cutting-edge solutions in DevFinOps, Fintech, video advertising, and digital surveys. Our goal is to create game-changing products while ensuring the highest level of security and compliance, following the principles of Zero Trust.
            </p>
            <p className="text-base leading-[1.6]">
              Discover the future of technology with us!
            </p>
            <div className="w-[60px] h-1 bg-[var(--color-accent-red)] mt-4 mx-auto md:mx-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;