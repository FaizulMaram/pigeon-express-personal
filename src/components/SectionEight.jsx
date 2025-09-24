import { BottomCards } from "./ui/BottomCards";
import { Button } from "./ui/Button";

const SectionEight = () => {
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
      <BottomCards />

      {/* button */}
      <div className="flex justify-center items-center mt-15">
        <Button
          className="border border-[#00A1ED] hover:bg-[#3b539b]"
          text="View all"
        />
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-1/4 bg-[#002D72]"
        style={{ zIndex: -1 }}
      ></div>
    </div>
  );
};

export default SectionEight;
