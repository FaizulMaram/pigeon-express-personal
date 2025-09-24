import { useState } from "react";

const SectionTwo = () => {
  // Form state
  const [selectedType, setSelectedType] = useState("documents");
  const [fromCountry, setFromCountry] = useState("България");
  const [fromCity, setFromCity] = useState("София");
  const [toCountry, setToCountry] = useState("България");
  const [toCity, setToCity] = useState("Пловдив");
  const data = [
    { from: "Офис на Pigeon", to: "Офис на Pigeon", price: "6.06 лв./3.10 €" },
    {
      from: "Офис на Pigeon",
      to: "Адрес на получател",
      price: "6.06 лв./3.10 €",
    },
    {
      from: "Адрес на получател",
      to: "Офис на Pigeon",
      price: "6.06 лв./3.10 €",
    },
    {
      from: "Адрес на получател",
      to: "Адрес на получател",
      price: "6.06 лв./3.10 €",
    },
    { from: "Автомат", to: "Автомат", price: "6.06 лв./3.10 €" },
    { from: "Офис на Pigeon", to: "Автомат", price: "6.06 лв./3.10 €" },
    { from: "Автомат", to: "Офис на Pigeon", price: "6.06 лв./3.10 €" },
    { from: "Автомат", to: "Адрес на получател", price: "6.06 лв./3.10 €" },
    { from: "Адрес на подател", to: "Автомат", price: "6.06 лв./3.10 €" },
  ];

  return (
    <section className="bg-[#f5f9ff] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">
          Calculate price
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-10">
          <div>
            <p className="text-[#315A97] mb-4">What would you like to send?</p>
            <div className="flex flex-col sm:flex-row justify-around gap-4 sm:gap-0">
              <div className="flex flex-col items-center">
                <label className="flex text-[#315A97] items-center cursor-pointer gap-2 mb-2 text-sm">
                  <input
                    type="radio"
                    name="type"
                    className="cursor-pointer"
                    value="documents"
                    checked={selectedType === "documents"}
                    onChange={(e) => setSelectedType(e.target.value)}
                  />
                  <span>Документи</span>
                </label>
                <p className="text-xs text-[#9B9EA3]">Description</p>
              </div>
              <div className="flex flex-col items-center">
                <label className="flex text-[#315A97] items-center gap-2 cursor-pointer mb-2 text-sm">
                  <input
                    type="radio"
                    name="type"
                    className="cursor-pointer"
                    value="packages"
                    checked={selectedType === "packages"}
                    onChange={(e) => setSelectedType(e.target.value)}
                  />
                  <span>Колети</span>
                </label>
                <p className="text-xs text-[#9B9EA3]">Description</p>
              </div>
              <div className="flex flex-col items-center">
                <label className="flex text-[#315A97] items-center gap-2 cursor-pointer mb-2 text-sm">
                  <input
                    type="radio"
                    name="type"
                    className="cursor-pointer"
                    value="pallets"
                    checked={selectedType === "pallets"}
                    onChange={(e) => setSelectedType(e.target.value)}
                  />
                  <span>Палети</span>
                </label>
                <p className="text-xs text-[#9B9EA3]">Description</p>
              </div>
            </div>
            <hr className="text-[#9B9EA3] mt-6" />
            {/* From */}
            <div className="mt-6">
              <p className="font-medium mb-2 text-[#315A97]">
                From where you are sending
              </p>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label
                    htmlFor="from-country"
                    className="block text-[#9B9EA3] mb-1 text-xs lg:text-sm"
                  >
                    Държава
                  </label>
                  <select
                    id="from-country"
                    className="border cursor-pointer lg:font-bold rounded-md px-3 py-2 w-full bg-white text-[#25408F] border-[#9B9EA3]"
                    value={fromCountry}
                    onChange={(e) => setFromCountry(e.target.value)}
                  >
                    <option value="България">България</option>
                    <option value="Гърция">Гърция</option>
                    <option value="Румъния">Румъния</option>
                    <option value="Сърбия">Сърбия</option>
                    <option value="Турция">Турция</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="from-city"
                    className="block text-[#9B9EA3] mb-1 text-xs lg:text-sm"
                  >
                    Населено място
                  </label>
                  <select
                    id="from-city"
                    className="border cursor-pointer lg:font-bold rounded-md px-3 py-2 w-full bg-white text-[#25408F] border-[#9B9EA3]"
                    value={fromCity}
                    onChange={(e) => setFromCity(e.target.value)}
                  >
                    <option value="София">София</option>
                    <option value="Пловдив">Пловдив</option>
                    <option value="Варна">Варна</option>
                    <option value="Бургас">Бургас</option>
                    <option value="Русе">Русе</option>
                    <option value="Стара Загора">Стара Загора</option>
                    <option value="Плевен">Плевен</option>
                    <option value="Сливен">Сливен</option>
                  </select>
                </div>
              </div>
            </div>
            {/* To */}
            <div className="mt-6">
              <p className="font-medium mb-2 text-[#315A97] text-xs lg:text-sm">
                Докъде изпращате
              </p>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label
                    htmlFor="to-country"
                    className="block text-[#9B9EA3] mb-1 text-xs lg:text-sm "
                  >
                    Държава
                  </label>
                  <select
                    id="to-country"
                    className="border cursor-pointer lg:font-bold rounded-md px-3 py-2 w-full bg-white text-[#25408F] border-[#9B9EA3]"
                    value={toCountry}
                    onChange={(e) => setToCountry(e.target.value)}
                  >
                    <option value="България">България</option>
                    <option value="Гърция">Гърция</option>
                    <option value="Румъния">Румъния</option>
                    <option value="Сърбия">Сърбия</option>
                    <option value="Турция">Турция</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="to-city"
                    className="block text-[#9B9EA3] mb-1 text-xs lg:text-sm"
                  >
                    Населено място
                  </label>
                  <select
                    id="to-city"
                    className="border cursor-pointer lg:font-bold rounded-md px-3 py-2 w-full text-[#25408F] bg-white border-[#9B9EA3]"
                    value={toCity}
                    onChange={(e) => setToCity(e.target.value)}
                  >
                    <option value="Пловдив">Пловдив</option>
                    <option value="София">София</option>
                    <option value="Варна">Варна</option>
                    <option value="Бургас">Бургас</option>
                    <option value="Русе">Русе</option>
                    <option value="Стара Загора">Стара Загора</option>
                    <option value="Плевен">Плевен</option>
                    <option value="Сливен">Сливен</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          {/* Form Right */}
          <div className="bg-white rounded-2xl shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-[#25408F] text-white text-xs rounded-t-2xl">
                  <tr>
                    <th className="py-3 px-4 rounded-tl-2xl">От</th>
                    <th className="py-3 px-4">До</th>
                    <th className="py-3 px-4">Цена</th>
                    <th className="py-3 px-4 rounded-tr-2xl">
                      Още възможности
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, idx) => (
                    <tr
                      key={idx}
                      className="text-xs text-gray-700 hover:bg-gray-50"
                    >
                      <td className="py-2 px-4 border-r text-nowrap border-[#E6EAED]">
                        {row.from}
                      </td>
                      <td className="py-2 px-4 border-r text-nowrap border-[#E6EAED]">
                        {row.to}
                      </td>
                      <td className="py-2 px-4 border-r text-nowrap border-[#E6EAED]">
                        {row.price}
                      </td>
                      <td className="py-2 px-4 text-nowrap text-blue-700 cursor-pointer hover:underline">
                        Допълнителни услуги
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.2fr] gap-4 mt-5">
          <button className="bg-[#25408F] text-white font-semibold py-4 px-8 rounded-full shadow  transition-all duration-500 ease-in-out hover:bg-[#1a3370] hover:scale-105 cursor-pointer text-lg">
            Изчисли цена
          </button>
          <button className="ml-0 sm:ml-4 border-2 border-[#25408F] text-[#25408F] font-semibold py-4 px-8 rounded-full transition-all duration-500 ease-in-out hover:bg-[#1a3370] hover:scale-105 hover:text-white cursor-pointer text-xs lg:text-sm">
            Промени конфигурацията на пратката
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
