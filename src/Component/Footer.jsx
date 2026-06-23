import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";
import Logo from "../Assets/2.png";

const navLinks = [
  { label: "Home",     to: "/" },
  { label: "About",    to: "/about" },
  { label: "Services", to: "/whatwedo" },
  { label: "Projects", to: "/projects" },
  { label: "Contact",  to: "/contact" },
];

const services = [
  "Architectural Planning",
  "Structural Construction",
  "Commercial Buildings",
  "Industrial Projects",
  "Urban Development",
];

const contactItems = [
  { icon: <FaEnvelope />,     value: "info@poeagebuilders.com" },
  { icon: <FaPhoneAlt />,     value: "+91 80568 89616" },
  { icon: <FaMapMarkerAlt />, value: "Tamil Nadu, India" },
  { icon: <FaClock />,        value: "Mon – Sun · 8 AM – 8 PM", muted: true },
];

const legalLinks = [
  { label: "Privacy Policy",    to: "/privacypolicy" },
  { label: "Terms & Conditions",to: "/termsandcondition" },
  { label: "FAQ",               to: "/faq" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim()) { setSubscribed(true); }
  };

  return (
    <footer
      className="bg-[#111110] text-[#C8C3B0] overflow-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');
        .serif { font-family: 'DM Serif Display', serif; }
      `}</style>

      {/* ── Hero CTA band ── */}
      <div className="border-b border-white/[0.07]">
        <div className="max-w-6xl mx-auto px-6 py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left text */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="block w-7 h-px bg-[#8C7B55]" />
                <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#8C7B55]">
                  Stay connected
                </span>
              </div>
              <h2 className="serif text-4xl lg:text-[46px] font-normal leading-[1.1] tracking-tight text-white">
                Building trust.
                <br />
                <em className="text-[#8C7B55]">Engineering excellence.</em>
              </h2>
              <p className="mt-5 text-[14px] font-light text-[#7A7568] leading-relaxed max-w-sm">
                Get project insights, industry updates, and construction best
                practices — delivered straight to your inbox.
              </p>
            </div>

            {/* Right subscribe */}
            <div className="lg:pl-8">
              {subscribed ? (
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full border border-[#3B6D11]/40 bg-[#EAF3DE]/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#3B6D11]" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="2 8 6 12 14 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="text-[14px] text-[#A09880]">You're subscribed. Thank you.</p>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your business email"
                    className="flex-1 bg-white/[0.04] border border-white/[0.09] hover:border-white/[0.15] focus:border-[#8C7B55] rounded-xl px-5 py-3.5 text-[13px] text-white placeholder-[#5A5A52] outline-none transition-colors"
                  />
                  <button
                    onClick={handleSubscribe}
                    className="inline-flex items-center justify-center gap-2 bg-[#8C7B55] hover:bg-[#7A6A46] text-white text-[13px] font-medium px-6 py-3.5 rounded-xl transition-colors whitespace-nowrap"
                  >
                    Subscribe
                    <FaArrowRight className="text-[11px]" />
                  </button>
                </div>
              )}
              <p className="mt-3 text-[11px] font-light text-[#4A4A44] tracking-wide">
                No spam. Unsubscribe anytime.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* ── Main footer grid ── */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-14">

          {/* Brand col */}
          <div className="md:col-span-5">
            <img src={Logo} alt="Poeage Builders" className="w-36 mb-7 opacity-90" />

            <p className="text-[13px] font-light leading-relaxed text-[#6A6A60] max-w-xs">
              A professionally managed construction firm delivering
              corporate-grade architectural and infrastructure solutions across
              residential, commercial, industrial, and urban sectors.
            </p>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap gap-2">
              {["ISO Certified", "MSME Registered", "200+ Projects"].map((badge) => (
                <span
                  key={badge}
                  className="text-[10px] font-medium tracking-wide text-[#7A6A46] border border-[#8C7B55]/30 bg-[#8C7B55]/08 rounded-full px-3 py-1"
                  style={{ background: "rgba(140,123,85,0.08)" }}
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/918056889616"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2.5 border border-white/[0.08] hover:border-white/20 bg-white/[0.04] hover:bg-white/[0.07] text-[13px] text-[#C8C3B0] px-5 py-3 rounded-xl transition-all duration-200"
            >
              <FaWhatsapp className="text-[#3D9945] text-base" />
              WhatsApp Business
            </a>
          </div>

          {/* Nav col */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] font-medium tracking-[0.14em] uppercase text-[#4A4A44] mb-6">
              Company
            </h4>
            <ul className="space-y-3.5">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-[13px] font-light text-[#6A6A60] hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services col */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] font-medium tracking-[0.14em] uppercase text-[#4A4A44] mb-6">
              Services
            </h4>
            <ul className="space-y-3.5">
              {services.map((s) => (
                <li key={s} className="text-[13px] font-light text-[#6A6A60]">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact col */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-medium tracking-[0.14em] uppercase text-[#4A4A44] mb-6">
              Contact
            </h4>
            <div className="space-y-4">
              {contactItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className={`mt-0.5 text-[12px] flex-shrink-0 ${item.muted ? "text-[#4A4A44]" : "text-[#8C7B55]"}`}>
                    {item.icon}
                  </span>
                  <span className={`text-[13px] font-light leading-snug ${item.muted ? "text-[#4A4A44]" : "text-[#7A7568]"}`}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 py-7 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-[11px] font-light text-[#3A3A36]">
            © {new Date().getFullYear()} Poeage Builders · All Rights Reserved
          </span>

          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-[11px] font-light text-[#3A3A36] hover:text-[#8C7B55] transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}