"use client";

import React, { useEffect, useState } from "react";

interface SwitchProps {
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
}

export default function Switch({
  label,
  checked,
  onChange,
  disabled,
  className,
}: SwitchProps) {
  const [isChecked, setIsChecked] = useState(checked);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      setIsChecked(!isChecked);
      onChange(e);
    }
  };

  //const classSizes = className ? className.split(' ') : [];
  const sizeClasses = {
    medium: {
      switch: "w-11 h-6",
      ball: "w-4 h-4",
      translate: "translate-x-5",
    },
    large: {
      switch: "w-16 h-8",
      ball: "w-6 h-6",
      translate: "translate-x-8",
    },
  };

  const lightMode = {
    default: {
      switch: "bg-gray-400",
      checked: "bg-blue-500",
      ball: "bg-white",
    },
    hover: {
      switch: "bg-gray-500",
      checked: "bg-blue-600",
      ball: "bg-white",
    },
    disabled: {
      switch: "bg-gray-400",
      checked: "bg-gray-400",
      ball: "bg-gray-600",
    },
  };

  const darkMode = {
    default: {
      switch: "bg-gray-500",
      checked: "bg-green-500",
      ball: "bg-white",
    },
    hover: {
      switch: "bg-gray-400",
      checked: "bg-green-700",
      ball: "bg-white",
    },
    disabled: {
      switch: "bg-gray-500",
      checked: "bg-gray-500",
      ball: "bg-gray-400",
    },
  };

  const currentSize = className?.includes("large")
    ? sizeClasses.large
    : sizeClasses.medium;
  const colorScheme = className?.includes("dark") ? darkMode : lightMode;
  const theme = disabled
    ? colorScheme.disabled
    : isHovered
      ? colorScheme.hover
      : colorScheme.default;

  return (
    <div
      className={`${className} ${disabled ? "opacity-50" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <label
        className={`flex items-center ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
      >
        <input
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={handleClick}
          disabled={disabled}
        />
        <div className={`relative ${currentSize.switch}`}>
          <div
            className={`absolute w-full h-full rounded-full transition-colors 
          ${isChecked ? theme.checked : theme.switch}`}
          ></div>
          <div
            className={`absolute top-1 left-1 bg-gray rounded-full shadow-sm 
          transition-transform ${theme.ball} ${currentSize.ball} ${isChecked ? currentSize.translate : ""}`}
          ></div>
        </div>
        {label && <span className="ml-3 text-sm">{label}</span>}
      </label>
    </div>
  );
}
