import React from "react";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaGlobe,
  FaFileContract,
  FaDraftingCompass,
  FaExclamationTriangle,
  FaExternalLinkAlt,
  FaSyncAlt,
  FaBalanceScale,
  FaHandshake,
  FaUserShield,
  FaLock,
  FaMoneyCheckAlt,
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
  { bg: "bg-orange-100", text: "text-orange-600" },
  { bg: "bg-indigo-100", text: "text-indigo-600" },
  { bg: "bg-cyan-100", text: "text-cyan-600" },
  { bg: "bg-green-100", text: "text-green-600" },
  { bg: "bg-sky-100", text: "text-sky-600" },
  { bg: "bg-fuchsia-100", text: "text-fuchsia-600" },
  { bg: "bg-amber-100", text: "text-amber-600" },
];


const terms = [
  {
    title: "1. Company Scope & Authority",
    text:
      "Poeage Builders operates as a professional construction and architectural services provider. All representations, quotations, and commitments are subject to written confirmation and contractual agreement.",
    icon: <FaBuilding />,
  },
  {
    title: "2. Website Usage & Accuracy",
    text:
      "Website content is provided for general informational purposes only. While reasonable care is taken to ensure accuracy, Poeage Builders does not guarantee completeness or real-time updates.",
    icon: <FaGlobe />,
  },
  {
    title: "3. Project Engagement & Contracts",
    text:
      "All projects are governed by mutually signed agreements defining scope, timelines, payment milestones, responsibilities, and deliverables.",
    icon: <FaFileContract />,
  },
  {
    title: "4. Design Ownership & Intellectual Property",
    text:
      "All drawings, designs, concepts, and documentation remain the intellectual property of Poeage Builders unless explicitly transferred through written agreement.",
    icon: <FaDraftingCompass />,
  },
  {
    title: "5. Liability & Risk Disclaimer",
    text:
      "Poeage Builders shall not be held liable for indirect, incidental, or consequential damages arising from the use of this website or reliance on preliminary information.",
    icon: <FaExclamationTriangle />,
  },
  {
    title: "6. External References & Links",
    text:
      "Third-party links provided on this website are for reference only. Poeage Builders holds no responsibility for content, security, or policies of external websites.",
    icon: <FaExternalLinkAlt />,
  },
  {
    title: "7. Amendments & Policy Updates",
    text:
      "These Terms & Conditions may be updated periodically to reflect legal, operational, or regulatory changes without prior notice.",
    icon: <FaSyncAlt />,
  },
  {
    title: "8. Governing Law & Jurisdiction",
    text:
      "All terms shall be governed and interpreted in accordance with the laws applicable within the jurisdiction of India.",
    icon: <FaBalanceScale />,
  },
  {
    title: "9. Client Responsibilities",
    text:
      "Clients are responsible for providing accurate information, timely approvals, site access, and compliance with contractual obligations throughout the project lifecycle.",
    icon: <FaHandshake />,
  },
  {
    title: "10. Data Protection & Confidentiality",
    text:
      "All client data, designs, and documentation are handled with strict confidentiality in accordance with applicable data protection and privacy regulations.",
    icon: <FaUserShield />,
  },
  {
    title: "11. Security & Access Control",
    text:
      "Access to project data, drawings, and internal systems is restricted to authorized personnel through controlled access protocols.",
    icon: <FaLock />,
  },
  {
    title: "12. Payments, Taxes & Financial Terms",
    text:
      "All payments, taxes, duties, and statutory charges shall be governed by the terms specified in the executed contract and applicable laws.",
    icon: <FaMoneyCheckAlt />,
  },
];


export default function TermsAndConditions() {
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
            Terms & Conditions
          </h1>

          <div className="mx-auto mt-6 h-[2px] w-28 bg-gradient-to-r from-transparent via-yellow-300 to-transparent" />

          <p className="mt-10 max-w-3xl mx-auto text-gray-600 leading-relaxed text-base">
            These Terms & Conditions govern access to and use of the Poeage
            Builders website and professional services. By engaging with us,
            you acknowledge and agree to the following terms.
          </p>
        </motion.div>

        <div className="space-y-10">
          {terms.map((item, i) => {
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
