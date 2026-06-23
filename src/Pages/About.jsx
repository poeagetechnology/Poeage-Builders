import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { leaders, values } from "../data/AboutUsData";

/* ── Fonts ───────────────────────────────────────────────────────────────── */
if (typeof document !== "undefined" && !document.getElementById("pb-hdr-fonts")) {
  const link = document.createElement("link");
  link.id = "pb-hdr-fonts";
  link.rel = "stylesheet";
  link.href =
    "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Outfit:wght@300;400;500;600&display=swap";
  document.head.appendChild(link);
}

/* ── Design tokens ───────────────────────────────────────────────────────── */
const T = {
  ivory:      "#FEFCF7",
  green:      "#1B3A2D",
  gold:       "#B8924A",
  goldLight:  "#D4AF72",
  muted:      "#6B7B6E",
  border:     "rgba(27,58,45,0.10)",
  borderGold: "rgba(184,146,74,0.22)",
};

/* ── Animation variant ───────────────────────────────────────────────────── */
const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] } },
};

/* ── Stats ───────────────────────────────────────────────────────────────── */
const STATS = [
  { num: "10+",  label: "Years experience"   },
  { num: "200+", label: "Projects delivered" },
  { num: "50+",  label: "Expert team"        },
];

/* ════════════════════════════════════════════════════════════════════════════ */
export default function About() {
  const sectionRef = useRef(null);
  const inView     = useInView(sectionRef, { once: true, threshold: 0.15 });

  /* Pick first leader that is NOT Gowtham */
  const leader =
    (Array.isArray(leaders) ? leaders.find((l) => !/gowtham/i.test(l.name)) : null) ??
    (Array.isArray(leaders) ? leaders[0] : leaders);


  return (
    <section
      ref={sectionRef}
      style={{
        background:     T.ivory,
        fontFamily:     "'Outfit', sans-serif",
        paddingTop:     "clamp(80px, 10vw, 120px)",
        paddingBottom:  "clamp(80px, 10vw, 120px)",
      }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 clamp(20px, 5vw, 56px)" }}>

        {/* ── HERO INTRO ───────────────────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ maxWidth: 640, marginBottom: "clamp(48px, 7vw, 88px)" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <span style={{ display: "inline-block", width: 32, height: 1, background: T.gold }} />
            <span style={{
              fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
              fontSize: 15, color: T.gold, letterSpacing: "0.06em",
            }}>
              About Poeage Builders
            </span>
          </div>

          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(32px, 5.5vw, 52px)",
            fontWeight: 600, lineHeight: 1.12,
            color: T.green, margin: "0 0 20px",
            letterSpacing: "-0.01em",
          }}>
            Building with Vision,{" "}
            <em style={{ fontStyle: "italic", color: T.gold }}>Precision</em> &amp; Trust
          </h1>

          <p style={{
            fontSize: "clamp(14px, 1.8vw, 16px)",
            color: T.muted, lineHeight: 1.8, margin: 0,
          }}>
            Poeage Builders delivers corporate-grade architectural and infrastructure
            solutions across commercial, industrial, and urban sectors — with an
            unwavering commitment to craft, timeline, and client trust.
          </p>
        </motion.div>

        {/* ── THIN DIVIDER ─────────────────────────────────────────────── */}
        <div style={{
          height: 1,
          background: `linear-gradient(90deg, ${T.borderGold}, transparent)`,
          marginBottom: "clamp(48px, 7vw, 88px)",
        }} />

        {/* ── LEADER PROFILE ───────────────────────────────────────────── */}
        {leader && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.15 }}
            style={{ marginBottom: "clamp(64px, 9vw, 104px)" }}
          >
            <p style={{
              fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
              fontSize: 13, color: T.gold, letterSpacing: "0.1em",
              textTransform: "uppercase", marginBottom: 32,
            }}>
              Leadership
            </p>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "clamp(32px, 5vw, 56px)",
              alignItems: "start",
            }}>
              {/* Photo */}
              <div style={{ position: "relative", maxWidth: 320 }}>
                <div style={{
                  position: "absolute", top: 12, left: 12, right: -12, bottom: -12,
                  border: `1px solid ${T.borderGold}`,
                  zIndex: 0,
                }} />
               
              </div>

              {/* Bio */}
              <div style={{ paddingTop: 8 }}>
                <h2 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(26px, 4vw, 38px)",
                  fontWeight: 600, color: T.green,
                  margin: "0 0 6px", lineHeight: 1.15,
                }}>
                  {leader.name}
                </h2>

                <p style={{
                  fontSize: 12, fontWeight: 600,
                  color: T.gold, letterSpacing: "0.10em",
                  textTransform: "uppercase", margin: "0 0 24px",
                }}>
                  {leader.role}
                </p>

                <div style={{ width: 36, height: 1, background: T.gold, marginBottom: 24 }} />

                <p style={{
                  fontSize: "clamp(14px, 1.7vw, 16px)",
                  color: T.muted, lineHeight: 1.85, margin: 0,
                }}>
                  {leader.bio}
                </p>

                {/* Stats */}
                <div style={{
                  display: "flex",
                  gap: "clamp(20px, 4vw, 44px)",
                  marginTop: "clamp(28px, 4vw, 40px)",
                  paddingTop: "clamp(20px, 3vw, 28px)",
                  borderTop: `1px solid ${T.border}`,
                  flexWrap: "wrap",
                }}>
                  {STATS.map((s) => (
                    <div key={s.label}>
                      <p style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "clamp(24px, 3.5vw, 34px)",
                        fontWeight: 600, color: T.green,
                        margin: "0 0 4px", lineHeight: 1,
                      }}>
                        {s.num}
                      </p>
                      <p style={{
                        fontSize: 11, color: T.muted,
                        letterSpacing: "0.07em",
                        textTransform: "uppercase", margin: 0,
                      }}>
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ── THIN DIVIDER ─────────────────────────────────────────────── */}
        <div style={{
          height: 1,
          background: `linear-gradient(90deg, transparent, ${T.borderGold}, transparent)`,
          marginBottom: "clamp(48px, 7vw, 88px)",
        }} />

        {/* ── CORE VALUES ──────────────────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div style={{ marginBottom: "clamp(32px, 5vw, 52px)" }}>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
              fontSize: 13, color: T.gold, letterSpacing: "0.1em",
              textTransform: "uppercase", marginBottom: 14,
            }}>
              What drives us
            </p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(28px, 4.5vw, 42px)",
              fontWeight: 600, color: T.green,
              margin: 0, lineHeight: 1.15,
            }}>
              Our Core Values
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            border: `1px solid ${T.border}`,
          }}>
            {Array.isArray(values) && values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  whileHover={{ backgroundColor: T.green }}
                  style={{
                    padding: "clamp(24px, 4vw, 40px) clamp(20px, 3vw, 32px)",
                    borderRight: `1px solid ${T.border}`,
                    borderBottom: `1px solid ${T.border}`,
                    background: T.ivory,
                    transition: "background 0.3s ease",
                  }}
                  className="pb-value-card"
                >
                  <div
                    className="pb-val-icon"
                    style={{
                      width: 42, height: 42,
                      border: `1px solid ${T.borderGold}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: T.gold, fontSize: 17,
                      marginBottom: 22,
                      transition: "border-color 0.3s, color 0.3s",
                    }}
                  >
                    {Icon && <Icon />}
                  </div>

                  <h3
                    className="pb-val-title"
                    style={{
                      fontSize: "clamp(14px, 1.8vw, 16px)",
                      fontWeight: 600, color: T.green,
                      margin: "0 0 10px", lineHeight: 1.3,
                      transition: "color 0.3s",
                    }}
                  >
                    {v.title}
                  </h3>

                  <p
                    className="pb-val-desc"
                    style={{
                      fontSize: "clamp(13px, 1.5vw, 14px)",
                      color: T.muted, lineHeight: 1.75,
                      margin: 0, transition: "color 0.3s",
                    }}
                  >
                    {v.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>

      {/* Hover overrides */}
      <style>{`
        .pb-value-card:hover .pb-val-title { color: #FEFCF7 !important; }
        .pb-value-card:hover .pb-val-desc  { color: rgba(254,252,247,0.60) !important; }
        .pb-value-card:hover .pb-val-icon  { border-color: rgba(212,175,114,0.35) !important; color: #D4AF72 !important; }
      `}</style>
    </section>
  );
}