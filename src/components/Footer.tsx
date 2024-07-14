import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex w-full bg-dark-300 h-96 items-center justify-center">
      <Image
        alt="foot_img"
        src={"/images/googlelong.png"}
        height={400}
        width={400}
        className=""
      />
    </div>
  );
}
