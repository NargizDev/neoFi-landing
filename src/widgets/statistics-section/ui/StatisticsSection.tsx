import React from "react";
import SectionHeader from "@/entities/section/ui/SectionHeader";
// import SectionGlow from "../common/SectionGlow";

const stats = [
  { value: "2M+", label: "users" },
  { value: "500k+", label: "Transactions" },
  { value: "35+", label: "Countries" },
];

const StatisticsSection: React.FC = () => {
  return (
    <section
      className="bg-section-alt py-10 lg:py-28 px-6 xl:px-[4.5rem]"
      id="statistics"
    >
      {/* <SectionGlow /> */}
      <SectionHeader
        tag="Statistics"
        title="Completely Leverage Product"
        desc="Leading the way in blockchain innovation, we are redefining how the world connects, secures, and transacts, bringing a new era of decentralized technology."
      />
      <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-y-10 sm:gap-x-20 text-center z-10 relative">
        {stats.map((stat, index) => (
          <div key={index}>
            <div className="text-neon text-5xl font-semibold">{stat.value}</div>
            <div className="text-xl font-light text-gray-400 mt-2">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatisticsSection;
