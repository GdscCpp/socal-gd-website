import React, { useState } from "react";

interface InputProps {
  label: string;
  type: "text" | "password" | "email" | "number";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  size?: "small" | "medium" | "large";
  className?: string;
}

export default function Input({
  label,
  type,
  value,
  onChange,
  disabled = false,
  required = false,
  size = "medium",
  className,
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const fontSizes = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  const colorScheme = {
    default: "bg-white dark:bg-dark-400 text-gray-300 border-gray-300",
    hover: "border-gradient",
    focus:
      "text-gray-700 dark:text-gray-300 border-gradient dark:text-gray-100",
    disabled: "bg-gray-200 dark:bg-gray-400 border-gray-400 dark:bg-gray-800",
  };

  const theme = disabled
    ? colorScheme.disabled
    : isHovered
      ? colorScheme.hover
      : isFocused
        ? colorScheme.focus
        : colorScheme.default;

  return (
    <div
      className={`relative ${className} ${disabled ? "opacity-50" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <label
        className={`block ${fontSizes[size]} text-gray-700 dark:text-gray-300 mb-1`}
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div
        className={`relative ${theme} flex items-center py-2 px-3 rounded-md border-2 transition-all
        ${required && "border-red-500"}`}
      >
        <input
          type={type}
          className={`${fontSizes[size]} ${theme} flex-1 bg-transparent focus:outline-none
          ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
          placeholder={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          disabled={disabled}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
