export const Button = ({ text, className }) => {
  return (
    <button
      className={`bg-[#002D72] cursor-pointer text-white px-4 py-2 rounded-full flex-shrink-0 transition-all duration-300 ease-in-out hover:bg-[#1a3370] hover:scale-105 ${className}`}
    >
      {text}
    </button>
  );
};
