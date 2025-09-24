import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const SectionSix = () => {
  const [location, setLocation] = useState("България");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [block, setBlock] = useState("");

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
              Къде да ни откриете
            </span>

            {/* Location Selection */}
            <div className="mt-4 lg:mt-0">
              <p className="text-[#9B9EA3] text-xs lg:text-sm mt-2">
                Населено място
              </p>
              <div className="relative w-full lg:w-auto justify-around">
                <select
                  className="w-full mt-1 lg:mt-3 border border-gray-300 rounded-lg p-3 lg:p-2 mb-4 bg-white text-[#25408F] text-xs cursor-pointer lg:text-sm appearance-none"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option>България</option>
                </select>

                {/* Custom arrow */}
                <span className="absolute right-3 top-6 lg:top-8 -translate-y-1/2 cursor-pointer text-[#25408F]">
                  ▼
                </span>
              </div>

              {/* Address */}
              <div className="mt-3 lg:mt-3">
                <input
                  type="text"
                  placeholder="п.к. 4000, общ.ПЛОВДИВ, обл.ПЛОВДИВ"
                  className="w-full mt-1 lg:mt-3 border border-gray-300 rounded-lg p-3 lg:p-2 mb-4 bg-white text-[#25408F] text-xs lg:text-sm"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>

            {/* District */}
            <div className="mt-4 lg:mt-0">
              <p className="text-[#9B9EA3] text-xs lg:text-sm">кв./жк</p>
              <div>
                <input
                  type="text"
                  placeholder="СЕВЕРНА ПРОМИШЛЕНА ЗОНА"
                  className="w-full mt-1 border border-gray-300 rounded-lg p-3 lg:p-2 mb-4 bg-white text-[#25408F] text-xs lg:text-sm"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                />
              </div>
            </div>

            {/* Home Address */}
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-5">
              <div className="w-full lg:w-1/3">
                <p className="text-[#9B9EA3] text-xs lg:text-sm">бул./ул.</p>
                <input
                  type="text"
                  placeholder="САНКТ ПЕТЕРБУРГ"
                  className="w-full mt-1 border border-gray-300 rounded-lg p-3 lg:p-2 mb-4 bg-white text-[#25408F] text-xs lg:text-sm"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />
              </div>
              <div className="w-full lg:w-1/3">
                <p className="text-[#9B9EA3] text-sm lg:text-sm">№</p>
                <input
                  type="text"
                  placeholder="92"
                  className="w-full mt-1 border border-gray-300 rounded-lg p-3 lg:p-2 mb-4 bg-white text-[#25408F] text-xs lg:text-sm"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
              <div className="w-full lg:w-1/3">
                <p className="text-[#9B9EA3] text-xs lg:text-sm">бл.</p>
                <input
                  type="text"
                  placeholder="1106"
                  className="w-full mt-1 border border-gray-300 rounded-lg p-3 lg:p-2 mb-4 bg-white text-[#25408F] text-xs lg:text-sm"
                  value={block}
                  onChange={(e) => setBlock(e.target.value)}
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-0 mt-4 lg:mt-0">
              <button className="bg-[#25408F] text-white rounded-4xl py-3 lg:py-2 px-6 lg:px-5 text-xs lg:text-sm w-full lg:w-auto cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#1a3370] hover:scale-105">
                Покажи най-близките офиси
              </button>
              <span
                className="text-[#315A97] cursor-pointer hover:underline text-xs lg:text-base text-center lg:text-left lg:ml-3 xl:ml-5"
                onClick={handleClear}
              >
                Изчисти адреса
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
