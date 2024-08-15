import Image from "next/image";
import headerImg from "../../../public/images/google-gdg-header.png";

export default function Header() {
  return (
    <div className="bg-dark-400 text-white relative mx-auto lg:px-[190px] flex flex-col">
      <div className="flex flex-col">
        <h1 className="font-bold text-heading-xl sm:text-center lg:text-left">
          Google for Developers
        </h1>
        <h2 className="text-heading-lg sm:text-center lg:text-left">
          Southern California
        </h2>
      </div>
      <div className="flex lg:flex-row sm:flex-col justify-between items-center">
        <p className="text-body-xl w-1/2">
          When you join a Google Developer Group, you&apos;ll have the
          opportunity to learn new skills in a variety of formats. You&apos;ll
          also meet local developers virtually or in-person with similar
          interests in technology. The community prides itself on being an
          inclusive environment where everyone and anyone interested in tech -
          from beginner developers to experienced professionals are welcome to
          join.
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
