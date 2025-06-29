import React from "react";

interface TestimonialCardProps {
  avatar: string;
  name: string;
  title: string;
  message: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  avatar,
  name,
  title,
  message,
}) => {
  return (
    <div className="bg-black border border-white/10 rounded-lg px-6 py-5 text-white text-sm w-full h-full hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
      <p className="mb-4 text-white/90 break-words leading-relaxed">
        “{message}”
      </p>
      <div className="flex items-center gap-3 mt-auto">
        <img
          src={avatar}
          alt={name}
          className="w-8 h-8 rounded-full object-cover"
        />
        <div>
          <div className="font-semibold text-white text-sm">{name}</div>
          <div className="text-gray-400 text-xs">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
