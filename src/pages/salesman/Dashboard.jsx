import SalesmanNavbar from "../../components/common/SalesmanNavbar";
import { useNavigate } from "react-router-dom";
export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <div  className="options-grid" style={{ padding: "40px", background:"#D4D4D4"}}>
      <h1>📊 Salesman Dashboard</h1>
        <button onClick={() => navigate("/salesman/Appointments")}>
          📅 Today’s Test Drives
        </button>
        <button onClick={() => navigate("/salesman/Leads")}>
          🔥Hot Leads
        </button>
        <button onClick={() => navigate("/salesman/MonthlyCommission")}>
         💰 Monthly Commission
        </button>
        <button onClick={() => navigate("/salesman/Inventory")}>
          🚗 Hot Inventory
        </button>      
    </div>
  );
}
