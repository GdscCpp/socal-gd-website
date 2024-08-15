import Button, { BUTTON_VARIANTS } from "../input/Button";
import headerImg from "../../../public/images/wtm-header.png";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex lg:flex-row sm:flex-col gap-x-10 gap-y-10">
      <div className="flex flex-col">
        <h1 className="font-bold sm:text-center lg:text-left text-heading-xl lg:text-nowrap">
          Women Tech Makers
        </h1>
        <h2 className="sm:text-center lg:text-left text-heading-lg">
          Southern California
        </h2>
      </div>
      <div className="flex flex-col justify-center">
        <Button
          className="h-fit"
          variant={BUTTON_VARIANTS.GRADIENT_1_SM}
          label="Becom a WTM"
          type="button"
        />
      </div>
      <Image src={headerImg.src} width={356} height={358} alt={"WTM Header"} />
    </div>
  );
}
