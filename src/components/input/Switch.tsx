interface SwitchProps {
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
}

export default function Switch({
  label,
  checked,
  onChange,
  disabled,
  className,
}: SwitchProps) {
  return <></>;
}
