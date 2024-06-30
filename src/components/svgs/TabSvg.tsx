import React from "react";
import Tab, { ORIENTATION } from "@/components/Tab";
import Image from "next/image";
import Icon from "/public/icons/tab.svg";

interface TabSvgProps {
  width: number;
  height: number;
  display: ORIENTATION;
  className?: string;
  fill: string;
}

const TabSvg = ({ width, height, display, className, fill }: TabSvgProps) => {
  return (
    <Image
      src={Icon}
      width={`${width}`}
      height={`${height}`}
      className={`${display === ORIENTATION.HORIZONTAL ? "mr-2" : "mb-2"} ${className}`}
      style={{ fill }} // I can't get the color here to pass into the svg file to match the text!
      alt="Default Tab Icon"
    />
  );
};

export default TabSvg;
