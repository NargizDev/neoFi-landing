import React from "react";
import SectionHeader from "@/entities/section/ui/SectionHeader";
import SectionGlow from "@/entities/section/ui/SectionGlow";
import FeatureCard from "@/entities/feature/ui/FeatureCard";

import scalabilityIcon from "@/shared/assets/images/features-logo/scalability.svg";
import decentralisationIcon from "@/shared/assets/images/features-logo/decentralisation.svg";
import connectivityIcon from "@/shared/assets/images/features-logo/connectivity.svg";

const features = [
  {
    icon: scalabilityIcon,
    title: "Scalability",
    description: "Adapt and grow, no matter the demand on grow",
  },
  {
    icon: decentralisationIcon,
    title: "Decentralisation",
    description: "Web3 aims to move away from the centralized",
  },
  {
    icon: connectivityIcon,
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
