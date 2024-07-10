import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  iconSrc: string;
  linkText: string;
  linkHref: string;
}

export default function Card({
  title,
  description,
  iconSrc,
  linkText,
  linkHref,
}: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
      {/* TITLE */}
      <h3 className="text-title-xl font-bold mt-2 text-dark-400">{title}</h3>

      {/* DESCRIPTION */}
      <p className="text-dark-300 text-center mb-4">{description}</p>
      {/* ICON */}
      <div className="mb-4">
        <Image src={iconSrc} alt={title} width={48} height={48} />
      </div>

      {/* LINK */}
      <a
        href={linkHref}
        className="text-blue-500 hover:text-blue-700 transition-colors duration-300 text-sm font-medium"
      >
        {linkText}
      </a>
    </div>
  );
}
