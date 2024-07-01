import React from "react";

interface AvatarProps {
  src: string;
  alt: string;
  size?: keyof typeof SizeClasses;
  className?: string;
}

enum SizeClasses {
  Medium = "w-12 h-12",
  Large = "w-14 h-14",
}

export default function Avatar({
  src,
  alt,
  size = "Medium",
  className,
}: AvatarProps) {
  return (
    <div className={`relative inline-block ${SizeClasses[size]} ${className}`}>
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
