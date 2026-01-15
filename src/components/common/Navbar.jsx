import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <h3>Customer Portal</h3>
      <div>
        <Link to="/customer">Home</Link>
      </div>
    </nav>
  );
}
