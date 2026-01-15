import { Link } from "react-router-dom";

export default function SalesmanNavbar() {
  return (
    <nav>
      <h3>Salesman Panel</h3>
      <div>
        <Link to="/salesman">Dashboard</Link>
      </div>
    </nav>
  );
}
