import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaDraftingCompass,
  FaCogs,
  FaLeaf,
  FaCity,
  FaArrowRight,
} from "react-icons/fa";


const serviceThemes = [
  { iconBg: "bg-blue-600", line: "from-blue-500 to-blue-300" },
  { iconBg: "bg-teal-600", line: "from-teal-500 to-teal-300" },
  { iconBg: "bg-purple-600", line: "from-purple-500 to-purple-300" },
  { iconBg: "bg-emerald-600", line: "from-emerald-500 to-emerald-300" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  const services = [
    {
      number: "01",
      title: "Structural Design",
      description:
        "Code-compliant structural systems engineered for durability, load efficiency, and long-term safety.",
      icon: FaDraftingCompass,
    },
    {
      number: "02",
      title: "Smart Construction",
      description:
        "Digitally driven construction processes ensuring precision, predictability, and execution control.",
      icon: FaCogs,
    },
    {
      number: "03",
      title: "Green Architecture",
      description:
        "Sustainable architectural strategies balancing environmental responsibility with modern form.",
      icon: FaLeaf,
    },
    {
      number: "04",
      title: "Urban Planning",
      description:
        "Strategic planning frameworks for scalable, future-ready urban developments.",
      icon: FaCity,
    },
  ];

  return (
    <section
      ref={ref}
      className="relative bg-white py-24 sm:py-28 lg:py-36"
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-xl"
          >
            <span className="text-xs tracking-[0.4em] uppercase text-amber-600">
              Our Capabilities
            </span>

            <h2
              className="
                mt-6
                text-3xl sm:text-4xl lg:text-5xl
                font-extrabold
                text-gray-900
                leading-tight
              "
            >
              Construction Services
              <span className="block mt-3 text-amber-600">
                Engineered for Permanence
              </span>
            </h2>

            <p className="mt-8 text-gray-600 leading-relaxed">
              Poeage Builders delivers disciplined, regulation-driven
              construction and planning services aligned with long-term
              asset value and operational certainty.
            </p>

            <a
              href="/contact"
              className="
                inline-flex items-center gap-3
                mt-10 sm:mt-12
                px-8 sm:px-10
                py-3 sm:py-4
                rounded-xl
                bg-gradient-to-r from-yellow-400 to-amber-500
                text-black font-semibold
                shadow-md
                hover:shadow-lg
                hover:scale-[1.03]
                transition-all duration-300
              "
            >
              Discuss Your Project
              <FaArrowRight />
            </a>
          </motion.div>

          <div className="space-y-14 sm:space-y-16">
            {services.map((service, i) => {
              const Icon = service.icon;
              const theme = serviceThemes[i % serviceThemes.length];

              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{
                    duration: 0.7,
                    ease: "easeOut",
                    delay: i * 0.12,
                  }}
                  className="
                    relative
                    lg:pl-20
                    lg:border-l lg:border-gray-200
                  "
                >
                  <div
                    className="
                      hidden lg:block
                      absolute -left-4 top-0
                      text-6xl font-extrabold
                      text-gray-100 select-none
                    "
                  >
                    {service.number}
                  </div>

                  <div
                    className={`
                      w-14 h-14 mb-5
                      rounded-xl
                      flex items-center justify-center
                      ${theme.iconBg}
                      text-white text-2xl
                      shadow-md
                      transition-transform duration-300
                      hover:scale-110
                    `}
                  >
                    <Icon />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed max-w-lg">
                    {service.description}
                  </p>

                  <div
                    className={`
                      mt-6 h-px w-20
                      bg-gradient-to-r ${theme.line}
                    `}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
