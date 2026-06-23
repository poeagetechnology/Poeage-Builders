import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { faqs } from "../data/FaqData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
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
];

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.08 });
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section
      ref={ref}
      className="bg-[#FAFAF8] py-28 px-6 overflow-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');
        .serif { font-family: 'DM Serif Display', serif; }
      `}</style>

      <div className="max-w-5xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-10 items-end mb-20"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-7 h-px bg-[#8C7B55]" />
              <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#8C7B55]">
                Knowledge base
              </span>
            </div>
            <h2 className="serif text-5xl lg:text-[52px] font-normal leading-[1.1] tracking-tight text-[#1C1C1A]">
              Questions,
              <br />
              <em className="text-[#8C7B55]">answered.</em>
            </h2>
          </div>

          <p className="text-[15px] font-light text-[#5A5A52] leading-relaxed lg:text-right max-w-sm lg:ml-auto">
            Direct answers to the questions that matter most — no ambiguity,
            no hidden processes, no surprises.
          </p>
        </motion.div>

        {/* ── FAQ list ── */}
        <div className="border-t border-[#E0DDD4]">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            const Icon = faq.icon;
            const accent = accents[index % accents.length];

            return (
              <motion.div
                key={index}
                custom={index + 1}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="border-b border-[#E0DDD4]"
              >
                <button
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  className="w-full flex items-start gap-5 py-7 text-left group"
                >
                  {/* Step number */}
                  <span
                    className="text-[11px] font-medium tracking-[0.08em] mt-0.5 flex-shrink-0 w-6"
                    style={{ color: accent }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Icon box */}
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-[13px] flex-shrink-0 transition-transform duration-200 group-hover:scale-105"
                    style={{ background: accent }}
                  >
                    <Icon />
                  </div>

                  {/* Question */}
                  <span
                    className={`flex-1 serif text-[20px] lg:text-[22px] font-normal leading-snug transition-colors duration-200 ${
                      isActive ? "text-[#1C1C1A]" : "text-[#3A3A36]"
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* Chevron */}
                  <motion.span
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 240, damping: 20 }}
                    className="flex-shrink-0 mt-1.5"
                    style={{ color: isActive ? accent : "#C8C3B0" }}
                  >
                    <FaChevronDown className="text-[13px]" />
                  </motion.span>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key="answer"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pl-20 pb-8 pr-8">
                        {/* Accent left bar */}
                        <div
                          className="pl-5 text-[14px] font-light text-[#5A5A52] leading-[1.85]"
                          style={{
                            borderLeft: `2px solid ${accent}`,
                          }}
                        >
                          {faq.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* ── Footer CTA ── */}
        <motion.div
          custom={faqs.length + 2}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-white border border-[#E0DDD4] rounded-2xl px-8 py-7"
        >
          <div>
            <p className="text-[15px] font-medium text-[#1C1C1A] mb-0.5">
              Still have questions?
            </p>
            <p className="text-[13px] font-light text-[#A09880]">
              Our team is happy to walk you through anything — no commitment required.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#1C1C1A] hover:opacity-85 text-[#FAF9F6] text-[13px] font-medium tracking-wide px-6 py-3 rounded-lg transition-opacity duration-150 whitespace-nowrap"
          >
            Talk to us
            <svg
              className="w-3 h-3"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M1 6h10M7 2l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  );
}