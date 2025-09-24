import ImagePercent1 from "../assets/ImgCircle1.png";
import ImagePercent2 from "../assets/ImgCircle2.png";
import ImagePercent3 from "../assets/ImgCircle3.png";
import { useState } from "react";

const SectionFive = () => {
  const [percentages] = useState([33, 10, 1]);

  const createPiePath = (
    percent,
    radius = 100,
    centerX = 120,
    centerY = 120
  ) => {
    const startAngle = 0;
    const endAngle = startAngle + (percent / 100) * 360;
    const startX = centerX + radius * Math.cos((startAngle * Math.PI) / 180);
    const startY = centerY + radius * Math.sin((startAngle * Math.PI) / 180);
    const endX = centerX + radius * Math.cos((endAngle * Math.PI) / 180);
    const endY = centerY + radius * Math.sin((endAngle * Math.PI) / 180);
    const largeArcFlag = percent > 50 ? 1 : 0;
    return `M ${centerX} ${centerY} L ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY} Z`;
  };

  return (
    <div className="bg-white">
      {/* sections */}
      <div className="flex flex-col lg:flex-row px-4 lg:px-16 py-8 lg:py-19 gap-8 lg:gap-15">
        {/* 1 col */}
        <div className="text-center lg:text-left">
          <span className="text-[#00327D] font-bold text-lg lg:text-base block">
            Lorem ipsum dolor
          </span>
          <p className="text-xs py-3 lg:py-3 max-w-xl lg:max-w-none mx-auto lg:mx-0 mb-16">
            Consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat.
          </p>
          {/* IMg */}
          <div className="flex justify-center relative mt-10 transition-all duration-500 ease-in-out hover:scale-110">
            <img
              src={ImagePercent1}
              className="h-48 lg:h-56 w-48 lg:w-56 object-contain"
            />
            <svg
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 lg:w-96 lg:h-96"
              viewBox="0 0 240 240"
            >
              <path d={createPiePath(percentages[0])} fill="#00327D" />
              <text
                x="190"
                y="140"
                textAnchor="middle"
                fontSize="24"
                fill="white"
                fontWeight="bold"
              >
                {percentages[0]}%
              </text>
            </svg>
          </div>
        </div>

        {/* 2 col */}
        <div className="text-center lg:text-left">
          <span className="text-[#00327D] font-bold text-lg lg:text-base block">
            Quis nostrud exerci tation
          </span>
          <p className="text-xs py-3 lg:py-3 max-w-xl lg:max-w-none mx-auto lg:mx-0 mb-16">
            CDuis autem vel eum iriure dolor in hendrerit in vulputate velit
            esse molestie consequat, vel illum dolore eu feugiat nulla facilisi
          </p>
          {/* IMg */}
          <div className="flex justify-center relative mt-10 transition-all duration-500 ease-in-out hover:scale-110">
            <img
              src={ImagePercent2}
              className="h-48 lg:h-56 w-48 lg:w-56 object-contain"
            />
            <svg
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 lg:w-96 lg:h-96"
              viewBox="0 0 240 240"
            >
              <path d={createPiePath(percentages[1])} fill="#00327D" />
              <text
                x="190"
                y="140"
                textAnchor="middle"
                fontSize="24"
                fill="white"
                fontWeight="bold"
              >
                {percentages[1]}%
              </text>
            </svg>
          </div>
        </div>

        {/* 3rd col */}
        <div className="text-center lg:text-left">
          <span className="text-[#00327D] font-bold text-lg lg:text-base block">
            Ut wisi enim ad minim
          </span>
          <p className="text-xs py-3 lg:py-3 max-w-xl lg:max-w-none mx-auto lg:mx-0 mb-16">
            Consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat.
          </p>
          {/* IMg */}
          <div className="flex justify-center relative mt-10 transition-all duration-500 ease-in-out hover:scale-110">
            <img
              src={ImagePercent3}
              className="h-48 lg:h-56 w-48 lg:w-56 object-contain"
            />
            <svg
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 lg:w-96 lg:h-96"
              viewBox="0 0 240 240"
            >
              <path d={createPiePath(percentages[2])} fill="#00327D" />
              <text
                x="205"
                y="150"
                textAnchor="middle"
                fontSize="24"
                fill="#00327D"
                fontWeight="bold"
              >
                {percentages[2]}%
              </text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
