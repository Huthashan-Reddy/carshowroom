import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/salesman/Dashboard";
import Leads from "../pages/salesman/Leads";
import Inventory from "../pages/salesman/Inventory";
import Appointments from "../pages/salesman/Appointments";
import "../styles/salesman.css";

export default function SalesmanRoutes() {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="leads" element={<Leads />} />
      <Route path="inventory" element={<Inventory />} />
      <Route path="appointments" element={<Appointments />} />
    </Routes>
  );
}
