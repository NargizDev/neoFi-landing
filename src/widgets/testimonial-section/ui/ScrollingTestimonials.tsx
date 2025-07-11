import React from "react";
import TestimonialCard from "@/entities/testimonial/ui/TestimonialCard";
import { testimonials } from "@/entities/testimonial/model/data";
import avatar from "@/shared/assets/images/testimonal-avatar.svg";

const avatars: Record<string, string> = {
  "testimonal-avatar.svg": avatar,
};

const looped = [...testimonials, ...testimonials];

const ScrollingTestimonials: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#1B1B1B] to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#1B1B1B] to-transparent z-20" />

      <div className="space-y-8 group relative z-10">
        {/* scroll left */}
        <div className="flex gap-6 w-max animate-scrollLeft pause-on-hover">
          {looped.map((t, i) => (
            <div key={`top-${i}`} className="inline-block w-[300px]">
              <TestimonialCard {...t} avatar={avatars[t.avatar]} />
            </div>
          ))}
        </div>

        {/* scroll right */}
        <div className="max-sm:hidden flex gap-6 w-max animate-scrollRight pause-on-hover">
          {looped.map((t, i) => (
            <div key={`bottom-${i}`} className="inline-block w-[300px]">
              <TestimonialCard {...t} avatar={avatars[t.avatar]} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingTestimonials;
