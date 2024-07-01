import { useState } from "react";
import CheckboxSvg from "../../../public/images/check.png";
import Image from "next/image";

// checkmark for Option2 only shows up when Option1 is checked

export enum CHECKBOX_VARIANTS {
  CHECKBOX_PADDING_ON_LG = "hover:shadow-button-hover hover:shadow-blue-500 has-[:checked]:shadow-button-hover has-[:checked]:ring-1 has-[:checked]:shadow-blue-500 has-[:checked]:bg-purple-500 has-[:checked]:bg-opacity-15 has-[:checked]:ring-blue-500 has-[:checked]:ring-0 opacity-100 hover:border-opacity-100 hover:bg-opacity-15 p-[2px] text-body-xl hover:bg-purple-500 active:bg-dark-500",
  CHECKBOX_PADDING_OFF_LG = "bg-dark-500 text-white text-body-xl",
  CHECKBOX_DISABLED_LG = "text-body-xl text-gray-400 dark:text-gray-500",
  CHECKBOX_PADDING_ON_MD = "hover:shadow-button-hover active:shadow-xl active:shadow-blue-500 py-2.5 text-body-lg has-[:checked]:bg-purple-500 has-[:checked]:bg-opacity-15 has-[:checked]:ring-blue-500  has-[:checked]:ring-1 opacity-100 hover:border-opacity-100 hover:bg-opacity-15 hover:bg-purple-500 active:bg-dark-500",
  CHECKBOX_PADDING_OFF_MD = "bg-dark-500 text-white py-2.5 text-body-lg",
  CHECKBOX_DISABLED_MD = "text-body-lg text-gray-400 dark:text-gray-500",
}

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
  variant?: CHECKBOX_VARIANTS;
}

export default function Checkbox({
  label,
  checked,
  onChange,
  disabled,
  className,
  variant,
}: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <label
      onClick={() => setIsChecked(!isChecked)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        rounded-[4px]
        cursor-pointer
        duration-200
        ease-in-out
        ${isChecked && "bg-2cg-3"}
        hover:bg-2cg-3
        ${variant}
      `}
    >
      <div className="flex gap-2 bg-dark-400 py-3 px-5">
        {isChecked && (
          <Image
            className="absolute pointer-events-none mt-[2px] ml-[-2px] rounded-lg ease-in-out duration-200 overflow-visible"
            src={CheckboxSvg}
            alt="Checkbox"
            width={28}
            height={28}
            onClick={() => setIsChecked(!isChecked)}
          />
        )}
        <input
          type="checkbox"
          onChange={onChange}
          disabled={disabled}
          /* If there is no padding, only show for the icons itself */
          className={`
            transition
            peer 
            shrink-0 
            appearance-none 
            w-6 
            h-6 
            border-2 
            border-white-500 
            rounded-md 
            bg-dark-500 
            mt-1 
            checked:bg-white 
            checked:border-0 
            disabled:border-gray-500
            disabled: visible
            cursor-pointer
            ${!disabled && "hover:shadow-button-hover hover:shadow-blue-500 has-[:checked]:shadow-button-hover"}
          `}
        />
        <label
          htmlFor="Checkbox"
          style={
            !disabled && isHovered
              ? {
                  textShadow: "2px 4px 10px #4284F5",
                }
              : {}
          }
          className="select-none"
        >
          {label}
        </label>
      </div>
    </label>
  );
}
