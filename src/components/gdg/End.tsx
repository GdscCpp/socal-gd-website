import { IconType } from "react-icons";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiStairsGoal } from "react-icons/gi";
import Card from "./BevyCard";

interface CardProps {
  header: string;
  date: Date;
  photo: string;
  description: string;
  link: string;
}

const sampleCardProps: CardProps = {
  header: "Upcoming Event: Tech Meetup",
  date: new Date("2024-07-30"),
  photo: "/images/google-gdg-header.png",
  description:
    "Join us for an exciting tech meetup featuring talks on AI and Web Dev.",
  link: "https://example.com/event",
};

const aboutEvents: string[] = [
  "Foster a community of developers interested in Google technologies",
  "Provide a platform for knowledge sharing and networking",
  "Encourage innovation and collaboration in tech projects",
  "Bridge the gap between local developers and global Google experts",
  "Support career growth and professional development in tech",
];

const socialEvents: string[] = [
  "Organize monthly tech talks and workshops on Google technologies",
  "Facilitate hands-on coding sessions and hackathons",
  "Host annual DevFest events to showcase local talent",
  "Provide mentorship programs for aspiring developers",
  "Collaborate with other tech communities for larger impact",
  "Increase diversity and inclusion in the local tech ecosystem",
];

interface InfoSectionProps {
  title: string;
  items: string[];
  icon: IconType;
}

function InfoSection({
  title,
  items,
  icon: Icon,
}: InfoSectionProps): JSX.Element {
  return (
    <div className="w-full bg-white rounded-xl p-4">
      <h2 className="text-xl font-semibold mb-4 text-center text-black text-body-lg">
        {title}
      </h2>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <Icon className="w-16 h-16 mx-auto" />
    </div>
  );
}

export default function End(): JSX.Element {
  return (
    <div className="flex flex-col bg-dark-400 p-4 min-h-screen">
      <p className="text-white text-center p-4 sm:p-8 text-heading-md font-bold">
        Get Involved
      </p>
      <div className="flex flex-col lg:flex-row w-full gap-4 lg:gap-8">
        {/* BEVY SECTION */}
        <div className="w-full lg:w-1/2 bg-white rounded-xl p-4 overflow-hidden">
          <h2 className="text-xl font-semibold mb-4">Upcoming events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card {...sampleCardProps} />
            <Card {...sampleCardProps} />
            <Card {...sampleCardProps} />
            <Card {...sampleCardProps} />
          </div>
        </div>
        {/* PURPOSE | GOALS COL */}
        <div className="flex flex-col w-full lg:w-1/2 gap-4 lg:gap-8">
          <InfoSection
            title="About Events"
            items={aboutEvents}
            icon={FaPeopleGroup}
          />
          <InfoSection
            title="Social Events"
            items={socialEvents}
            icon={GiStairsGoal}
          />
        </div>
      </div>
    </div>
  );
}
