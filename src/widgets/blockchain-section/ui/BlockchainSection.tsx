import React from 'react';
import SectionHeader from "@/entities/section/ui/SectionHeader";
import BlockchainCard from "@/entities/blockchain/ui/BlockchainCard";

import blockchainFigure from "@/shared/assets/images/blockchain-figure.png";

import connectionIcon from "@/shared/assets/images/features-logo/connection.svg";
import securityIcon from "@/shared/assets/images/features-logo/security.svg";
import blockchainIcon from "@/shared/assets/images/features-logo/blockchain.svg";

const features = [
  {
    icon: connectionIcon,
    title: "Connectivity and ubiquity",
    description:
      "Connectivity and Ubiquity. The focal points of Web 3.0 emphasize connectivity and ubiquity, ensuring seamless interactions between users and devices within",
  },
  {
    icon: securityIcon,
    title: "Secure Transaction",
    description:
      "Ensuring every transaction is protected with cutting-edge security, giving you the confidence to exchange, invest, and grow in a safe and trusted environment.",
  },
  {
    icon: blockchainIcon,
    title: "Blockchain and decentralization",
    description:
      "Most important of all, the assurance of blockchain and decentralization helps in encouraging communication between software and browser plugins.",
  },
];


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
          {features.map((feature, index) => (
            <BlockchainCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlockchainSection;
