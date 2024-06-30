export enum RADIO_VARIANTS {
  RADIO_PADDING_ON_LG = "has-[:checked]:bg-purple-500 has-[:checked]:bg-opacity-15 has-[:checked]:ring-purple-500 has-[:checked]:ring-1 opacity-100 hover:border-opacity-100 hover:bg-blue-500 hover:bg-opacity-15 py-3 text-body-xl hover:bg-purple-500 active:bg-dark-500",
  RADIO_PADDING_OFF_LG = "bg-dark-500 text-white py-3 text-body-xl",
  RADIO_DISABLED = "py-3 text-body-xl text-gray-400 dark:text-gray-500",

  RADIO_PADDING_ON_MD = "has-[:checked]:bg-purple-500 has-[:checked]:bg-opacity-15 has-[:checked]:ring-purple-500 has-[:checked]:ring-1 opacity-100 hover:border-opacity-100 hover:bg-blue-500 hover:bg-opacity-15 py-2.5 text-body-lg hover:bg-purple-500 active:bg-dark-500",
  RADIO_PADDING_OFF_MD = "bg-dark-500 text-white py-2.5 text-body-lg",
  RADIO_DISABLED_MD = "py-2.5 text-body-lg text-gray-400 dark:text-gray-500",
}

interface RadioProps {
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
  variant?: RADIO_VARIANTS;
}

export default function Radio({
  label,
  checked,
  onChange,
  disabled,
  className,
  variant,
}: RadioProps) {
  const isPaddingOFF =
    variant === RADIO_VARIANTS.RADIO_PADDING_OFF_LG ||
    variant === RADIO_VARIANTS.RADIO_PADDING_OFF_MD;
  return (
    <label
      className={`
        relative
        rounded-md
        px-5
        py-0.5
        duration-200
        ease-in-out
        ${className}
        ${variant}
      `}
    >
      <div className="flex gap-2">
        <input
          type="radio"
          id="LG_PADDING_RADIO"
          onChange={onChange}
          disabled={disabled}
          className={`
            ${isPaddingOFF ? "hover:ring-4 hover:ring-purple-500 hover:ring-opacity-15 hover:border-white-500  hover:border-opacity-15 hover:bg-purple-500 hover:bg-opacity-15" : ""}
            relative peer shrink-0 appearance-none w-6 h-6 border-2 border-white-500 rounded-xl mt-1 disabled:border-gray-500 disabled: visible
            `}
        />
        <label htmlFor="Radio">{label}</label>
        <svg
          className="absolute w-4 h-4 mt-2 ml-1 hidden peer-checked:block pointer-events-none"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="7" cy="7" r="7" fill="white" />
        </svg>
        <polyline points="20 6 9 17 4 12"></polyline>
      </div>
    </label>
  );
}
