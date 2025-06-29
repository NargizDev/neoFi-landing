import React from "react";
import SectionHeader from "../../common/SectionHeader";

const CTASection: React.FC = () => {
  return (
    <section className="bg-section-alt px-5 py-10 lg:py-28 xl:px-[4.5rem] text-center" id="cta">
      <SectionHeader
        tag="Revolutionary"
        title="Enhance Your Design Workflow With Seamless Landing Pages"
        desc="Join a thriving community committed to safeguarding digital assets, empowering your financial journey with trust, innovation, and security"
      />
      <div className="mt-10">
        <button className="bg-neon text-black font-normal px-6 py-3 rounded-md hover:bg-[#baff62] transition inline-block">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default CTASection;
