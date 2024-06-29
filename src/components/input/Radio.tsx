"use client";
export enum RADIO_VARIANTS {
  RADIO_PADDING_ON_LG = "focus:outline-none focus-visible:bg-purple-500 opacity-100 hover:border-opacity-100 hover:bg-purple-500 hover:bg-opacity-15 py-3 text-body-xl hover:bg-purple-500 active:bg-dark-500",
  RADIO_PADDING_OFF_LG = "bg-dark-500 text-white py-3 text-body-xl",
  RADIO_DISABLED = "py-3 text-body-xl text-gray-400 dark:text-gray-500",
}

interface RadioProps {
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
  variant?: RADIO_VARIANTS;
}

export default function Radio({
  label,
  checked,
  onChange,
  disabled,
  className,
  variant,
}: RadioProps) {
  return (
    <label
      className={`
        rounded-lg
        px-5
        py-0.5
        duration-200
        ease-in-out
        ${className}
        ${variant}
        ${disabled ? RADIO_VARIANTS.RADIO_DISABLED : ""}
        ${checked ? "border-2 border-purple-500 bg-purple-500 bg-opacity-15" : ""}
        ${variant === RADIO_VARIANTS.RADIO_PADDING_ON_LG ? "py-3" : ""}
      `}
    >
      <input
        type="radio"
        name="LG_PADDING_RADIO"
        value="option"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        width={12}
        height={12}
        className={`ml-3`}
      />
      <span className={`ml-3`}>{label}</span>
    </label>
  );
}
