import Image from "next/image";
export default function Middle() {
  return (
    <div className="bg-dark-400 py-8 md:py-4 lg:py-1 relative">
      <div className="container mt-3 mb-8 mx-auto px-24 text-heading-md flex items-center justify-center min-h-[100px]">
        <h2 className="text-center  text-white">Bio</h2>
      </div>
      <div className="container mx-auto px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 bg-white rounded-xl shadow-lg text-black text-left">
            <h3 className="text-2xl font-semibold mb-4">Bio</h3>
            <p className="text-lg leading-relaxed">
              Women Tech Makers is a global program by Google supporting and
              celebrating women in technology. It empowers women through
              community events, workshops, and mentorship opportunities.
            </p>
          </div>
          <div className="p-8 bg-white rounded-xl shadow-lg text-black text-left">
            <h3 className="text-2xl font-semibold mb-4">Tech</h3>
            <ul className="list-disc pl-5 text-lg leading-relaxed">
              <li>Support, resources, community</li>
              <li>Software</li>
              <li>Mobile</li>
              <li>Web</li>
              <li>Cloud</li>
              <li>Machine learning</li>
              <li>Data science</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-dark-400 py-8 md:py-4 lg:py-1 relative">
        <div className="container mt-3 mb-8 mx-auto px-24 text-heading-md flex items-center justify-center min-h-[100px]">
          <h2 className="text-center  text-white">Information</h2>
        </div>
        <div className="container mx-auto px-24">
          <div className="p-8 bg-white rounded-xl shadow-lg text-black text-left flex items-center">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-4">Talks</h3>
              <ul className="list-disc pl-5 text-lg leading-relaxed">
                <li>Educational sessions</li>
                <li>Informative updates</li>
                <li>Interactive Q&A</li>
                <li>Community engagement</li>
                <li>Diverse topics</li>
              </ul>
            </div>
            <div className="flex-shrink-0 ml-8">
              <Image
                src="/images/google-io.png"
                width={200}
                height={200}
                alt="Information Image"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
