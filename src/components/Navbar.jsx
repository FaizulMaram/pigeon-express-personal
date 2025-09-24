import { useState } from "react";
import Logo from "../icons/logoPigeon.svg";
import { NavbarLinks } from "./ui/NavbarLinks";
import { Button } from "./ui/Button";
import NavbarIcons from "./ui/NavbarIcons";
import { HamburgerMenu } from "./ui/HamburgerMenu";
import MobileMenu from "./ui/MobileMenu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section>
      {/* ======================= Navbar ======================= */}
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* =================== Logo ================== */}
        <div className="flex  items-center">
          <img src={Logo} alt="Logo" className="h-16 w-auto md:p-0 md:m-0 " />
        </div>

        {/* =================== Navbar-Icons-Links =================== */}
        <div>
          <NavbarLinks />
        </div>

        {/* =================== Buttons =================== */}
        <div className="hidden lg:flex lg:ml-1 items-center gap-3">
          {/* ==================== Navbar-Button ==================== */}
          <Button text="Order Courier" />
          {/* ================== Navbar-Icons-Button ================== */}
          <NavbarIcons />
        </div>

        {/* ================== Hamburger-for-small-screens ================== */}
        <HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </nav>

      {/* ================== Navbar-Mobile-View ================== */}
      <MobileMenu
        menuOpen={menuOpen}
        navbarNames={[
          "Services",
          "Prices",
          "Tracking",
          "Offices",
          "For Business",
          "Contacts",
        ]}
      />
    </section>
  );
};

export default Navbar;
