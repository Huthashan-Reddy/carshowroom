import RBACManager from "../../components/admin/RBACManager";
import SalesLeaderboard from "../../components/admin/SalesLeaderboard";

export default function Users() {
  return (
    <div className="admin-scope">
      <h2>👥 Staff & Users</h2>
      <RBACManager />
      <SalesLeaderboard />
    </div>
  );
}
