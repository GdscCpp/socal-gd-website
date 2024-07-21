import Button, { BUTTON_VARIANTS } from "@/components/input/Button";
import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-dark-400 text-white">
      {/* MAIN CONTENT SECTION */}
      <div className="relative mx-auto px-4 pt-1">
        {/* TOP LINE */}
        <hr className="absolute top-0 left-0 right-0 h-0.5 bg-white" />
        <div className="ml-20 mr-20">
          <div className="flex flex-col mt-5 md:flex-row items-center justify-between">
            {/* TEXT AND BUTTON SECTION */}
            <div className="text-center md:text-left mb-8 md:mb-0 z-10">
              <h1 className="text-heading-md md:text-heading-lg lg:text-heading-xl font-bold mb-2">
                Google For Developers
              </h1>
              <h2 className="text-title-lg md:text-heading-md lg:text-heading-lg mb-6">
                Southern California
              </h2>
              <div className="flex items-center justify-center md:justify-start">
                <Button
                  className="w-38 flex items-center justify-items-end md:w-auto text-body-md md:text-body-lg lg:text-body-xl mb-5"
                  label="Find a Group"
                  type="button"
                  variant={BUTTON_VARIANTS.GRADIENT_1_SM}
                />
              </div>
            </div>
            {/* IMAGE SECTION */}
            <Image
              src="/images/google-gdg-header.png"
              width={1920}
              height={1080}
              alt="Google Icon"
              className="m-auto w-full max-w-none md:max-w-[95vw] lg:max-w-[1800px]"
              priority
            />
          </div>
        </div>
        {/* BOTTOM LINE */}
        <hr className="absolute bottom-0 left-0 right-0 h-0.5 bg-white block md:hidden" />
      </div>
      {/* CARDS SECTION */}
      <div className="bg-dark-400 py-12 md:py-20 lg:py-36 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-16 bg-white rounded-xl text-black text-center">
              <p className="text-title-lg">Culver City</p>
              <p className="text-body-xl m-2">Descript</p>
            </div>
            <div className="p-16 bg-white rounded-xl text-black text-center">
              <p className="text-title-lg">Culver City</p>
              <p className="text-body-xl m-2">Descript</p>
            </div>
            <div className="p-16 bg-white rounded-xl text-black text-center">
              <p className="text-title-lg">Culver City</p>
              <p className="text-body-xl m-2">Descript</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
