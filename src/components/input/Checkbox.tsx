export enum CHECKBOX_VARIANTS {
  CHECKBOX_PADDING_ON_LG = "opacity-100 hover:border-opacity-100 hover:bg-purple-500 hover:bg-opacity-25 py-3 text-body-xl hover:bg-purple-500 active:bg-dark-500",
  CHECKBOX_PADDING_OFF_LG = "bg-dark-500 text-white py-3 text-body-xl  ",
  CHECKBOX_DISABLED = "py-3 text-body-xl text-gray-400 dark:text-gray-500",
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
        ${disabled ? CHECKBOX_VARIANTS.CHECKBOX_DISABLED : ""}
        ${checked ? "border-2 border-blue-500 bg-purple-500 bg-opacity-15" : ""}
        ${variant === CHECKBOX_VARIANTS.CHECKBOX_PADDING_ON_LG ? "py-3" : ""}
      `}
    >
      <input
        type="checkbox"
        name="LG_PADDING_Checkbox"
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
