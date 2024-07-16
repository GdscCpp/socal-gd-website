import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex w-full bg-dark-300 h-60 items-center justify-center">
      <Image
        alt="foot_img"
        src={"/images/google-long.png"}
        height={300}
        width={300}
        className=""
      />
    </div>
  );
}
