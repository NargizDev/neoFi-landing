import React from "react";
import SectionHeader from "../../common/SectionHeader";
import SectionGlow from "../../common/SectionGlow";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "src/assets/features-logo/scalability.svg",
    title: "Scalability",
    description: "Adapt and grow, no matter the demand on grow",
  },
  {
    icon: "src/assets/features-logo/decentralisation.svg",
    title: "Decentralisation",
    description: "Web3 aims to move away from the centralized",
  },
  {
    icon: "src/assets/features-logo/connectivity.svg",
    title: "Connectivity",
    description: "Computers will be able to understand information similarly to humans",
  },
];

const FeatureSection: React.FC = () => {
  return (
    <section className="bg-black py-10 lg:py-28 px-6 xl:px-[4.5rem]" id="features">
      <SectionGlow />
      <SectionHeader
        tag="Features"
        title="Future Breakdown"
        desc="Secure, scalable, and decentralized solutions for your digital assets — experience the future of financial freedom."
      />
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
