import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaCogs,
  FaQuestionCircle,
  FaInfoCircle,
  FaPhoneAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Logo from "../Assets/BuildersLogo1.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  const navItems = [
    { label: "Home", link: "/", icon: <FaHome /> },
    { label: "What We Do?", link: "/whatwedo", icon: <FaCogs /> },
    { label: "How it Works", link: "/howitworks", icon: <FaQuestionCircle /> },
    { label: "About Us", link: "/about", icon: <FaInfoCircle /> },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/70">
        <div
          className="
            max-w-7xl mx-auto
            h-16 lg:h-[72px]
            px-6 lg:px-12
            flex items-center
          "
        >
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src={Logo}
                alt="Poeage Builders"
                className="h-9 w-auto"
              />
              <div className="leading-[1.1]">
              
                <span className="block text-xl tracking-widest text-yellow-500">
                  Builders
                </span>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-12 ml-auto mr-10 text-sm font-semibold text-gray-800">
            {navItems.map((item) => {
              const active = location.pathname === item.link;
              return (
                <Link
                  key={item.link}
                  to={item.link}
                  className={`
                    relative flex items-center gap-2
                    leading-none
                    tracking-wide
                    transition-colors duration-300
                    ${active ? "text-gray-900" : "text-gray-700 hover:text-gray-900"}
                  `}
                >
                  <span className="text-sm">{item.icon}</span>
                  <span>{item.label}</span>

                  <span
                    className={`
                      absolute -bottom-3 left-0 h-[2px]
                      bg-gradient-to-r from-amber-400 to-yellow-500
                      transition-all duration-300
                      ${active ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center flex-shrink-0">
            <Link
              to="/contact"
              className="
                inline-flex items-center gap-2
                h-10 px-6
                rounded-xl
                bg-gradient-to-r from-amber-400 to-yellow-500
                text-black text-sm font-semibold
                shadow-[0_6px_20px_rgba(0,0,0,0.15)]
                hover:brightness-110 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]
                transition-all duration-300
              "
            >
              <FaPhoneAlt size={14} />
              Contact Us
            </Link>
          </div>

          <button
            className="ml-auto md:hidden text-gray-900"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed top-16 left-0 w-full bg-white/95 backdrop-blur-xl shadow-lg z-40 md:hidden border-t border-gray-200/70">
          <div className="px-6 py-8 flex flex-col gap-6">
            {navItems.map((item) => (
              <Link
                key={item.link}
                to={item.link}
                onClick={() => setMenuOpen(false)}
                className="
                  flex items-center gap-3
                  text-base font-semibold text-gray-800
                  hover:text-amber-600 transition
                "
              >
                <span className="text-base">{item.icon}</span>
                {item.label}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="
                mt-4 inline-flex items-center justify-center gap-2
                h-11 rounded-xl
                bg-gradient-to-r from-amber-400 to-yellow-500
                text-black font-semibold
                shadow-md
              "
            >
              <FaPhoneAlt size={14} />
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
