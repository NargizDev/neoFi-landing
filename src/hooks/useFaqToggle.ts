import { useState } from 'react';

export const useFaqToggle = (length: number, multiple = false) => {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleIndex = (index: number) => {
    if (multiple) {
      setOpenIndices(prev =>
        prev.includes(index)
          ? prev.filter(i => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenIndices(prev => (prev[0] === index ? [] : [index]));
    }
  };

  const isOpen = (index: number) => openIndices.includes(index);

  return { isOpen, toggleIndex };
};
