import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full bg-dark-400 px-4 py-2 md:px-6 md:py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <Image
            src="/images/google-logo.png"
            height={80}
            width={80}
            alt="Google Dev Group logo"
            className="mr-4 "
          />
        </div>

        <div className="flex space-x-6 text-white">
          <a href="#chapters" className="text-body-xl ">
            Chapters
          </a>
          <a href="#guides" className="text-body-xl ">
            Guides
          </a>
          <a href="#pathways" className="text-body-xl ">
            Pathways
          </a>
        </div>
      </div>
    </nav>
  );
}
