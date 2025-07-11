import React from "react";
import SectionGlow from "@/entities/section/ui/SectionGlow";
import SectionHeader from "@/entities/section/ui/SectionHeader";
import ScrollingTestimonials from "@/widgets/testimonial-section/ui/ScrollingTestimonials";

const TestimonialSection: React.FC = () => {
  return (
    <section
      className="bg-section-alt py-10 lg:py-28"
      id="testimonials"
    >
      <SectionGlow />
      <SectionHeader
        tag="Testimonal"
        title="Trusted By Innovators"
        desc="Secure your digital assets with the peace of mind that comes from knowing you are protected by the best technology in the blockchain space."
      />
      <div className="relative z-10 mt-12">
        <ScrollingTestimonials />
      </div>
    </section>
  );
};

export default TestimonialSection;
