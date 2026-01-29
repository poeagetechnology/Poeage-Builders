import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronDown,
  FaShieldAlt,
  FaLeaf,
  FaCogs,
  FaChartLine,
  FaBuilding,
  FaHardHat,
  FaClipboardCheck,
} from "react-icons/fa";


const faqs = [
  {
    question: "How do I start a project with Poeage Builders?",
    answer:
      "You can contact us through our website or phone. Our team evaluates your requirements, prepares a feasibility plan, and guides you through every execution stage.",
    icon: FaCogs,
    color: "bg-blue-100 text-blue-600",
  },
  {
    question: "Can construction projects be customized?",
    answer:
      "Absolutely. Every project is tailored to your objectives, site conditions, compliance needs, and long-term operational goals.",
    icon: FaChartLine,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    question: "Do you provide sustainable and eco-friendly solutions?",
    answer:
      "Sustainability is embedded in our process — from energy-efficient design to responsible material sourcing and execution.",
    icon: FaLeaf,
    color: "bg-teal-100 text-teal-600",
  },
  {
    question: "How is project progress monitored?",
    answer:
      "Clients receive structured milestone updates, detailed progress reports, and transparent communication throughout the build.",
    icon: FaClipboardCheck,
    color: "bg-purple-100 text-purple-600",
  },
  {
    question: "Is client data and project information secure?",
    answer:
      "Yes. We follow strict confidentiality standards with secure documentation handling and controlled access protocols.",
    icon: FaShieldAlt,
    color: "bg-rose-100 text-rose-600",
  },
  {
    question: "Do you handle government approvals and compliance?",
    answer:
      "Yes. Our team manages statutory approvals, regulatory coordination, and compliance documentation across all project stages.",
    icon: FaBuilding,
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    question: "What quality standards do you follow on-site?",
    answer:
      "We follow strict quality checklists, third-party inspections, and internal audit systems to ensure structural and execution excellence.",
    icon: FaHardHat,
    color: "bg-orange-100 text-orange-600",
  },
  {
    question: "Do you provide post-construction support?",
    answer:
      "Yes. We offer structured handover, documentation support, and post-completion assistance for smooth long-term operations.",
    icon: FaClipboardCheck,
    color: "bg-cyan-100 text-cyan-600",
  },
];


export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-16 sm:mb-20">
          <span className="text-xs tracking-[0.35em] uppercase font-semibold text-amber-600">
            Knowledge Base
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Clarity. Confidence. Control.
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
            Direct answers to important questions — no ambiguity, no hidden
            processes.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            const Icon = faq.icon;

            return (
              <div
                key={index}
                className={`
                  relative rounded-2xl overflow-hidden border
                  ${
                    isActive
                      ? "border-amber-300 shadow-[0_25px_70px_rgba(0,0,0,0.10)]"
                      : "border-gray-200 shadow-[0_12px_30px_rgba(0,0,0,0.05)]"
                  }
                  bg-white transition
                `}
              >
                <button
                  onClick={() =>
                    setActiveIndex(isActive ? null : index)
                  }
                  className="
                    w-full flex items-center justify-between gap-6 
                    px-6 sm:px-8 py-5 sm:py-6 
                    text-left
                  "
                >
                  <div className="flex items-center gap-4 sm:gap-5 min-w-0">

                    <div
                      className={`
                        w-11 h-11 rounded-xl 
                        flex items-center justify-center
                        ${faq.color}
                        text-lg 
                        shadow-inner
                        flex-shrink-0
                      `}
                    >
                      <Icon />
                    </div>

                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <motion.span
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 220, damping: 18 }}
                    className="text-gray-400 flex-shrink-0"
                  >
                    <FaChevronDown />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-6 sm:pb-8 text-gray-600 leading-relaxed text-sm sm:text-base">
                        <div className="mt-2 border-l-2 border-amber-400 pl-5">
                          {faq.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
