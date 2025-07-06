import React from "react";
import clsx from "clsx";

interface SectionGlowProps {
  className?: string;
  width?: string;
  height?: string;
  color?: string;
  opacity?: string;
}

const SectionGlow: React.FC<SectionGlowProps> = ({
  className,
  width = "w-[600px]",
  height = "h-[425px]",
  color = "bg-[#4A5AEC]",
  opacity = "opacity-[.05]",
}) => {
  return (
    <div className={clsx(
      "max-sm:hidden absolute left-1/2 -translate-x-1/2 rounded-full blur-3xl pointer-events-none z-0",
      width,
      height,
      color,
      opacity,
      className
    )} />
  );
};

export default SectionGlow;
