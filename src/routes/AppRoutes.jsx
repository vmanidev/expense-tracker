import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../features/Dashboard/Dashboard";
import Transactions from "../features/Transactions/Transactions";
import Welcome from "../ui-components/Welcome/Welcome";
import { useExpense } from "../contexts/ExpenseContext";

export default function AppRoutes() {
  const { expenses } = useExpense();

  const getRoutes = () => {
    if (expenses.length < 1) {
      return <Route path="/welcome" element={<Welcome />}></Route>;
    } else {
      return (
        <>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
        </>
      );
    }
  };

  return (
    <Routes>
      {getRoutes()}
    </Routes>
  );
}
