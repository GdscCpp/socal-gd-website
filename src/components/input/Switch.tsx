"use client";

import React, { useEffect, useState } from "react";

interface SwitchProps {
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  size?: "Medium" | "Large";
  className?: string;
}

export default function Switch({
  label,
  checked,
  onChange,
  disabled,
  size = "Medium",
  className,
}: SwitchProps) {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      setIsChecked(!isChecked);
      onChange(e);
    }
  };

  const SizeClasses = {
    Medium: {
      Switch: "w-11 h-6",
      Ball: "w-4 h-4",
      Translate: "translate-x-5",
    },
    Large: {
      Switch: "w-16 h-8",
      Ball: "w-6 h-6",
      Translate: "translate-x-8",
    },
  };
  const theme = {
    Switch: `${disabled ? `hover:bg-gray-400 dark:hover:bg-gray-500` : ""}
    bg-gray-400 dark:bg-gray-500 hover:bg-gray-500 dark:hover:bg-gray-400`,
    Checked: `${
      disabled
        ? `bg-gray-400 dark:bg-gray-500`
        : `bg-blue-500 hover:bg-blue-600 dark:bg-green-500 hover:dark:bg-green-700`
    }`,
  };
  const currentSize = SizeClasses[size];

  return (
    <div className={`${className} ${disabled ? "opacity-50" : ""}`}>
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
        <div className={`relative ${currentSize.Switch}`}>
          <div
            className={`absolute w-full h-full rounded-full transition-colors 
          ${isChecked ? theme.Checked : theme.Switch}`}
          ></div>
          <div
            className={`absolute top-1 left-1 bg-gray rounded-full shadow-sm transition-transform 
            ${disabled ? "bg-gray-600 dark:bg-gray-400" : "bg-white"} 
          ${currentSize.Ball} ${isChecked ? currentSize.Translate : ""}`}
          ></div>
        </div>
        {label && <span className="ml-3 text-sm">{label}</span>}
      </label>
    </div>
  );
}
