import TabSvg from "./svgs/TabSvg";

export enum orientation {
  horizontal = "flex-row px-3",
  vertical = "flex-col p-3",
}

interface TabProps {
  text: string;
  className?: string;
  display: orientation;
  rounded: boolean;
}

function Tab({ text, className, display, rounded }: TabProps) {
  let borderRadius = "rounded";
  return rounded ? (
    // Rounded Tab Corners
    <button
      className={`flex items-center content-center ${display} ${borderRadius} text-body-lg ${className}`}
    >
      <TabSvg width={14} height={14} display={display} fill="#fff" />
      <p className="m-0">{text}</p>
    </button>
  ) : (
    // Sharp Tab Corners
    <button
      className={`flex items-center content-center ${display} text-body-lg ${className}`}
    >
      <TabSvg width={14} height={14} display={display} fill="#fff" />
      <p className="m-0">{text}</p>
    </button>
  );
}

export default Tab;

/*
        //////////////////////////////
        // GEN TAB STYLES REFERENCE //
        //////////////////////////////

        // COLORS //
            > LIGHT
                        | BACKGROUND                 |  TEXT/ICON COLOR
                STYLE 1:| transparent                |  #4F575E
                STYLE 2:| transparent                |  #FECB33 [secondary/Yellow]
                STYLE 3:| #F8F5FF                    |  #5693FD (70% opacity)
                STYLE 4:| #F8F5FF (50% opacity)      |  #FECB33 [secondary/Yellow]
                STYLE 5:| #F7F9FD                    |  #A7AEB4
                STYLE 6:| #5693FD [primary/Blue 500] |  #FFFFFF [surface/White]
                STYLE 7:| #5693FD [primary/Blue 500] |  #FECB33 [secondary/Yellow]
            > DARK
                        | BACKGROUND                              |  TEXT COLOR
                STYLE 1:| transparent                             |  #CBCFD2
                STYLE 2:| transparent                             |  #FECB33 [secondary/Yellow]
                STYLE 3:| #7D49F8 (15% opacity) [opacity/primary] |  #5693FD [primary/Blue 500]
                STYLE 4:| #7D49F8 (15% opacity) [opacity/primary] |  #FECB33 [secondary/Yellow]
                STYLE 5:| #212125 [surface/Grey 900]              |  #6B767F
                STYLE 6:| #5693FD [primary/Blue 500]              |  #FFFFFF [surface/White]
                STYLE 7:| #5693FD [primary/Blue 500]              |  #FECB33 [secondary/Yellow]

        */
