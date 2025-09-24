import GirlPic from "../assets/Girl-pic.png";
import BirdArrow from "../assets/Birds Arrow.png";

const SectionFour = () => {
  return (
    <div className="bg-[#F4F9FC] w-full py-20 lg:py-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          {/* Text Content */}
          <div className="py-8 lg:py-30 order-2 lg:order-1 text-center lg:text-left w-full lg:w-auto">
            <span className="text-[#25408F] font-bold text-2xl lg:text-3xl block">
              Разбира се,че можеш да променяш плановете си !
            </span>
            <p className="text-xs py-5 max-w-2xl lg:max-w-none mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.{" "}
            </p>
            <div className="py-6 lg:py-9">
              <button className="bg-[#25408F] text-white rounded-full px-6 lg:px-5 py-3 lg:py-2 text-xs lg:text-sm transition-all duration-300 ease-in-out hover:bg-[#1a3370] hover:scale-105 cursor-pointer">
                Разбери как
              </button>
            </div>
          </div>

          {/* Image with Speech Bubble */}
          <div className="order-1 lg:order-2 relative inline-block mx-auto lg:mx-0">
            <img
              src={GirlPic}
              alt="girl"
              className="rounded-xl w-full max-w-sm lg:max-w-none"
            />
            <div
              className="absolute bottom-10 lg:bottom-30 left-2 lg:left-auto lg:right-[-70px] z-20 bg-[#124DA6] py-3 lg:py-6 px-3 lg:px-8 text-center text-white shadow-lg max-w-[200px] lg:max-w-xs
     rounded-[30px_10px_30px_10px/20px_40px_20px_40px] lg:rounded-[60px_20px_60px_20px/40px_80px_40px_80px]"
            >
              <span className="font-medium text-sm lg:text-2xl block">
                Running late?
              </span>
              <p className="text-xs lg:text-sm mt-2">
                Extend the pickup deadline right from your phone.
              </p>
            </div>
          </div>

          {/* Bird Arrow - Hidden on mobile, visible on desktop */}
          <div className="order-3 py-5 hidden lg:block">
            <img src={BirdArrow} alt="arrow" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
