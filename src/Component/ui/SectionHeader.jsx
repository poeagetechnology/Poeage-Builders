import React from "react";

export default function SectionHeader({
  badge,
  title,
  description,
  align = "left",
  className = "",
}) {
  const alignment = {
    left: "text-left",
    center: "text-center mx-auto",
  };

  return (
    <div
      className={`
        max-w-3xl
        ${alignment[align]}
        mb-16 sm:mb-20 lg:mb-24
        ${className}
      `}
    >
      {badge && (
        <span className="text-xs tracking-[0.35em] uppercase font-semibold text-amber-600">
          {badge}
        </span>
      )}

      {title && (
        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
          {title}
        </h2>
      )}

      {description && (
        <p className="mt-6 text-gray-600 leading-relaxed text-sm sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}