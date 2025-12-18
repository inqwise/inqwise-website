const ServicesHeader = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="flex flex-col items-center text-center gap-8">
            <img
              src="/services-header.png"
              alt="Our Services title with decorative elements including a circuit board and heart"
              width={1400}
              height={437}
              className="w-full h-auto"
              style={{
                width: '100%',
                maxWidth: '1400px',
                height: 'auto',
              }}
              loading="eager"
              decoding="async"
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
