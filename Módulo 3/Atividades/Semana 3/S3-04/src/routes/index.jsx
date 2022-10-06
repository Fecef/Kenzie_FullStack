import { Route, Routes } from "react-router-dom";
import { Company } from "../pages/Company/Company";
import { Customer } from "../pages/Customer/Customer";
import { Home } from "../pages/Home/Home";

export const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/customer/:id" element={<Customer />} />
    <Route path="/company/:id" element={<Company />} />
    <Route path="*" element={<h1>User not found.</h1>} />
  </Routes>
);
