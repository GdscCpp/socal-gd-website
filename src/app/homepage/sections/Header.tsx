import Button, { BUTTON_VARIANTS } from "@/components/input/Button";
import Image from "next/image";
import Card from "../components/Card";

export default function Header() {
  const cards = [
    {
      title: "Connect",
      description: "Network with innovators.",
      iconSrc: "/images/googleIcon1.png",
      linkText: "Learn More >",
      linkHref: "#connect",
    },
    {
      title: "Learn",
      description: "Expand your tech skills.",
      iconSrc: "/images/googleIcon1.png",
      linkText: "Learn More >",
      linkHref: "#learn",
    },
    {
      title: "Build",
      description: "Create impactful solutions.",
      iconSrc: "/images/googleIcon1.png",
      linkText: "Learn More >",
      linkHref: "#build",
    },
  ];

  return (
    <div className="bg-dark-400 text-white py-40">
      {/* FLEXBOX + LINE */}
      <div className="flex items-center justify-center w-full  bg-dark-400 text-white">
        <hr className="absolute top-6 md:top-40 left-0 right-0 h-0.5 bg-white" />

        {/* TEXT HEADER */}
        <div className="flex flex-col m-20 left-40">
          <p className="text-heading-xl font-bold">Google For Developers</p>
          <p className="text-heading-lg">Southern California</p>

          {/* ICON SVG MOBILE */}
          <div className="md:hidden mt-4 md:mt-0 md:ml-auto">
            <Image
              src={"/images/googleIcon1.png"}
              height={300}
              width={300}
              alt={"Google Icon"}
              className="mx-auto md:mx-0"
            />
          </div>

          {/* INPUT */}
          <Button
            className="relative  w-full lg:ml-40 lg:left-96 md:w-40 md:mt-4  text-body-xl"
            label={"Find a Group"}
            type="button"
            variant={BUTTON_VARIANTS.GRADIENT_1_SM}
          />
        </div>

        {/* ICON SVG DESKTOP*/}
        <div className="hidden md:flex items-center justify-center mt-4 md:mt-0 md:ml-auto md:mr-auto">
          <Image
            src={"/images/googleIcon1.png"}
            height={400}
            width={400}
            alt={"Google Icon"}
            className="mx-auto md:mx-0"
          />
        </div>

        {/* Bottom line */}
        <hr className="absolute bottom-60 left-0 right-0 h-0.5 bg-white" />
      </div>

      {/* CARDS SECTION */}
      <div className="w-full bg-dark-400 py-36">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
