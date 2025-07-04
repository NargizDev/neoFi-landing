import React from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl px-7 py-10 text-center transform transition-transform duration-300 hover:scale-105 hover:border-white/20 hover:shadow-[0_0_20px_#9DFF3A40]
">
      <img src={icon} alt={title} className="h-10 mx-auto mb-9" />
      <h3 className="text-white font-medium text-lg mb-2">{title}</h3>
      <p className="text-base text-gray-400">{description}</p>
    </div>
  );
};

export default FeatureCard;
