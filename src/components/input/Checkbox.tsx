import { useState } from "react";
import CheckboxSvg from "../svgs/CheckboxSvg";

{
  /* Stuck on
  Checkboxes with no padding: 
  - when selected and hovered over, it fills purple when it should be white still
  - checkbox and label should have a blue shadow when pressed 
  - checkmark for Option2 only shows up when Option1 is checked
  */
}

export enum CHECKBOX_VARIANTS {
  CHECKBOX_PADDING_ON_LG = "hover:shadow-button-hover hover:shadow-blue-500 has-[:checked]:shadow-button-hover has-[:checked]:ring-1 has-[:checked]:shadow-blue-500 has-[:checked]:bg-purple-500 has-[:checked]:bg-opacity-15 has-[:checked]:ring-blue-500 has-[:checked]:ring-0 opacity-100 hover:border-opacity-100 hover:bg-opacity-15 p-[2px] text-body-xl hover:bg-purple-500 active:bg-dark-500",
  CHECKBOX_PADDING_OFF_LG = "bg-dark-500 text-white py-3 text-body-xl",
  CHECKBOX_DISABLED_LG = "py-3 text-body-xl text-gray-400 dark:text-gray-500",

  CHECKBOX_PADDING_ON_MD = "hover:shadow-button-hover active:shadow-xl active:shadow-blue-500 py-2.5 text-body-lg has-[:checked]:bg-purple-500 has-[:checked]:bg-opacity-15 has-[:checked]:ring-blue-500  has-[:checked]:ring-1 opacity-100 hover:border-opacity-100 hover:bg-opacity-15 py-3 hover:bg-purple-500 active:bg-dark-500",
  CHECKBOX_PADDING_OFF_MD = "bg-dark-500 text-white py-2.5 text-body-lg",
  CHECKBOX_DISABLED_MD = "py-2.5 text-body-lg text-gray-400 dark:text-gray-500",
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

  const hasPaddingOff =
    variant === CHECKBOX_VARIANTS.CHECKBOX_PADDING_OFF_LG ||
    variant === CHECKBOX_VARIANTS.CHECKBOX_PADDING_OFF_MD;
  return (
    <label
      onClick={() => setIsChecked(!isChecked)}
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
        <input
          type="checkbox"
          id="LG_PADDING_Checkbox"
          onChange={onChange}
          disabled={disabled}
          /* If there is no padding, only show for the icons itself */
          className={`
            ${
              hasPaddingOff &&
              "transition active:ring-transparent active:shadow-md hover:ring-4 hover:ring-opacity-15 hover:border-white-500 hover:border-opacity-15 hover:bg-purple-500 hover:bg-opacity-15"
            } 
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
          `}
        />
        <label htmlFor="Checkbox">{label}</label>
        <CheckboxSvg />
        <polyline points="20 6 9 17 4 12"></polyline>
      </div>
    </label>
  );
}
