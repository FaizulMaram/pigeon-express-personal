export const NavbarLinks = () => {
  const navbarNames = [
    "Services",
    "Prices",
    "Tracking",
    "Offices",
    "For Business",
    "Contacts",
  ];
  return (
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
  );
};
