import Image from "next/image";
import headerImg from "../../../public/images/gdsc-header.png";

export default function Header() {
  return (
    <div className="bg-dark-400 text-white relative mx-auto lg:px-[190px] flex flex-col">
      <div className="flex flex-col">
        <h1 className="font-bold text-heading-lg sm:text-center lg:text-left">
          Google Student Developer Clubs
        </h1>
        <h2 className="text-heading-lg sm:text-center lg:text-left">
          Southern California
        </h2>
      </div>
      <div className="flex lg:flex-row sm:flex-col justify-between items-center">
        <p className="text-body-xl w-1/2">
          Meet fellow student developers on your campus and in your region,
          connecting virtually or in-person with peers who share your passion
          for technology. The community prides itself on being an inclusive
          environment where everyone - from beginner coders to experienced
          student developers - is welcome to join and contribute. GSDC is
          designed to help students bridge the gap between theory and practice,
          applying their academic knowledge to real-world projects and
          innovations.
        </p>
        <Image
          src={headerImg.src}
          alt="Google GDG Header"
          width={headerImg.width}
          height={headerImg.height}
          className="min-w-[300px] max-h-fit"
        />
      </div>
    </div>
  );
}
