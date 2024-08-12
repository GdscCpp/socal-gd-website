import Button, { BUTTON_VARIANTS } from "@/components/input/Button";
import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-dark-400 text-white">
      <div className="relative mx-auto px-4 pt-1">
        <hr className="absolute top-0 left-0 right-0 h-0.5 bg-white mb-20" />
        <div className="ml-20 mr-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-8 md:mb-0 z-10 flex-1">
              <h1 className="text-heading-md md:text-heading-lg lg:text-heading-xl font-bold mb-2">
                Women Tech Makers
              </h1>
              <h2 className="text-title-lg md:text-heading-md lg:text-heading-lg mb-6">
                Southern California
              </h2>
            </div>
            <div className="flex-shrink-0 mt-4 md:mt-8 mb-8 md:ml-8 flex flex-col items-end">
              <Image
                src="/images/google-wtm-header.png"
                width={250}
                height={250}
                alt="Google Icon"
                className="mx-auto md:ml-auto"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <Button
              className="w-50 flex items-center justify-center text-lg md:text-xl lg:text-xl mb-16 md:ml-[150px]"
              label="Become an Expert"
              type="button"
              variant={BUTTON_VARIANTS.GRADIENT_1_SM}
            />
          </div>
        </div>
        <hr className="absolute bottom-0 left-0 right-0 h-0.5 bg-white mt-24" />
      </div>
    </div>
  );
}
