import { useState } from "react";
import { RadioOptions } from "./ui/RadioOptions";
import { Input } from "./ui/Input";
import { FormTable } from "./ui/FormTable";

const SectionTwo = () => {
  // Form state
  const [fromCountry, setFromCountry] = useState("");

  return (
    <section className="bg-[#f5f9ff] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">
          Calculate price
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-10">
          <div>
            <p className="text-[#315A97] mb-4">What would you like to send?</p>
            <div className="flex flex-col sm:flex-row justify-around gap-4 sm:gap-0">
              {/* Radio Options */}
              <RadioOptions
                options={[
                  {
                    value: "documents",
                    label: "Documents",
                    description: "Description",
                  },
                  {
                    value: "documents",
                    label: "Parcels",
                    description: "Description",
                  },
                  {
                    value: "documents",
                    label: "Pallets",
                    description: "Description",
                  },
                ]}
              />
            </div>
            <hr className="text-[#9B9EA3] mt-6" />
            {/* From */}
            <div className="mt-6">
              <p className="font-medium mb-2 text-[#315A97]">
                From where you are sending
              </p>
              <div className="flex gap-4">
                <div className="flex-1">
                  <Input
                    label="Country"
                    value={fromCountry}
                    onChange={(e) => setFromCountry(e.target.value)}
                    options={[
                      "Bulgaria",
                      "Greece",
                      "Romania",
                      "Serbia",
                      "Turkey",
                    ]}
                  />
                </div>
                <div className="flex-1">
                  <Input
                    label="City"
                    value={fromCountry}
                    onChange={(e) => setFromCountry(e.target.value)}
                    options={[
                      "Sofia",
                      "Plovdiv",
                      "Varna",
                      "Burgas",
                      "Ruse",
                      "Stara Zagora",
                      "Pleven",
                      "Sliven",
                    ]}
                  />
                </div>
              </div>
            </div>
            {/* To */}
            <div className="mt-6">
              <p className="font-medium mb-2 text-[#315A97] text-xs lg:text-sm">
                Where We Deliver
              </p>
              <div className="flex gap-4">
                <div className="flex-1">
                  <Input
                    label="Country"
                    value={fromCountry}
                    onChange={(e) => setFromCountry(e.target.value)}
                    options={[
                      "Bulgaria",
                      "Greece",
                      "Romania",
                      "Serbia",
                      "Turkey",
                    ]}
                  />
                </div>
                <div className="flex-1">
                  <Input
                    label="City"
                    value={fromCountry}
                    onChange={(e) => setFromCountry(e.target.value)}
                    options={[
                      "Sofia",
                      "Plovdiv",
                      "Varna",
                      "Burgas",
                      "Ruse",
                      "Stara Zagora",
                      "Pleven",
                      "Sliven",
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Form Right */}
          <FormTable />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.2fr] gap-4 mt-5">
          <button className="bg-[#25408F] text-white font-semibold py-4 px-8 rounded-full shadow  transition-all duration-500 ease-in-out hover:bg-[#1a3370] hover:scale-105 cursor-pointer text-lg">
            Calculate price
          </button>
          <button className="ml-0 sm:ml-4 border-2 border-[#25408F] text-[#25408F] font-semibold py-4 px-8 rounded-full transition-all duration-500 ease-in-out hover:bg-[#1a3370] hover:scale-105 hover:text-white cursor-pointer text-xs lg:text-sm">
            Change shipment configuration
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
