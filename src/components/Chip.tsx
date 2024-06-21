import CheckSvg from "./svgs/CheckSvg";
import DeleteSvg from "./svgs/DeleteSvg";

export enum CHIP_VARIANTS {
  SOLID = "bg-blue-400 dark:bg-green-400 hover:bg-blue-500 dark:hover:bg-green-500",
  TRANSPARENT = "bg-2cg-1 hover:bg-gradient-to-r from-blue-500 to-blue-500 text-blue-500 dark:bg-2cg-3 dark:hover:bg-gradient-to-r dark:from-green-500 dark:to-green-500 dark:text-green-500",
}

interface ChipProps {
  label: string;
  onDelete?: () => void;
  className?: string;
  variant: CHIP_VARIANTS;
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
  if (variant === CHIP_VARIANTS.SOLID)
    return (
      <div
        className={`flex items-center text-body-lg text-white px-3 py-0.5 rounded-full transition duration-200 ease-in-out select-none
      ${disabled ? "bg-gray-400 opacity-95 pointer-events-none" : variant}
      ${className}`}
      >
        <CheckSvg width={12} height={12} fill="fill-white" className="mr-1.5" />
        {label}
        <DeleteSvg
          width={12}
          height={12}
          fill="fill-white"
          className="ml-1.5 cursor-pointer"
        />
      </div>
    );
  //gradient chip
  else
    return (
      <div
        className={`px-0.5 py-0.5 rounded-full transition duration-200 ease-in-out ${className}
        ${disabled ? "bg-gradient-to-r from-gray-400 to-gray-400 pointer-events-none text-gray-400" : variant}`}
      >
        <div
          className={`flex items-center text-body-lg px-3 rounded-full select-none transition duration-200 ease-in-out
          bg-white dark:bg-dark-400 hover:bg-blue-50 dark:hover:bg-green-950`}
        >
          <CheckSvg
            width={12}
            height={12}
            fill={`${disabled ? "fill-gray-400" : "fill-blue-500 dark:fill-green-500"}`}
            className="mr-1.5"
          />
          {label}
          <DeleteSvg
            width={12}
            height={12}
            fill={`${disabled ? "fill-gray-400" : "fill-blue-500 dark:fill-green-500"}`}
            className="ml-1.5 cursor-pointer"
            onClick={onDelete}
          />
        </div>
      </div>
    );
}
