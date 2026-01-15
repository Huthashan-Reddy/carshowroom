export default function Garage() {
  return (
    <div style={{ padding: "40px" }}>
      <h2>🚘 My Garage</h2>
      <h3>Your vehicles and service history.</h3>
      

      <div className="card">
        <p><strong>Car:</strong> Model Top-End</p>
        <p><strong>Warranty:</strong> Active</p>
        <p><strong>Next Service:</strong> March 2026</p>

        <button style={{ marginTop: "15px" }}>
          Book Service
        </button>
      </div>
    </div>
  );
}
