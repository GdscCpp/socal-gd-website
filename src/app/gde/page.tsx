import { Metadata } from "next";
import Header from "../../components/gde/Header";
import Middle from "../../components/gde/Middle";

export const metadata: Metadata = {
  title: "Socal GD | GDE",
};

function Page() {
  return (
    <div className="bg-dark-400 text-white flex flex-col gap-x-10 gap-y-10 justify-center items-center">
      <Header />
      <Middle />
    </div>
  );
}

export default Page;
