import Image from "next/image";
import { Card } from "./components/Card-End";

const cities = ["OC", "SD", "LA"];

export default function End() {
  return (
    <div className="flex flex-col items-center justify-center bg-dark-400 text-center p-4">
      {/* SECTION CHIP*/}
      <div className="mt-20 w-28 relative rounded-3xl p-[2px] bg-gradient-to-r from-[#fbbc04] via-[#f46930] to-[#eb4235]">
        <div className=" rounded-full bg-dark-400 px-4 py-1">
          <p className="text-title-md bg-gradient-to-r from-[#fbbc04] via-[#f46930] to-[#eb4235] text-transparent bg-clip-text">
            About
          </p>
        </div>
      </div>

      {/* HEADER + DESCRIPTION */}
      <div className="text-heading-md md:text-heading-lg mt-8 mb-2 text-white">
        Region
      </div>
      <div className="text-title-lg md:text-heading-md mb-4 text-white max-w-2xl">
        Workshops, guest speakers, networking
      </div>
      {/* TOP GRID */}
      <div className="w-full max-w-6xl">
        <div className="flex flex-col md:flex-row mb-4">
          {/* IMAGE */}
          <div className="w-full md:w-1/3 bg-white p-4 m-2 rounded-xl flex items-center justify-center">
            <div className="relative w-full h-48 md:h-64">
              <Image
                src="/images/googleball.png"
                layout="fill"
                objectFit="contain"
                alt="Google ball"
              />
            </div>
          </div>
          {/* NETWORK DESCIRPTION */}
          <div className="w-full md:w-2/3 bg-white p-6 m-2 rounded-xl ">
            <h3 className="text-title-xl md:text-heading-md mb-4 ">Network</h3>
            <p className="text-body-lg md:text-body-xl ">
              Our developer community spans across the globe. Connect through
              chapter-hosted events, join a program to fast-track success, or
              simply explore this space to learn something new from the
              community.
            </p>
          </div>
        </div>

        {/* BOTTOM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cities.map((city) => (
            <Card key={city} name={city} />
          ))}
        </div>
      </div>
    </div>
  );
}
