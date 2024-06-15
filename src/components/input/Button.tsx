//TODO: Moved reused properties to Button's className
//Add LG and SM variants
//Add GRADIENT_1 and GRADIENT_2 VARIANTS
//Add disabled states
export enum BUTTON_VARIANTS {
  PRIMARY_LG = "bg-blue-500 text-white py-3 px-4 text-title-xl hover:shadow-blue-700 hover:bg-blue-600 active:bg-blue-500",
  PRIMARY_SM = "bg-blue-500 text-white py-2.5 px-4 text-title-lg hover:shadow-blue-700 hover:bg-blue-600 active:bg-blue-500",
  DANGER_LG = "bg-danger-200 text-white py-3 px-4 text-title-xl hover:shadow-danger-400 hover:bg-danger-300 active:bg-danger-200",
  DANGER_SM = "bg-danger-200 text-white py-2.5 px-4 text-title-lg hover:shadow-danger-400 hover:bg-danger-300 active:bg-danger-200",
  SUCCESS_LG = "bg-success-200 text-white py-3 px-4 text-title-xl hover:shadow-success-400 hover:bg-success-300 active:bg-success-200",
  SUCCESS_SM = "bg-success-200 text-white py-2.5 px-4 text-title-lg hover:shadow-success-400 hover:bg-success-300 active:bg-success-200",
  WARNING_LG = "bg-warning-200 text-black py-3 px-4 text-title-xl hover:shadow-warning-400 hover:bg-warning-300 active:bg-warning-200",
  WARNING_SM = "bg-warning-200 text-white py-2.5 px-4 text-title-lg hover:shadow-warning-400 hover:bg-warning-300 active:bg-warning-200",
  GRADIENT_1_LG = "",
  GRADIENT_1_SM = "",
  GRADIENT_2_LG = "",
  GRADIENT_2_SM = "",
}
// TODO: Add button variants
// ex PRIMARY = "primary classname",

interface ButtonProps {
  label: string;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  variant?: BUTTON_VARIANTS;
}

export default function Button({
  label,
  type,
  onClick,
  disabled,
  className,
  variant,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`rounded hover:shadow-button-hover active:shadow-button-clicked ${className} ${variant}`}
    >
      {label}
    </button>
  );
}
