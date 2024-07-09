"use client";

import HomePage from "./homepage/page";

export default function Page() {
  return (
    <div className="text-white p-4 h-screen w-full flex flex-col items-center justify-center bg-dark-400">
      {/* <h1 className="text-heading-xl bg-2cg-4 text-transparent inline-block bg-clip-text">
        Hello, world!
      </h1> */}

      <HomePage />
    </div>
  );
}
