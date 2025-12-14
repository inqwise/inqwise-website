import React from 'react';

const serviceData = [
  {
    title: 'DevFinOps Solutions:',
    description: [
      'Automation of development and financial processes with maximum resource optimization.',
      'Development and implementation of clustered server connections to ensure flexibility and infrastructure reliability.',
      'Implementation of a Zero Trust framework to enhance security and reduce cloud resource costs.',
      'Automation of environment orchestration for dynamic management of computing resources.',
    ],
  },
  {
    title: 'Fintech Solutions:',
    description: [
      'Consulting and development of financial strategies based on data analysis.',
      'Development and implementation of highly efficient and scalable fintech products.',
    ],
  },
  {
    title: 'Digital Survey Solutions:',
    description: [
      'Development and implementation of digital survey systems for data collection and analysis.',
      'Ensuring data protection and compliance at every stage of processing.',
    ],
  },
  {
    title: 'Compliance and Security Services:',
    description: [
      'Consulting on the implementation and support of a Zero Trust framework to ensure data security.',
      'Continuous updates to processes and systems in line with the latest security requirements.',
    ],
  },
];

const ServicesList = () => {
  return (
    <section className="bg-secondary py-20">
      <div className="container">
        <div className="space-y-12">
          {serviceData.map((service, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-4 md:gap-x-8 gap-y-4 items-start">
              <div className="md:col-span-1">
                <h3 className="font-semibold text-lg leading-tight text-[var(--color-primary-blue)]" style={{ fontFamily: 'var(--font-service-title)' }}>
                  {service.title}
                </h3>
              </div>
              <div className="md:col-span-3 space-y-2">
                {service.description.map((line, i) => (
                  <p
                    key={i}
                    className="text-base leading-relaxed text-[var(--color-dark-gray)]"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;