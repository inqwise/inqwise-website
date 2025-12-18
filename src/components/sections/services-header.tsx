const ServicesHeader = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container">
        <div className="flex flex-col items-center text-center gap-8">
          <img
            src="/services-header.png"
            alt="Our Services title with decorative elements including a circuit board and heart"
            width={500}
            height={205}
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
