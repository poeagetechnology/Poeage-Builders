import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* Key cities in Tamil Nadu with approximate SVG coords (viewBox 0 0 400 520) */
const pins = [
  { name: "Chennai",      x: 310, y: 112, major: true  },
  { name: "Coimbatore",  x: 112, y: 298, major: true  },
  { name: "Madurai",     x: 200, y: 370, major: true  },
  { name: "Salem",       x: 188, y: 228, major: false },
  { name: "Trichy",      x: 220, y: 300, major: false },
  { name: "Tirunelveli", x: 188, y: 432, major: false },
  { name: "Vellore",     x: 248, y: 160, major: false },
  { name: "Erode",       x: 148, y: 262, major: false },
  { name: "Tiruppur",    x: 138, y: 290, major: false },
  { name: "Thanjavur",   x: 246, y: 316, major: false },
  { name: "Dindigul",    x: 186, y: 346, major: false },
  { name: "Nagercoil",   x: 178, y: 466, major: false },
  { name: "Kanyakumari", x: 182, y: 488, major: false },
  { name: "Villupuram",  x: 280, y: 200, major: false },
  { name: "Cuddalore",   x: 294, y: 218, major: false },
  { name: "Nagapattinam",x: 276, y: 318, major: false },
  { name: "Ramanathapuram", x: 248, y: 400, major: false },
  { name: "Virudhunagar",x: 210, y: 390, major: false },
  { name: "Krishnagiri", x: 210, y: 186, major: false },
  { name: "Dharmapuri",  x: 192, y: 196, major: false },
];

const stats = [
  { value: "200+", label: "Projects completed" },
  { value: "15+",  label: "Cities served" },
  { value: "10+",   label: "Years experience" },
  { value: "98%",  label: "Client satisfaction" },
];

/* Tamil Nadu outline path — simplified for SVG viewBox 0 0 400 520 */
const TN_PATH = `
  M 308 60 
  C 318 72 330 88 328 108 
  C 340 120 348 136 342 152 
  C 352 164 356 180 348 196 
  C 344 210 338 222 332 234 
  C 340 244 342 258 336 268 
  C 326 280 316 288 308 298 
  C 316 312 318 328 308 340 
  C 300 350 288 356 280 364 
  C 274 378 268 394 258 406 
  C 248 420 236 432 224 442 
  C 214 452 204 462 196 472 
  C 188 480 182 490 178 500 
  C 172 494 168 486 164 478 
  C 156 466 150 452 148 438 
  C 140 428 132 418 128 406 
  C 120 394 116 380 114 366 
  C 104 354 96 340 92 326 
  C 84 314 80 300 80 286 
  C 72 274 68 260 70 246 
  C 64 234 62 220 66 206 
  C 60 194 60 180 64 166 
  C 58 154 58 140 64 128 
  C 68 114 76 102 86 92 
  C 96 80 108 70 122 64 
  C 136 56 152 52 168 50 
  C 184 46 200 46 216 48 
  C 232 48 248 50 262 54 
  C 276 56 292 58 308 60 Z
`;

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.08 });
  const [hovered, setHovered] = useState(null);

  return (
    <section
      ref={ref}
      className="bg-[#FAFAF8] py-28 px-6 overflow-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');
        .serif { font-family: 'DM Serif Display', serif; }
        @keyframes pin-bounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-4px); }
        }
        .pin-bounce { animation: pin-bounce 1.8s ease-in-out infinite; }
        @keyframes pulse-ring {
          0%   { r: 6; opacity: 0.6; }
          100% { r: 18; opacity: 0; }
        }
        .pulse-ring { animation: pulse-ring 2s ease-out infinite; }
      `}</style>

      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-7 h-px bg-[#8C7B55]" />
            <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#8C7B55]">
              Our footprint
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="serif text-5xl lg:text-[54px] font-normal leading-[1.1] tracking-tight text-[#1C1C1A]">
              Built across<br />
              <em className="text-[#8C7B55]">Tamil Nadu.</em>
            </h2>
            <p className="text-[15px] font-light text-[#5A5A52] leading-relaxed max-w-sm lg:text-right">
              Poeage Builders has delivered 200+ projects spanning residential,
              commercial, and industrial construction across the state.
            </p>
          </div>
        </motion.div>

        {/* ── Stats row ── */}
        <motion.div
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-[#E0DDD4] rounded-2xl overflow-hidden mb-16"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className={`py-7 px-8 bg-white flex flex-col gap-1 ${
                i < stats.length - 1 ? "border-r border-[#E0DDD4]" : ""
              } ${i >= 2 ? "border-t border-[#E0DDD4] lg:border-t-0" : ""}`}
            >
              <span className="serif text-[36px] font-normal text-[#1C1C1A] leading-none">
                {s.value}
              </span>
              <span className="text-[12px] font-light text-[#A09880] tracking-wide">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* ── Map + Side panel ── */}
        <motion.div
          variants={fadeUp}
          custom={2}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-[1fr_340px] gap-8 items-start"
        >

          {/* MAP CARD */}
          <div className="bg-white border border-[#E0DDD4] rounded-2xl p-6 lg:p-10 flex items-center justify-center relative overflow-hidden">

            {/* Subtle grid background */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(#1C1C1A 1px, transparent 1px), linear-gradient(90deg, #1C1C1A 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            <svg
              viewBox="0 0 400 520"
              className="w-full max-w-[420px] relative z-10"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* State fill */}
              <path
                d={TN_PATH}
                fill="#F5F2EA"
                stroke="#D4C9A8"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />

              {/* Pins */}
              {pins.map((pin, i) => {
                const isHovered = hovered === pin.name;
                const isMajor = pin.major;

                return (
                  <g
                    key={pin.name}
                    style={{ cursor: "pointer" }}
                    onMouseEnter={() => setHovered(pin.name)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {/* Pulse ring on major cities */}
                    {isMajor && (
                      <circle
                        cx={pin.x}
                        cy={pin.y}
                        r="6"
                        fill="none"
                        stroke="#8C7B55"
                        strokeWidth="1"
                        className="pulse-ring"
                        style={{ animationDelay: `${i * 0.4}s` }}
                      />
                    )}

                    {/* Pin dot */}
                    <circle
                      cx={pin.x}
                      cy={pin.y}
                      r={isMajor ? 5 : 3.5}
                      fill={isHovered ? "#1C1C1A" : isMajor ? "#8C7B55" : "#B8AE94"}
                      stroke="white"
                      strokeWidth={isMajor ? 1.5 : 1}
                      style={{ transition: "fill 0.15s" }}
                    />

                    {/* Tooltip on hover */}
                    {isHovered && (
                      <g>
                        <rect
                          x={pin.x + 8}
                          y={pin.y - 14}
                          width={pin.name.length * 7 + 12}
                          height={22}
                          rx="4"
                          fill="#1C1C1A"
                        />
                        <text
                          x={pin.x + 14}
                          y={pin.y + 1}
                          fontSize="10"
                          fill="#FAF9F6"
                          fontFamily="DM Sans, sans-serif"
                          fontWeight="400"
                        >
                          {pin.name}
                        </text>
                      </g>
                    )}
                  </g>
                );
              })}

              {/* "200+ Projects" label */}
              <g>
                <rect x="24" y="24" width="120" height="40" rx="8" fill="#1C1C1A" />
                <text
                  x="34"
                  y="39"
                  fontSize="10"
                  fill="#C8C3B0"
                  fontFamily="DM Sans, sans-serif"
                >
                  Projects across TN
                </text>
                <text
                  x="34"
                  y="55"
                  fontSize="13"
                  fontWeight="500"
                  fill="#FAF9F6"
                  fontFamily="DM Sans, sans-serif"
                >
                  200+ completed
                </text>
              </g>

              {/* Legend */}
              <g transform="translate(24, 460)">
                <circle cx="5" cy="5" r="5" fill="#8C7B55" />
                <text x="14" y="9" fontSize="9" fill="#8C8C80" fontFamily="DM Sans, sans-serif">
                  Major city
                </text>
                <circle cx="5" cy="22" r="3.5" fill="#B8AE94" />
                <text x="14" y="26" fontSize="9" fill="#8C8C80" fontFamily="DM Sans, sans-serif">
                  Active location
                </text>
              </g>
            </svg>
          </div>

          {/* SIDE PANEL */}
          <div className="space-y-4">

            {/* Brand card */}
            <div className="bg-[#1C1C1A] rounded-2xl px-7 py-8">
              <div className="flex items-center gap-2 mb-4">
                <FaMapMarkerAlt className="text-[#8C7B55] text-sm" />
                <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#8C7B55]">
                  Headquartered in
                </span>
              </div>
              <p className="serif text-[28px] font-normal text-[#FAF9F6] leading-snug mb-1">
                Coimbatore,
              </p>
              <p className="serif text-[28px] font-normal text-[#8C7B55] italic leading-snug">
                Tamil Nadu.
              </p>
              <div className="mt-5 h-px bg-[#2E2E2C]" />
              <p className="mt-4 text-[13px] font-light text-[#A09880] leading-relaxed">
                Serving clients across the entire state with on-ground teams
                and local expertise.
              </p>
            </div>

            {/* City list */}
            <div className="bg-white border border-[#E0DDD4] rounded-2xl px-7 py-6">
              <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#A09880] mb-4">
                Key locations
              </p>
              <div className="space-y-0 divide-y divide-[#F0EDE6]">
                {pins.filter(p => p.major).concat(pins.filter(p => !p.major).slice(0, 6)).map((pin, i) => (
                  <div
                    key={pin.name}
                    className="flex items-center justify-between py-2.5 group cursor-default"
                    onMouseEnter={() => setHovered(pin.name)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-150"
                        style={{
                          background: hovered === pin.name ? "#8C7B55" : "#D4C9A8",
                          transform: hovered === pin.name ? "scale(1.4)" : "scale(1)",
                        }}
                      />
                      <span className="text-[13px] text-[#1C1C1A] font-light">
                        {pin.name}
                      </span>
                    </div>
                    {pin.major && (
                      <span className="text-[10px] font-medium tracking-wide text-[#8C7B55] bg-[#F5F2EA] px-2 py-0.5 rounded-full">
                        HQ region
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="/contact"
              className="group flex items-center justify-between bg-white border border-[#E0DDD4] hover:border-[#8C7B55] rounded-2xl px-7 py-5 transition-colors duration-200"
            >
              <div>
                <p className="text-[13px] font-medium text-[#1C1C1A]">Start your project</p>
                <p className="text-[12px] font-light text-[#A09880]">Free consultation</p>
              </div>
              <div className="w-8 h-8 rounded-full border border-[#E0DDD4] group-hover:border-[#8C7B55] group-hover:bg-[#8C7B55] flex items-center justify-center transition-all duration-200">
                <FaArrowRight className="text-[10px] text-[#A09880] group-hover:text-white transition-colors duration-200" />
              </div>
            </a>

          </div>
        </motion.div>
      </div>
    </section>
  );
}