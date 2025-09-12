import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../features/Dashboard/Dashboard";
import Transactions from "../features/Transactions/Transactions";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="*" element={<>not found</>} />
    </Routes>
  );
}
