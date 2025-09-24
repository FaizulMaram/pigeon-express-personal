import { useState } from "react";
import Logo from "../icons/logoPigeon.svg";
import UserIcon from "../icons/user-icon.svg";
import SearchIcon from "../icons/search-icon.svg";

const navbarNames = [
  "Услуги",
  "Цени",
  "Проследяване",
  "Офиси",
  "За бизнеса",
  "Контакти",
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section>
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex  items-center">
          <img src={Logo} alt="Logo" className="h-16 w-auto md:p-0 md:m-0 " />
        </div>

        {/*  Links */}
        <div>
          <ul className="items-center text-nowrap justify-between hidden lg:flex gap-4 text-[#25408F] text-xs font-bold">
            {navbarNames.map((name, index) => (
              <li
                key={index}
                className="bg-white border border-[#E6EAED] rounded-full px-4 py-2 cursor-pointer  transition-all duration-500 ease-in-out hover:text-white hover:bg-[#1a3370] hover:shadow-lg hover:scale-105"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div className="hidden lg:flex lg:ml-1 items-center gap-3">
          <button className="bg-[#002D72] cursor-pointer text-white px-4 py-2 rounded-full flex-shrink-0  transition-all duration-300 ease-in-out hover:bg-[#1a3370] hover:scale-105">
            Заяви куриер
          </button>
          <div className="bg-white border lg:w-20 md:w-10 justify-around border-[#E6EAED] rounded-full flex items-center">
            <button className="p-2">
              <img
                src={UserIcon}
                className="cursor-pointer transition-all duration-300 ease-in-out hove:shadow-lg  hover:scale-105"
              />
            </button>
            <button className="p-2 cursor-pointer">
              <img
                src={SearchIcon}
                className="cursor-pointer transition-all duration-300 ease-in-out hove:shadow-lg  hover:scale-105"
              />
            </button>
          </div>
        </div>

        {/* Hamburger For s screens */}
        <div className="lg:hidden">
          <button
            className="p-2 text-[#25408F] border rounded-md"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="w-5 h-0.5 bg-[#25408F] mb-1"></div>
            <div className="w-5 h-0.5 bg-[#25408F] mb-1"></div>
            <div className="w-5 h-0.5 bg-[#25408F]"></div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white text-[#25408F] shadow-lg px-6 py-4 space-y-3">
          {navbarNames.map((name, index) => (
            <div
              key={index}
              className="border border-[#E6EAED] rounded-full px-4 py-2 cursor-pointer hover:bg-[#f1f1f1]"
            >
              {name}
            </div>
          ))}

          <button className="w-full bg-[#002D72] text-white px-4 py-2 rounded-full hover:bg-[#001a4d] mt-3">
            Заяви куриер
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
      )}
    </section>
  );
};

export default Navbar;
