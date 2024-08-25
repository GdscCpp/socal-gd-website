"use client";

import LeadCard from "../gdg/LeadCard";
import { useFirestore, useFirestoreDocData } from "reactfire";
import { doc } from "firebase/firestore";
import { useState } from "react";

const dummyExperts = [
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
  const firestore = useFirestore();
  const ref = doc(firestore, "experts", "1VzhUeQtXeOuIWpfn8IK");
  const { status, data } = useFirestoreDocData(ref);

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
          {status == "loading" ? <>Loading...</> : <></>}
          {status === "success" && data && (
            <LeadCard
              name={data.name}
              city={data.city}
              avatarSrc={data.avatarSrc}
            />
          )}
        </div>
      </div>
    </div>
  );
}
