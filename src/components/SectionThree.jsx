import MaskImg from "../assets/Mask.png";
import ArrowIcon from "../icons/Arrow.svg";
import Card2 from "../icons/Card2.svg";
import Card3 from "../icons/Card3.svg";

const SectionThree = () => {
  const bottomCards = [
    {
      id: 1,
      title: "Гъвкави решения",
      text: "Персонализирани решения, на които можете да се доверите, за да отговорят на изискванията на вашите клиенти.",
    },
    {
      id: 2,
      title: "Устойчива логистика",
      text: "По-екологична логистика на товари, която помага на вашия краен резултат, на околната среда и на обществото.",
    },
  ];

  return (
    <div className="bg-[#00327D] w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={MaskImg}
            alt="Delivery person carrying a package"
            className="w-full max-w-md md:max-w-lg lg:max-w-full h-auto rounded-2xl object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          {/* Top Card - Security of the Supply Chain */}
          <div className="bg-[#114086]/50 rounded-2xl p-6 sm:p-8 text-white transition-all duration-300 ease-in-out hover:scale-[1.02] shadow-lg hover:shadow-2xl">
            {/* Badge + Arrow */}
            <div className="flex justify-between items-start gap-4 mb-8">
              <span className="text-[#fff]/70 text-sm font-medium border border-[#2C6DCF]/50 rounded-full px-4 py-2">
                #ReliableLogisticsSolutions
              </span>
              <button className="bg-cyan-400 rounded-full p-2.5 hover:bg-cyan-300 cursor-pointer transition-colors flex-shrink-0">
                <img src={ArrowIcon} alt="arrow" className="h-5 w-5" />
              </button>
            </div>
            {/* Text */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">
                Сигурност на веригата за доставки
              </h2>
              <p className="text-[#fff]/90 mt-3 leading-relaxed text-base">
                Надеждни логистични решения, които отговарят на постоянно
                променящите се пазарни нужди на вашия бизнес.
              </p>
            </div>
          </div>

          {/* Bottom Cards*/}
          <div className="grid grid-cols-1 md:grid-cols-2 text-white gap-6">
            {bottomCards.map((card) => (
              <div
                key={card.id}
                className="bg-[#114086]/50 rounded-2xl p-6 sm:p-8 relative overflow-hidden transition-all duration-300 ease-in-out hover:scale-[1.02] shadow-lg hover:shadow-2xl"
              >
                {/* Arrow */}
                <div className="absolute top-5 right-5 bg-cyan-400 rounded-full p-2.5 hover:bg-cyan-300 cursor-pointer transition-colors">
                  <img src={ArrowIcon} alt="arrow" className="h-5 w-5" />
                </div>

                <img
                  src={card.id === 1 ? Card2 : Card3}
                  alt="logo"
                  className="absolute -top-4 -left-4 opacity-10 w-24 h-24 sm:w-28 sm:h-28"
                  aria-hidden="true"
                />

                {/* Content */}
                <div className="mt-12 sm:mt-16">
                  <h2 className="text-xl sm:text-2xl font-bold mb-3">
                    {card.title}
                  </h2>
                  <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
