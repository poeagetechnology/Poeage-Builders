import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  FaBriefcase,
  FaUsers,
  FaAward,
  FaBuilding,
  FaChartLine,
  FaDraftingCompass,
  FaCity,
  FaIndustry,
  FaHeadset,
  FaArrowRight,
  FaPlay,
  FaPause,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Industry from "../Assets/Industry.jpg"


const images = [
  {
    url: "https://images.unsplash.com/photo-1600585153490-76fb20a32601?auto=format&fit=crop&w=1600&q=80",
    caption: "Contemporary Architecture",
  },
  {
    url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
    caption: "Urban Infrastructure",
  },
  {
    url: "https://cdn.home-designing.com/wp-content/uploads/2021/08/unique-spiral-staircase.jpg",
    caption: "Precision Engineering",
  },
];

const IMAGE_COUNT = images.length;

const stats = [
  { value: "12+", label: "Projects Delivered", icon: <FaBriefcase /> },
  { value: "15+", label: "Corporate Clients", icon: <FaUsers /> },
  { value: "8+", label: "Years Experience", icon: <FaAward /> },
];

const services = [
  {
    title: "Architectural Planning",
    description:
      "Timeless designs balancing aesthetics, sustainability, and efficiency.",
    icon: <FaDraftingCompass />,
  },
  {
    title: "Urban Development",
    description:
      "Smart infrastructure for evolving metropolitan environments.",
    icon: <FaCity />,
  },
  {
    title: "Industrial Projects",
    description:
      "Regulation-compliant, scalable industrial construction solutions.",
    icon: <FaIndustry />,
  },
  {
    title: "Commercial Buildings",
    description:
      "High-performance commercial spaces built for long-term value.",
    icon: <FaBuilding />,
  },
  {
    title: "Business Expansion",
    description:
      "Construction strategies aligned with sustainable ROI growth.",
    icon: <FaChartLine />,
  },
  {
    title: "Client Support",
    description:
      "End-to-end professional assistance across every project phase.",
    icon: <FaHeadset />,
  },
];


const showcases = [
  {
    title: "Vintage Home",
    desc: "Classic residential homes inspired by heritage architecture, craftsmanship, and timeless design values.",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=80",
    points: [
      "Heritage-inspired architectural detailing",
      "Natural materials and handcrafted finishes",
      "Layouts designed for long-term family living",
    ],
  },
  {
    title: "Smart Home",
    desc: "Modern intelligent homes integrating automation, energy efficiency, and advanced comfort systems.",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80",
    points: [
      "Integrated home automation and controls",
      "Energy-efficient lighting and climate systems",
      "Future-ready digital infrastructure planning",
    ],
  },
  {
    title: "Commercial & Residency",
    desc: "Large-scale mixed-use developments combining commercial spaces with premium residential environments.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    points: [
      "High-density planning and zoning compliance",
      "Optimized circulation and parking systems",
      "Retail, office, and residential integration",
    ],
  },
  {
    title: "Factory & Corporate Company",
    desc: "Industrial and corporate facilities engineered for productivity, safety, and operational scalability.",
    image: Industry,
    points: [
      "Process-driven industrial layout planning",
      "Heavy-load structural and safety systems",
      "Expandable infrastructure for future growth",
    ],
  },
];



const cardThemes = [
  { iconBg: "bg-blue-600", line: "from-blue-500 to-blue-300" },
  { iconBg: "bg-teal-600", line: "from-teal-500 to-teal-300" },
  { iconBg: "bg-purple-600", line: "from-purple-500 to-purple-300" },
  { iconBg: "bg-emerald-600", line: "from-emerald-500 to-emerald-300" },
  { iconBg: "bg-orange-600", line: "from-orange-500 to-orange-300" },
  { iconBg: "bg-rose-600", line: "from-rose-500 to-rose-300" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};


export default function Home() {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.25 });


  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % IMAGE_COUNT);
    }, 5200);

    return () => clearInterval(timer);
  }, [isPlaying]);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative min-h-[calc(100vh-4rem)] pt-24 bg-white flex items-center"
      >
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.7 }}
            className="space-y-9"
          >
            <span className="text-xs tracking-widest uppercase font-semibold text-amber-600">
              Poeage Builders
            </span>

            <h1 className="font-extrabold text-gray-900 leading-[1.06] text-[clamp(2rem,5vw,3.8rem)] lg:text-[4.6rem]">
              Engineering Spaces
              <span className="text-amber-600 block lg:inline lg:ml-2">
                That Endure Time
              </span>
            </h1>

            <p className="text-gray-600 max-w-xl leading-relaxed">
              Refined architectural and construction solutions for corporate,
              commercial, and urban excellence.
            </p>

            <div className="flex gap-4">
              <Link
                to="/contact"
                className="px-7 py-4 rounded-xl font-semibold bg-gradient-to-r from-yellow-400 to-amber-500 text-black shadow-md hover:shadow-lg transition inline-flex items-center gap-2"
              >
                Start Project <FaArrowRight />
              </Link>

              <Link
                to="/about"
                className="px-7 py-4 rounded-xl border border-gray-300 font-semibold text-gray-900 hover:border-gray-500 transition"
              >
                Portfolio
              </Link>
            </div>

            <div className="grid sm:grid-cols-3 gap-8 pt-12">
              {stats.map((s, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-700">
                    {s.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-gray-900">
                      {s.value}
                    </div>
                    <div className="text-xs uppercase tracking-wider text-gray-500">
                      {s.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="relative">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={images[index].url}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />

              <button
                onClick={() => setIsPlaying((p) => !p)}
                className="absolute top-4 right-4 bg-white p-2 rounded-full shadow"
              >
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="text-xs tracking-[0.35em] uppercase text-amber-600">
              Our Expertise
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 mt-4">
              Corporate Construction Services
            </h2>
            <p className="text-gray-600 mt-6">
              Precision-engineered solutions built for longevity and scale.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, i) => {
              const theme = cardThemes[i % cardThemes.length];

              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -6 }}
                  className="bg-white border border-gray-100 rounded-2xl p-10 shadow-sm hover:shadow-md transition"
                >
                  <div
                    className={`w-14 h-14 mb-6 rounded-xl flex items-center justify-center ${theme.iconBg} text-white text-2xl shadow-md`}
                  >
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div
                    className={`mt-8 h-px w-16 bg-gradient-to-r ${theme.line}`}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

<section className="py-28 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    {/* SECTION HEADER */}
    <div className="max-w-3xl mb-24">
      <span className="text-xs tracking-[0.4em] uppercase text-amber-600">
        Our Specializations
      </span>

      <h2 className="
        mt-6 
        text-4xl sm:text-5xl lg:text-6xl 
        font-bold 
        text-gray-900 
        leading-tight
      ">
        Signature Project
        <span className="block text-amber-600 mt-2">
          Categories
        </span>
      </h2>

      <p className="
        mt-8 
        text-base sm:text-lg 
        text-gray-600 
        leading-relaxed
        max-w-2xl
      ">
        Carefully crafted landmark spaces across residential, commercial,
        and industrial domains, engineered for permanence and prestige.
      </p>
    </div>

    <div className="space-y-32">
      {showcases.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center"
        >
          <div>
            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <img
                src={item.image}
                alt={item.title}
                className="
                  w-full 
                  h-[460px] sm:h-[520px] lg:h-[600px] 
                  object-cover 
                  transition-transform duration-700
                  hover:scale-105
                "
              />
            </div>
          </div>

          <div className="max-w-xl">
            <span className="text-xs tracking-[0.3em] uppercase text-amber-600">
              Category
            </span>

            <h3 className="
              mt-5 
              text-3xl sm:text-4xl lg:text-5xl 
              font-semibold 
              text-gray-900 
              leading-snug
            ">
              {item.title}
            </h3>

            <p className="
              mt-7 
              text-base sm:text-lg 
              text-gray-600 
              leading-relaxed
            ">
              {item.desc}
            </p>

            <div className="mt-8 space-y-3 text-sm sm:text-base text-gray-600">
              {item.points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-amber-600 mt-1">—</span>
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="
                inline-flex items-center gap-3 mt-10
                text-sm sm:text-base 
                font-semibold 
                text-amber-600
                hover:text-amber-700 transition
              "
            >
              Contact Our Team <FaArrowRight />
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


    </>
  );
}
