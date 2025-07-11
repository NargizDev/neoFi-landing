import React from "react";
import SectionGlow from "@/entities/section/ui/SectionGlow";
import SectionHeader from "@/entities/section/ui/SectionHeader";
import { useFaqToggle } from "@/features/faq-toggle/model/useFaqToggle";
import { FAQItem } from "@/entities/faq/ui/FAQItem";
import { faqItems } from "@/entities/faq/model/data"; // импорт данных

const FAQSection: React.FC = () => {
  const { isOpen, toggleIndex } = useFaqToggle(faqItems.length, false);

  return (
    <section className="bg-black py-10 px-5 lg:py-28 xl:px-[4.5rem]" id="faq">
      <SectionGlow />
      <SectionHeader
        tag="FAQ"
        title="Get Answers To Common Questions"
        desc="From basics to advanced topics, find everything you need to know right here. Let us help you simplify the process and find the clarity you're looking"
      />
      <div className="mt-10 space-y-4 px-6 lg:mx-56 md:px-0">
        {faqItems.map((item, index) => (
          <FAQItem
            key={index}
            item={item}
            index={index}
            isOpen={isOpen}
            toggle={toggleIndex}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
