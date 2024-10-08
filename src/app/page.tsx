"use client";

import End from "@/components/home/End";
import Header from "@/components/home/Header";
import Middle from "../components/home/Middle";

export default function Page() {
  return (
    <div className="bg-dark-400">
      <Header />
      <Middle />
      <End />
    </div>
  );
}
