import QuoteGenerator from "../../components/salesman/QuoteGenerator";

export default function Inventory() {
  return (
    <div style={{ padding: "40px" }}>
      <h2>🚗 Inventory</h2>

      <div className="card">
        <p>Car: Model X</p>
        <p>Status: Under Negotiation</p>

        <textarea placeholder="Internal Notes (Staff Only)" />

        <QuoteGenerator />
      </div>
    </div>
  );
}
