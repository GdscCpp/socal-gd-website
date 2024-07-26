import Card from "../components/Card-Bevy";

import { FaPeopleGroup } from "react-icons/fa6";
import { GiStairsGoal } from "react-icons/gi";

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
      <p className="text-white text-center p-8 text-heading-lg">
        Get Invloved{" "}
      </p>
      {/* CONT FLEX ROW 1 - 1  */}
      <div className="flex ">
        {/* BEVY SECTION */}
        <div className="flex flex-col lg:flex-row w-full gap-8">
          {/* CITY MAP */}
          <div className="w-full h-full lg:w-1/2 bg-white rounded-xl p-4 relative overflow-hidden">
            {/* Map Image */}
            Upcoming events
            <div className="grid grid-cols-2 gap-2">
              <Card {...sampleCardProps} />
              <Card {...sampleCardProps} />
              <Card {...sampleCardProps} />
              <Card {...sampleCardProps} />
            </div>
          </div>
          {/* PURPOSE | GOALS COL */}
          <div className="flex flex-col h-auto gap-8">
            <div className="h-1/2 w-full bg-white rounded-xl p-4">
              {/* HEADER */}
              <h2 className="text-2xl font-semibold mb-4 text-body-xl text-center ">
                Purpose
              </h2>
              <ul className="list-disc pl-5 space-y-2">
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
              <FaPeopleGroup className="w-20 h-20 " />
            </div>
            <div className="h-1/2 w-full bg-white rounded-xl p-4">
              {/* HEADER */}
              <h2 className="text-2xl font-semibold mb-4 text-body-xl  text-center">
                Goals
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Organize monthly tech talks and workshops on Google
                  technologies
                </li>
                <li>Facilitate hands-on coding sessions and hackathons</li>
                <li>Host annual DevFest events to showcase local talent</li>
                <li>Provide mentorship programs for aspiring developers</li>
                <li>
                  Collaborate with other tech communities for larger impact
                </li>
                <li>
                  Increase diversity and inclusion in the local tech ecosystem
                </li>
              </ul>
              <GiStairsGoal className="w-20 h-20 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
