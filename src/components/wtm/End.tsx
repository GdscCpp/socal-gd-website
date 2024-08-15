import Image from "next/image";

export default function End() {
  return (
    <div className="bg-dark-400 py-8 md:py-4 lg:py-1 relative">
      <div className="container mb-8 mx-auto px-24 text-heading-md flex items-center justify-center min-h-[100px]">
        <h2 className="text-center  text-white">Connect</h2>
      </div>
      <div className="container mx-auto px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 bg-white rounded-xl text-black text-center">
            <Image
              src="/images/google-shapes.png"
              width={200}
              height={200}
              alt="Connect Image 1"
              className="mx-auto"
            />
          </div>
          <div className="p-8 bg-white rounded-xl text-black text-center">
            <h3 className="text-2xl font-semibold mb-4">Region</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
