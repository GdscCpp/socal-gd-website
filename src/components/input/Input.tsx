import React, { useState } from "react";

interface InputProps {
  label: string;
  type: "text" | "password" | "email" | "number";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
}

export default function Input({
  label,
  type,
  value,
  onChange,
  disabled = false,
  className,
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const gradientClass = isFocused ? "border-gradient" : "border-gray-300";

  return (
    <div className={`relative ${className} ${disabled ? "opacity-50" : ""}`}>
      <label className="block text-gray-700 dark:text-gray-300 mb-1">
        {label}
      </label>
      <div
        className={`relative flex items-center ${gradientClass} py-2 px-3 rounded-md border-2 transition-all`}
      >
        <input
          type={type}
          className="flex-1 bg-transparent focus:outline-none"
          value={value}
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
