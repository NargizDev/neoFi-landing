import React from "react";
import logo from "@/shared/assets/images/logo.svg";
import { Link } from "react-router-dom";
import { useAuth } from "@/shared/lib/auth/AuthContext";
import avatar from "@/shared/assets/images/testimonal-avatar.svg";

const Header: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <header className="fixed top-0 left-0 z-50 bg-black/80 backdrop-blur-sm w-full max-w-screen px-6 xl:px-[4.5rem] 
      flex justify-between items-center py-6 overflow-x-hidden">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="NeoFi logo" className="w-8 h-8" />
        <span className="text-white font-medium text-xl">NeoFi</span>
      </div>
      <nav className="hidden md:flex gap-8 text-gray-200">
        <a href="#home" className="hover:text-white transition">
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
        {user ? (
          <>
            <button
              onClick={logout}
              className="text-white px-4 py-2 rounded-3xl font-normal hover:bg-neutral-800 transition"
            >
              Sign Out
            </button>
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#232323] border border-neon">
              <img src={avatar} alt="User avatar" className="w-8 h-8 rounded-full" />
            </div>
          </>
        ) : (
          <>
            <Link to="/login" className="text-white px-4 py-2 rounded-3xl font-normal hover:bg-neutral-800 transition">
              Log in
            </Link>
            <Link to="/sign-up" className="bg-neon text-black px-4 py-2 rounded-3xl font-normal transition border border-neon">
              Try For Free
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
