export const Input = ({ label, value, onChange, options, className }) => {
  return (
    <div className="flex-1">
      <label className="block text-[#9B9EA3] mb-1 text-xs lg:text-sm">
        {label}
      </label>
      <select
        value={value}
        onChange={onChange}
        className={`border cursor-pointer lg:font-bold rounded-md px-3 py-2 w-full bg-white text-[#25408F] border-[#9B9EA3] ${className}`}
      >
        {options.map((opt, i) => (
          <option key={i} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};
