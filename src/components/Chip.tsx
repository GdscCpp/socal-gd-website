import Image from "next/image";

export enum CHIP_VARIANTS {
  SOLID_LIGHT = "bg-blue-400 hover:bg-blue-500",
  SOLID_DARK = "bg-green-400 hover:bg-green-500",
  TRANSPARENT_LIGHT = "bg-2cg-1 hover:bg-gradient-to-r from-blue-500 to-blue-500 text-blue-500",
  TRANSPARENT_DARK = "bg-2cg-3 hover:bg-gradient-to-r from-green-500 to-green-500 text-green-500",
}

interface ChipProps {
  label: string;
  onDelete?: () => void;
  className?: string;
  variant: string;
  disabled?: boolean;
}

export default function Chip({
  label,
  onDelete,
  className,
  variant,
  disabled,
}: ChipProps) {
  //solid chip
  if (
    variant == CHIP_VARIANTS.SOLID_LIGHT ||
    variant == CHIP_VARIANTS.SOLID_DARK
  )
    return (
      <div
        className={`flex items-center text-body-lg text-white px-3.5 py-0.5 rounded-full transition duration-200 ease-in-out select-none
      ${disabled ? "bg-gray-400 opacity-95 pointer-events-none" : variant}
      ${className}`}
      >
        <Image
          src="icons/icons8-delete.svg"
          alt="delete icon"
          width="15"
          height="15"
          className="cursor-pointer mr-1.5 filter invert"
          onClick={onDelete}
        />
        {label}
        <Image
          src="icons/icons8-check.svg"
          alt="check icon"
          width="18"
          height="15"
          className="ml-1.5 filter invert"
        />
      </div>
    );
  //gradient chip
  else {
    const light = variant == CHIP_VARIANTS.TRANSPARENT_LIGHT;
    const bg = light ? "bg-white" : "bg-dark-400";
    const hoverBg = light ? "hover:bg-blue-50" : "hover:bg-green-950";
    let iconColor = light ? "#4284F5" : "#34A853";
    iconColor = disabled ? "#9ca3af" : iconColor;
    return (
      <div
        className={`px-0.5 py-0.5 rounded-full transition duration-200 ease-in-out ${className}
        ${disabled ? "bg-gradient-to-r from-gray-400 to-gray-400 pointer-events-none text-gray-400" : variant}`}
      >
        <div
          className={`flex items-center text-body-lg px-3 rounded-full select-none transition duration-200 ease-in-out
          ${bg} ${hoverBg}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={15}
            height={15}
            viewBox="0 0 50 50"
            fill={iconColor}
            className="mr-1.5 cursor-pointer"
            onClick={onDelete}
          >
            <path d="M7.719 6.281 6.28 7.72 23.563 25 6.28 42.281 7.72 43.72 25 26.437 42.281 43.72l1.438-1.438L26.437 25 43.72 7.719 42.28 6.28 25 23.563Z" />
          </svg>
          {label}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={15}
            viewBox="0 0 30 30"
            fill={iconColor}
            className="ml-1.5"
          >
            <path d="M26.98 5.99a1 1 0 0 0-.687.303L11 21.586l-6.293-6.293a1 1 0 1 0-1.414 1.414l7 7a1 1 0 0 0 1.414 0l16-16a1 1 0 0 0-.727-1.717z" />
          </svg>
        </div>
      </div>
    );
  }
}
