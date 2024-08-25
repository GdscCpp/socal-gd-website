"use client";

import { IconType } from "react-icons";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiStairsGoal } from "react-icons/gi";
import Card from "./BevyCard";
import { useEffect, useState } from "react";
import { EventData } from "@/queries/events";

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
  photo: "/images/gdg-header.png",
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
  const [events, setEvents] = useState<EventData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const org = "gdg";
  const orderByProximity = true;
  // const proximity = 5;

  // Construct the query parameters:
  const params = new URLSearchParams();
  params.append("orderByProximity", orderByProximity.toString());
  // if (proximity) {
  //   params.append("proximity", proximity.toString());
  // }

  useEffect(() => {
    const fetchGDGEvents = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/events/${org}?${params.toString()}`);
        console.log(response);
        if (!response.ok) {
          throw new Error(`ERROR: ${response.status}`);
        }

        const data: EventData[] = await response.json();
        console.log(data);
        setEvents(data);
      } catch (error: any) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGDGEvents();
  }, []);

  return (
    <div className="flex flex-col bg-dark-400 p-4 min-h-screen justify-center">
      <p className="text-white text-center p-4 sm:p-8 text-heading-md font-bold">
        Get Involved
      </p>
      {/* BEVY SECTION */}
      <div className=" flex flex-col w-full items-center  justify-center">
        <div className="grid lg:grid-cols-2 gap-y-10 bg-white rounded-xl p-10 gap-x-10">
          {isLoading && <p className="text-black">Loading events...</p>}
          {!isLoading && events.length === 0 && (
            <p className="text-black">Oops! No events founds.</p>
          )}
          {!isLoading &&
            events.map((event) => (
              <Card
                key={event.id}
                header={event.title}
                date={new Date(event.date)}
                photo={event.picture.url || "/images/gdg-header.png"}
                description={event.description}
                link={event.url}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
