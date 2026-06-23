import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { terms } from "../data/TermsData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

const accents = [
  "#8C7B55", // gold
  "#185FA5", // navy
  "#0F6E56", // forest
  "#993556", // rose
  "#BA7517", // amber
  "#533AB7", // violet
  "#1C6B72", // teal
  "#8C7B55",
  "#185FA5",
  "#0F6E56",
  "#993556",
  "#BA7517",
];

export default function TermsAndConditions() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.05 });
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section
      ref={ref}
      className="bg-[#FAFAF8] min-h-screen py-28 px-6 overflow-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');
        .serif { font-family: 'DM Serif Display', serif; }
      `}</style>

      <div className="max-w-4xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-20"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-7 h-px bg-[#8C7B55]" />
            <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#8C7B55]">
              Legal
            </span>
          </div>

          <h1 className="serif text-5xl lg:text-[56px] font-normal leading-[1.1] tracking-tight text-[#1C1C1A] mb-5">
            Terms &amp;
            <br />
            <em className="text-[#8C7B55]">Conditions.</em>
          </h1>

          <p className="text-[15px] font-light text-[#5A5A52] leading-relaxed max-w-lg">
            These terms govern access to and use of the Poeage Builders website
            and professional services. Please read them carefully before
            engaging with us.
          </p>

          {/* Meta row */}
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8C7B55]" />
              <span className="text-[12px] font-light text-[#A09880]">
                Effective: January 2024
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8C7B55]" />
              <span className="text-[12px] font-light text-[#A09880]">
                {terms.length} sections
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8C7B55]" />
              <span className="text-[12px] font-light text-[#A09880]">
                Poeage Builders Pvt. Ltd.
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── Quick-nav index ── */}
        <motion.div
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="bg-white border border-[#E0DDD4] rounded-2xl px-7 py-6 mb-14"
        >
          <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#A09880] mb-4">
            Contents
          </p>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
            {terms.map((item, i) => {
              const accent = accents[i % accents.length];
              return (
                <button
                  key={i}
                  onClick={() => {
                    setActiveIndex(i);
                    document.getElementById(`term-${i}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="flex items-center gap-2.5 text-left group"
                >
                  <span
                    className="text-[10px] font-medium tracking-wide flex-shrink-0"
                    style={{ color: accent }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[13px] font-light text-[#5A5A52] group-hover:text-[#1C1C1A] transition-colors duration-150 truncate">
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ── Terms accordion list ── */}
        <div className="border-t border-[#E0DDD4]">
          {terms.map((item, i) => {
            const isActive = activeIndex === i;
            const accent = accents[i % accents.length];
            const Icon = item.icon;

            return (
              <motion.div
                id={`term-${i}`}
                key={i}
                custom={i + 2}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="border-b border-[#E0DDD4] scroll-mt-24"
              >
                <button
                  onClick={() => setActiveIndex(isActive ? null : i)}
                  className="w-full flex items-start gap-5 py-7 text-left group"
                >
                  {/* Step number */}
                  <span
                    className="text-[11px] font-medium tracking-[0.08em] mt-0.5 flex-shrink-0 w-6"
                    style={{ color: accent }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-[13px] flex-shrink-0 transition-transform duration-200 group-hover:scale-105"
                    style={{ background: accent }}
                  >
                    <Icon />
                  </div>

                  {/* Title */}
                  <span
                    className={`flex-1 serif text-[20px] lg:text-[22px] font-normal leading-snug transition-colors duration-200 ${
                      isActive ? "text-[#1C1C1A]" : "text-[#3A3A36]"
                    }`}
                  >
                    {item.title}
                  </span>

                  {/* Chevron */}
                  <motion.svg
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 240, damping: 20 }}
                    className="flex-shrink-0 mt-2"
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    stroke={isActive ? accent : "#C8C3B0"}
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  >
                    <polyline points="1 4 6.5 9.5 12 4" />
                  </motion.svg>
                </button>

                {/* Content */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pl-20 pb-8 pr-4">
                        <div
                          className="text-[14px] font-light text-[#5A5A52] leading-[1.9] pl-5"
                          style={{ borderLeft: `2px solid ${accent}` }}
                        >
                          {typeof item.content === "string" ? (
                            <p>{item.content}</p>
                          ) : Array.isArray(item.content) ? (
                            <ul className="space-y-2">
                              {item.content.map((line, j) => (
                                <li key={j} className="flex items-start gap-2">
                                  <span
                                    className="mt-2 w-1 h-1 rounded-full flex-shrink-0"
                                    style={{ background: accent }}
                                  />
                                  {line}
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p>{item.content}</p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* ── Footer note ── */}
        <motion.div
          variants={fadeUp}
          custom={terms.length + 3}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-14 grid sm:grid-cols-2 gap-4"
        >
          {/* Contact card */}
          <div className="bg-white border border-[#E0DDD4] rounded-2xl px-7 py-6">
            <p className="text-[13px] font-medium text-[#1C1C1A] mb-1">
              Questions about these terms?
            </p>
            <p className="text-[12px] font-light text-[#A09880] mb-4 leading-relaxed">
              We're happy to clarify anything before you proceed.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-[12px] font-medium text-[#8C7B55] hover:text-[#7A6A46] transition-colors duration-150"
            >
              Contact us
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M1 5h8M5 1l4 4-4 4" />
              </svg>
            </a>
          </div>

          {/* Last updated card */}
          <div className="bg-[#1C1C1A] border border-[#2A2A28] rounded-2xl px-7 py-6">
            <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#4A4A44] mb-3">
              Document info
            </p>
            <p className="serif text-[22px] font-normal text-white leading-snug mb-1">
              Poeage Builders
            </p>
            <p className="serif text-[22px] font-normal italic text-[#8C7B55] leading-snug">
              Pvt. Ltd.
            </p>
            <div className="mt-4 h-px bg-[#2A2A28]" />
            <p className="mt-3 text-[11px] font-light text-[#4A4A44]">
              Tamil Nadu, India · Est. 2016
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}