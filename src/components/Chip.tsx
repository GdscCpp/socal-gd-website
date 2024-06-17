//TODO
//light and dark theme for both chips
//list:
// Transparent light
// Transparent dark
// transparent disabled state
import Image from "next/image";

export enum CHIP_VARIANTS {
  SOLID_LIGHT = "bg-blue-400 hover:bg-blue-500 text-white",
  SOLID_DARK = "bg-green-400 hover:bg-green-500 text-white",
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
        className={`flex items-center text-body-xl pl-3 pr-6 rounded-full transition duration-200 ease-in-out select-none ${variant}
      ${disabled ? "bg-gray-400 opacity-95 pointer-events-none" : ""}
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
    return (
      <div
        className={`px-0.5 py-0.5 rounded-full transition duration-200 ease-in-out ${variant}`}
      >
        <div
          className={`flex items-center text-body-xl pl-3 pr-9 rounded-full select-none transition duration-200 ease-in-out
          ${bg} ${hoverBg}`}
        >
          <Image
            src="icons/icons8-delete.svg"
            alt="delete icon"
            width="15"
            height="15"
            className="cursor-pointer mr-1.5 filter invert" //todo change color to respective one
            onClick={onDelete}
          />
          {label}
          <Image
            src="icons/icons8-check.svg"
            alt="check icon"
            width="18"
            height="15"
            className="ml-1.5 filter invert" //todo change color to respective one
          />
        </div>
      </div>
    );
  }
}
