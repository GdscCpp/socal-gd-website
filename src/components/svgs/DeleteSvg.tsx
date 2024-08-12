//original svg file: ./public/icons/delete.svg

import React from "react";

interface DeleteSvgProps {
  width: number;
  height: number;
  fill?: string;
  className?: string;
  onClick?: () => void;
}

const DeleteSvg = ({
  width,
  height,
  fill,
  className,
  onClick,
}: DeleteSvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 50 50"
      className={`${className} ${fill}`}
      onClick={onClick}
    >
      <path d="M7.719 6.281 6.28 7.72 23.563 25 6.28 42.281 7.72 43.72 25 26.437 42.281 43.72l1.438-1.438L26.437 25 43.72 7.719 42.28 6.28 25 23.563Z" />
    </svg>
  );
};

export default DeleteSvg;
