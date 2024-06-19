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
  if (variant == CHIP_VARIANTS.SOLID)
    return (
      <div
        className={`flex items-center text-body-lg text-white px-3 py-0.5 rounded-full transition duration-200 ease-in-out select-none
      ${disabled ? "bg-gray-400 opacity-95 pointer-events-none" : variant}
      ${className}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={12}
          height={12}
          viewBox="0 0 30 30"
          className="mr-1.5 fill-white"
        >
          <path d="M26.98 5.99a1 1 0 0 0-.687.303L11 21.586l-6.293-6.293a1 1 0 1 0-1.414 1.414l7 7a1 1 0 0 0 1.414 0l16-16a1 1 0 0 0-.727-1.717z" />
        </svg>
        {label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={12}
          height={12}
          viewBox="0 0 50 50"
          className="ml-1.5 cursor-pointer fill-white"
          onClick={onDelete}
        >
          <path d="M7.719 6.281 6.28 7.72 23.563 25 6.28 42.281 7.72 43.72 25 26.437 42.281 43.72l1.438-1.438L26.437 25 43.72 7.719 42.28 6.28 25 23.563Z" />
        </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={12}
            height={12}
            viewBox="0 0 30 30"
            className={`mr-1.5 ${disabled ? "fill-gray-400" : "fill-blue-500 dark:fill-green-500"}`}
          >
            <path d="M26.98 5.99a1 1 0 0 0-.687.303L11 21.586l-6.293-6.293a1 1 0 1 0-1.414 1.414l7 7a1 1 0 0 0 1.414 0l16-16a1 1 0 0 0-.727-1.717z" />
          </svg>
          {label}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={12}
            height={12}
            viewBox="0 0 50 50"
            className={`ml-1.5 cursor-pointer ${disabled ? "fill-gray-400" : "fill-blue-500 dark:fill-green-500"}`}
            onClick={onDelete}
          >
            <path d="M7.719 6.281 6.28 7.72 23.563 25 6.28 42.281 7.72 43.72 25 26.437 42.281 43.72l1.438-1.438L26.437 25 43.72 7.719 42.28 6.28 25 23.563Z" />
          </svg>
        </div>
      </div>
    );
}
