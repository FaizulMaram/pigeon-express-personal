import UserIcon from "../../icons/user-icon.svg";
import SearchIcon from "../../icons/search-icon.svg";

const NavbarIcons = () => {
  const icons = [UserIcon, SearchIcon];

  return (
    <div className="bg-white border justify-around border-[#E6EAED] lg:w-20 md:w- rounded-full flex items-center">
      {icons.map((icon, index) => (
        <button key={index} className="p-2 cursor-pointer">
          <img
            src={icon}
            alt={`icon-${index}`}
            className="cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
          />
        </button>
      ))}
    </div>
  );
};

export default NavbarIcons;
