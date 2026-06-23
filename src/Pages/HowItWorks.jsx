import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { steps } from "../data/HowItWorksData";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeSide = {
  hidden: (dir) => ({ opacity: 0, x: dir === "left" ? -40 : 40 }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

/* Warm stone palette accent per step — cycles */
const accents = [
  { dot: "bg-[#8C7B55]", text: "text-[#8C7B55]", bar: "bg-[#8C7B55]" },
  { dot: "bg-[#3B6D11]", text: "text-[#3B6D11]", bar: "bg-[#3B6D11]" },
  { dot: "bg-[#185FA5]", text: "text-[#185FA5]", bar: "bg-[#185FA5]" },
  { dot: "bg-[#993556]", text: "text-[#993556]", bar: "bg-[#993556]" },
  { dot: "bg-[#BA7517]", text: "text-[#BA7517]", bar: "bg-[#BA7517]" },
  { dot: "bg-[#533AB7]", text: "text-[#533AB7]", bar: "bg-[#533AB7]" },
  { dot: "bg-[#0F6E56]", text: "text-[#0F6E56]", bar: "bg-[#0F6E56]" },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.05 });

  return (
    <section
      ref={ref}
      className="bg-[#FAFAF8] py-28 px-6 overflow-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Font import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');
        .serif { font-family: 'DM Serif Display', serif; }
      `}</style>

      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-2xl mb-24"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-7 h-px bg-[#8C7B55]" />
            <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#8C7B55]">
              Our process
            </span>
          </div>

          <h2 className="serif text-5xl lg:text-[56px] font-normal leading-[1.1] tracking-tight text-[#1C1C1A]">
            How we work<br />
            <em className="text-[#8C7B55]">with you.</em>
          </h2>

          <p className="mt-5 text-[15px] font-light text-[#5A5A52] leading-relaxed max-w-md">
            A disciplined execution framework built for clarity,
            accountability, and lasting value — at every stage.
          </p>
        </motion.div>

        {/* ── Steps ── */}
        <div className="space-y-0">
          {steps.map((item, index) => {
            const isLeft = index % 2 === 0;
            const accent = accents[index % accents.length];
            const Icon = item.icon;
            const stepNum = String(index + 1).padStart(2, "0");

            return (
              <div key={index} className="relative">

                {/* Desktop: alternating layout */}
                <motion.div
                  custom={isLeft ? "left" : "right"}
                  variants={fadeSide}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  className={`hidden lg:grid grid-cols-2 gap-0 items-stretch min-h-[220px] border-b border-[#E0DDD4] ${
                    index === 0 ? "border-t" : ""
                  }`}
                >
                  {/* LEFT CELL */}
                  <div
                    className={`flex items-center px-12 py-10 ${
                      isLeft
                        ? "border-r border-[#E0DDD4] bg-white"
                        : "bg-[#FAFAF8]"
                    }`}
                  >
                    {isLeft ? (
                      <StepCard item={item} Icon={Icon} accent={accent} stepNum={stepNum} />
                    ) : (
                      <StepMeta stepNum={stepNum} accent={accent} isLeft={false} />
                    )}
                  </div>

                  {/* RIGHT CELL */}
                  <div
                    className={`flex items-center px-12 py-10 ${
                      !isLeft
                        ? "border-l border-[#E0DDD4] bg-white"
                        : "bg-[#FAFAF8]"
                    }`}
                  >
                    {!isLeft ? (
                      <StepCard item={item} Icon={Icon} accent={accent} stepNum={stepNum} />
                    ) : (
                      <StepMeta stepNum={stepNum} accent={accent} isLeft={true} />
                    )}
                  </div>
                </motion.div>

                {/* Mobile: stacked */}
                <motion.div
                  custom={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  className={`lg:hidden border-b border-[#E0DDD4] bg-white px-6 py-8 ${
                    index === 0 ? "border-t" : ""
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-[11px] font-medium tracking-[0.1em] ${accent.text}`}>
                      {stepNum}
                    </span>
                    <span className="flex-1 h-px bg-[#E0DDD4]" />
                  </div>
                  <StepCard item={item} Icon={Icon} accent={accent} stepNum={stepNum} mobile />
                </motion.div>

              </div>
            );
          })}
        </div>

        {/* ── Footer note ── */}
        <motion.div
          variants={fadeUp}
          custom={steps.length + 1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 flex items-center gap-4"
        >
          <span className="block w-7 h-px bg-[#C8C3B0]" />
          <p className="text-[12px] font-light text-[#A09880] tracking-wide">
            Every project follows this sequence — no shortcuts, no surprises.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

/* ── Step content card ── */
function StepCard({ item, Icon, accent, stepNum, mobile }) {
  return (
    <div className={`w-full ${mobile ? "" : "max-w-sm"}`}>
      {/* Step number + icon row */}
      <div className="flex items-center gap-4 mb-5">
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center text-white text-base flex-shrink-0`}
          style={{ background: accent.dot.replace("bg-[", "").replace("]", "") }}
        >
          <Icon />
        </div>
        {!mobile && (
          <span className={`text-[11px] font-medium tracking-[0.1em] ${accent.text}`}>
            Step {stepNum}
          </span>
        )}
      </div>

      <h3 className="serif text-2xl font-normal text-[#1C1C1A] leading-snug mb-3">
        {item.title}
      </h3>

      <p className="text-[14px] font-light text-[#5A5A52] leading-relaxed mb-5">
        {item.desc}
      </p>

      {/* Accent bar */}
      <div
        className="h-[2px] w-10 rounded-full"
        style={{ background: accent.dot.replace("bg-[", "").replace("]", "") }}
      />
    </div>
  );
}

/* ── Step number / meta shown on the opposite side (desktop only) ── */
function StepMeta({ stepNum, accent, isLeft }) {
  return (
    <div className={`w-full flex ${isLeft ? "justify-end" : "justify-start"}`}>
      <div className="text-center">
        <p
          className={`text-[80px] font-light leading-none tracking-tighter select-none`}
          style={{
            color: accent.dot.replace("bg-[", "").replace("]", ""),
            opacity: 0.12,
          }}
        >
          {stepNum}
        </p>
        <p className={`text-[11px] font-medium tracking-[0.12em] uppercase mt-1 ${accent.text}`}>
          Step {stepNum}
        </p>
      </div>
    </div>
  );
}