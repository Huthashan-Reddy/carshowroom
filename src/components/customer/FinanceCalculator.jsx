import { useState } from "react";

export default function FinanceCalculator() {
  const [deposit, setDeposit] = useState(200000);

  return (
    <div className="card">
      <h3>Finance Calculator</h3>
      <input
        type="range"
        min="100000"
        max="1000000"
        value={deposit}
        onChange={(e) => setDeposit(e.target.value)}
      />
      <p>Deposit: ₹{deposit}</p>
      <p>EMI: ₹{Math.round((2500000 - deposit) / 60)}</p>
    </div>
  );
}
