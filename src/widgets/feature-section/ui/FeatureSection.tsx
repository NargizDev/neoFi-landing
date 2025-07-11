import React from "react";
import SectionHeader from "@/entities/section/ui/SectionHeader";
import SectionGlow from "@/entities/section/ui/SectionGlow";
import FeatureCard from "@/entities/feature/ui/FeatureCard";
import { features } from "@/entities/feature/model/data";

import scalabilityIcon from "@/shared/assets/images/features-logo/scalability.svg";
import decentralisationIcon from "@/shared/assets/images/features-logo/decentralisation.svg";
import connectivityIcon from "@/shared/assets/images/features-logo/connectivity.svg";

const icons: Record<string, string> = {
  "scalability.svg": scalabilityIcon,
  "decentralisation.svg": decentralisationIcon,
  "connectivity.svg": connectivityIcon,
};

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
            icon={icons[feature.icon.split("/").pop()!]}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
