import React from "react";

export default function Card({ item, theme }) {
  const Icon = item.icon;

  return (
    <div className="rounded-2xl bg-white border border-gray-200 px-8 py-10 shadow-sm">
      <div
        className={`w-12 h-12 mb-6 rounded-xl flex items-center justify-center ${theme.bg} ${theme.text}`}
      >
        <Icon />
      </div>

      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        {item.title}
      </h2>

      <p className="text-gray-700 text-sm">{item.text}</p>
    </div>
  );
}