//TODO
//light and dark theme for both chips
//list:

// solid disabled state
// Transparent light
// Transparent dark
// transparent disabled state
import Image from "next/image";

export enum CHIP_VARIANTS {
  SOLID_LIGHT = "bg-blue-400 hover:bg-blue-500 text-white",
  SOLID_DARK = "bg-green-400 hover:bg-green-500 text-white",
  TRANSPARENT_LIGHT = "",
  TRANSPARENT_DARK = "",
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
  //TODO
  //add condition check for gradient chips and separate return statement
  //add condition check for disabled

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
  else
    return (
      <div>
        <div></div>
      </div>
    );
}
