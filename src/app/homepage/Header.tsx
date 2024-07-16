import Button, { BUTTON_VARIANTS } from "@/components/input/Button";
import Image from "next/image";
import Card from "./components/Card-Header";

export default function Header() {
  const cards = [
    {
      title: "Connect",
      description: "Network with innovators.",
      iconSrc: "/images/google-shapes.png",
      linkText: "Learn More >",
      linkHref: "#connect",
    },
    {
      title: "Learn",
      description: "Expand your tech skills.",
      iconSrc: "/images/google-shapes.png",
      linkText: "Learn More >",
      linkHref: "#learn",
    },
    {
      title: "Build",
      description: "Create impactful solutions.",
      iconSrc: "/images/google-shapes.png",
      linkText: "Learn More >",
      linkHref: "#build",
    },
  ];

  return (
    <div className="bg-dark-400 text-white">
      {/* MAIN CONTENT SECTION */}
      <div className="relative mx-auto px-4 pt-1">
        {/* TOP LINE */}
        <hr className="absolute top-0 left-0 right-0 h-0.5 bg-white" />
        <div className="ml-20 mr-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* TEXT AND BUTTON SECTION */}
            <div className="text-center md:text-left mb-8 md:mb-0 z-10">
              <h1 className="text-heading-lg lg:text-heading-xl font-bold mb-2">
                Google For Developers
              </h1>
              <h2 className="text-title-xl md:text-heading-md lg:text-heading-lg mb-6">
                Southern California
              </h2>
              <div className="sm:ml-20 md:ml-0 lg:ml-96">
                <Button
                  className="w-38 flex items-center justify-items-end md:w-auto text-body-lg md:text-body-xl lg:ml-40"
                  label="Find a Group"
                  type="button"
                  variant={BUTTON_VARIANTS.GRADIENT_1_SM}
                />
              </div>
            </div>
            {/* IMAGE SECTION */}
            <Image
              src="/images/google-io.png"
              height={400}
              width={400}
              alt="Google Icon"
              className="mx-auto w-full md:w-80 max-w-4xl"
            />
          </div>
        </div>
        {/* BOTTOM LINE */}
        <hr className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
      </div>
      {/* CARDS SECTION */}
      <div className="bg-dark-400 py-12 md:py-20 lg:py-36 relative">
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
