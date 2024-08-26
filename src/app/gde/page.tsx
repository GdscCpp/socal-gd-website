import { Metadata } from "next";
import Header from "../../components/gde/Header";
import Middle from "../../components/gde/Middle";
import FirebaseProvider from "@/firebase/loader";

export const metadata: Metadata = {
  title: "Socal GD | GDE",
};

function Page() {
  return (
    <FirebaseProvider>
      <div className="bg-dark-400 text-white flex flex-col gap-x-10 gap-y-10 justify-center items-center">
        <Header />
        <Middle />
      </div>
    </FirebaseProvider>
  );
}

export default Page;
