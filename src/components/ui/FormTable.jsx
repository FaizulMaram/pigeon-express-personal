export const FormTable = () => {
  const data = [
    { from: "Pigeon Office", to: "Pigeon Office", price: "6.06 BGN / 3.10 €" },
    {
      from: "Pigeon Office",
      to: "Recipient Address",
      price: "6.06 BGN / 3.10 €",
    },
    {
      from: "Recipient Address",
      to: "Pigeon Office",
      price: "6.06 BGN / 3.10 €",
    },

    {
      from: "Recipient Address",
      to: "Recipient Address",
      price: "6.06 BGN / 3.10 €",
    },

    { from: "Locker", to: "Locker", price: "6.06 BGN / 3.10 €" },
    { from: "Pigeon Office", to: "Locker", price: "6.06 BGN / 3.10 €" },
    { from: "Locker", to: "Pigeon Office", price: "6.06 BGN / 3.10 €" },
    { from: "Locker", to: "Recipient Address", price: "6.06 BGN / 3.10 €" },
    { from: "Sender Address", to: "Locker", price: "6.06 BGN / 3.10 €" },
  ];
  return (
    <div className="bg-white rounded-2xl shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-[#25408F] text-white text-xs rounded-t-2xl">
            <tr>
              <th className="py-3 px-4 rounded-tl-2xl">From</th>
              <th className="py-3 px-4">To</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4 rounded-tr-2xl">More options</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx} className="text-xs text-gray-700 hover:bg-gray-50">
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
                  Additional Services
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
