import Image from "next/image";
import headerImg from "../../../public/images/register-header.png";

export default function HeaderAndContent() {
  return (
    <div className="flex flex-col bg-dark-400 text-white ">
      {/* Header Section */}
      <div className="relative w-full px-4 py-8">
        {/* Top line */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-white" />

        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
          {/* Text and button section */}
          <div className="text-center md:text-left mb-8 md:mb-0 z-10 flex-1">
            <h1 className="text-heading-lg lg:text-heading-xl font-bold mb-2">
              Join the Community
            </h1>
            <h2 className="text-title-xl md:text-heading-md lg:text-heading-lg mb-6">
              Enroll Your Organization
            </h2>
          </div>

          {/* Image section */}
          <div className="flex-1 flex justify-center">
            <Image
              src={headerImg.src}
              height={500}
              width={500}
              alt="Register Header"
              className="w-full max-w-lg"
            />
          </div>
        </div>

        {/* Bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
      </div>
    </div>
  );
}
