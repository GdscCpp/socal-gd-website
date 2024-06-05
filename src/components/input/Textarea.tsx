interface TextareaProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  className?: string;
}

export default function Textarea({
  label,
  value,
  onChange,
  disabled,
  className,
}: TextareaProps) {
  return <></>;
}
