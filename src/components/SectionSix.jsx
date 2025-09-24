import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Input } from "./ui/Input";

const SectionSix = () => {
  const [location, setLocation] = useState("България");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [block, setBlock] = useState("");
  const [fromCountry, setFromCountry] = useState("");

  const handleClear = () => {
    setLocation("България");
    setAddress("");
    setDistrict("");
    setStreet("");
    setNumber("");
    setBlock("");
  };

  return (
    <div className="bg-[#F4F9FC] w-full px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-15 py-8 lg:py-15">
          {/* Form */}
          <div className="order-2 lg:order-1 w-full lg:flex-1">
            <span className="text-[#00327D] text-xl lg:text-2xl font-bold block text-center lg:text-left">
              Where to find us
            </span>

            {/* Location Selection */}
            <div className="mt-4 lg:mt-0">
              <div className="relative w-full mt-3 lg:w-auto justify-around">
                <Input
                  label="City/Town"
                  value={fromCountry}
                  className="appearance-none"
                  onChange={(e) => setFromCountry(e.target.value)}
                  options={["Bulgaria"]}
                />
              </div>

              {/* Address */}
              <div className="mt-3 lg:mt-3">
                <Input
                  label=""
                  value={""}
                  className="text-xs lg:text-sm appearance-none lg:font-light"
                  onChange={(e) => setFromCountry(e.target.value)}
                  options={[
                    "Postcode 4000, Municipality Plovdiv, District Plovdiv",
                  ]}
                />
              </div>
            </div>

            {/* District */}
            <div className="mt-4 lg:mt-2">
              <Input
                label="Neighborhood / Residential Complex"
                value={""}
                className="text-xs lg:text-sm appearance-none lg:font-light"
                onChange={(e) => setFromCountry(e.target.value)}
                options={["Northern Industrial Zone"]}
              />
            </div>

            {/* Home Address */}
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-5 lg:mt-2">
              <div className="w-full lg:w-1/3">
                <Input
                  label="Blvd./St."
                  value={""}
                  className="text-xs lg:text-sm appearance-none lg:font-light"
                  onChange={(e) => setFromCountry(e.target.value)}
                  options={["Saint Petersburg"]}
                />
              </div>
              <div className="w-full lg:w-1/3">
                <Input
                  label="No."
                  value={""}
                  className="text-xs lg:text-sm appearance-none lg:font-light"
                  onChange={(e) => setFromCountry(e.target.value)}
                  options={["92"]}
                />
              </div>
              <div className="w-full lg:w-1/3">
                <Input
                  label="Bl."
                  value={""}
                  className="text-xs lg:text-sm appearance-none lg:font-light"
                  onChange={(e) => setFromCountry(e.target.value)}
                  options={["1106"]}
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-0 mt-4 lg:mt-2">
              <button className="bg-[#25408F] text-white rounded-4xl py-3 lg:py-2 px-6 lg:px-5 text-xs lg:text-sm w-full lg:w-auto cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#1a3370] hover:scale-105">
                Show nearest offices
              </button>
              <span
                className="text-[#315A97] cursor-pointer hover:underline text-xs lg:text-base text-center lg:text-left lg:ml-3 xl:ml-5"
                onClick={handleClear}
              >
                Clear address
              </span>
            </div>
          </div>

          {/* Map */}
          <div className="order-1 lg:order-2 w-full lg:flex-2 flex justify-center lg:block">
            <MapContainer
              center={[42.7339, 25.4858]} // Bulgaria coordinates
              zoom={6}
              style={{ height: "400px", width: "100%", borderRadius: "12px" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[31.5204, 74.3587]}>
                <Popup>Bulgaria</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
