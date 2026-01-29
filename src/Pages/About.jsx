import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Founder from "../Assets/Founder.png";
import Cofounder from "../Assets/Co-Founder.png";
import {
  FaGlobe,
  FaChartLine,
  FaHandsHelping,
  FaUserTie,
} from "react-icons/fa";


const leaderThemes = [
  { iconBg: "bg-blue-600" },
  { iconBg: "bg-teal-600" },
];

const valueThemes = [
  { iconBg: "bg-blue-600" },
  { iconBg: "bg-emerald-600" },
  { iconBg: "bg-purple-600" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.25 });
  const [active, setActive] = useState(0);

  const leaders = [
    {
      name: "Gowrishankar Gunasekaran",
      role: "Founder & Managing Director",
      image: Founder,
      bio: "Founder of Poeage Builders, leading the organization with a strong focus on sustainable infrastructure, innovation-driven construction, and long-term value creation. His leadership emphasizes clarity, execution discipline, and ethical growth.",
      icon: <FaUserTie />,
    },
    {
      name: "Gowtham Subramani",
      role: "Co-Founder & Technical Director",
      image: Cofounder,
      bio: "A civil engineering strategist specializing in structural design, execution excellence, and future-ready construction technologies. He ensures every project meets performance, safety, and longevity benchmarks.",
      icon: <FaUserTie />,
    },
  ];

  const values = [
    {
      icon: <FaHandsHelping />,
      title: "Integrity & Collaboration",
      desc: "Transparent partnerships, ethical execution, and long-term professional relationships.",
    },
    {
      icon: <FaChartLine />,
      title: "Growth & Excellence",
      desc: "Relentless improvement through innovation, planning discipline, and execution quality.",
    },
    {
      icon: <FaGlobe />,
      title: "Sustainability",
      desc: "Responsible construction that benefits communities and future generations.",
    },
  ];

  return (
    <section ref={ref} className="relative bg-white py-20 sm:py-24 lg:py-28">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 lg:mb-24"
        >
          <span className="text-xs tracking-[0.35em] uppercase text-amber-600">
            About Poeage Builders
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-5">
            Building with Vision, Precision & Trust
          </h1>

          <p className="text-gray-600 mt-6 leading-relaxed text-sm sm:text-base">
            Poeage Builders is a professionally managed construction firm delivering
            corporate-grade architectural and infrastructure solutions across
            commercial, industrial, and urban sectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 mb-20 lg:mb-28">

          <div className="space-y-3">
            {leaders.map((l, i) => {
              const theme = leaderThemes[i % leaderThemes.length];

              return (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setActive(i)}
                  className={`
                    w-full text-left 
                    px-5 py-4 sm:px-6 sm:py-5
                    rounded-xl sm:rounded-2xl 
                    border transition
                    ${
                      active === i
                        ? "border-amber-400 bg-gray-50 shadow-sm"
                        : "border-gray-200 hover:border-gray-300"
                    }
                  `}
                >
                  <div className="flex items-center gap-3 sm:gap-4 w-full">

                    <div
                      className={`
                        w-9 h-9 sm:w-10 sm:h-10 
                        rounded-lg sm:rounded-xl 
                        flex items-center justify-center 
                        ${theme.iconBg}
                        text-white
                        shadow-sm
                        flex-shrink-0
                      `}
                    >
                      {l.icon}
                    </div>

                    <div className="flex-1">
                      <h3
                        className="
                          font-semibold text-gray-900 
                          text-sm sm:text-base
                          leading-tight

                          break-words
                          line-clamp-2          /* max 2 lines on mobile */

                          sm:whitespace-nowrap /* single line on tablet+ */
                          sm:line-clamp-none
                        "
                      >
                        Mr. {l.name}
                      </h3>

                      <p
                        className="
                          text-xs sm:text-sm 
                          text-gray-500 
                          leading-tight
                          break-words
                        "
                      >
                        {l.role}
                      </p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="
                  bg-white 
                  border border-gray-200 
                  rounded-2xl sm:rounded-3xl 
                  p-6 sm:p-8 lg:p-12 
                  shadow-sm
                "
              >
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 mb-6 sm:mb-8">

                  <img
                    src={leaders[active].image}
                    alt={leaders[active].name}
                    className="
                      w-28 h-28 sm:w-32 sm:h-32 
                      rounded-xl sm:rounded-2xl 
                      object-cover 
                      border border-gray-200 
                      mx-auto sm:mx-0
                    "
                  />

                  <div className="flex-1 text-center sm:text-left">
                    <h3
                      className="
                        text-xl sm:text-2xl 
                        font-extrabold text-gray-900 
                        break-words
                      "
                    >
                      Mr. {leaders[active].name}
                    </h3>
                    <p className="text-amber-600 font-semibold mt-1 text-sm sm:text-base">
                      {leaders[active].role}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {leaders[active].bio}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Our Core Values
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            The principles that guide every project, partnership, and decision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {values.map((v, i) => {
            const theme = valueThemes[i % valueThemes.length];

            return (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -6 }}
                className="
                  bg-white 
                  border border-gray-200 
                  rounded-xl sm:rounded-2xl 
                  p-6 sm:p-8 lg:p-10 
                  text-center 
                  shadow-sm 
                  hover:shadow-md 
                  transition
                "
              >
                <div
                  className={`
                    w-12 h-12 sm:w-14 sm:h-14 
                    mx-auto mb-5 sm:mb-6 
                    rounded-lg sm:rounded-xl 
                    flex items-center justify-center 
                    ${theme.iconBg}
                    text-white text-xl sm:text-2xl 
                    shadow-md
                  `}
                >
                  {v.icon}
                </div>

                <h3 className="font-bold text-gray-900 mb-3 text-sm sm:text-base">
                  {v.title}
                </h3>

                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
