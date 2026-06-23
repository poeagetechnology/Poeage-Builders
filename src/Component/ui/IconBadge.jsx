import React from "react";

/**
 * IconBadge
 * Controls icon background + text color.
 */
export default function IconBadge({
  children,
  bg = "bg-gray-100",
  text = "text-gray-700",
  size = "md",
}) {
  const sizes = {
    sm: "w-10 h-10 text-base",
    md: "w-12 h-12 text-lg",
    lg: "w-14 h-14 text-xl",
  };

  return (
    <div
      className={`
        ${sizes[size]}
        ${bg}
        ${text}
        rounded-xl
        flex items-center justify-center
        shadow-sm
        mb-6
      `}
    >
      {children}
    </div>
  );
}