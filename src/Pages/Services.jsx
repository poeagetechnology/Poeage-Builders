import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { services } from "../data/ServicesData";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* Muted accent per service — same palette family as Contact & HowItWorks */
const accents = [
  { hex: "#8C7B55" },  // warm gold
  { hex: "#185FA5" },  // navy
  { hex: "#0F6E56" },  // forest
  { hex: "#993556" },  // rose
  { hex: "#BA7517" },  // amber
  { hex: "#533AB7" },  // violet
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.08 });

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

      <div className="max-w-6xl mx-auto">

        {/* ── Two-column shell ── */}
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-20 lg:gap-28 items-start">

          {/* ── LEFT: sticky header ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:sticky lg:top-28"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-7 h-px bg-[#8C7B55]" />
              <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#8C7B55]">
                Our capabilities
              </span>
            </div>

            <h2 className="serif text-5xl lg:text-[52px] font-normal leading-[1.1] tracking-tight text-[#1C1C1A]">
              Construction
              <br />
              <em className="text-[#8C7B55]">services.</em>
            </h2>

            <p className="mt-6 text-[15px] font-light text-[#5A5A52] leading-relaxed max-w-xs">
              Disciplined, regulation-driven construction and planning services
              aligned with long-term asset value and operational certainty.
            </p>

            {/* Divider */}
            <div className="my-8 h-px w-full bg-[#E0DDD4]" />

            {/* Service count */}
            <div className="flex items-end gap-2 mb-10">
              <span className="serif text-[52px] font-normal leading-none text-[#1C1C1A]">
                {services.length}
              </span>
              <span className="text-[13px] font-light text-[#A09880] mb-2 leading-tight">
                core<br />services
              </span>
            </div>

            {/* CTA */}
            <a
              href="/contact"
              className="group inline-flex items-center gap-3 bg-[#1C1C1A] hover:opacity-85 active:scale-[0.99] transition-all duration-200 text-[#FAF9F6] text-[13px] font-medium tracking-wide px-6 py-3.5 rounded-lg"
            >
              Discuss your project
              <FaArrowRight className="text-[11px] group-hover:translate-x-1 transition-transform duration-200" />
            </a>

            {/* Bottom note */}
            <p className="mt-5 text-[11px] font-light text-[#A09880] tracking-wide">
              Free consultation · No commitment
            </p>
          </motion.div>

          {/* ── RIGHT: services list ── */}
          <div className="divide-y divide-[#E0DDD4] border-y border-[#E0DDD4]">
            {services.map((service, i) => {
              const Icon = service.icon;
              const accent = accents[i % accents.length];

              return (
                <motion.div
                  key={i}
                  custom={i + 1}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="group relative py-9 flex gap-6 items-start cursor-default"
                >
                  {/* Accent line — appears on hover */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                    style={{ background: accent.hex }}
                  />

                  {/* Step number */}
                  <div className="flex-shrink-0 w-8 pt-0.5">
                    <span
                      className="text-[11px] font-medium tracking-[0.08em]"
                      style={{ color: accent.hex }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Icon */}
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-white text-[15px] transition-transform duration-200 group-hover:scale-105"
                    style={{ background: accent.hex }}
                  >
                    <Icon />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-2.5">
                      <h3 className="serif text-[22px] font-normal text-[#1C1C1A] leading-snug">
                        {service.title}
                      </h3>
                      {/* Arrow — appears on hover */}
                      <FaArrowRight
                        className="flex-shrink-0 text-[11px] mt-1.5 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1"
                        style={{ color: accent.hex }}
                      />
                    </div>

                    <p className="text-[14px] font-light text-[#5A5A52] leading-relaxed">
                      {service.description}
                    </p>

                    {/* Bottom accent bar */}
                    <div
                      className="mt-5 h-[1.5px] w-8 rounded-full opacity-60"
                      style={{ background: accent.hex }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}