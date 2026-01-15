import { Routes, Route } from "react-router-dom";
import "../styles/admin.css";

import Dashboard from "../pages/admin/Dashboard";
import Inventory from "../pages/admin/Inventory";
import Users from "../pages/admin/Users";
import Finance from "../pages/admin/Finance";
import Marketing from "../pages/admin/Marketing";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="inventory" element={<Inventory />} />
      <Route path="users" element={<Users />} />
      <Route path="finance" element={<Finance />} />
      <Route path="marketing" element={<Marketing />} />
    </Routes>
  );
}
