import Image from "next/image";
import { Card } from "./Card-End";

const events = [
  {
    name: "Kick-off Mixer",
    date: "Nov 1, 2:00 PM",
    icon: "users" as const,
    color: "blue" as const,
  },
  {
    name: "Hacking Period",
    date: "Nov 1 - Nov 7",
    icon: "calendar" as const,
    color: "green" as const,
  },
  {
    name: "Final Showcase",
    date: "Nov 8, 10:00 AM",
    icon: "trophy" as const,
    color: "red" as const,
  },
];

export default function End() {
  return (
    <div className="flex flex-col items-center justify-center bg-dark-400 text-center p-4 min-h-screen w-full">
      {/* SECTION CHIP*/}
      <div className="mt-20 w-40 relative rounded-3xl p-[2px] bg-gradient-to-r from-[#fbbc04] via-[#f46930] to-[#eb4235]">
        <div className="rounded-full bg-dark-400 px-4 py-1">
          <p className="text-lg font-semibold bg-gradient-to-r from-[#fbbc04] via-[#f46930] to-[#eb4235] text-transparent bg-clip-text">
            DevFest 2024
          </p>
        </div>
      </div>

      {/* HEADER + DESCRIPTION */}
      <div className="text-heading-md sm:text-heading-lg md:text-heading-xl mt-6 sm:mt-8 mb-2 text-white font-bold">
        Hackathon Schedule
      </div>
      <div className="md:text-heading-md mb-8 text-gray-300 w-full">
        A week-long journey of innovation and creativity
      </div>

      {/* TOP GRID */}
      <div className="w-full max-w-6xl">
        <div className="flex flex-col md:flex-row mb-8">
          {/* IMAGE */}
          <div className="w-full md:w-1/3 bg-white p-4 m-2 rounded-xl flex items-center justify-center">
            <div className="relative w-full h-48 md:h-64">
              <Image
                src="/images/google-ball.png"
                layout="fill"
                objectFit="contain"
                alt="Google ball"
              />
            </div>
          </div>
          {/* HACKATHON DESCRIPTION */}
          <div className="w-full md:w-2/3 bg-white p-6 m-2 rounded-xl text-gray-800">
            <h3 className="text-heading-lg mb-4 font-semibold">
              Ignite Your Innovation
            </h3>
            <p className="text-lg md:text-xl">
              Join us for an exhilarating week of coding, creativity, and
              collaboration. Our DevFest Hackathon challenges you to push the
              boundaries of technology and create impactful solutions. Connect
              with fellow innovators, learn from industry experts, and showcase
              your skills to win amazing prizes!
            </p>
          </div>
        </div>

        {/* BOTTOM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {events.map((event) => (
            <Card key={event.name} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
}
