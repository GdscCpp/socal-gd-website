import Button, { BUTTON_VARIANTS } from "@/components/input/Button";
import Image from "next/image";

interface CardProps {
  header: string;
  date: string;
  photo: string;
  description: string;
  link: string;
}

export default function Card({
  header,
  date,
  photo,
  description,
  link,
}: CardProps) {
  return (
    <div className="flex flex-col justify-center items-center text-center bg-white p-4 rounded-lg shadow-md max-w-sm">
      {/* Header */}
      <h2 className="text-xl font-bold mb-2">{header}</h2>

      {/* Date */}
      <p className="text-sm text-gray-500 mb-4">{date}</p>

      {/* Photo */}
      <div className="mb-4">
        <Image
          alt="Card photo"
          height={200}
          width={200}
          src={photo}
          className="rounded-md object-cover"
        />
      </div>

      {/* Description */}
      <p className="mb-4">{description}</p>

      {/* Link */}
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Button
          variant={BUTTON_VARIANTS.PRIMARY_SM}
          label="Learn More"
          type="button"
          className="w-28 text-body-sm"
        />
      </a>
    </div>
  );
}
