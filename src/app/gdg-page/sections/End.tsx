import { FaPeopleGroup } from "react-icons/fa6";
import { GiStairsGoal } from "react-icons/gi";
import Card from "../components/Card-Bevy";

const sampleCardProps = {
  header: "Upcoming Event: Tech Meetup",
  date: "July 30, 2024",
  photo: "/images/google-gdg-header.png",
  description:
    "Join us for an exciting tech meetup featuring talks on AI and Web Dev.",
  link: "https://example.com/event",
};

export default function End() {
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
          <div className="w-full bg-white rounded-xl p-4">
            <h2 className="text-xl font-semibold mb-4 text-center text-black text-body-lg">
              About Events
            </h2>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>
                Foster a community of developers interested in Google
                technologies
              </li>
              <li>Provide a platform for knowledge sharing and networking</li>
              <li>Encourage innovation and collaboration in tech projects</li>
              <li>
                Bridge the gap between local developers and global Google
                experts
              </li>
              <li>
                Support career growth and professional development in tech
              </li>
            </ul>
            <FaPeopleGroup className="w-16 h-16 mx-auto" />
          </div>
          <div className="w-full bg-white rounded-xl p-4">
            <h2 className="text-xl font-semibold mb-4 text-center text-black">
              Socail Events
            </h2>

            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>
                Organize monthly tech talks and workshops on Google technologies
              </li>
              <li>Facilitate hands-on coding sessions and hackathons</li>
              <li>Host annual DevFest events to showcase local talent</li>
              <li>Provide mentorship programs for aspiring developers</li>
              <li>Collaborate with other tech communities for larger impact</li>
              <li>
                Increase diversity and inclusion in the local tech ecosystem
              </li>
            </ul>
            <GiStairsGoal className="w-16 h-16 mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
