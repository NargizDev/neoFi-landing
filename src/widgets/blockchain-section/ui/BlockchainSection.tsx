import React from 'react';
import SectionHeader from "@/entities/section/ui/SectionHeader";
import BlockchainCard from "@/entities/blockchain/ui/BlockchainCard";
import { blockchainFeatures } from "@/entities/blockchain/model/data";

import blockchainFigure from "@/shared/assets/images/blockchain-figure.png";

import connectionIcon from "@/shared/assets/images/features-logo/connection.svg";
import securityIcon from "@/shared/assets/images/features-logo/security.svg";
import blockchainIcon from "@/shared/assets/images/features-logo/blockchain.svg";

const icons: Record<string, string> = {
  "connection.svg": connectionIcon,
  "security.svg": securityIcon,
  "blockchain.svg": blockchainIcon,
};

const BlockchainSection: React.FC = () => {
  return (
    <section className="bg-black py-10 lg:py-28 px-6 xl:px-[4.5rem]" id="blockchain">
      <SectionHeader
        tag="Feature"
        title="The Future Of Blockchain Technology"
        desc="Leading the way in blockchain innovation, we are redefining how the world connects, secures, and transacts, bringing a new era of decentralized technology."
      />
      <div className="mt-16 flex flex-col justify-center lg:flex-row items-center gap-20">
        <img
          src={blockchainFigure}
          alt="3D Figure"
          className="w-full max-w-md lg:max-w-[40%]"
        />
        <div className="flex flex-col gap-6 w-full max-w-lg">
          {blockchainFeatures.map((feature, index) => (
            <BlockchainCard
              key={index}
              {...feature}
              icon={icons[feature.icon]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlockchainSection;
