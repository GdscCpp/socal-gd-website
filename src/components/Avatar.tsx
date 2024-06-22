import React from "react";

interface AvatarProps {
  src: string;
  alt: string;
  size?: "small" | "medium" | "large";
  className?: string;
}

export default function Avatar({
  src,
  alt,
  size = "medium",
  className,
}: AvatarProps) {
  const sizeClasses = {
    small: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-16 h-16",
  };

  return (
    <div className={`relative inline-block ${sizeClasses[size]} ${className}`}>
      {src ? (
        <img
          src={src}
          alt={alt}
          className="rounded-full object-cover w-full h-full"
        />
      ) : (
        <div className="flex items-center justify-center w-full h-full bg-gray-300 rounded-full text-white">
          {alt.charAt(0).toUpperCase()}
        </div>
      )}
    </div>
  );
}
