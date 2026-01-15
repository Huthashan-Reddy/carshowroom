export default function RBACManager() {
  return (
    <div className="card">
      <h3>🔐 Role-Based Access Control</h3>
      <select>
        <option>Sales Manager</option>
        <option>Junior Sales</option>
        <option>Accountant</option>
      </select>
      <button>Assign Role</button>
    </div>
  );
}
