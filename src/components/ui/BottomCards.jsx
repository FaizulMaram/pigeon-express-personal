import CardOne from "../../assets/Card1.png";
import CardTwo from "../../assets/Card2.png";
import CardThree from "../../assets/Card3.png";
import CardFour from "../../assets/Card4.png";
export const BottomCards = () => {
  const cards = [
    {
      image: CardOne,
      title: "Useful ideas and stories from the world of deliveries",
      date: "29 September 2025",
      link: "#",
    },
    {
      image: CardTwo,
      title: "How to prepare your shipment correctly!",
      date: "29 September 2025",
      link: "#",
    },
    {
      image: CardThree,
      title: "We are opening doors in more cities...",
      date: "29 September 2025",
      link: "#",
    },
    {
      image: CardFour,
      title: "Latest delivery rules and services!",
      date: "29 September 2025",
      link: "#",
    },
  ];

  return (
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
  );
};
