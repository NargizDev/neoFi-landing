import React from "react";
import SectionGlow from "../common/SectionGlow";
import SectionHeader from "../common/SectionHeader";
import FAQItem from "./FAQItem";

const faqData = [
  {
    question: "What is NexoFi, and how does it work?",
    answer:
      "NexoFi is a platform providing decentralized finance tools for managing your digital assets with security and scalability.",
  },
  {
    question: "How is blockchain related to cryptocurrency?",
    answer:
      "Blockchain is the foundational technology behind cryptocurrencies. It ensures transparency, security, and immutability for digital transactions.",
  },
  {
    question: "Is blockchain technology secure?",
    answer:
      "Yes, blockchain’s decentralized and cryptographic nature makes it highly secure for storing and transmitting data.",
  },
  {
    question: "How does blockchain enhance security?",
    answer:
      "By distributing data across a network and encrypting it, blockchain significantly reduces the risk of centralized breaches.",
  },
  {
    question: "Can blockchain be hacked?",
    answer:
      "While highly secure, no system is 100% invulnerable. Blockchain’s structure, however, makes hacks extremely difficult and costly.",
  },
  {
    question: "How can I implement blockchain in my industry?",
    answer:
      "You can integrate blockchain through smart contracts, decentralized databases, and secure transaction protocols tailored to your business.",
  },
];

const FAQSection: React.FC = () => {
  return (
    <section className="bg-black py-10 px-5 lg:py-28 xl:px-[4.5rem]" id="faq">
      <SectionGlow />
      <SectionHeader
        tag="FAQ"
        title="Get Answers To Common Questions"
        desc="From basics to advanced topics, find everything you need to know right here. Let us help you simplify the process and find the clarity you're looking"
      />
      <div className="mt-10 space-y-4 px-6 lg:mx-56 md:px-0">
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
