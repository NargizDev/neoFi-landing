// import React, { useState } from "react";
// import { Menu, X } from "lucide-react";

// const Header: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="fixed top-0 left-0 z-50 bg-black/80 backdrop-blur-sm w-full max-w-screen px-6 md:px-[7.5rem] flex justify-between items-center py-6 overflow-x-hidden">
//       {/* Logo */}
//       <div className="flex items-center gap-3">
//         <img src="src/assets/logo.svg" alt="NeoFi logo" className="w-8 h-8" />
//         <span className="text-white font-medium text-xl">NeoFi</span>
//       </div>

//       <nav className="hidden md:flex gap-8 text-gray-400 font-light">
//         <a href="#features" className="hover:text-white transition">
//           Home
//         </a>
//         <a href="#features" className="hover:text-white transition">
//           Features
//         </a>
//         <a href="#testimonials" className="hover:text-white transition">
//           Testimonial
//         </a>
//         <a href="#faq" className="hover:text-white transition">
//           FAQ
//         </a>
//       </nav>

//       {/* Desktop buttons */}
//       <div className="hidden md:flex gap-4">
//         <button className="text-white px-4 py-2 rounded-3xl font-normal hover:bg-neutral-800 transition">
//           Log in
//         </button>
//         <button className="bg-neon text-black px-4 py-2 rounded-3xl font-normal transition border border-neon">
//           Try For Free
//         </button>
//       </div>

//       {/* Burger for mobile */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="md:hidden text-white"
//         aria-label="Toggle menu"
//       >
//         {isOpen ? <X size={24} /> : <Menu size={24} />}
//       </button>

//       {/* Mobile menu */}
//       {isOpen && (
//         <div className="md:hidden mt-4 flex flex-col gap-4 text-white bg-black/90 p-6 rounded-lg">
//           <a href="#features" className="hover:text-neon transition">
//             Home
//           </a>
//           <a href="#features" className="hover:text-neon transition">
//             Features
//           </a>
//           <a href="#testimonials" className="hover:text-neon transition">
//             Testimonial
//           </a>
//           <a href="#faq" className="hover:text-neon transition">
//             FAQ
//           </a>
//           <button className="mt-4 text-white w-full px-4 py-2 rounded-3xl bg-neutral-800">
//             Log in
//           </button>
//           <button className="bg-neon text-black w-full px-4 py-2 rounded-3xl border border-neon">
//             Try For Free
//           </button>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;
// src/components/Header/Header.tsx

const Header = () => (
  <header className="fixed top-0 left-0 z-50 bg-black/80 backdrop-blur-sm w-full max-w-screen px-6 xl:px-[4.5rem] flex justify-between items-center py-6 overflow-x-hidden">
    {/* Logo */}
    <div className="flex items-center gap-3">
      <img src="src/assets/logo.svg" alt="NeoFi logo" className="w-8 h-8" />
      <span className="text-white font-medium text-xl">NeoFi</span>
    </div>
    <nav className="hidden md:flex gap-8 text-gray-200">
      <a href="#features" className="hover:text-white transition">
        Home
      </a>
      <a href="#features" className="hover:text-white transition">
        Features
      </a>
      <a href="#testimonials" className="hover:text-white transition">
        Testimonial
      </a>
      <a href="#faq" className="hover:text-white transition">
        FAQ
      </a>
    </nav>
    <div className="flex gap-2">
      <button className="text-white px-4 py-2 rounded-3xl font-normal hover:bg-neutral-800 transition">
        Log in
      </button>
      <button className="bg-neon text-black px-4 py-2 rounded-3xl font-normal transition border border-neon">
        Try For Free
      </button>
    </div>
  </header>
);

export default Header;
