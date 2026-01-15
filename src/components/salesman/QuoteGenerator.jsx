import { useState } from "react";

export default function QuoteGenerator() {
  const [downPayment, setDownPayment] = useState(200000);

  return (
    <div className="card">
      <h3>💰 Quote Generator</h3>

      <input
        type="range"
        min="100000"
        max="1000000"
        value={downPayment}
        onChange={(e) => setDownPayment(e.target.value)}
      />

      <p>Down Payment: ₹{downPayment}</p>
      <p>Estimated EMI: ₹{Math.round((2500000 - downPayment) / 60)}</p>
    </div>
  );
}
