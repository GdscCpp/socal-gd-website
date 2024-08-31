"use client";

import LeadCard from "../gdg/LeadCard";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import { collection } from "firebase/firestore";
import { useState, useEffect } from "react";

type ExpertData = {
  name: string;
  city: string;
  avatarSrc: string;
};

export default function Middle() {
  const [expertData, setExpertData] = useState<ExpertData[]>([]);

  const firestore = useFirestore();
  const ref = collection(firestore, "gde-experts");
  const { data } = useFirestoreCollectionData(ref, { idField: "id" });

  useEffect(() => {
    if (data) {
      setExpertData(
        data.map((doc: any) => ({
          name: doc.name,
          city: doc.city,
          avatarSrc: doc.avatarSrc,
        })),
      );
    }
  }, [data]);

  return (
    <div className="flex flex-col gap-y-10 justify-center items-center">
      <h2 className="text-heading-lg  text-center">About</h2>
      <div className="flex flex-col bg-white rounded-xl text-dark-400 text-center w-fit justify-center items-center p-4">
        <p>
          Join a global network of more than 1,000 professionals. Meet
          experienced Google technology experts, influencers, and thought
          leaders. Explore the community, get advice, and network – or apply
          with a GDE or Googler referral.
        </p>
      </div>
      <h2 className="text-heading-lg text-center">Connect</h2>
      <div className="w-fit bg-white rounded-xl p-4">
        <h2 className="text-title-xl text-black mt-2 mb-4 text-center">
          Google Developer Experts
        </h2>
        <div className="flex flex-col items-center">
          {expertData ? (
            expertData.map((expert, index) => (
              <LeadCard
                key={index}
                name={expert.name}
                city={expert.city}
                avatarSrc={expert.avatarSrc}
              />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}
