import { IconType } from "react-icons";
import { FaCalendarAlt, FaTrophy, FaUsers } from "react-icons/fa";

interface CardProps {
  name: string;
  date: string;
  icon: "users" | "calendar" | "trophy";
  color: "blue" | "green" | "red";
}

const iconMap: Record<CardProps["icon"], IconType> = {
  users: FaUsers,
  calendar: FaCalendarAlt,
  trophy: FaTrophy,
};

const colorMap: Record<CardProps["color"], string> = {
  blue: "text-blue-500",
  green: "text-green-500",
  red: "text-red-500",
};

export function Card({ name, date, icon, color }: CardProps) {
  const Icon = iconMap[icon];
  const iconColor = colorMap[color];

  return (
    <div className="bg-white rounded-xl p-6 flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-center mb-4">
        <Icon className={`w-12 h-12 ${iconColor}`} />
      </div>
      <div className="flex flex-col mb-4">
        <h3 className="text-title-lg font-semibold text-dark-400">{name}</h3>
      </div>
      <p className="text-body-lg text-dark-300 mt-auto">{date}</p>
    </div>
  );
}
