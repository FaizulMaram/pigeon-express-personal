export const HamburgerMenu = ({ menuOpen, setMenuOpen }) => {
  return (
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
  );
};
