import { useState } from "react";
import Man from "../assets/Bussinessman.png";
import Arrowleft from "../icons/ArrowLeftBottom.svg";
import { AnimationMove } from "./ui/AnimationMove";

const SectionSeven = () => {
  const items = [
    {
      title: "API Integration",
      content:
        "We offer customized solutions for every business – flexible terms, optimized prices, and priority service tailored to your company’s needs.",
    },
    {
      title: "API Integration",
      content:
        "Details about API integration. We provide easy integration with your systems for automated shipment management.",
    },
    {
      title: "Billing and Support",
      content:
        "Information about billing and support. You receive monthly invoices and 24/7 support from our team.",
    },
    {
      title: "Preferential Prices",
      content:
        "Details about preferential prices. Special rates for large volumes and long-term contracts.",
    },
  ];

  const [openStates, setOpenStates] = useState(
    items.map((_, index) => index === 0) //First Item by default
  );

  const toggleItem = (index) => {
    setOpenStates((prev) => prev.map((v, i) => (i === index ? !v : v)));
  };

  return (
    <div className="bg-[#00327D] w-full py-8 lg:py-12 px-4 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-0">
        {/* Image Section */}
        <div className="px-0 lg:px-40 order-2 lg:order-1 w-full lg:w-auto flex justify-center">
          <AnimationMove className="duration-500 hover:scale-130">
            <img
              src={Man}
              className="h-80 lg:h-120 w-auto max-w-full object-contain"
            />
          </AnimationMove>
        </div>

        {/* Content Section */}
        <div className="order-1 lg:order-2 w-full lg:w-auto flex justify-center">
          <div className="bg-[#114086]/50 text-white p-8 lg:p-10 text-3xl lg:text-4xl rounded-2xl shadow-md w-full lg:w-[480px] hover:shadow-2xl transition-all duration-400">
            <p className="text-center lg:text-left text-2xl lg:text-4xl">
              For Business Clients
            </p>
            <p className="text-[#00A1ED] font-medium text-xl lg:text-3xl text-center lg:text-left mb-10">
              B2B Solutions
            </p>

            {items.map((item, index) => (
              <div key={index}>
                <div
                  className="flex justify-between mt-3 lg:mt-2 items-center cursor-pointer py-2"
                  onClick={() => toggleItem(index)}
                >
                  <p className="text-base lg:text-xl hover:text-[#DCDCDC]">
                    {item.title}
                  </p>
                  <img
                    src={Arrowleft}
                    className={`h-5 lg:h-6 cursor-pointer transition-transform duration-300 ${
                      openStates[index] ? "rotate-180" : "rotate-0"
                    }`}
                    alt="arrow"
                  />
                </div>
                <p
                  className={`text-xs lg:text-xs ${
                    openStates[index] ? "py-4" : "py-0"
                  } w-full lg:w-100 text-left lg:text-left transition-all duration-300 ease-in-out overflow-hidden ${
                    openStates[index]
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {item.content}
                </p>
                <hr className="text-[#124DA6] mt-2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSeven;
