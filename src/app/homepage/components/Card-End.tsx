interface CardProps {
  name: string;
}

export function Card({ name }: CardProps) {
  return (
    <div className="bg-white p-8 rounded-xl flex items-center justify-center">
      {/* NAME */}
      <span className="text-title-lg md:text-title-xl">{name}</span>
    </div>
  );
}
