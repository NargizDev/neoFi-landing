import { motion } from "framer-motion";
import React from "react";

interface HeroSectionProps {
  className?: string;
}

const BUTTON_VARIANTS = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

const HeroSection: React.FC<HeroSectionProps> = () => (
  <section
    className="w-full flex flex-col md:flex-row items-center justify-between pt-[6rem] pb-16 px-6 sm:px-8 md:px-16 xl:px-[4.5rem]"
    aria-label="Hero section"
  >
    {/* Текстовая часть */}
    <div className="flex-1 flex flex-col items-center lg:items-start justify-center text-center lg:text-left mt-10 lg:mt-0">
      <span
        className="text-neon px-5 py-3 rounded-full border border-gray-500 text-xs font-normal lg:mb-4 inline-flex items-center gap-2"
        role="status"
      >
        <span className="w-2 h-2 rounded-full bg-neon" aria-hidden="true" />
        Decentralised
      </span>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-200 my-4 leading-tight">
        Revolutionizing
        <br />
        Web3 Finance
      </h1>
      <p className="text-gray-300 mb-8 max-w-xl font-light text-base lg:text-xl sm:text-base">
        Secure, scalable, and decentralized solutions for your digital assets — experience the future of financial freedom.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 sm:w-auto justify-center lg:justify-start">
        <motion.button
          whileHover="hover"
          whileTap="tap"
          variants={BUTTON_VARIANTS}
          className="bg-neon hover:bg-neon-light text-black font-normal px-6 py-3 rounded-3xl transition"
          aria-label="Get started with NeoFi"
        >
          Get Started
        </motion.button>
        <motion.button
          whileHover="hover"
          whileTap="tap"
          variants={BUTTON_VARIANTS}
          className="border border-gray-600 text-white px-6 py-3 rounded-3xl hover:bg-neutral-800 transition flex items-center justify-center gap-2"
          aria-label="Watch introduction video"
        >
          <svg
            className="w-4 h-4 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          Watch video
        </motion.button>
      </div>
    </div>

    {/* Иллюстрация */}
    <motion.div
      className="flex items-center justify-center flex-1 max-sm:p-8"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <img
        src="src/assets/NeoFi Figure.png"
        alt="3D illustration representing Web3 and blockchain technology"
        className="sm:w-[300px] md:w-[300px] lg:w-[512px] drop-shadow-2xl max-w-full h-auto"
        loading="lazy"
        decoding="async"
      />
    </motion.div>
  </section>
);

export default HeroSection;
