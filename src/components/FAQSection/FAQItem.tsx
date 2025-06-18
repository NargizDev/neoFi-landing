import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`border border-white/10 rounded-md px-6 py-4 transition-colors duration-300 ${
        isOpen ? "bg-white/5" : "hover:bg-white/5"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left text-white font-medium text-sm md:text-base transition"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${question}`}
      >
        <span>{question}</span>
        <span className="ml-4 text-neon">
          {isOpen ? (
            <Minus size={20} className="transition-transform duration-300" />
          ) : (
            <Plus size={20} className="transition-transform duration-300" />
          )}
        </span>
      </button>

      <div
        id={`faq-answer-${question}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] mt-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-white/70 text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
