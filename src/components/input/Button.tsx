export enum BUTTON_VARIANTS {}
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
  return <></>;
}
