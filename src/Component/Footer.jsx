import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../Assets/BuildersLogo1.png"

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#0b0d12] via-[#0a0c10] to-black text-gray-300 overflow-hidden">

      <section className="relative max-w-6xl mx-auto px-6 pt-32 pb-24 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
          Building trust. Engineering excellence.
        </h2>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Premium construction, disciplined execution, and long-term value —
          crafted for residential, commercial, and industrial projects.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Your business email address"
            className="
              w-full sm:w-[420px]
              px-6 py-4
              bg-black/60
              border border-white/10
              rounded-2xl
              text-sm text-white placeholder-gray-500
              focus:outline-none
              focus:ring-2 focus:ring-[#d4af37]
            "
          />
          <button className="px-10 py-4 rounded-2xl bg-[#d4af37] text-black font-medium hover:brightness-110 transition">
            Subscribe
          </button>
        </div>
      </section>

      <section className="relative max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 md:grid-cols-12 gap-20">

        <div className="md:col-span-5">
          <img src={Logo} alt="Poeage Builders" className="w-40 mb-8" />

          <p className="text-sm leading-relaxed text-gray-400 max-w-md">
            Poeage Builders is a professionally managed construction firm
            delivering corporate-grade architectural and infrastructure
            solutions across residential, commercial, industrial, and urban
            sectors.
          </p>

          <p className="mt-6 text-xs text-gray-500 tracking-wide">
            ISO Certified · MSME Registered · Trusted Construction Partner
          </p>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-6">
            Company
          </h4>

          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link to="/whatwedo" className="hover:text-white transition">Services</Link></li>
            <li><Link to="/projects" className="hover:text-white transition">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-6">
            Services
          </h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li>Architectural Planning</li>
            <li>Structural Construction</li>
            <li>Commercial Buildings</li>
            <li>Industrial Projects</li>
            <li>Urban Development</li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-6">
            Contact
          </h4>

          <div className="space-y-5 text-sm text-gray-400">
            <p className="flex items-center gap-3">
              <FaEnvelope size={14} /> info@poeagebuilders.com
            </p>
            <p className="flex items-center gap-3">
              <FaPhoneAlt size={14} /> +91 80568 89616
            </p>
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt size={14} /> Tamil Nadu, India
            </p>
            <p className="flex items-center gap-3 text-gray-500">
              <FaClock size={14} /> Mon – Sun · 8:00 – 20:00
            </p>

            <a
              href="https://wa.me/918056889616"
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex items-center gap-3 mt-6
                px-6 py-3
                rounded-2xl
                bg-green-600/90 hover:bg-green-600
                text-white font-medium transition
              "
            >
              <FaWhatsapp size={18} />
              WhatsApp Business
            </a>
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500">
          <span>
            © {new Date().getFullYear()} Poeage Builders · All Rights Reserved
          </span>

          <div className="flex gap-8">
            <Link to="/privacypolicy" className="hover:text-white transition cursor-pointer">
              Privacy Policy
            </Link>
            <Link to="/termsandcondition" className="hover:text-white transition cursor-pointer">
              Terms & Conditions
            </Link>
            <Link to="/faq" className="hover:text-white transition cursor-pointer">
              FAQ
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
}
