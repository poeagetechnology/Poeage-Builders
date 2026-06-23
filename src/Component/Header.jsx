import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaPhoneAlt,
  FaTimes,
  FaArrowRight,
} from "react-icons/fa";
import Logo from "../Assets/1.png";

/* ── Fonts ──────────────────────────────────────────────────────────────── */
if (typeof document !== "undefined" && !document.getElementById("pb-hdr-fonts")) {
  const l = document.createElement("link");
  l.id = "pb-hdr-fonts";
  l.rel = "stylesheet";
  l.href =
    "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Outfit:wght@300;400;500;600&display=swap";
  document.head.appendChild(l);
}

/* ── Design Tokens ───────────────────────────────────────────────────────── */
const T = {
  ivory:      "#FEFCF7",
  green:      "#1B3A2D",
  greenMid:   "#2A5C44",
  gold:       "#B8924A",
  goldLight:  "#D4AF72",
  ink:        "#111410",
  muted:      "#6B7B6E",
  border:     "rgba(27,58,45,0.10)",
};

/* ── Nav items ───────────────────────────────────────────────────────────── */
const NAV = [
  { label: "Home",         link: "/",           index: "I"   },
  { label: "What We Do",   link: "/whatwedo",    index: "II"  },
  { label: "How It Works", link: "/howitworks",  index: "III" },
  { label: "About Us",     link: "/about",       index: "IV"  },
];

/* ═════════════════════════════════════════════════════════════════════════ */
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered,  setHovered]  = useState(null);
  const [menuStep, setMenuStep] = useState(false);
  const location = useLocation();

  /* scroll detection */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* close on route change + scroll top */
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  /* stagger animation trigger */
  useEffect(() => {
    if (menuOpen)  setTimeout(() => setMenuStep(true),  60);
    else           setMenuStep(false);
  }, [menuOpen]);

  /* body scroll lock */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* ══════════════════════════  HEADER BAR  ═══════════════════════════ */}
      <header style={{
        position: "fixed", top: 0, left: 0, width: "100%", zIndex: 50,
        fontFamily: "'Outfit', sans-serif",
        background: scrolled ? T.ivory : "rgba(254,252,247,0.80)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: `1px solid ${scrolled ? T.border : "transparent"}`,
        boxShadow: scrolled ? "0 2px 40px rgba(27,58,45,0.06)" : "none",
        transition: "all 0.35s ease",
      }}>

        {/* paper-thin gold accent top rule */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 1,
          background: `linear-gradient(90deg, transparent 0%, ${T.goldLight} 30%, ${T.gold} 50%, ${T.goldLight} 70%, transparent 100%)`,
          opacity: 0.85,
        }} />

        <div style={{
          maxWidth: 1320, margin: "0 auto",
          padding: "0 clamp(20px, 4vw, 56px)",
          height: "clamp(64px, 8vw, 80px)",
          display: "flex", alignItems: "center",
        }}>

          {/* ── Logo ── */}
          <Link to="/" style={{ display: "flex", alignItems: "center", flexShrink: 0, textDecoration: "none" }}>
            <img
              src={Logo}
              alt="Poeage Builders"
              style={{ height: "clamp(48px, 10vw, 100px)", width: "auto", objectFit: "contain" }}
            />
          </Link>

          {/* ── Desktop Nav (md+) ── */}
          <nav className="pb-desktop-nav" style={{
            marginLeft: "auto",
            marginRight: 28,
            alignItems: "center",
            gap: 0,
          }}>
            {NAV.map((item) => {
              const active  = location.pathname === item.link;
              const isHover = hovered === item.link;
              return (
                <Link
                  key={item.link}
                  to={item.link}
                  onMouseEnter={() => setHovered(item.link)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    position: "relative",
                    padding: "0 20px",
                    height: "clamp(64px, 8vw, 80px)",
                    display: "flex", alignItems: "center", gap: 7,
                    textDecoration: "none",
                    color: active ? T.green : (isHover ? T.greenMid : T.muted),
                    fontSize: 13, fontWeight: active ? 600 : 400,
                    letterSpacing: "0.08em", textTransform: "uppercase",
                    transition: "color 0.25s",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 10, fontStyle: "italic",
                    color: T.goldLight, letterSpacing: "0.04em",
                    alignSelf: "flex-start",
                    marginTop: "clamp(18px, 2.5vw, 22px)",
                    lineHeight: 1,
                  }}>
                    {item.index}
                  </span>
                  <span>{item.label}</span>
                  <span style={{
                    position: "absolute", bottom: 0, left: "20%",
                    height: 1,
                    width: active || isHover ? "60%" : "0%",
                    background: `linear-gradient(90deg, ${T.gold}, ${T.goldLight})`,
                    transition: "width 0.35s cubic-bezier(0.4,0,0.2,1)",
                  }} />
                </Link>
              );
            })}
          </nav>

          {/* ── Desktop CTA ── */}
          <Link
            to="/contact"
            className="pb-desktop-cta"
            style={{
              alignItems: "center", gap: 9,
              padding: "11px 26px",
              border: `1.5px solid ${T.green}`,
              background: "transparent",
              color: T.green,
              fontSize: 12, fontWeight: 600, letterSpacing: "0.12em",
              textTransform: "uppercase", textDecoration: "none",
              fontFamily: "'Outfit', sans-serif",
              transition: "background 0.25s, color 0.25s",
              flexShrink: 0,
            }}
            onMouseEnter={e => { e.currentTarget.style.background = T.green; e.currentTarget.style.color = T.ivory; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = T.green; }}
          >
            <FaPhoneAlt size={11} />
            Contact Us
          </Link>

          {/* ── Mobile Burger ── */}
          <button
            className="pb-burger"
            onClick={() => setMenuOpen(p => !p)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            style={{
              marginLeft: "auto", background: "none", border: "none",
              cursor: "pointer", padding: 6, color: T.ink,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            <span style={{ display: "flex", flexDirection: "column", gap: 5, width: 22 }}>
              {[0,1,2].map(i => (
                <span key={i} style={{
                  display: "block", height: 1.5,
                  background: T.ink, borderRadius: 1,
                  width: i === 1 ? (menuOpen ? "100%" : "65%") : "100%",
                  transition: "transform 0.3s, opacity 0.3s, width 0.3s",
                  opacity: i === 1 && menuOpen ? 0 : 1,
                  transform:
                    i === 0 && menuOpen ? "translateY(6.5px) rotate(45deg)" :
                    i === 2 && menuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none",
                }} />
              ))}
            </span>
          </button>
        </div>
      </header>

      {/* ══════════════════════  FULL-SCREEN MOBILE OVERLAY  ═══════════════ */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 49,
        background: T.green,
        opacity: menuOpen ? 1 : 0,
        visibility: menuOpen ? "visible" : "hidden",
        transition: "opacity 0.45s cubic-bezier(0.4,0,0.2,1), visibility 0.45s",
        fontFamily: "'Outfit', sans-serif",
        display: "flex", flexDirection: "column",
        overflowY: "auto",
      }}>

        {/* decorative arc ornament */}
        <svg width="260" height="260" viewBox="0 0 260 260"
          style={{ position: "absolute", bottom: 0, left: 0, opacity: 0.05, pointerEvents: "none" }}>
          <circle cx="0" cy="260" r="200" fill="none" stroke={T.goldLight} strokeWidth="1" />
          <circle cx="0" cy="260" r="130" fill="none" stroke={T.goldLight} strokeWidth="1" />
          <circle cx="0" cy="260" r="65"  fill="none" stroke={T.goldLight} strokeWidth="1" />
        </svg>
        <svg width="180" height="180" viewBox="0 0 180 180"
          style={{ position: "absolute", top: 0, right: 0, opacity: 0.05, pointerEvents: "none" }}>
          <circle cx="180" cy="0" r="140" fill="none" stroke={T.goldLight} strokeWidth="1" />
          <circle cx="180" cy="0" r="80"  fill="none" stroke={T.goldLight} strokeWidth="1" />
        </svg>

        {/* overlay top bar */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "0 clamp(20px, 6vw, 40px)",
          height: "clamp(64px, 8vw, 80px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          flexShrink: 0,
        }}>
          <Link to="/" onClick={() => setMenuOpen(false)} style={{ textDecoration: "none" }}>
            <img src={Logo} alt="Poeage Builders" style={{
              height: "clamp(34px, 5vw, 46px)", width: "auto",
              objectFit: "contain", filter: "brightness(0) invert(1)",
            }} />
          </Link>
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu" style={{
            background: "none",
            border: "1px solid rgba(255,255,255,0.18)",
            width: 40, height: 40,
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", color: "rgba(255,255,255,0.70)",
          }}>
            <FaTimes size={15} />
          </button>
        </div>

        {/* nav links */}
        <div style={{
          flex: 1,
          padding: "clamp(28px, 6vw, 52px) clamp(20px, 6vw, 40px)",
          display: "flex", flexDirection: "column", justifyContent: "center",
        }}>
          {NAV.map((item, i) => {
            const active = location.pathname === item.link;
            return (
              <Link
                key={item.link}
                to={item.link}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "clamp(14px, 3vw, 20px) 0",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                  textDecoration: "none",
                  opacity: menuStep ? 1 : 0,
                  transform: menuStep ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.45s ease ${i * 0.07 + 0.1}s, transform 0.45s ease ${i * 0.07 + 0.1}s`,
                }}
              >
                <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
                  <span style={{
                    fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
                    fontSize: "clamp(11px, 1.8vw, 14px)",
                    color: T.goldLight, minWidth: 28,
                    letterSpacing: "0.04em",
                  }}>
                    {item.index}
                  </span>
                  <span style={{
                    fontSize: "clamp(28px, 7vw, 44px)",
                    fontWeight: active ? 600 : 300,
                    color: active ? T.goldLight : "rgba(254,252,247,0.88)",
                    letterSpacing: "-0.01em", lineHeight: 1.1,
                  }}>
                    {item.label}
                  </span>
                </div>
                <FaArrowRight size={15} style={{
                  color: active ? T.goldLight : "rgba(255,255,255,0.22)",
                  flexShrink: 0,
                }} />
              </Link>
            );
          })}

          {/* mobile CTA */}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: "clamp(24px, 5vw, 40px)",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
              padding: "clamp(13px, 2.5vw, 17px) 28px",
              background: T.gold,
              color: T.ivory,
              fontSize: "clamp(12px, 2vw, 14px)",
              fontWeight: 600, letterSpacing: "0.14em",
              textTransform: "uppercase", textDecoration: "none",
              fontFamily: "'Outfit', sans-serif",
              opacity: menuStep ? 1 : 0,
              transform: menuStep ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.45s ease 0.38s, transform 0.45s ease 0.38s",
            }}
          >
            <FaPhoneAlt size={12} />
            Contact Us
          </Link>
        </div>

        {/* overlay footer */}
        <div style={{
          padding: "18px clamp(20px, 6vw, 40px)",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexShrink: 0,
          opacity: menuStep ? 1 : 0,
          transition: "opacity 0.45s ease 0.5s",
        }}>
          <span style={{
            fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
            fontSize: "clamp(11px, 1.8vw, 13px)",
            color: "rgba(255,255,255,0.30)", letterSpacing: "0.04em",
          }}>
            Building Tamil Nadu, one project at a time.
          </span>
          <span style={{ fontSize: 10, color: "rgba(255,255,255,0.18)", letterSpacing: "0.08em" }}>
            © 2025
          </span>
        </div>
      </div>

      {/* ── Responsive CSS ── */}
      <style>{`
        .pb-desktop-nav { display: none; }
        .pb-desktop-cta { display: none; }
        .pb-burger       { display: flex;  }
        @media (min-width: 768px) {
          .pb-desktop-nav { display: flex; }
          .pb-desktop-cta { display: flex; }
          .pb-burger       { display: none; }
        }
      `}</style>
    </>
  );
}