import { useNavigate } from "react-router-dom";

export default function PortalSelector() {
  const navigate = useNavigate();

  return (
    <div className="entry-container">
      <div className="portal-card" onClick={() => navigate("/auth/customer")}>
        Customer
      </div>

      <div className="portal-card" onClick={() => navigate("/auth/salesman")}>
        Salesman
      </div>

      <div className="portal-card" onClick={() => navigate("/auth/admin")}>
        Admin
      </div>
    </div>
  );
}
