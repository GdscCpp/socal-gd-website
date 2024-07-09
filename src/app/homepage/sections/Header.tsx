import Button, { BUTTON_VARIANTS } from "@/components/input/Button";
import Image from "next/image";

export default function Header() {
  return (
    <>
      {/* Out Container  */}
      <div className="flex items-center justify-center w-full h-screen bg-dark-400 text-white">
        {/* Flex Layout */}{" "}
        <hr className="absolute top-6 md:top-40 left-0 right-0 h-0.5 bg-white" />
        {/* Text Col */}
        <div className="flex flex-col mb-40 m-20 left-40">
          <p className="text-heading-xl font-bold">Google For Developers</p>
          <p className="text-heading-lg">Southern California</p>
          <div className="md:hidden mt-4 md:mt-0 md:ml-auto">
            <Image
              src={"/images/googleIcon1.png"}
              height={300}
              width={300}
              alt={"Google Icon"}
              className="mx-auto md:mx-0"
            />
          </div>
          <Button
            className="relative  w-full lg:ml-40 lg:left-96 md:w-40 md:mt-4  text-body-xl"
            label={"Find a Group"}
            type="button"
            variant={BUTTON_VARIANTS.GRADIENT_1_SM}
          />
        </div>
        <div className="hidden md:flex items-center justify-center mt-4 md:mt-0 md:ml-auto md:mr-auto">
          <Image
            src={"/images/googleIcon1.png"}
            height={400}
            width={400}
            alt={"Google Icon"}
            className="mx-auto md:mx-0"
          />
        </div>
        <hr className="absolute bottom-20 md:bottom-60 left-0 right-0 h-0.5 bg-white" />
      </div>
    </>
  );
}
