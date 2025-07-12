import React, { useState } from "react";
import logo from "@/shared/assets/images/logo.svg";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <footer
      className="bg-black py-12 px-6 text-gray-300 xl:px-[4.5rem]"
      role="contentinfo"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-12">
        <div className="flex flex-col max-sm:text-center max-sm:items-center md:flex-row gap-16 md:gap-24">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="NeoFi logo" width={32} height={32} />
              <span className="text-white text-lg font-semibold">NeoFi</span>
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Quick links">
            <h4 className="text-white text-xl font-light mb-3">Quick links</h4>
            <ul className="space-y-1 text-white/70 text-sm font-light">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#community"
                  className="hover:text-white transition-colors"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="#support"
                  className="hover:text-white transition-colors"
                >
                  Support
                </a>
              </li>
            </ul>
          </nav>

          {/* Help */}
          <nav aria-label="Help">
            <h4 className="text-white font-light mb-3 text-xl">Help</h4>
            <ul className="space-y-1 text-white/70 text-sm font-light">
              <li>
                <a href="#help" className="hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#forum" className="hover:text-white transition-colors">
                  Forum
                </a>
              </li>
            </ul>
          </nav>

          {/* Social */}
          <nav aria-label="Social Media">
            <h4 className="text-white font-light mb-3 text-xl">Social Media</h4>
            <ul className="space-y-1 text-white/70 text-sm font-light">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="w-full lg:max-w-xs">
          <h4 className="text-white font-light text-xl w-48 mb-4">
            Join our mailing list for updates
          </h4>
          <form
            onSubmit={handleSubmit}
            className="flex items-center border-b border-white/20 pb-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="bg-transparent text-white font-light placeholder-white/50 text-sm focus:outline-none flex-1"
              required
              aria-label="Email address for newsletter"
            />
            <button
              type="submit"
              className="bg-[#9DFF3A] w-8 h-8 rounded-full flex items-center justify-center text-black hover:scale-105 transition"
              aria-label="Subscribe to newsletter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </form>
        </div>
      </div>
      <div className="mt-14 lg:pt-8 text-center text-sm text-white/50">
        <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
