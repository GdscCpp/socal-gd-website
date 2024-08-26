import Tab, { ORIENTATION } from "../Tab";

export default function Form() {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-4 md:p-8 max-w-6xl mx-auto w-full">
      {/* FAQ Section */}
      <div className="flex flex-col bg-white text-dark-400 rounded-lg p-6 flex-1 shadow-gradient-button-default">
        <h3 className="font-bold text-title-xl mb-4">FAQ</h3>
        <hr className="border-t border-dark-400 w-full mb-4" />

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-body-xl">
              How Long For Approval?
            </h4>
            <p className="text-body-lg">
              Typically it takes xyz days for our team to review your
              information and add you to our system
            </p>
            <hr className="border-t border-dark-400 w-full mt-2" />
          </div>
          <div>
            <h4 className="font-semibold text-body-xl">
              What Happens Next After?
            </h4>
            <p className="text-body-lg">lorem ipsum</p>
            <hr className="border-t border-dark-400 w-full mt-2" />
          </div>
          <div>
            <h4 className="font-semibold text-body-xl">ETC?</h4>
            <p className="text-body-lg">lorem ipsum</p>
            <hr className="border-t border-dark-400 w-full mt-2" />
          </div>
          <div>
            <h4 className="font-semibold text-body-xl">ETC??</h4>
            <p className="text-body-lg">lorem ipsum</p>
            <hr className="border-t border-dark-400 w-full mt-2" />
          </div>
        </div>
      </div>

      {/* Organization Request Form */}
      <div className="flex flex-col bg-white text-dark-400 rounded-lg p-6 flex-1 shadow-gradient-button-default">
        <h3 className="font-bold text-title-xl mb-4">Organization Request</h3>
        <hr className="border-t border-black w-full mb-4" />
        <form className="flex flex-col space-y-4">
          <div className="flex flex-wrap gap-8 justify-center">
            <Tab
              text="WTM"
              display={ORIENTATION.HORIZONTAL}
              rounded={true}
              style="LIGHT_06"
            />
            <Tab
              text="GDE"
              display={ORIENTATION.HORIZONTAL}
              rounded={true}
              style="LIGHT_06"
            />
            <Tab
              text="GUG"
              display={ORIENTATION.HORIZONTAL}
              rounded={true}
              style="LIGHT_06"
            />
            <Tab
              text="GDSC"
              display={ORIENTATION.HORIZONTAL}
              rounded={true}
              style="LIGHT_06"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="text-body-md font-medium mb-1 block">Bio</label>
              <input
                type="text"
                className="w-full p-2 border rounded text-body-lg"
                placeholder="Enter Here"
              />
            </div>
            <div className="flex-1">
              <label className="text-body-md font-medium mb-1 block">
                Chapter Name
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded text-body-lg"
                placeholder="Enter Here"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="text-body-md font-medium mb-1 block">
                Contact
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded text-body-lg"
                placeholder="Enter Here"
              />
            </div>
            <div className="flex-1">
              <label className="text-body-md font-medium mb-1 block">
                Chapter University / City
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded text-body-lg"
                placeholder="Enter Here"
              />
            </div>
          </div>
          <div>
            <label className="text-body-md font-medium mb-1 block">
              Topics
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded text-body-lg"
              placeholder="Enter Here"
            />
          </div>
          <div>
            <label className="text-body-md font-medium mb-1 block">
              Bevy Link
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded text-body-lg"
              placeholder="Enter Here"
            />
          </div>
          <div>
            <label className="text-body-md font-medium mb-1 block">
              Social Links
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded text-body-lg"
              placeholder="Enter Here"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded shadow-button-hover hover:shadow-button-clicked transition-shadow text-body-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
