import Image from "next/image";
import LeadCard from "../components/Card-Lead";
// Assume this is the path to the LeadCard component

export default function FindGroup() {
  const leads = [
    {
      name: "John Doe",
      city: "Los Angeles",
      avatarSrc: "/images/test-avatar.png",
    },
    {
      name: "Jane Smith",
      city: "San Francisco",
      avatarSrc: "/images/test-avatar.png",
    },
    {
      name: "Alice Johnson",
      city: "New York",
      avatarSrc: "/images/test-avatar.png",
    },
    {
      name: "Bob Wilson",
      city: "Chicago",
      avatarSrc: "/images/test-avatar.png",
    },
  ];

  return (
    <div className="flex flex-col bg-dark-400 p-4 min-h-screen">
      <div className="container mx-auto">
        {/* HEADER */}
        <h1 className="text-heading-lg text-white mb-8 text-center">
          Find a Group
        </h1>

        {/* BODY */}
        <div className="flex flex-col lg:flex-row w-full gap-8">
          {/* CITY MAP */}
          <div className="w-full h-96 lg:h-auto lg:w-1/2 bg-white rounded-xl p-4 relative overflow-hidden">
            {/* Map Image */}
            <Image
              src="/images/map-section.png"
              alt="Map"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* GSDC LEADS */}
          <div className="w-full lg:w-1/2 bg-white rounded-xl p-4">
            <h2 className="text-title-xl mb-4 text-center lg:ml-8 lg:text-left">
              GDG Los Angeles
            </h2>
            <div className="flex flex-col items-center">
              {leads.map((lead, index) => (
                <LeadCard key={index} {...lead} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
