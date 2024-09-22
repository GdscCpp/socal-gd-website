import React from "react";

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  linkText: string;
  linkHref: string;
}

export default function Card({
  title,
  description,
  icon,
  linkText,
  linkHref,
}: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 sm:p-8 flex flex-col items-center justify-between h-full w-80">
      {/* ICON */}
      <div className="mb-4 transform hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      {/* TITLE */}
      <h3 className="text-title-lg sm:text-title-xl font-bold mb-3 text-dark-400">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-body-md sm:text-body-lg text-dark-300 text-center mb-6">
        {description}
      </p>

      {/* LINK */}
      <a
        href={linkHref}
        className="text-[#4285F4] hover:text-[#EA4335] transition-colors duration-300 text-body-md sm:text-body-lg font-medium underline mt-auto"
      >
        {linkText}
      </a>
    </div>
  );
}
