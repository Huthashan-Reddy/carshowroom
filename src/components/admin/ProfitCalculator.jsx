import { useState } from "react";

export default function ProfitCalculator() {
  const [cost, setCost] = useState(1500000);
  const [sell, setSell] = useState(2000000);

  return (
    <div className="card">
      <h3>💰 Profit Calculator</h3>
      <p>Profit: ₹{sell - cost}</p>
    </div>
  );
}
