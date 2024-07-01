import React from "react";

interface TooltipProps {
  label: string;
  description: string;
  position?: "Top" | "Bottom" | "Left" | "Right";
  variant?: "Start" | "Center" | "End";
  className?: string;
}

export default function Tooltip({
  label,
  description,
  position = "Top",
  variant = "Center",
  className,
}: TooltipProps) {
  const ArrowPositionClasses = {
    Top: {
      Start: "top-0 left-3 transform -translate-y-1/2 rotate-45",
      Center:
        "top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 rotate-45",
      End: "top-0 right-3 transform -translate-y-1/2 rotate-45",
    },
    Bottom: {
      Start: "bottom-0 left-3 transform translate-y-1/2 rotate-45",
      Center:
        "bottom-0 left-1/2 transform translate-y-1/2 -translate-x-1/2 rotate-45",
      End: "bottom-0 right-3 transform translate-y-1/2 rotate-45",
    },
    Left: {
      Start: "left-0 top-3 transform -translate-x-1/2 rotate-45",
      Center:
        "left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45",
      End: "left-0 bottom-3 transform -translate-x-1/2 rotate-45",
    },
    Right: {
      Start: "right-0 top-3 transform translate-x-1/2 rotate-45",
      Center:
        "right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-45",
      End: "right-0 bottom-3 transform translate-x-1/2 rotate-45",
    },
  };

  const colors = "bg-blue-500 dark:bg-gray-800";

  return (
    <div
      className={`relative p-4 w-60 rounded-lg text-white ${colors} ${className}`}
    >
      <div
        className={`absolute w-4 h-4 ${colors} ${ArrowPositionClasses[position][variant]}`}
      ></div>
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold">{label}</h3>
        <button className="text-xl font-bold">×</button>
      </div>
      <p className="mb-2">{description}</p>
      <div className="flex justify-between items-center">
        <div className="flex space-x-1">
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
