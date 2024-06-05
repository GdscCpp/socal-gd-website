interface InputProps {
  label: string;
  type: "text" | "password" | "email" | "number";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
}

export default function Input({
  label,
  type,
  value,
  onChange,
  disabled,
  className,
}: InputProps) {
  return <></>;
}
