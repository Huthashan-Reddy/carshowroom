import { Link } from "react-router-dom";

export default function AdminNavbar() {
  return (
    <nav>
      <h3>Admin Panel</h3>
      <div>
        <Link to="/admin">Dashboard</Link>
      </div>
    </nav>
  );
}
