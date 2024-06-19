export enum BUTTON_VARIANTS {
  PRIMARY_LG = "bg-blue-500 text-white py-3 px-4 text-title-xl hover:shadow-blue-700 hover:bg-blue-600 active:bg-blue-500",
  PRIMARY_SM = "bg-blue-500 text-white py-2.5 px-4 text-title-lg hover:shadow-blue-700 hover:bg-blue-600 active:bg-blue-500",
  DANGER_LG = "bg-danger-200 text-white py-3 px-4 text-title-xl hover:shadow-danger-400 hover:bg-danger-300 active:bg-danger-200",
  DANGER_SM = "bg-danger-200 text-white py-2.5 px-4 text-title-lg hover:shadow-danger-400 hover:bg-danger-300 active:bg-danger-200",
  SUCCESS_LG = "bg-success-200 text-white py-3 px-4 text-title-xl hover:shadow-success-400 hover:bg-success-300 active:bg-success-200",
  SUCCESS_SM = "bg-success-200 text-white py-2.5 px-4 text-title-lg hover:shadow-success-400 hover:bg-success-300 active:bg-success-200",
  WARNING_LG = "bg-warning-200 text-black py-3 px-4 text-title-xl hover:shadow-warning-400 hover:bg-warning-300 active:bg-warning-200",
  WARNING_SM = "bg-warning-200 text-white py-2.5 px-4 text-title-lg hover:shadow-warning-400 hover:bg-warning-300 active:bg-warning-200",
  GRADIENT_1_LG = "bg-4cg-2 text-white py-0.5 px-0.5 text-title-xl shadow-gradient-button-default shadow-green-500 hover:shadow-green-500 active:brightness-75",
  GRADIENT_1_SM = "bg-4cg-2 text-white py-0.5 px-0.5 text-title-lg shadow-gradient-button-default shadow-green-500 hover:shadow-green-500 active:brightness-75",
  GRADIENT_2_LG = "bg-4cg-1 text-white py-0.5 px-0.5 text-title-xl hover:shadow-yellow-500 active:opacity-75",
  GRADIENT_2_SM = "bg-4cg-1 text-white py-0.5 px-0.5 text-title-lg hover:shadow-yellow-500 active:opacity-75",
}

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
  //gradient button
  if (
    variant == BUTTON_VARIANTS.GRADIENT_1_LG ||
    variant == BUTTON_VARIANTS.GRADIENT_1_SM ||
    variant == BUTTON_VARIANTS.GRADIENT_2_LG ||
    variant == BUTTON_VARIANTS.GRADIENT_2_SM
  )
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`rounded-lg
          transition
          duration-200
          ease-in-out
          hover:shadow-button-hover
          active:shadow-none
          disabled:shadow-none disabled:pointer-events-none disabled:opacity-30 
          disabled:bg-gradient-to-r disabled:from-white disabled:to-white
          ${className}
          ${variant}
          select-none`}
      >
        <div className="rounded-lg bg-dark-400 py-3 px-4 select-none">
          {label}
        </div>
      </button>
    );
  //solid button
  else
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`rounded-lg 
          transition
          duration-200
          ease-in-out
          hover:shadow-button-hover
          active:shadow-button-clicked
          disabled:pointer-events-none disabled:bg-gray-700 disabled:opacity-40
          ${className} 
          ${variant}
          select-none`}
      >
        {label}
      </button>
    );
}
