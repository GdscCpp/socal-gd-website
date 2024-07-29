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
    <div className="flex flex-col justify-center items-center text-center bg-white p-4 rounded-lg max-w-sm border-2 transition-all duration-300 ease-in-out hover:shadow-2xl  hover:-translate-y-1">
      {/* Header */}
      <h2 className="text-xl font-bold text-gray-700 mb-2">{header}</h2>

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
      <p className="mb-4 text-gray-500">{description}</p>

      {/* Link */}
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Button
          variant={BUTTON_VARIANTS.PRIMARY_SM}
          label="Learn More"
          type="button"
          className="w-28 text-caption transition-all duration-300 ease-in-out hover:opacity-90 hover:shadow-md"
        />
      </a>
    </div>
  );
}
