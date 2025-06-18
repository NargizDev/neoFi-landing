import React from "react";

const logos = [
  { icon: "src/assets/partners-logo/logo1.svg", name: "Logoipsum" },
  { icon: "src/assets/partners-logo/logo2.svg", name: "Logoipsum" },
  { icon: "src/assets/partners-logo/logo3.svg", name: "Logoipsum" },
  { icon: "src/assets/partners-logo/logo4.svg", name: "Logoipsum" },
  { icon: "src/assets/partners-logo/logo5.svg", name: "Logoipsum" },
];

const PartnerLogos: React.FC = () => {
  return (
    <section className="bg-section-alt py-10 xl:px-[4.5rem]" aria-labelledby="partners-title">
      <h2
        id="partners-title"
        className="text-center text-sm font-normal text-white/50 tracking-wide mb-8"
      >
        Satisfied partners
      </h2>
      <div className="flex justify-center flex-wrap px-5 gap-8 lg:gap-20">
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center gap-2 group cursor-pointer">
            <img
              src={logo.icon}
              alt={logo.name}
              className="h-8 w-6 opacity-80 grayscale hover:grayscale-0 transition duration-300"
              loading="lazy"
            />
            <span className="text-white/70 text-sm font-medium group-hover:text-[#9DFF3A] transition duration-300">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnerLogos;
