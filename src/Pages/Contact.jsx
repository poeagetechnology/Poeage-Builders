import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { submitContactForm } from "../services/contactService";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaHome,
  FaBuilding,
  FaIndustry,
  FaTools,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const contactInfo = [
  { title: "Office", value: "Tamil Nadu, India", icon: <FaMapMarkerAlt /> },
  { title: "Phone", value: "+91 80568 89616", icon: <FaPhone /> },
  { title: "Email", value: "info@poeagebuilders.com", icon: <FaEnvelope /> },
  { title: "Working Hours", value: "Mon – Sun · 8 AM to 8 PM", icon: <FaClock /> },
];

const projectTypes = [
  { label: "Residential", value: "Residential", icon: <FaHome /> },
  { label: "Commercial", value: "Commercial", icon: <FaBuilding /> },
  { label: "Industrial", value: "Industrial", icon: <FaIndustry /> },
  { label: "Renovation", value: "Renovation", icon: <FaTools /> },
];

const budgets = ["Under ₹10L", "₹10–25L", "₹25–50L", "₹50L–1Cr", "Above ₹1Cr"];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

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
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.projectType || !formData.budget) {
      alert("Please select a project type and budget range.");
      return;
    }
    setLoading(true);
    try {
      await submitContactForm(formData);
      setSuccess(true);
    } catch {
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      ref={ref}
      className="bg-[#FAFAF8] min-h-screen py-24 px-6"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Google Font Import */}
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
          className="mb-16"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-7 h-px bg-[#8C7B55]" />
            <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#8C7B55]">
              Get in touch
            </span>
          </div>

          <h1 className="serif text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight text-[#1C1C1A] mb-4">
            Let's build something
            <br />
            <em className="text-[#8C7B55]">remarkable.</em>
          </h1>

          <p className="text-[15px] font-light text-[#5A5A52] leading-relaxed max-w-md mt-4">
            Share your vision and we'll respond with clarity, honest timelines,
            and full cost transparency.
          </p>
        </motion.div>

        {/* ── Two-column grid ── */}
        <div className="grid lg:grid-cols-[1fr_1.45fr] gap-14 items-start">

          {/* ── LEFT: Contact info ── */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="divide-y divide-[#E0DDD4] border-y border-[#E0DDD4]">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={i}
                  custom={i + 1}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="flex items-start gap-4 py-5"
                >
                  {/* Icon box */}
                  <div className="w-9 h-9 flex items-center justify-center border border-[#D4C9A8] rounded-lg bg-white text-[#8C7B55] text-sm flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-medium tracking-[0.08em] uppercase text-[#A09880] mb-0.5">
                      {item.title}
                    </p>
                    <p className="text-[14px] text-[#1C1C1A]">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call CTA */}
            <motion.div
              custom={6}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="mt-7 bg-[#1C1C1A] rounded-xl px-6 py-5 flex items-center justify-between gap-4"
            >
              <div>
                <p className="text-[13px] text-[#C8C3B0] leading-relaxed">
                  Prefer a quick call?
                  <br />
                  We're available right now.
                </p>
              </div>
              <a
                href="tel:+918056889616"
                className="inline-flex items-center gap-2 text-[12px] font-medium text-[#1C1C1A] bg-[#D4C9A8] hover:bg-[#C8BB96] transition-colors px-4 py-2.5 rounded-lg whitespace-nowrap"
              >
                <FaPhone className="text-[10px]" />
                Call now
              </a>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Form card ── */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="bg-white border border-[#E0DDD4] rounded-2xl p-8 lg:p-10">
              <AnimatePresence mode="wait">
                {success ? (
                  /* ── Success state ── */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-16 gap-4"
                  >
                    <div className="w-14 h-14 rounded-full border border-[#C4D9B0] bg-[#EAF3DE] flex items-center justify-center mb-2">
                      <FaCheckCircle className="text-[#3B6D11] text-2xl" />
                    </div>
                    <h3 className="serif text-2xl font-normal text-[#1C1C1A]">
                      Message received
                    </h3>
                    <p className="text-[14px] text-[#5A5A52] max-w-xs leading-relaxed">
                      Our team will reach out to you within one business day.
                    </p>
                  </motion.div>
                ) : (
                  /* ── Form ── */
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >

                    {/* Name + Email */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Field label="Name">
                        <input
                          name="name"
                          type="text"
                          placeholder="Your full name"
                          onChange={handleChange}
                          required
                          className="w-full bg-[#FAFAF8] focus:bg-white border border-[#D8D5CB] focus:border-[#8C7B55] rounded-lg px-3.5 py-2.5 text-[14px] text-[#1C1C1A] placeholder:text-[#B8B5A8] outline-none transition-colors"
                        />
                      </Field>
                      <Field label="Email">
                        <input
                          name="email"
                          type="email"
                          placeholder="you@email.com"
                          onChange={handleChange}
                          required
                          className="w-full bg-[#FAFAF8] focus:bg-white border border-[#D8D5CB] focus:border-[#8C7B55] rounded-lg px-3.5 py-2.5 text-[14px] text-[#1C1C1A] placeholder:text-[#B8B5A8] outline-none transition-colors"
                        />
                      </Field>
                    </div>

                    {/* Phone */}
                    <Field label="Phone">
                      <input
                        name="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        onChange={handleChange}
                        className="w-full bg-[#FAFAF8] focus:bg-white border border-[#D8D5CB] focus:border-[#8C7B55] rounded-lg px-3.5 py-2.5 text-[14px] text-[#1C1C1A] placeholder:text-[#B8B5A8] outline-none transition-colors"
                      />
                    </Field>

                    <hr className="border-[#E8E5DC]" />

                    {/* Project type pills */}
                    <div>
                      <SectionLabel>Project type</SectionLabel>
                      <div className="flex flex-wrap gap-2">
                        {projectTypes.map((p) => (
                          <button
                            key={p.value}
                            type="button"
                            onClick={() =>
                              setFormData((prev) => ({ ...prev, projectType: p.value }))
                            }
                            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full border text-[12px] font-medium transition-all duration-150
                              ${
                                formData.projectType === p.value
                                  ? "bg-[#1C1C1A] border-[#1C1C1A] text-[#F5F2EA]"
                                  : "bg-transparent border-[#D8D5CB] text-[#5A5A52] hover:border-[#8C7B55] hover:text-[#8C7B55]"
                              }`}
                          >
                            <span className="text-[11px]">{p.icon}</span>
                            {p.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Budget pills */}
                    <div>
                      <SectionLabel>Budget range</SectionLabel>
                      <div className="flex flex-wrap gap-2">
                        {budgets.map((b) => (
                          <button
                            key={b}
                            type="button"
                            onClick={() =>
                              setFormData((prev) => ({ ...prev, budget: b }))
                            }
                            className={`px-4 py-2 rounded-full border text-[12px] font-medium transition-all duration-150
                              ${
                                formData.budget === b
                                  ? "bg-[#1C1C1A] border-[#1C1C1A] text-[#F5F2EA]"
                                  : "bg-transparent border-[#D8D5CB] text-[#5A5A52] hover:border-[#8C7B55] hover:text-[#8C7B55]"
                              }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    <hr className="border-[#E8E5DC]" />

                    {/* Message */}
                    <Field label="Message">
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Tell us about your project, timeline, and any specific requirements…"
                        onChange={handleChange}
                        required
                        className="w-full bg-[#FAFAF8] focus:bg-white border border-[#D8D5CB] focus:border-[#8C7B55] rounded-lg px-3.5 py-2.5 text-[14px] text-[#1C1C1A] placeholder:text-[#B8B5A8] outline-none transition-colors resize-none leading-relaxed"
                      />
                    </Field>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#1C1C1A] hover:opacity-85 active:scale-[0.99] disabled:opacity-60 text-[#FAF9F6] text-[14px] font-medium tracking-wide rounded-lg py-3.5 transition-all duration-150"
                    >
                      {loading ? (
                        "Sending…"
                      ) : (
                        <>
                          Send message
                          <FaPaperPlane className="text-[12px]" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── Small helpers ── */
function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] font-medium tracking-[0.08em] uppercase text-[#8C8C80]">
        {label}
      </label>
      {children}
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <p className="text-[11px] font-medium tracking-[0.08em] uppercase text-[#8C8C80] mb-2.5">
      {children}
    </p>
  );
}