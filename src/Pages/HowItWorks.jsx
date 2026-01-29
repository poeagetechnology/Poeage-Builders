import React from "react";
import { motion } from "framer-motion";
import {
  FaClipboardList,
  FaMapMarkedAlt,
  FaDraftingCompass,
  FaFileSignature,
  FaHardHat,
  FaClipboardCheck,
  FaHandshake,
} from "react-icons/fa";


const stepThemes = [
  { iconBg: "bg-blue-600", line: "from-blue-500 to-blue-300" },
  { iconBg: "bg-teal-600", line: "from-teal-500 to-teal-300" },
  { iconBg: "bg-purple-600", line: "from-purple-500 to-purple-300" },
  { iconBg: "bg-emerald-600", line: "from-emerald-500 to-emerald-300" },
  { iconBg: "bg-orange-600", line: "from-orange-500 to-orange-300" },
  { iconBg: "bg-rose-600", line: "from-rose-500 to-rose-300" },
  { iconBg: "bg-indigo-600", line: "from-indigo-500 to-indigo-300" },
];


const fadeSide = {
  hidden: (dir) => ({
    opacity: 0,
    x: dir === "left" ? -50 : 50,
  }),
  visible: {
    opacity: 1,
    x: 0,
  },
};

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Requirement Discovery",
      desc: "Understanding business goals, scope, budget, and constraints before any commitment.",
      icon: <FaClipboardList />,
    },
    {
      step: "02",
      title: "Site Analysis & Feasibility",
      desc: "Evaluating site conditions, regulations, risks, and cost viability.",
      icon: <FaMapMarkedAlt />,
    },
    {
      step: "03",
      title: "Design & Planning",
      desc: "Architectural and technical planning aligned with execution reality.",
      icon: <FaDraftingCompass />,
    },
    {
      step: "04",
      title: "Approval & Scheduling",
      desc: "Final approvals, BOQ confirmation, and disciplined timelines.",
      icon: <FaFileSignature />,
    },
    {
      step: "05",
      title: "Construction & Execution",
      desc: "Controlled on-site execution with strict quality oversight.",
      icon: <FaHardHat />,
    },
    {
      step: "06",
      title: "Inspection & Handover",
      desc: "Final verification, snag resolution, and documentation.",
      icon: <FaClipboardCheck />,
    },
    {
      step: "07",
      title: "Post-Completion Support",
      desc: "Ongoing assistance and long-term client support.",
      icon: <FaHandshake />,
    },
  ];

  return (
    <section className="relative py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-28"
        >
          <span className="text-xs tracking-[0.35em] uppercase text-amber-600">
            Process
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
            How We Work
          </h2>
          <p className="mt-6 text-gray-600 leading-relaxed">
            A disciplined execution framework built for clarity,
            accountability, and long-term value.
          </p>
        </motion.div>

        <div className="hidden lg:block absolute top-[260px] bottom-0 left-1/2 w-px bg-gray-200" />

        <div className="space-y-28 relative">
          {steps.map((item, index) => {
            const isLeft = index % 2 === 0;
            const theme = stepThemes[index % stepThemes.length];

            return (
              <motion.div
                key={index}
                custom={isLeft ? "left" : "right"}
                variants={fadeSide}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`
                  relative flex
                  ${isLeft ? "lg:justify-start" : "lg:justify-end"}
                `}
              >
                <div
                  className={`
                    hidden lg:block absolute top-1/2
                    ${isLeft ? "left-1/2 ml-2" : "right-1/2 mr-2"}
                    w-20 h-px
                    bg-gradient-to-r
                    ${
                      isLeft
                        ? `from-gray-300 to-transparent`
                        : `from-transparent to-gray-300`
                    }
                  `}
                />

                <div
                  className="
                    relative w-full lg:w-[46%]
                    bg-white rounded-3xl
                    px-10 py-12

                    border border-gray-200
                    hover:border-gray-300

                    shadow-sm
                    hover:shadow-md

                    transition-all duration-500
                  "
                >
                  <div
                    className="
                      absolute top-6 right-8
                      text-6xl font-extrabold
                      text-gray-100 select-none
                    "
                  >
                    {item.step}
                  </div>

                  <div
                    className={`
                      w-16 h-16 mb-10
                      rounded-2xl
                      flex items-center justify-center
                      ${theme.iconBg}
                      text-white text-2xl
                      shadow-md
                      transition-transform duration-300
                      group-hover:scale-110
                    `}
                  >
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-10">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed relative z-10">
                    {item.desc}
                  </p>

                  <div
                    className={`
                      mt-10 h-px w-16 
                      bg-gradient-to-r ${theme.line}
                    `}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
