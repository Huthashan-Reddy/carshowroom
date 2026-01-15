import { Routes, Route } from "react-router-dom";

import Home from "../pages/customer/Home";
import ExploreCar from "../pages/customer/ExploreCar";
import Compare from "../pages/customer/Compare";
import Finance from "../pages/customer/Finance";
import BookTestDrive from "../pages/customer/BookTestDrive";
import Garage from "../pages/customer/Garage";

export default function CustomerRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="explore" element={<ExploreCar />} />
      <Route path="compare" element={<Compare />} />
      <Route path="finance" element={<Finance />} />
      <Route path="book-test-drive" element={<BookTestDrive />} />
      <Route path="garage" element={<Garage />} />
    </Routes>
  );
}
