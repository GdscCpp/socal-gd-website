"use client";

import End from "./homepage/End";
import Header from "./homepage/Header";
import Middle from "./homepage/Middle";

export default function Page() {
  return (
    <div className="">
      <Header />
      <Middle />
      <End />

      <h1 className="text-heading-xl bg-2cg-4 text-transparent  bg-clip-text">
        {/* Hello, world! */}
      </h1>
    </div>
  );
}
