import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaBriefcase, FaUsers, FaAward, FaBuilding,
  FaChartLine, FaDraftingCompass, FaCity,
  FaIndustry, FaHeadset, FaArrowRight,
} from "react-icons/fa";
import { stats, services, showcases } from "../data/HomeData";

/* ── Icon map ────────────────────────────────────────────────────────────── */
const iconMap = {
  FaBriefcase, FaUsers, FaAward, FaBuilding,
  FaChartLine, FaDraftingCompass, FaCity,
  FaIndustry, FaHeadset,
};
const homevideo = "/homepage_video.mp4";

/* ── Design tokens (matches Header & About) ──────────────────────────────── */
const T = {
  ivory:      "#FEFCF7",
  ivoryDim:   "#F4F1E8",
  green:      "#1B3A2D",
  greenMid:   "#2A5C44",
  gold:       "#B8924A",
  goldLight:  "#D4AF72",
  ink:        "#111410",
  muted:      "#6B7B6E",
  border:     "rgba(27,58,45,0.10)",
  borderGold: "rgba(184,146,74,0.22)",
};

/* ── Shared animation variant ────────────────────────────────────────────── */
const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] } },
};

/* ── Section label (reused) ──────────────────────────────────────────────── */
function Eyebrow({ children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
      <span style={{ display: "inline-block", width: 28, height: 1, background: T.gold }} />
      <span style={{
        fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
        fontSize: 14, color: T.gold, letterSpacing: "0.06em",
      }}>
        {children}
      </span>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════════════ */
export default function Home() {
  const heroRef  = useRef(null);
  const videoRef = useRef(null);
  const inView   = useInView(heroRef, { threshold: 0.15 });

  /* pause/play video with visibility */
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    inView ? v.play().catch(() => {}) : v.pause();
  }, [inView]);

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif" }}>

      {/* ══════════════════════════  HERO  ═══════════════════════════════ */}
      <section
        ref={heroRef}
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
      <motion.video
  ref={videoRef}
  src={homevideo}
  autoPlay
  muted
  loop
  playsInline
  initial={{ scale: 1.06 }}
  animate={{ scale: 1.12 }}
  transition={{ duration: 22, ease: "linear" }}
  style={{
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  }}
/>
        {/* layered overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(160deg, rgba(10,14,11,0.88) 0%, rgba(27,58,45,0.72) 60%, rgba(15,20,13,0.82) 100%)",
        }} />

        {/* gold bottom fade */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "30%",
          background: "linear-gradient(to top, rgba(10,14,11,0.85), transparent)",
        }} />

        {/* hero content */}
        <div style={{
          position: "relative", zIndex: 10,
          maxWidth: 860, width: "100%",
          padding: "0 clamp(24px, 5vw, 56px)",
          textAlign: "center",
          marginTop: "clamp(64px, 8vw, 80px)",
        }}>
          {/* eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 12,
              marginBottom: 28,
            }}
          >
            <span style={{ width: 24, height: 1, background: T.goldLight, display: "inline-block" }} />
            <span style={{
              fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
              fontSize: 15, color: T.goldLight, letterSpacing: "0.08em",
            }}>
              Poeage Builders
            </span>
            <span style={{ width: 24, height: 1, background: T.goldLight, display: "inline-block" }} />
          </motion.div>

          {/* headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(38px, 7vw, 76px)",
              fontWeight: 600, lineHeight: 1.08,
              color: "#FEFCF7", margin: "0 0 6px",
              letterSpacing: "-0.02em",
            }}
          >
            Engineering Landmarks
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(38px, 7vw, 76px)",
              fontWeight: 400, fontStyle: "italic",
              lineHeight: 1.08, color: T.goldLight,
              margin: "0 0 32px", letterSpacing: "-0.02em",
            }}
          >
            That Stand the Test of Time
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.26 }}
            style={{
              fontSize: "clamp(14px, 2vw, 17px)",
              color: "rgba(254,252,247,0.68)",
              lineHeight: 1.8, margin: "0 auto 40px",
              maxWidth: 560,
            }}
          >
            Delivering large-scale construction, architectural excellence,
            and infrastructure solutions built for durability, precision,
            and long-term performance.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}
          >
            <Link
              to="/projects"
              style={{
                display: "inline-flex", alignItems: "center", gap: 9,
                padding: "13px 28px",
                background: T.gold, color: T.ivory,
                fontSize: 13, fontWeight: 600, letterSpacing: "0.10em",
                textTransform: "uppercase", textDecoration: "none",
                fontFamily: "'Outfit', sans-serif",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = "0.88"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}
            >
              View Projects <FaArrowRight size={12} />
            </Link>

            <Link
              to="/contact"
              style={{
                display: "inline-flex", alignItems: "center", gap: 9,
                padding: "13px 28px",
                border: "1px solid rgba(254,252,247,0.30)",
                color: "#FEFCF7", background: "transparent",
                fontSize: 13, fontWeight: 600, letterSpacing: "0.10em",
                textTransform: "uppercase", textDecoration: "none",
                fontFamily: "'Outfit', sans-serif",
                transition: "border-color 0.25s",
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(254,252,247,0.70)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(254,252,247,0.30)"}
            >
              Get a Quote
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.46 }}
            style={{
              display: "flex", justifyContent: "center",
              gap: 0, flexWrap: "wrap",
              marginTop: "clamp(48px, 7vw, 72px)",
              borderTop: "1px solid rgba(255,255,255,0.10)",
              paddingTop: "clamp(32px, 5vw, 48px)",
            }}
          >
            {Array.isArray(stats) && stats.map((s, i) => {
              const Icon = iconMap[s.icon];
              return (
                <div key={i} style={{
                  display: "flex", flexDirection: "column",
                  alignItems: "center", gap: 8,
                  padding: "0 clamp(20px, 4vw, 44px)",
                  borderRight: i < stats.length - 1
                    ? "1px solid rgba(255,255,255,0.10)" : "none",
                }}>
                  {Icon && (
                    <div style={{
                      width: 38, height: 38,
                      border: "1px solid rgba(212,175,114,0.30)",
                      display: "flex", alignItems: "center",
                      justifyContent: "center",
                      color: T.goldLight, fontSize: 15,
                      marginBottom: 4,
                    }}>
                      <Icon />
                    </div>
                  )}
                  <span style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(22px, 3.5vw, 30px)",
                    fontWeight: 600, color: "#FEFCF7", lineHeight: 1,
                  }}>
                    {s.value}
                  </span>
                  <span style={{
                    fontSize: 11, color: "rgba(254,252,247,0.45)",
                    letterSpacing: "0.09em", textTransform: "uppercase",
                  }}>
                    {s.label}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════  SERVICES  ═══════════════════════════ */}
      <section style={{
        background: T.ivory,
        padding: "clamp(72px, 10vw, 120px) clamp(20px, 5vw, 56px)",
      }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>

          {/* heading */}
          <motion.div
            variants={fadeUp} initial="hidden"
            whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            style={{ maxWidth: 560, marginBottom: "clamp(48px, 7vw, 80px)" }}
          >
            <Eyebrow>Our Expertise</Eyebrow>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(28px, 4.5vw, 44px)",
              fontWeight: 600, color: T.green,
              margin: "0 0 20px", lineHeight: 1.12,
              letterSpacing: "-0.01em",
            }}>
              Corporate Construction Services
            </h2>
            <p style={{ fontSize: "clamp(14px, 1.7vw, 15px)", color: T.muted, lineHeight: 1.8, margin: 0 }}>
              Precision-engineered solutions built for longevity and scale.
            </p>
          </motion.div>

          {/* services grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            border: `1px solid ${T.border}`,
          }}>
            {Array.isArray(services) && services.map((service, i) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  whileHover={{ backgroundColor: T.green }}
                  style={{
                    padding: "clamp(28px, 4vw, 44px) clamp(24px, 3vw, 36px)",
                    borderRight: `1px solid ${T.border}`,
                    borderBottom: `1px solid ${T.border}`,
                    background: T.ivory,
                    transition: "background 0.3s ease",
                    cursor: "default",
                  }}
                  className="pb-svc-card"
                >
                  {/* icon box */}
                  <div className="pb-svc-icon" style={{
                    width: 44, height: 44,
                    border: `1px solid ${T.borderGold}`,
                    display: "flex", alignItems: "center",
                    justifyContent: "center",
                    color: T.gold, fontSize: 18,
                    marginBottom: 24,
                    transition: "border-color 0.3s, color 0.3s",
                  }}>
                    {Icon && <Icon />}
                  </div>

                  <h3 className="pb-svc-title" style={{
                    fontSize: "clamp(15px, 1.8vw, 17px)",
                    fontWeight: 600, color: T.green,
                    margin: "0 0 12px", lineHeight: 1.3,
                    transition: "color 0.3s",
                  }}>
                    {service.title}
                  </h3>

                  <p className="pb-svc-desc" style={{
                    fontSize: "clamp(13px, 1.5vw, 14px)",
                    color: T.muted, lineHeight: 1.75,
                    margin: 0, transition: "color 0.3s",
                  }}>
                    {service.description}
                  </p>

                  {/* gold rule */}
                  <div className="pb-svc-rule" style={{
                    marginTop: 28, width: 32, height: 1,
                    background: T.borderGold,
                    transition: "background 0.3s, width 0.3s",
                  }} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════  SHOWCASES  ══════════════════════════ */}
      <section style={{
        background: T.ivoryDim,
        padding: "clamp(72px, 10vw, 120px) clamp(20px, 5vw, 56px)",
      }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>

          {/* heading */}
          <motion.div
            variants={fadeUp} initial="hidden"
            whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            style={{ maxWidth: 560, marginBottom: "clamp(56px, 8vw, 96px)" }}
          >
            <Eyebrow>Our Specialisations</Eyebrow>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(28px, 4.5vw, 44px)",
              fontWeight: 600, color: T.green,
              margin: "0 0 8px", lineHeight: 1.12,
              letterSpacing: "-0.01em",
            }}>
              Signature Project{" "}
              <em style={{ fontStyle: "italic", color: T.gold }}>Categories</em>
            </h2>
            <p style={{ fontSize: "clamp(14px, 1.7vw, 15px)", color: T.muted, lineHeight: 1.8, margin: "16px 0 0" }}>
              Carefully crafted landmark spaces across residential,
              commercial, and industrial domains.
            </p>
          </motion.div>

          {/* showcase rows */}
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(64px, 10vw, 104px)" }}>
            {Array.isArray(showcases) && showcases.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.75 }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "clamp(32px, 5vw, 64px)",
                  alignItems: "center",
                  direction: i % 2 !== 0 ? "rtl" : "ltr",
                }}
              >
                {/* image */}
                <div style={{ direction: "ltr", overflow: "hidden", position: "relative" }}>
                  {/* offset gold frame */}
                  <div style={{
                    position: "absolute",
                    top: i % 2 === 0 ? -10 : "auto",
                    bottom: i % 2 !== 0 ? -10 : "auto",
                    left: i % 2 === 0 ? -10 : "auto",
                    right: i % 2 !== 0 ? -10 : "auto",
                    width: "55%", height: "55%",
                    border: `1px solid ${T.borderGold}`,
                    zIndex: 0, pointerEvents: "none",
                  }} />
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.6 }}
                    style={{
                      position: "relative", zIndex: 1,
                      width: "100%",
                      height: "clamp(280px, 40vw, 520px)",
                      objectFit: "cover",
                      display: "block",
                      filter: "grayscale(8%)",
                    }}
                  />
                </div>

                {/* text */}
                <div style={{ direction: "ltr", paddingTop: 8 }}>
                  <Eyebrow>Category</Eyebrow>

                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(26px, 4vw, 38px)",
                    fontWeight: 600, color: T.green,
                    margin: "0 0 20px", lineHeight: 1.15,
                  }}>
                    {item.title}
                  </h3>

                  <div style={{ width: 36, height: 1, background: T.gold, marginBottom: 20 }} />

                  <p style={{
                    fontSize: "clamp(14px, 1.7vw, 15px)",
                    color: T.muted, lineHeight: 1.85,
                    margin: "0 0 24px",
                  }}>
                    {item.desc}
                  </p>

                  {/* bullet points */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {Array.isArray(item.points) && item.points.map((point, idx) => (
                      <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                        <span style={{
                          color: T.gold, fontSize: 12, marginTop: 3,
                          flexShrink: 0, fontWeight: 600,
                        }}>
                          —
                        </span>
                        <span style={{ fontSize: "clamp(13px, 1.6vw, 15px)", color: T.muted, lineHeight: 1.7 }}>
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    to="/contact"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 10,
                      marginTop: "clamp(28px, 4vw, 40px)",
                      fontSize: 12, fontWeight: 600,
                      color: T.green, textDecoration: "none",
                      letterSpacing: "0.10em", textTransform: "uppercase",
                      borderBottom: `1px solid ${T.borderGold}`,
                      paddingBottom: 4,
                      transition: "color 0.25s, border-color 0.25s",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = T.gold; e.currentTarget.style.borderColor = T.gold; }}
                    onMouseLeave={e => { e.currentTarget.style.color = T.green; e.currentTarget.style.borderColor = T.borderGold; }}
                  >
                    Contact Our Team <FaArrowRight size={11} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hover overrides */}
      <style>{`
        .pb-svc-card:hover .pb-svc-title { color: #FEFCF7 !important; }
        .pb-svc-card:hover .pb-svc-desc  { color: rgba(254,252,247,0.58) !important; }
        .pb-svc-card:hover .pb-svc-icon  { border-color: rgba(212,175,114,0.38) !important; color: #D4AF72 !important; }
        .pb-svc-card:hover .pb-svc-rule  { background: rgba(212,175,114,0.45) !important; width: 48px !important; }
      `}</style>
    </div>
  );
}