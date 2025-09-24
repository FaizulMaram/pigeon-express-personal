import UserIcon from "../../icons/user-icon.svg";
import SearchIcon from "../../icons/search-icon.svg";

const MobileMenu = ({ menuOpen, navbarNames }) => {
  if (!menuOpen) return null;

  return (
    <div className="lg:hidden bg-white text-[#25408F] shadow-lg px-6 py-4 space-y-3">
      {navbarNames.map((name, index) => (
        <div
          key={index}
          className="border border-[#E6EAED] rounded-full px-4 py-2 cursor-pointer hover:bg-[#f1f1f1]"
        >
          {name}
        </div>
      ))}

      <button className="w-full bg-[#002D72] text-white px-4 py-2 cursor-pointer transition-all duration-300 rounded-full ease-in-out hover:bg-[#1a3370] hover:scale-105 mt-3">
        Order Courier
      </button>

      <div className="flex justify-center gap-4 mt-3">
        <button className="p-2 border rounded-full">
          <img src={UserIcon} alt="User" />
        </button>
        <button className="p-2 border rounded-full">
          <img src={SearchIcon} alt="Search" />
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
