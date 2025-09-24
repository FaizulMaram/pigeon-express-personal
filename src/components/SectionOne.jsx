import Colage from "../assets/colage.png";
import { Button } from "./ui/Button";
import { ShortCard } from "./ui/ShortCard";

const SectionOneh = () => {
  return (
    <div className="mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center px-4 sm:px-6">
        <div className="w-full md:w-1/2 px-0">
          <div className="font-medium text-xl sm:text-4xl md:text-5xl lg:text-5xl text-[#25408F]">
            <p>
              Reliable <br />
              <span className="text-[#00A1ED]">logistics solutions,</span>{" "}
              <br /> that you can <br /> trust!
            </p>
          </div>
          <div className="font-light text-xs sm:text-sm md:text-base lg:text-lg mt-6 w-full">
            <p>
              With nationwide coverage and flexible services, we deliver to any
              address or office.
            </p>
          </div>
          {/* Search */}
          <div className="relative mt-8 flex flex-col sm:flex-row w-full">
            <input
              type="text"
              placeholder="Enter tracking number..."
              className="bg-white rounded-full py-2 px-5 pr-24 border border-gray-100 text-xs sm:text-sm flex-1"
            />
            {/* Button */}
            <Button
              text="Track"
              className="bg-[#09b1ff] text-xs sm:text-sm px-5 py-2  mt-2 sm:mt-0 sm:absolute sm:right-0 sm:top-0 sm:bottom-0"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img src={Colage} alt="Collage" className="max-w-full h-auto" />
        </div>
      </div>
      {/* Cards Section */}
      <ShortCard />
    </div>
  );
};

export default SectionOneh;
