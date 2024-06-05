interface RadioProps {
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
}

export default function Radio({
  label,
  checked,
  onChange,
  disabled,
  className,
}: RadioProps) {
  return <></>;
}
