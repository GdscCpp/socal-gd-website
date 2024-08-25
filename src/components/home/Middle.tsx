import Image from "next/image";

export default function Middle() {
  return (
    <div className="flex flex-col items-center justify-center bg-dark-400 text-center px-4 md:px-8">
      {/* SECTION CHIP */}
      <div className="w-28 relative rounded-3xl p-[2px] bg-gradient-to-r from-[#fbbc04] via-[#f46930] to-[#eb4235] mt-6">
        <div className="rounded-full bg-dark-400 px-4 py-1">
          <p className="text-title-md bg-gradient-to-r from-[#fbbc04] via-[#f46930] to-[#eb4235] text-transparent bg-clip-text">
            About
          </p>
        </div>
      </div>

      {/* HEADER + DESCRIPTION */}
      <div className="text-heading-lg md:text-heading-xl mt-8 mb-2 text-white">
        About Us
      </div>
      <div className="text-heading-sm md:text-heading-md mb-20 text-white">
        Workshops, guest speakers, networking
      </div>

      {/* IMAGE + BOX */}
      <div className="relative w-full max-w-4xl mb-20">
        <div className="bg-white rounded-3xl h-40 "></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-[160%]">
          <Image
            src="/images/google-computer.png"
            alt="Computer"
            layout="fill"
            objectFit="contain"
            objectPosition="bottom"
          />
        </div>
      </div>

      {/* Activity Section */}
      <div className="w-28 relative rounded-3xl p-[2px] bg-gradient-to-r from-[#fbbc04] via-[#f46930] to-[#eb4235] mt-12">
        <div className="rounded-full bg-dark-400 px-4 py-1">
          <p className="text-title-md bg-gradient-to-r from-[#fbbc04] via-[#f46930] to-[#eb4235] text-transparent bg-clip-text">
            Activity
          </p>
        </div>
      </div>

      {/* HEADER + DESCRIPTION */}
      <div className="text-heading-lg md:text-heading-xl mt-8 mb-2 text-white">
        See What We Have Been Up To
      </div>
      <div className="text-heading-sm md:text-heading-md mb-8 text-white">
        Discover the events we participate and host.
      </div>

      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl">
        {/* FIRST COL */}
        <div className="flex-1 bg-white rounded-xl p-8">
          <p className="text-heading-md mb-2">Featured Events</p>
          <div className="relative h-60 md:h-80">
            <Image
              src="/images/google-event.png"
              alt="logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        {/* SECOUND COL */}
        <div className="flex-1 flex flex-col gap-8">
          <div className="bg-white rounded-xl p-8 text-center">
            <p className="text-heading-md mb-4">What We Do</p>
            <p className="text-body-lg">
              Meet and learn with other budding developers and build solutions
              for local businesses and communities with Google technology.
            </p>
          </div>
          {/* STAT ROW */}
          <div className="grid grid-cols-2 gap-4">
            {/* BOX 1 */}
            <div className="bg-white rounded-xl p-4 md:h-44 lg:h-48 text-center">
              <p className="text-heading-md mb-2 mt-4">2100+</p>
              <p className="text-body-md">College and university chapters+</p>
            </div>
            {/* BOX 2 */}
            <div className="bg-white rounded-xl p-4 md:h-44 lg:h-48 text-center">
              <p className="text-heading-md mb-2 mt-4">100</p>
              <p className="text-body-md">Countries Participating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
