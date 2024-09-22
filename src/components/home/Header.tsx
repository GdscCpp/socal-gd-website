import Button, { BUTTON_VARIANTS } from "@/components/input/Button";
import Image from "next/image";
import { FaGraduationCap, FaLightbulb, FaUsers } from "react-icons/fa";
import Card from "../../components/home/Card-Header";

export default function Header() {
  const cards = [
    {
      title: "Innovate",
      description: "Create cutting-edge solutions.",
      icon: <FaLightbulb className="text-blue-500" size={60} />,
      linkText: "Join the Challenge >",
      linkHref: "#innovate",
    },
    {
      title: "Learn",
      description: "Expand your tech expertise.",
      icon: <FaGraduationCap className="text-green-500" size={60} />,
      linkText: "Explore Workshops >",
      linkHref: "#learn",
    },
    {
      title: "Network",
      description: "Connect with tech enthusiasts.",
      icon: <FaUsers className="text-red-500" size={60} />,
      linkText: "Meet Developers >",
      linkHref: "#network",
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
            <div className="text-center md:text-left mb-8 md:mb-0 z-10 w-full md:w-auto">
              <h1 className="text-heading-lg lg:text-heading-xl font-bold mb-2">
                DevFest 2024
              </h1>
              <h2 className="text-title-xl md:text-heading-md lg:text-heading-lg mb-6">
                GDG Cal Poly Pomona
              </h2>

              <div className="flex justify-center md:justify-start w-full">
                <div className="w-full sm:w-auto md:ml-0 lg:ml-96">
                  <Button
                    className="w-full sm:w-auto text-body-lg md:text-body-xl"
                    label="Register Now"
                    type="button"
                    variant={BUTTON_VARIANTS.GRADIENT_1_SM}
                  />
                </div>
              </div>
            </div>
            {/* IMAGE SECTION */}
            <Image
              src="/images/google-io.png"
              height={400}
              width={400}
              alt="DevFest 2024"
              className="mx-auto w-full md:w-80 max-w-4xl"
            />
          </div>
        </div>
        {/* BOTTOM LINE */}
        <hr className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
      </div>
      {/* CARDS SECTION */}
      <div className="bg-dark-400 py-12 md:py-20 lg:py-36 relative lg:ml-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="w-full sm:w-96 md:w-[calc(33.333%-16px)] flex"
              >
                <Card {...card} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
