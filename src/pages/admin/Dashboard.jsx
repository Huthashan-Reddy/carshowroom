
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate(); // ✅ FIX

  return (
    <div className="admin-scope">
      <h1>🛠 Admin Control Panel</h1>

      <div className="options-grid">
        <div
          className="dashboard-card"
          onClick={() => navigate("/admin/inventory")}
        >
          🚗 Fleet Status
        </div>

        <div
          className="dashboard-card"
          onClick={() => navigate("/admin/finance")}
        >
          📈 Dealership ROI
        </div>

        <div
          className="dashboard-card"
          onClick={() => navigate("/admin/users")}
        >
          👥 Staff Performance
        </div>

        <div
          className="dashboard-card"
          onClick={() => navigate("/admin/marketing")}
        >
          📣 Marketing Reach
        </div>
      </div>
    </div>
  );
}
