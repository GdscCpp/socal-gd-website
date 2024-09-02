"use client";

import { useState } from "react";
import Tab, { ORIENTATION } from "../Tab";

const TABS = ["GDSC", "GDG", "WTM", "GDE"] as const;
type TabType = (typeof TABS)[number];

const DISABLED_FIELDS: Record<TabType, string[]> = {
  GDSC: ["bio", "contact", "topics"],
  GDG: ["bio", "contact", "topics"],
  WTM: ["chapterName", "chapterUniversity", "bevyLink", "socialLinks"],
  GDE: ["chapterName", "chapterUniversity", "bevyLink", "socialLinks"],
};

export default function Form() {
  const [selectedTab, setSelectedTab] = useState<TabType>("GDSC");

  const handleTabClick = (tab: TabType) => {
    setSelectedTab(tab === selectedTab ? "GDSC" : tab);
  };

  const isDisabled = (field: string) => {
    return DISABLED_FIELDS[selectedTab].includes(field);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

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
              Typically, it takes 5-7 business days for our team to review your
              information and add you to our system.
            </p>
            <hr className="border-t border-dark-400 w-full mt-2" />
          </div>
          <div>
            <h4 className="font-semibold text-body-xl">
              What Happens Next After Approval?
            </h4>
            <p className="text-body-lg">
              Once approved, you will receive a welcome email with further
              instructions on how to access our resources and participate in our
              community events.
            </p>
            <hr className="border-t border-dark-400 w-full mt-2" />
          </div>
          <div>
            <h4 className="font-semibold text-body-xl">
              Can I Join Multiple Organizations?
            </h4>
            <p className="text-body-lg">
              Yes, you can be part of multiple organizations. However, each
              organization may have its own specific requirements and
              commitments.
            </p>
            <hr className="border-t border-dark-400 w-full mt-2" />
          </div>
          <div>
            <h4 className="font-semibold text-body-xl">
              How Often Are Events Held?
            </h4>
            <p className="text-body-lg">
              Event frequency varies by organization and chapter. Typically,
              most chapters aim to host at least one event per month, but this
              can vary based on the chapters size and resources.
            </p>
            <hr className="border-t border-dark-400 w-full mt-2" />
          </div>
        </div>
      </div>

      {/* Organization Request Form */}
      <div className="flex flex-col bg-white text-dark-400 rounded-lg p-6 flex-1 shadow-gradient-button-default">
        <h3 className="font-bold text-title-xl mb-4">Organization Request</h3>
        <hr className="border-t border-black w-full mb-4" />
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-wrap gap-8 justify-center">
            {TABS.map((tab) => (
              <Tab
                key={tab}
                text={tab}
                display={ORIENTATION.HORIZONTAL}
                rounded={true}
                style="LIGHT_06"
                onClick={() => handleTabClick(tab)}
                active={selectedTab === tab}
              />
            ))}
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="text-body-md font-medium mb-1 block">Bio</label>
              <input
                type="text"
                className={`w-full p-2 border rounded text-body-lg ${isDisabled("bio") ? "bg-gray-200" : ""}`}
                placeholder="Enter Here"
                disabled={isDisabled("bio")}
              />
            </div>
            <div className="flex-1">
              <label className="text-body-md font-medium mb-1 block">
                Chapter Name
              </label>
              <input
                type="text"
                className={`w-full p-2 border rounded text-body-lg ${isDisabled("chapterName") ? "bg-gray-200" : ""}`}
                placeholder="Enter Here"
                disabled={isDisabled("chapterName")}
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
                className={`w-full p-2 border rounded text-body-lg ${isDisabled("contact") ? "bg-gray-200" : ""}`}
                placeholder="Enter Here"
                disabled={isDisabled("contact")}
              />
            </div>
            <div className="flex-1">
              <label className="text-body-md font-medium mb-1 block">
                Chapter University / City
              </label>
              <input
                type="text"
                className={`w-full p-2 border rounded text-body-lg ${isDisabled("chapterUniversity") ? "bg-gray-200" : ""}`}
                placeholder="Enter Here"
                disabled={isDisabled("chapterUniversity")}
              />
            </div>
          </div>
          <div>
            <label className="text-body-md font-medium mb-1 block">
              Topics
            </label>
            <input
              type="text"
              className={`w-full p-2 border rounded text-body-lg ${isDisabled("topics") ? "bg-gray-200" : ""}`}
              placeholder="Enter Here"
              disabled={isDisabled("topics")}
            />
          </div>
          <div>
            <label className="text-body-md font-medium mb-1 block">
              Bevy Link
            </label>
            <input
              type="text"
              className={`w-full p-2 border rounded text-body-lg ${isDisabled("bevyLink") ? "bg-gray-200" : ""}`}
              placeholder="Enter Here"
              disabled={isDisabled("bevyLink")}
            />
          </div>
          <div>
            <label className="text-body-md font-medium mb-1 block">
              Social Links
            </label>
            <input
              type="text"
              className={`w-full p-2 border rounded text-body-lg ${isDisabled("socialLinks") ? "bg-gray-200" : ""}`}
              placeholder="Enter Here"
              disabled={isDisabled("socialLinks")}
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
