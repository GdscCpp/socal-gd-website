import Avatar from "@/components/Avatar";
import { CgMail } from "react-icons/cg";
import { CiLinkedin } from "react-icons/ci";

interface CardProps {
  name: string;
  city: string;
  avatarSrc: string;
}

export default function LeadCard({ name, city, avatarSrc }: CardProps) {
  return (
    <div className="flex items-center justify-between w-full max-w-sm bg-white p-4 rounded-lg shadow-md mb-4">
      <div className="flex items-center">
        <Avatar
          size="Large"
          src={avatarSrc}
          alt={`${name}'s avatar`}
          className="mr-4"
        />
        <div className="flex flex-col">
          <p className="text-body-xl font-semibold">{name}</p>
          <p className="text-body-md text-gray-600 mb-6">GDG LEAD {city}</p>
        </div>
      </div>
      <div className="flex space-x-2">
        <CiLinkedin className="text-2xl text-gray-600 hover:text-blue-600 cursor-pointer w-6 h-6" />
        <CgMail className="text-2xl text-gray-600 hover:text-red-600 cursor-pointer w-6 h-6" />
      </div>
    </div>
  );
}
