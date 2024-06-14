export enum BUTTON_VARIANTS {
  PRIMARY = "bg-blue-500 text-white rounded py-3 px-4 text-title-xl hover:shadow-blue-700 hover:bg-blue-600 active:bg-blue-500",
  DANGER = "bg-danger-200 text-white rounded py-3 px-4 text-title-xl hover:shadow-danger-400 hover:bg-danger-300 active:bg-danger-200",
  SUCCESS = "bg-success-200 text-white rounded py-3 px-4 text-title-xl hover:shadow-success-400 hover:bg-success-300 active:bg-success-200",
  WARNING = "bg-warning-200 text-black rounded py-3 px-4 text-title-xl hover:shadow-warning-400 hover:bg-warning-300 active:bg-warning-200",
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
      className={`${className} ${variant} hover:shadow-button-hover active:shadow-button-clicked`}
    >
      {label}
    </button>
  );
}
