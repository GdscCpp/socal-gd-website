"use client";

import End from "./homepage/End";
import Header from "./homepage/Header";
import Middle from "./homepage/Middle";

export default function Page() {
  return (
    <>
      <Header />
      <Middle />
      <End />
      <div className="text-white p-4 h-screen w-full flex items-center justify-center bg-dark-400">
        <h1 className="text-heading-xl bg-2cg-4 text-transparent inline-block bg-clip-text">
          Hello, world!
        </h1>
      </div>
    </>
  );
}
