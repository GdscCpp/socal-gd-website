import { Metadata } from "next";
import End from "../../components/gdg/End";
import Header from "../../components/gdg/Header";
import Middle from "../../components/gdg/Middle";

export const metadata: Metadata = {
  title: "Socal GD | GDG",
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
