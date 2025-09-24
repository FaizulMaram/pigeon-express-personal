import IconCard1 from "../icons/delivery-icon.svg";
import IconCard2 from "../icons/product-icon.svg";
import IconCard3 from "../icons/worldwide-icon.svg";
import IconCard4 from "../icons/dollar-icon.svg";
import IconCard5 from "../icons/delivery-truck-icon.svg";
import Colage from "../assets/colage.png";

const SectionOneh = () => {
  const cards = [
    {
      id: 1,
      icon: IconCard1,
      title: "Куриер до адрес",
    },
    {
      id: 2,
      icon: IconCard2,
      title: "ДОставка до офис",
    },
    {
      id: 3,
      icon: IconCard3,
      title: "Международни пратки",
    },
    {
      id: 4,
      icon: IconCard4,
      title: "Изчисли цена",
    },
    {
      id: 5,
      icon: IconCard5,
      title: "Експресна доставка",
    },
  ];

  return (
    <div className="mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center px-4 sm:px-6">
        <div className="w-full md:w-1/2 px-0">
          <div className="font-medium text-xl sm:text-4xl md:text-5xl lg:text-5xl text-[#25408F]">
            <p>
              Надеждни <br />
              <span className="text-[#00A1ED]">
                логистични решения,
              </span> <br /> на които можеш да <br /> се довериш!
            </p>
          </div>
          <div className="font-light text-xs sm:text-sm md:text-base lg:text-lg mt-6 w-full">
            <p>
              С национално покритие и гъвкави услуги, доставяме до всеки адрес
              или офис.
            </p>
          </div>
          {/* Search */}
          <div className="relative mt-8 flex flex-col sm:flex-row w-full">
            <input
              type="text"
              placeholder="Въведи номер на пратка..."
              className="bg-white rounded-full py-2 px-5 pr-24 border border-gray-100 text-xs sm:text-sm flex-1"
            />
            {/* Button */}
            <button className="bg-[#00A1ED] text-xs sm:text-sm text-white rounded-full px-5 py-2 cursor-pointer hover:bg-[#124DA6] duration-300 mt-2 sm:mt-0 sm:absolute sm:right-0 sm:top-0 sm:bottom-0">
              Проследи
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img src={Colage} alt="Collage" className="max-w-full h-auto" />
        </div>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-12 place-items-center px-4 sm:px-0">
        {cards.map((card) => (
          <div
            key={card.id}
            className="w-full sm:w-[150px] h-[100px] shadow-md rounded-2xl p-4 flex flex-col items-center justify-center gap-1 cursor-pointer bg-white hover:shadow-lg transition"
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <img src={card.icon} alt="" className="w-10 h-10" />
            </div>
            <h1 className="text-xs sm:text-sm font-medium text-[#25408F] text-center">
              {card.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionOneh;
