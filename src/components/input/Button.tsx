//TODO:
//Add disabled states (1/2 done)
//Add GRADIENT_1 and GRADIENT_2 VARIANTS

//TODO: might need different bg color for disabled buttons
const DISABLED_STYLE_1 =
  "disabled:bg-dark-400 disabled:cursor-not-allowed disabled:opacity-40";
const DISABLED_STYLE_2 = ""; //TODO: Add disabled style for gradient border buttons

export enum BUTTON_VARIANTS {
  PRIMARY_LG = `${DISABLED_STYLE_1} bg-blue-500 text-white py-3 px-4 text-title-xl hover:shadow-blue-700 hover:bg-blue-600 active:bg-blue-500`,
  PRIMARY_SM = `${DISABLED_STYLE_1} bg-blue-500 text-white py-2.5 px-4 text-title-lg hover:shadow-blue-700 hover:bg-blue-600 active:bg-blue-500`,
  DANGER_LG = `${DISABLED_STYLE_1} bg-danger-200 text-white py-3 px-4 text-title-xl hover:shadow-danger-400 hover:bg-danger-300 active:bg-danger-200`,
  DANGER_SM = `${DISABLED_STYLE_1} bg-danger-200 text-white py-2.5 px-4 text-title-lg hover:shadow-danger-400 hover:bg-danger-300 active:bg-danger-200`,
  SUCCESS_LG = `${DISABLED_STYLE_1} bg-success-200 text-white py-3 px-4 text-title-xl hover:shadow-success-400 hover:bg-success-300 active:bg-success-200`,
  SUCCESS_SM = `${DISABLED_STYLE_1} bg-success-200 text-white py-2.5 px-4 text-title-lg hover:shadow-success-400 hover:bg-success-300 active:bg-success-200`,
  WARNING_LG = `${DISABLED_STYLE_1} bg-warning-200 text-black py-3 px-4 text-title-xl hover:shadow-warning-400 hover:bg-warning-300 active:bg-warning-200`,
  WARNING_SM = `${DISABLED_STYLE_1} bg-warning-200 text-white py-2.5 px-4 text-title-lg hover:shadow-warning-400 hover:bg-warning-300 active:bg-warning-200`,
  //TODO: Add gradient border buttons
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
      className={`rounded 
        ${disabled ? "" : "hover:shadow-button-hover active:shadow-button-clicked"} 
        ${className} 
        ${variant}`}
    >
      {label}
    </button>
  );
}
