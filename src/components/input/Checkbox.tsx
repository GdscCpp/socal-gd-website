export enum CHECKBOX_VARIANTS {
  CHECKBOX_PADDING_ON_LG = "hover:shadow-button-hover active:ring-1 active:shadow-xl active:shadow-blue-500 has-[:checked]:bg-purple-500 has-[:checked]:bg-opacity-15 has-[:checked]:ring-blue-500 has-[:checked]:ring-1 opacity-100 hover:border-opacity-100 hover:bg-blue-500 hover:bg-opacity-15 py-3 text-body-xl hover:bg-purple-500 active:bg-dark-500",
  CHECKBOX_PADDING_OFF_LG = "bg-dark-500 text-white py-3 text-body-xl",
  CHECKBOX_DISABLED_LG = "py-3 text-body-xl text-gray-400 dark:text-gray-500",

  CHECKBOX_PADDING_ON_MD = "hover:shadow-button-hover active:shadow-xl active:shadow-blue-500 py-2.5 text-body-lg has-[:checked]:bg-purple-500 has-[:checked]:bg-opacity-15 has-[:checked]:ring-blue-500  has-[:checked]:ring-1 opacity-100 hover:border-opacity-100 hover:bg-blue-500 hover:bg-opacity-15 py-3 hover:bg-purple-500 active:bg-dark-500",
  CHECKBOX_PADDING_OFF_MD = "bg-dark-500 text-white py-2.5 text-body-lg",
  CHECKBOX_DISABLED_MD = "py-2.5 text-body-lg text-gray-400 dark:text-gray-500",
}

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
  variant?: CHECKBOX_VARIANTS;
}

export default function Checkbox({
  label,
  checked,
  onChange,
  disabled,
  className,
  variant,
}: CheckboxProps) {
  const isPaddingOFF =
    variant === CHECKBOX_VARIANTS.CHECKBOX_PADDING_OFF_LG ||
    variant === CHECKBOX_VARIANTS.CHECKBOX_PADDING_OFF_MD;
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
          type="checkbox"
          id="LG_PADDING_Checkbox"
          onChange={onChange}
          disabled={disabled}
          className={`
            ${isPaddingOFF ? "hover:ring-4 hover:ring-purple-500 hover:ring-opacity-15 hover:border-white-500 hover:border-opacity-15 hover:bg-purple-500 hover:bg-opacity-15 " : ""}
            relative peer shrink-0 appearance-none w-6 h-6 border-2 border-white-500 rounded-md bg-dark-500 mt-1 checked:bg-white checked:border-0 disabled:border-gray-500 disabled: visible`}
        />
        <label htmlFor="Checkbox">{label}</label>
        <svg
          className="absolute w-4 h-4 mt-2 ml-1 hidden peer-checked:block pointer-events-none"
          width="14"
          height="12"
          viewBox="0 0 14 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.6427 0.234381C14.0661 0.590071 14.1211 1.22168 13.7654 1.64512L5.36723 11.6429C5.18082 11.8648 4.9074 11.9951 4.61762 12C4.32784 12.005 4.05013 11.8841 3.85625 11.6687L0.25705 7.6696C-0.112892 7.25856 -0.0795702 6.62544 0.331478 6.2555C0.742525 5.88555 1.37564 5.91888 1.74559 6.32992L4.57446 9.47312L12.232 0.357054C12.5876 -0.0663868 13.2193 -0.121309 13.6427 0.234381Z"
            fill="url(#paint0_linear_301_352)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_301_352"
              x1="0"
              y1="5.99997"
              x2="14"
              y2="5.99997"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#4284F5" />
              <stop offset="0.25" stop-color="#4284F5" />
              <stop offset="0.75" stop-color="#34A853" />
              <stop offset="1" stop-color="#34A853" />
            </linearGradient>
          </defs>
        </svg>
        <polyline points="20 6 9 17 4 12"></polyline>
      </div>
    </label>
  );
}
