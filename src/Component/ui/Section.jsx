import React from "react";

/**
 * Section
 * A layout wrapper to enforce consistent spacing and width.
 *
 * Props:
 * - children: content
 * - bg: background color class
 * - container: "default" | "wide" | "narrow" | "none"
 * - className: extra classes
 */
export default function Section({
  children,
  bg = "bg-white",
  container = "default",
  className = "",
}) {
  const containerWidths = {
    default: "max-w-7xl mx-auto px-6",
    wide: "max-w-[1440px] mx-auto px-6",
    narrow: "max-w-4xl mx-auto px-6",
    none: "",
  };

  return (
    <section className={`relative py-24 lg:py-28 ${bg} ${className}`}>
      <div className={containerWidths[container]}>
        {children}
      </div>
    </section>
  );
}