import Image from "next/image";

export default function Middle() {
  return (
    <div className="flex flex-col items-center justify-center  bg-dark-400 text-center  ">
      {/* SECTION CHIP*/}
      <div
        className="
         w-28
          relative
          rounded-3xl
          p-[2px]
          bg-gradient-to-r from-[#fbbc04] via-[#f46930] to-[#eb4235]
        "
      >
        <div
          className="
          rounded-full
          bg-dark-400
          px-4
          py-1
        "
        >
          <p
            className="
            
            text-title-md
            bg-gradient-to-r from-[#fbbc04] via-[#f46930] to-[#eb4235]
            text-transparent bg-clip-text
          "
          >
            About
          </p>
        </div>
      </div>
      {/* HEADER + DESCRIPTION  */}
      <div className="text-heading-xl mt-12 mb-4 text-white">About Us</div>
      <div className="text-heading-md  mb-4 text-white">
        Workshops, guest speakers, networking
      </div>

      {/* IMAGE + BOX */}

      <div className="w-108 bg-white py-20 px-80 m-40 rounded-3xl">
        <Image
          src={"/images/googlecomputer1.png"}
          alt={"Computer"}
          height={800}
          width={800}
        />
      </div>
    </div>
  );
}
