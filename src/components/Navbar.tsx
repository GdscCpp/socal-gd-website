"use client";

import { ROUTES } from "@/config/routes";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Pathway {
  name: string;
  href: ROUTES;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="w-full bg-dark-400 px-4 py-2 md:px-6 md:py-4">
      <div className="flex flex-row justify-between w-full">
        <Image
          src="/images/google-logo.png"
          height={80}
          width={79}
          alt="Google Dev Group logo"
          className="mr-4"
        />

        <div className="flex flex-row text-white gap-x-[100px] items-center">
          <Link href={ROUTES.HOME}>What is DevFest?</Link>
          <Link href={ROUTES.HACKATHON}>Hackathon</Link>
          <Link href={ROUTES.SPONSOR}>Sponsor</Link>
        </div>
      </div>
    </nav>
  );
}
