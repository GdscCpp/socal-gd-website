import Form from "@/components/register/Form";
import Header from "@/components/register/Header";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = {
  title: "Socal GD | Register",
};

export default function Page() {
  return (
    <>
      <Header />
      <Form />
    </>
  );
}
