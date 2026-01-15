import { BrowserRouter, Routes, Route } from "react-router-dom";

import PortalSelector from "./pages/entry/PortalSelector";

import CustomerAuth from "./pages/auth/CustomerAuth";
import SalesmanAuth from "./pages/auth/SalesmanAuth";
import AdminAuth from "./pages/auth/AdminAuth";

import CustomerRoutes from "./routes/CustomerRoutes";
import SalesmanRoutes from "./routes/SalesmanRoutes";
import AdminRoutes from "./routes/AdminRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortalSelector />} />

        <Route path="/auth/customer" element={<CustomerAuth />} />
        <Route path="/auth/salesman" element={<SalesmanAuth />} />
        <Route path="/auth/admin" element={<AdminAuth />} />

        <Route path="/customer/*" element={<CustomerRoutes />} />
        <Route path="/salesman/*" element={<SalesmanRoutes />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}
