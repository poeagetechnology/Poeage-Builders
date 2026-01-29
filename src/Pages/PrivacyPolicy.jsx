import React from "react";
import { motion } from "framer-motion";
import {
  FaUserShield,
  FaBullseye,
  FaLock,
  FaShareAlt,
  FaCookieBite,
  FaUserCog,
  FaSyncAlt,
} from "react-icons/fa";


const container = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
      staggerChildren: 0.12,
    },
  },
};

const box = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};


const iconThemes = [
  { bg: "bg-blue-100", text: "text-blue-600" },
  { bg: "bg-emerald-100", text: "text-emerald-600" },
  { bg: "bg-purple-100", text: "text-purple-600" },
  { bg: "bg-rose-100", text: "text-rose-600" },
  { bg: "bg-teal-100", text: "text-teal-600" },
  { bg: "bg-indigo-100", text: "text-indigo-600" },
  { bg: "bg-orange-100", text: "text-orange-600" },
];


const policies = [
  {
    title: "1. Information Collection",
    text:
      "We may collect personal information including name, contact details, company name, and project-related information when you submit inquiries or engage our services.",
    icon: <FaUserShield />,
  },
  {
    title: "2. Purpose of Data Usage",
    text:
      "Collected data is used strictly for communication, project evaluation, service delivery, and internal operational improvement.",
    icon: <FaBullseye />,
  },
  {
    title: "3. Data Security Measures",
    text:
      "Appropriate technical and organizational safeguards are implemented to protect personal data from unauthorized access, misuse, or disclosure.",
    icon: <FaLock />,
  },
  {
    title: "4. Data Sharing & Disclosure",
    text:
      "Poeage Builders does not sell, rent, or trade personal information. Data may be shared only when legally required or contractually necessary.",
    icon: <FaShareAlt />,
  },
  {
    title: "5. Cookies & Analytics",
    text:
      "Cookies may be used to analyze site performance and enhance user experience. Users may disable cookies through browser settings.",
    icon: <FaCookieBite />,
  },
  {
    title: "6. User Rights & Control",
    text:
      "You may request access, correction, or deletion of personal information by contacting Poeage Builders directly.",
    icon: <FaUserCog />,
  },
  {
    title: "7. Policy Revisions",
    text:
      "This Privacy Policy may be updated periodically to reflect legal, regulatory, or operational changes.",
    icon: <FaSyncAlt />,
  },
];


export default function PrivacyPolicy() {
  return (
    <section className="relative bg-[#fafafa] py-24 lg:py-32 overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative max-w-4xl mx-auto px-6 lg:px-12"
      >
        <motion.div variants={box} className="mb-20 text-center">
          <span className="text-xs tracking-[0.4em] uppercase text-yellow-500">
            Legal
          </span>

          <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
            Privacy Policy
          </h1>

          <div className="mx-auto mt-6 h-[2px] w-28 bg-gradient-to-r from-transparent via-yellow-300 to-transparent" />

          <p className="mt-10 max-w-3xl mx-auto text-gray-600 leading-relaxed text-base">
            Poeage Builders values your privacy and is committed to protecting
            personal information shared with us through our website or services.
          </p>
        </motion.div>

        <div className="space-y-10">
          {policies.map((item, i) => {
            const theme = iconThemes[i % iconThemes.length];

            return (
              <motion.div
                key={i}
                variants={box}
                viewport={{ once: true, margin: "-80px" }}
                initial="hidden"
                whileInView="visible"
                className="
                  relative
                  rounded-2xl
                  bg-white
                  border border-gray-200
                  px-8 py-10
                  shadow-[0_12px_40px_rgba(0,0,0,0.06)]
                  transition
                  hover:shadow-[0_18px_60px_rgba(0,0,0,0.08)]
                "
              >
                <div
                  className={`
                    w-12 h-12 mb-6
                    rounded-xl
                    flex items-center justify-center
                    ${theme.bg}
                    ${theme.text}
                    text-xl
                    shadow-sm
                  `}
                >
                  {item.icon}
                </div>

                <h2 className="text-lg font-semibold text-gray-900 mb-4 tracking-wide">
                  {item.title}
                </h2>

                <p className="text-gray-700 leading-relaxed text-sm">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
