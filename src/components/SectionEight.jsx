import CardOne from "../assets/Card1.png";
import CardTwo from "../assets/Card2.png";
import CardThree from "../assets/Card3.png";
import CardFour from "../assets/Card4.png";

const SectionEight = () => {
  const cards = [
    {
      image: CardOne,
      title: "Полезни идеи и истории от света на доставките",
      date: "29 септември 2025",
      link: "#",
    },
    {
      image: CardTwo,
      title: "Как да подготвите пратката си правилно!",
      date: "29 септември 2025",
      link: "#",
    },
    {
      image: CardThree,
      title: "Отваряме врати в още градове...",
      date: "29 септември 2025",
      link: "#",
    },
    {
      image: CardFour,
      title: "Актуални правила за доставка и услуги!",
      date: "29 септември 2025",
      link: "#",
    },
  ];

  return (
    <div className="relative w-full py-12 px-5">
      {/* Heading */}
      <div className="text-center text-[#25408F] text-l font-bold">
        <p>F.A.Q.</p>
        <p>Често задавани въпроси и полезни ресурси</p>
        <div className="mt-100">
          <p>Новини и полезно</p>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 justify-items-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col w-full max-w-xs transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            {/* Image */}
            <img
              src={card.image}
              alt={card.title}
              className="h-48 w-full object-cover cursor-pointer"
            />

            {/* Bottom Content */}
            <div className="bg-[#fff] text-[#25408F] p-4 flex flex-col justify-between flex-1">
              <h3 className="text-base font-semibold leading-snug cursor-pointer">
                {card.title}
              </h3>
              <div className="flex items-center justify-between text-sm mt-3">
                <span className="text-[#9B9EA3]">{card.date}</span>
                <a
                  href={card.link}
                  className="text-[#9B9EA3] hover:text-[#8e9eb8] flex items-center gap-1"
                >
                  виж още <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* button */}
      <div className="flex justify-center items-center mt-15">
        <button className="bg-[#25408F] text-white hover:bg-[#3b539b] cursor-pointer rounded-full py-2 px-7 border border-[#00A1ED]">
          Виж всички
        </button>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-1/4 bg-[#002D72]"
        style={{ zIndex: -1 }}
      ></div>
    </div>
  );
};

export default SectionEight;
