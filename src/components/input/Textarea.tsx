import React, { useState } from "react";

interface TextareaProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  className?: string;
}

export default function Textarea({
  label,
  value,
  onChange,
  disabled = false,
  className,
}: TextareaProps) {
  const [isFocused, setIsFocused] = useState(false);

  const gradientClass = isFocused ? "border-gradient" : "border-gray-300";

  return (
    <div className={`relative ${className} ${disabled ? "opacity-50" : ""}`}>
      <label className="block text-gray-700 dark:text-gray-300 mb-1">
        {label}
      </label>
      <div
        className={`relative ${gradientClass} rounded-md border-2 transition-all`}
      >
        <textarea
          placeholder={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          disabled={disabled}
          className="w-full h-32 bg-transparent p-3 rounded-md focus:outline-none"
        />
      </div>
    </div>
  );
}
