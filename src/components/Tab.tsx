import TabSvg from "./svgs/TabSvg";

export enum ORIENTATION {
  HORIZONTAL = "flex-row p-3",
  VERTICAL = "flex-col p-3",
}

interface TabStyle {
  bgColor: string;
  textColor: string;
  iconColor: string;
}

const tabStyles: { [key: string]: TabStyle } = {
  LIGHT_NAV: {
    bgColor: "bg-white",
    textColor: "text-blue-500",
    iconColor: "#5693FD",
  },
  DARK_NAV: {
    bgColor: "bg-dark-100",
    textColor: "text-blue-500",
    iconColor: "#5693FD",
  },
  TRANS_NAV: {
    bgColor: "bg-transparent",
    textColor: "text-blue-500",
    iconColor: "#5693FD",
  },
  LIGHT_01: {
    bgColor: "bg-transparent",
    textColor: "text-[#4F575E]",
    iconColor: "#4F575E",
  },
  LIGHT_02: {
    bgColor: "bg-transparent",
    textColor: "text-yellow-500",
    iconColor: "#FECB33",
  },
  LIGHT_03: {
    bgColor: "bg-[#F8F5FF]",
    textColor: "text-blue-500 text-opacity-70",
    iconColor: "#5693FD",
  },
  LIGHT_04: {
    bgColor: "bg-[#F8F5FF] bg-opacity-50",
    textColor: "text-yellow-500",
    iconColor: "#FECB33",
  },
  LIGHT_05: {
    bgColor: "bg-[#F7F9FD]",
    textColor: "text-[#A7AEB4]",
    iconColor: "#A7AEB4",
  },
  LIGHT_06: {
    bgColor: "bg-blue-500",
    textColor: "text-[#FFFFFF]",
    iconColor: "#FFFFFF",
  },
  LIGHT_07: {
    bgColor: "bg-blue-500",
    textColor: "text-yellow-500",
    iconColor: "#FECB33",
  },
  DARK_01: {
    bgColor: "bg-transparent",
    textColor: "text-[#CBCFD2]",
    iconColor: "#CBCFD2",
  },
  DARK_02: {
    bgColor: "bg-transparent",
    textColor: "text-yellow-500",
    iconColor: "#FECB33",
  },
  DARK_03: {
    bgColor: "bg-[#7D49F8] bg-opacity-15",
    textColor: "text-blue-500 text-opacity-70",
    iconColor: "#5693FD",
  },
  DARK_04: {
    bgColor: "bg-[#7D49F8] bg-opacity-15",
    textColor: "text-yellow-500",
    iconColor: "#FECB33",
  },
  DARK_05: {
    bgColor: "bg-[#212125]",
    textColor: "text-[#6B767F]",
    iconColor: "#6B767F",
  },
  DARK_06: {
    bgColor: "bg-blue-500",
    textColor: "text-[#FFFFFF]",
    iconColor: "#FFFFFF",
  },
  DARK_07: {
    bgColor: "bg-blue-500",
    textColor: "text-yellow-500",
    iconColor: "#FECB33",
  },
};

interface TabProps {
  text: string;
  className?: string;
  display: ORIENTATION;
  rounded: boolean;
  style: keyof typeof tabStyles;
  onClick?: () => void;
  active?: boolean;
}

function Tab({
  text,
  className,
  display,
  rounded,
  style,
  onClick,
  active,
}: TabProps) {
  const { bgColor, textColor, iconColor } = tabStyles[style];
  const borderRadius = rounded ? "rounded" : "";
  const activeClass = active ? "opacity-100" : "opacity-50";

  return (
    <button
      className={`flex ${display} items-center ${borderRadius} ${className} text-body-lg ${bgColor} ${textColor} ${activeClass} transition-opacity duration-300`}
      onClick={onClick}
    >
      <TabSvg width={14} height={14} display={display} fill={`${iconColor}`} />
      <span className="overflow-hidden ml-2">{text}</span>
    </button>
  );
}

export default Tab;
