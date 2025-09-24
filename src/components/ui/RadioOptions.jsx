import { useState } from "react";

export const RadioOptions = ({ options }) => {
  const [selected, setSelected] = useState(options[0].value);

  return (
    <div className="flex flex-col sm:flex-row justify-around gap-4 sm:gap-0 lg:gap-20 ">
      {options.map((opt, index) => (
        <div key={index} className="flex flex-col items-center">
          <label className="flex text-[#315A97] items-center gap-2 cursor-pointer mb-2 text-sm">
            <input
              type="radio"
              name="type"
              value={opt.value}
              checked={selected === opt.value}
              onChange={(e) => setSelected(e.target.value)}
              className="cursor-pointer"
            />
            <span>{opt.label}</span>
          </label>
          {opt.description && (
            <p className="text-xs text-[#9B9EA3]">{opt.description}</p>
          )}
        </div>
      ))}
    </div>
  );
};
