import React from "react";
import clsx from "clsx";

interface SectionHeaderProps {
  tag: string;
  title: string;
  desc?: string;
  className?: string;
  colorClass?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  tag,
  title,
  desc,
  className,
  colorClass = "text-neon",
}) => {
  return (
    <div className={clsx("flex flex-col items-center text-center mx-auto mb-12", className)}>
      <span
        className={clsx(
          "px-5 py-3 rounded-full border border-gray-600 text-xs font-normal inline-block mb-4",
          colorClass
        )}
      >
        {tag}
      </span>
      <h2 className="text-3xl max-w-3xl md:text-5xl font-normal text-white mb-4">{title}</h2>
      {desc && (
        <p className="text-gray-400 max-w-[37rem] text-lg font-light md:text-base leading-relaxed">
          {desc}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
