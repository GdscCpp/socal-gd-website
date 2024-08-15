import Header from "../../components/gde/Header";
import Middle from "../../components/gde/Middle";

export default function Page() {
  return (
    <>
      <div className="bg-dark-400 text-white flex flex-col px-[110px] gap-x-10 gap-y-10 justify-center items-center">
        <Header />
        <Middle />
      </div>
    </>
  );
}
