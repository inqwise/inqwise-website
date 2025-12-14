import React from 'react';
import { Globe, Zap } from 'lucide-react';

// Custom SVG icon for "24/7 Support" to better match the design
const SupportIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg 
    {...props} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4 8.5L12 13.5L20 8.5" />
    <path d="M20 15.5V8.5L12 3.5L4 8.5V15.5L12 20.5L20 15.5Z" />
  </svg>
);

interface Feature {
  icon: React.ElementType;
  title: React.ReactNode;
}

const featuresData: Feature[] = [
  {
    icon: SupportIcon,
    title: '24/7 Support',
  },
  {
    icon: Globe,
    title: (
      <>
        Multilingual
        <br />
        Functionality
      </>
    ),
  },
  {
    icon: Zap,
    title: 'Advanced Tech',
  },
];

const FeatureItem: React.FC<{ feature: Feature }> = ({ feature }) => {
  const Icon = feature.icon;
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#2B3990]">
        <Icon className="h-16 w-16 text-white" strokeWidth={1.25} />
      </div>
      <h3 className="text-lg font-semibold leading-snug text-white">
        {feature.title}
      </h3>
    </div>
  );
};


const FeaturesSection = () => {
  return (
    <section className="bg-[#DC2626] py-20 px-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-16 md:grid-cols-3 md:gap-x-8 md:gap-y-0">
          {featuresData.map((feature, index) => (
            <FeatureItem key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;