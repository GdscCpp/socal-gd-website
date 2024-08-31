"use client";

import Image from "next/image";
import LeadCard from "./LeadCard";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { collection } from "firebase/firestore";
import { useState, useEffect } from "react";

type LeadData = {
  name: string;
  city: string;
  avatarSrc: string;
};

export default function Middle() {
  const firestore = useFirestore();
  const leadsCollection = collection(firestore, "gdsc-leads");

  const { data: leadsDocs } = useFirestoreCollectionData(leadsCollection, {
    idField: "id",
  });

  const [leads, setLeads] = useState<LeadData[]>([]);

  useEffect(() => {
    if (leadsDocs) {
      const leadDataArray: LeadData[] = leadsDocs.map((doc) => ({
        name: doc.name,
        city: doc.city,
        avatarSrc: doc.avatarSrc,
      }));

      setLeads(leadDataArray);
    }
  }, [leadsDocs]);

  return (
    <div className="flex flex-col bg-dark-400 p-4 min-h-screen justify-center">
      <div className="container mx-auto">
        {/* HEADER */}
        <h1 className="text-heading-md text-white mb-8 text-center font-bold">
          Find a Group
        </h1>

        {/* BODY */}
        <div className="flex flex-col lg:flex-row w-full gap-8">
          {/* CITY MAP */}
          <div className="w-full h-96 lg:h-auto lg:w-1/2 bg-white rounded-xl p-4 relative overflow-hidden">
            {/* MAP IMAGE */}
            <Image
              src="/images/map-section.png"
              alt="Map"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* GSG LEADS */}
          <div className="w-full lg:w-1/2 bg-white rounded-xl p-4">
            <h2 className="text-title-xl text-black mt-2 mb-4 text-center lg:ml-8 lg:text-left">
              GDG Leads
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
