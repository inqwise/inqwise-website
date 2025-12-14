import React from 'react';

type Service = {
  title: string;
  description: string[];
};

const servicesData: Service[] = [
  {
    title: "Custom Software Development",
    description: [
      "Development of custom software solutions tailored to the specific needs of the client.",
      "Integration of new solutions with existing systems and infrastructure.",
      "Support and maintenance of developed solutions throughout their lifecycle.",
    ],
  },
  {
    title: "DevOps and CI/CD Consulting",
    description: [
      "Implementation and optimization of DevOps practices to accelerate the development and deployment of applications.",
      "Configuration of CI/CD pipelines to automate code testing and deployment processes.",
      "Support and training of development teams in the use of DevOps tools and methodologies.",
    ],
  },
  {
    title: "IoT Solutions",
    description: [
      "Design and development of IoT systems for various industries, including manufacturing, agriculture, and smart cities.",
      "Integration of IoT devices with cloud services and analytics platforms for real-time data collection and processing.",
      "Ensuring security and privacy of data in IoT networks.",
    ],
  },
];

const ServiceCard = ({ title, description }: Service) => (
  <div>
    <h3 className="text-lg font-semibold mb-4 text-white">{title}</h3>
    <div className="space-y-3">
      {description.map((item, index) => (
        <p key={index} className="text-base font-normal text-white">
          {item}
        </p>
      ))}
    </div>
  </div>
);

const AdditionalServices = () => {
  return (
    <section className="bg-black py-20">
      <div className="container">
        <p className="text-center text-accent-red font-sans text-xl md:text-2xl font-semibold mb-16">
          In addition to the services listed above, our company can offer the following:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-8 lg:gap-x-16">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices;