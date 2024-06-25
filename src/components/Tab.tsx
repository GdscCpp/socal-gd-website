function Tab({ text }: { text: string }) {
  return (
    <button>{text}</button>

    /*
        //////////////////////////////
        // GEN TAB STYLES REFERENCE //
        //////////////////////////////

        >>> don't forget SVG import!

        // TYPES //
            > HORIZONTAL
                width: 73
                height 40
                > IF ROUNDED:
                    border-radius: 4
                > ELSE:
                    none
            > VERTICAL
                width: 53
                height 60
                > IF ROUNDED:
                    border-radius: 4
                > ELSE:
                    none

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
  );
}

export default Tab;
