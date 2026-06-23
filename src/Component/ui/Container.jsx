import React from "react";

/**
 * Container
 * Controls layout width & horizontal padding.
 * Keeps visual identical to existing pages.
 */
export default function Container({
  children,
  size = "lg",
  className = "",
}) {
  const sizes = {
    sm: "max-w-3xl",
    md: "max-w-4xl",
    lg: "max-w-7xl",
    xl: "max-w-[1440px]",
    full: "max-w-full",
  };

  return (
    <div
      className={`
        ${sizes[size]}
        mx-auto
        px-4 sm:px-6 lg:px-12
        ${className}
      `}
    >
      {children}
    </div>
  );
}