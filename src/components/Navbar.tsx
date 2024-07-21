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

  const pathways: Pathway[] = [
    { name: "Home", href: ROUTES.HOME },
    { name: "GDG Page", href: ROUTES.GDG },
    // Add more pathways as needed
  ];

  return (
    <nav className="w-full bg-dark-400 px-4 py-2 md:px-6 md:py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <Image
            src="/images/google-logo.png"
            height={80}
            width={80}
            alt="Google Dev Group logo"
            className="mr-4"
          />
        </div>

        <div className="flex space-x-6 text-white">
          <Link
            href={ROUTES.HOME}
            className="text-body-xl hover:text-gray-300 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href={ROUTES.GDG}
            className="text-body-xl hover:text-gray-300 transition-colors duration-200"
          >
            GDG Page
          </Link>
          <div className="relative inline-block text-left">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex justify-center items-center w-full text-body-xl text-white hover:text-gray-300 transition-colors duration-200"
            >
              Pathways
              <svg
                className={`ml-2 -mr-1 h-5 w-5 transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {isOpen && (
              <div
                className="
                  absolute right-0 mt-2 w-[80vw] max-w-md rounded-lg shadow-lg bg-dark-400 
                  transform transition-all duration-300 ease-in-out origin-top-right
                  z-50
                "
              >
                <div className="p-4 grid grid-cols-2 gap-4">
                  {pathways.map((pathway) => (
                    <Link
                      key={pathway.name}
                      href={pathway.href}
                      className="
                        px-4 py-3 text-sm text-white 
                        bg-dark-300 hover:bg-dark-200 
                        rounded-md transition-colors duration-200
                        flex items-center justify-between
                        transform hover:scale-105
                      "
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{pathway.name}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
