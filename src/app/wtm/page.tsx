import Header from "../../components/wtm/Header";
import Middle from "../../components/wtm/Middle";

export default function Page() {
  return (
    <>
      <div className="bg-dark-400 text-white flex flex-col px-[190px] gap-x-10 gap-y-10 justify-center items-center">
        <Header />
        <Middle />
      </div>
    </>
  );
}
