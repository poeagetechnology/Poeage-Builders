import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import emailjs from "emailjs-com";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaCheckCircle,
  FaHome,
  FaBuilding,
  FaIndustry,
  FaTools,
  FaRupeeSign,
} from "react-icons/fa";


const contactThemes = [
  { iconBg: "bg-blue-600", text: "text-blue-600" },     
  { iconBg: "bg-emerald-600", text: "text-emerald-600" },
  { iconBg: "bg-purple-600", text: "text-purple-600" },
  { iconBg: "bg-indigo-600", text: "text-indigo-600" }, 
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.2 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.projectType || !formData.budget) {
      alert("Please select project type and budget range.");
      return;
    }
    setLoading(true);
    try {
      await emailjs.sendForm(
        "service_c8zwr8d",
        "template_bcduukf",
        formRef.current,
        "LFX8iNoiu475bAYhF"
      );
      setSuccess(true);
    } catch {
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const projectTypes = [
    { label: "Residential", value: "Residential", icon: <FaHome /> },
    { label: "Commercial", value: "Commercial", icon: <FaBuilding /> },
    { label: "Industrial", value: "Industrial", icon: <FaIndustry /> },
    { label: "Renovation", value: "Renovation", icon: <FaTools /> },
  ];

  const budgets = [
    "Under ₹10L",
    "₹10–25L",
    "₹25–50L",
    "₹50L–1Cr",
    "Above ₹1Cr",
  ];

  const contactInfo = [
    {
      title: "Office",
      value: "Tamil Nadu, India",
      icon: <FaMapMarkerAlt />,
    },
    {
      title: "Phone",
      value: "+91 80568 89616",
      icon: <FaPhone />,
    },
    {
      title: "Email",
      value: "info@poeagebuilders.com",
      icon: <FaEnvelope />,
    },
    {
      title: "Working Hours",
      value: "Mon – Sun | 8AM – 8PM",
      icon: <FaClock />,
    },
  ];

  return (
    <section ref={ref} className="bg-white py-28">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6"
      >
        <motion.div
          variants={fadeUp}
          className="max-w-3xl mb-20"
        >
          <span className="text-sm font-semibold uppercase tracking-wide text-amber-600">
            Contact Us
          </span>
          <h1 className="text-4xl font-extrabold text-gray-900 mt-3">
            Let’s Discuss Your Project
          </h1>
          <p className="text-gray-600 mt-4 max-w-xl">
            Share your requirements and we’ll guide you with clarity,
            timelines, and cost transparency.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-stretch">
          <div className="space-y-6">
            {contactInfo.map((c, i) => {
              const theme = contactThemes[i % contactThemes.length];

              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="
                    bg-white 
                    border border-gray-200 
                    rounded-2xl 
                    p-6 
                    flex gap-5 
                    items-start
                    shadow-sm 
                    hover:shadow-md 
                    transition
                  "
                >
                  <div
                    className={`
                      w-12 h-12 rounded-xl 
                      flex items-center justify-center 
                      ${theme.iconBg}
                      text-white text-lg
                      shadow-md
                      flex-shrink-0
                    `}
                  >
                    {c.icon}
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {c.title}
                    </h4>
                    <p className="text-gray-600 mt-1 text-sm">
                      {c.value}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            <motion.div
              variants={fadeUp}
              className="
                mt-10 
                bg-gray-50 
                border border-gray-200 
                rounded-2xl 
                p-6
              "
            >
              <p className="text-sm font-semibold text-gray-900">
                Prefer a quick discussion?
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Call us directly for immediate consultation.
              </p>
            </motion.div>
          </div>

          <motion.div variants={fadeUp}>
            <AnimatePresence mode="wait">
              {success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="
                    bg-white 
                    border border-emerald-300 
                    rounded-2xl 
                    p-12 
                    text-center
                    shadow-md
                  "
                >
                  <FaCheckCircle className="text-emerald-500 text-5xl mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Message Sent Successfully
                  </h3>
                  <p className="text-gray-600">
                    Our team will contact you shortly.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="
                    bg-white 
                    border border-gray-200 
                    rounded-2xl 
                    p-10 
                    shadow-md
                  "
                >
                  <input type="hidden" name="projectType" value={formData.projectType} />
                  <input type="hidden" name="budget" value={formData.budget} />

                  {/* BASIC INFO */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {[
                      { name: "name", icon: <FaUser />, placeholder: "Name" },
                      { name: "email", icon: <FaEnvelope />, placeholder: "Email" },
                      { name: "phone", icon: <FaPhone />, placeholder: "Phone" },
                    ].map((f) => (
                      <div key={f.name} className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                          {f.icon}
                        </span>
                        <input
                          name={f.name}
                          onChange={handleChange}
                          required={f.name !== "phone"}
                          placeholder={f.placeholder}
                          className="
                            w-full pl-12 pr-4 py-3 
                            rounded-xl 
                            border border-gray-300 
                            focus:border-amber-500 
                            focus:ring-2 focus:ring-amber-200 
                            outline-none
                          "
                        />
                      </div>
                    ))}
                  </div>

                  <div className="mb-8">
                    <p className="text-xs font-semibold uppercase text-gray-600 mb-3">
                      Project Type
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {projectTypes.map((p) => (
                        <motion.button
                          key={p.value}
                          whileTap={{ scale: 0.96 }}
                          type="button"
                          onClick={() =>
                            setFormData({ ...formData, projectType: p.value })
                          }
                          className={`
                            flex items-center gap-3 px-4 py-3 
                            rounded-xl border text-sm transition
                            ${
                              formData.projectType === p.value
                                ? "bg-amber-100 border-amber-400 text-amber-700"
                                : "border-gray-300 hover:border-gray-400"
                            }
                          `}
                        >
                          {p.icon}
                          {p.label}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <p className="text-xs font-semibold uppercase text-gray-600 mb-3">
                      Budget Range
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {budgets.map((b) => (
                        <motion.button
                          key={b}
                          whileTap={{ scale: 0.96 }}
                          type="button"
                          onClick={() =>
                            setFormData({ ...formData, budget: b })
                          }
                          className={`
                            flex items-center justify-center gap-2 px-4 py-3 
                            rounded-xl border text-sm transition
                            ${
                              formData.budget === b
                                ? "bg-amber-100 border-amber-400 text-amber-700"
                                : "border-gray-300 hover:border-gray-400"
                            }
                          `}
                        >
                          <FaRupeeSign />
                          {b}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="text-xs font-semibold uppercase text-gray-600">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      onChange={handleChange}
                      required
                      className="
                        w-full mt-2 px-4 py-3 
                        rounded-xl 
                        border border-gray-300 
                        focus:border-amber-500 
                        focus:ring-2 focus:ring-amber-200 
                        outline-none resize-none
                      "
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    disabled={loading}
                    className="
                      w-full 
                      bg-gradient-to-r from-yellow-400 to-amber-500 
                      hover:brightness-110 
                      text-black font-extrabold 
                      py-4 rounded-xl 
                      flex items-center justify-center gap-3 
                      shadow-md 
                      transition
                    "
                  >
                    {loading ? "Sending..." : <>Send Message <FaPaperPlane /></>}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
