import { Metadata } from "next";
import End from "../../components/gdsc/End";
import Header from "../../components/gdsc/Header";
import Middle from "../../components/gdsc/Middle";

export const metadata: Metadata = {
  title: "Socal GD | GDSC",
};

export default function Page() {
  return (
    <>
      <Header />
      <Middle />
      <End />
    </>
  );
}
