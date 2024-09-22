import Image from "next/image";
import { FaCalendarAlt, FaCode, FaUsers } from "react-icons/fa";

export default function Middle() {
  return (
    <div className="flex flex-col items-center justify-center bg-dark-400 w-full text-center px-4 md:px-8">
      {/* SECTION CHIP */}
      <div className="w-24 sm:w-28 relative rounded-3xl p-[2px] bg-2cg-2 mt-4 sm:mt-6">
        <div className="rounded-full bg-dark-400 px-3 sm:px-4 py-1">
          <p className="text-body-lg sm:text-title-md bg-2cg-2 text-transparent bg-clip-text">
            About
          </p>
        </div>
      </div>

      {/* HEADER + DESCRIPTION */}
      <div className="text-heading-md sm:text-heading-lg md:text-heading-xl mt-6 sm:mt-8 mb-2 text-white">
        About DevFest 2024
      </div>
      <div className="text-title-lg sm:text-title-xl md:text-heading-md mb-12 sm:mb-16 md:mb-20 text-white">
        Hackathon, Guest Speakers, Networking
      </div>

      {/* IMAGE + BOX */}
      <div className="relative w-full max-w-4xl mb-12 sm:mb-16 md:mb-20">
        <div className="bg-white rounded-3xl h-32 sm:h-36 md:h-40"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-[140%] sm:h-[150%] md:h-[160%]">
          <Image
            src="/images/google-computer.png"
            alt="DevFest 2024"
            layout="fill"
            objectFit="contain"
            objectPosition="bottom"
          />
        </div>
      </div>

      {/* Activity Section */}
      <div className="w-24 sm:w-28 relative rounded-3xl p-[2px] bg-2cg-2 mt-8 sm:mt-10 md:mt-12">
        <div className="rounded-full bg-dark-400 px-3 sm:px-4 py-1">
          <p className="text-body-lg sm:text-title-md bg-2cg-2 text-transparent bg-clip-text">
            Activities
          </p>
        </div>
      </div>

      {/* HEADER + DESCRIPTION */}
      <div className="text-heading-md sm:text-heading-lg md:text-heading-xl mt-6 sm:mt-8 mb-2 text-white">
        Whats Happening at DevFest 2024
      </div>
      <div className="text-title-lg sm:text-title-xl md:text-heading-md mb-6 sm:mb-8 text-white">
        Discover the exciting events and activities we have planned.
      </div>

      <div className="flex flex-col md:flex-row gap-6 sm:gap-8 w-full max-w-6xl">
        {/* FIRST COL */}
        <div className="flex-1 bg-white rounded-xl p-6 sm:p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
          <div className="flex justify-center mb-4 sm:mb-6">
            <FaCode className="text-blue-500" size={36} />
          </div>
          <p className="text-title-xl mt-6 sm:text-heading-lg mb-4 sm:mb-6 text-dark-400">
            Hackathon
          </p>
          <div className="relative h-48 sm:h-56 md:h-64 lg:h-80 rounded-lg overflow-hidden">
            <Image
              src="/images/google-event.png"
              alt="Hackathon"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        {/* SECOND COL */}
        <div className="flex-1 flex flex-col gap-6 sm:gap-8">
          <div className="bg-white rounded-xl p-6 sm:p-8 text-center">
            <div className="flex justify-center mb-4 sm:mb-6">
              <FaUsers className="text-green-500" size={28} />
            </div>
            <p className="text-title-xl sm:text-heading-md mb-4 sm:mb-6 text-dark-400">
              What We Offer
            </p>
            <p className="text-body-lg sm:text-body-xl text-dark-300">
              Join us for a week-long hackathon, learn from industry
              professionals, and network with fellow developers. Create
              impactful solutions and win exciting prizes!
            </p>
          </div>
          {/* STAT ROW */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-4">
            {/* BOX 1 */}
            <div className="bg-white rounded-xl p-5 sm:p-6 text-center shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="flex justify-center mb-3 sm:mb-4">
                <FaUsers className="text-purple-500" size={36} />
              </div>
              <p className="text-title-xl sm:text-heading-md mb-3 sm:mb-4 text-dark-400">
                300
              </p>
              <p className="text-body-md sm:text-body-lg text-dark-300">
                Participants Expected
              </p>
            </div>
            {/* BOX 2 */}
            <div className="bg-white rounded-xl p-5 sm:p-6 text-center shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="flex justify-center mb-3 sm:mb-4">
                <FaCalendarAlt className="text-red-500" size={36} />
              </div>
              <p className="text-title-xl sm:text-heading-md mb-3 sm:mb-4 text-dark-400">
                7 Day
              </p>
              <p className="text-body-md sm:text-body-lg text-dark-300">
                Of Collaborative Hacking
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
