import React from "react";

interface BlockchainCardProps {
  icon: string;
  title: string;
  description: string;
}

const BlockchainCard: React.FC<BlockchainCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl px-5 py-7 flex gap-4 items-start transform transition-transform duration-300 hover:scale-105 hover:border-white/20 hover:shadow-[0_0_20px_#9DFF3A40]">
      <img src={icon} alt={title} className="h-6 mt-1" />
      <div>
        <h3 className="text-white font-medium text-sm mb-1">{title}</h3>
        <p className="text-gray-400 text-base">{description}</p>
      </div>
    </div>
  );
};

export default BlockchainCard;
