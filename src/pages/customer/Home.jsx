import { useNavigate } from "react-router-dom";


export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-options">

      <h1>🚗 Customer Centre</h1>
      <p>Select what you want to do</p>
      
      

      <div className="options-grid">
        <button onClick={() => navigate("/customer/explore")}>
          🔍 Explore Cars
        </button>

        <button onClick={() => navigate("/customer/compare")}>
          📊 Compare Cars
        </button>

        <button onClick={() => navigate("/customer/finance")}>
          💰 Finance Options
        </button>

        <button onClick={() => navigate("/customer/book-test-drive")}>
          📅 Book Test Drive
        </button>

        <button onClick={() => navigate("/customer/garage")}>
          🚘 My Garage
        </button>
      </div>

    </div>
  );
}
