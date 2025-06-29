import { motion } from "framer-motion";
import type { FC } from "react";
import { Minus, Plus } from "lucide-react";

import type { FAQItem as FAQItemType } from "../../types";

type Props = {
  item: FAQItemType;
  index: number;
  isOpen: (index: number) => boolean;
  toggle: (index: number) => void;
};

export const FAQItem: FC<Props> = ({ item, index, isOpen, toggle }) => {
  const expanded = isOpen(index);
  const answerId = `faq-answer-${index}`;
  const questionId = `faq-question-${index}`;

  return (
    <div
      className={`border border-white/10 rounded-md px-6 py-4 transition-colors duration-300 ${
        expanded ? "bg-white/5" : "hover:bg-white/5"
      }`}
    >
      <button
        onClick={() => toggle(index)}
        className="flex items-center justify-between w-full text-left text-white font-medium text-sm md:text-base"
        aria-expanded={expanded}
        aria-controls={answerId}
        id={questionId}
      >
        <span>{item.question}</span>
        <span className="ml-4 text-neon">
          {expanded ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>

      <motion.div
        role="region"
        aria-labelledby={questionId}
        aria-hidden={!expanded}
        initial={false}
        animate={{
          height: expanded ? "auto" : 0,
          opacity: expanded ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden text-gray-300 mt-2"
        id={answerId}
      >
        <p className="text-white/70 text-sm leading-relaxed">
          {item.answer}
        </p>
      </motion.div>
    </div>
  );
};
