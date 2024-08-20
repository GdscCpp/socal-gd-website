import LeadCard from "../gdg/LeadCard";
const ambassadors = [
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

export default function Middle() {
  return (
    <div className="flex flex-col gap-y-10 justify-center items-center">
      <h2 className="text-heading-lg  text-center">About</h2>
      <div className="flex flex-col bg-white rounded-xl text-dark-400 text-center w-fit justify-center items-center p-4">
        <p>
          Google&apos;s Women Techmakers program provides visibility, community,
          and resources for women in technology.
        </p>
      </div>
      <h2 className="text-heading-lg text-center">Connect</h2>
      <div className="w-fit bg-white rounded-xl p-4">
        <h2 className="text-title-xl text-black mt-2 mb-4 text-center lg:ml-8 lg:text-left">
          WTM Ambassadors
        </h2>
        <div className="flex flex-col items-center">
          {ambassadors.map((ambassador, index) => (
            <LeadCard key={index} {...ambassador} />
          ))}
        </div>
      </div>
    </div>
  );
}
