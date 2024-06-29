import React, { useEffect, useState } from "react";

interface TextareaProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  required?: boolean;
  size?: "small" | "medium" | "large";
  className?: string;
}

export default function Textarea({
  label,
  value,
  onChange,
  disabled = false,
  required = false,
  size = "medium",
  className,
}: TextareaProps) {
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
      className={`${className} ${disabled ? "opacity-50" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <label
        className={`block ${fontSizes[size]} text-dark-400 dark:text-gray-100 rounded-md`}
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div
        className={`${theme} relative rounded-md border-2 transition-all w-80
        ${required && "border-red-500"}`}
      >
        <textarea
          placeholder={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          disabled={disabled}
          className={`w-full ${fontSizes[size]} ${theme} bg-transparent p-3 rounded-md focus:outline-none
          ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
        />
      </div>
    </div>
  );
}
