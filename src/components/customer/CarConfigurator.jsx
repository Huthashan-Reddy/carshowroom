import { useState } from "react";

export default function CarConfigurator() {
  const [color, setColor] = useState("Red");
  const [price, setPrice] = useState(2500000);

  return (
    <div className="card">
      <h3>Build Your Car</h3>
      <p>Color: {color}</p>
      <p>₹ {price.toLocaleString()}</p>

      <button onClick={() => { setColor("Black"); setPrice(2600000); }}>
        Black
      </button>

      <button onClick={() => { setColor("Blue"); setPrice(2550000); }}>
        Blue
      </button>
    </div>
  );
}
