//original svg file: ./public/icons/check.svg

import React from "react";

interface CheckSvgProps {
  width: number;
  height: number;
  fill?: string;
  className?: string;
  onClick?: () => void;
}

const CheckSvg = ({
  width,
  height,
  fill,
  className,
  onClick,
}: CheckSvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 30 30"
      className={`${className} ${fill}`}
      onClick={onClick}
    >
      <path d="M26.98 5.99a1 1 0 0 0-.687.303L11 21.586l-6.293-6.293a1 1 0 1 0-1.414 1.414l7 7a1 1 0 0 0 1.414 0l16-16a1 1 0 0 0-.727-1.717z" />
    </svg>
  );
};

export default CheckSvg;
