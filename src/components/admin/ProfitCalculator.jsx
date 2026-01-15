import { useState } from "react";

export default function ProfitCalculator() {
  const [cost, setCost] = useState("");
  const [sell, setSell] = useState("");

  const profit =
    cost && sell ? Number(sell) - Number(cost) : 0;

  return (
    <div>
      <h2>Profit Calculator</h2>

      <input
        type="number"
        placeholder="Cost Price"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
      />

      <input
        type="number"
        placeholder="Selling Price"
        value={sell}
        onChange={(e) => setSell(e.target.value)}
      />

      <h3>Profit: ₹{profit}</h3>
    </div>
  );
}
