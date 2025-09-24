import IconCard1 from "../../icons/delivery-icon.svg";
import IconCard2 from "../../icons/product-icon.svg";
import IconCard3 from "../../icons/worldwide-icon.svg";
import IconCard4 from "../../icons/dollar-icon.svg";
import IconCard5 from "../../icons/delivery-truck-icon.svg";
export const ShortCard = () => {
  const cards = [
    {
      id: 1,
      icon: IconCard1,
      title: "Courier to Your Door",
    },
    {
      id: 2,
      icon: IconCard2,
      title: "Delivery to Office",
    },
    {
      id: 3,
      icon: IconCard3,
      title: "International Shipments",
    },
    {
      id: 4,
      icon: IconCard4,
      title: "Calculate Price",
    },
    {
      id: 5,
      icon: IconCard5,
      title: "Express Delivery",
    },
  ];

  return (
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
  );
};
