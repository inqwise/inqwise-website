import Image from 'next/image';

const ServicesHeader = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container">
        <div className="flex flex-col items-center text-center gap-8">
          <Image
            src="https://static.wixstatic.com/media/0e9709_1e816edf6bea4dbc8d026ab6276659e6~mv2.png/v1/fill/w_319,h_131,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/0e9709_1e816edf6bea4dbc8d026ab6276659e6~mv2.png"
            alt="Our Services title with decorative elements including a circuit board and heart"
            width={319}
            height={131}
            priority
          />
          <p className="text-lg font-body text-accent-red">
            Our company can offer the following services:
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesHeader;