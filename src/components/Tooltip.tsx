import React from "react";

interface TooltipProps {
  label: string;
  className?: string;
}

export default function Tooltip({ label, className }: TooltipProps) {
  const isDarkMode = className?.includes("dark");
  const themeClasses = isDarkMode
    ? "bg-gray-800 text-white"
    : "bg-blue-500 text-white";
  const pointerClasses = isDarkMode ? "border-t-gray-800" : "border-t-blue-500";

  return (
    <div className={`relative p-4 rounded-lg ${themeClasses} ${className}`}>
      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4">
        <div
          className={`w-4 h-4 transform rotate-45 ${pointerClasses} border-t border-l`}
        ></div>
      </div>
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold">{label}</h3>
        <button className="text-xl font-bold">×</button>
      </div>
      <p className="mb-2">Write tooltip description.</p>
      <div className="flex justify-between items-center">
        <div className="flex space-x-1">
          {/* Temporary solution */}
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <span key={i} className="w-2 h-2 bg-gray-300 rounded-full"></span>
            ))}
        </div>
        <button className="font-semibold">Next</button>
      </div>
    </div>
  );
}
