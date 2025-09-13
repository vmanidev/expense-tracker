import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../features/Dashboard/Dashboard";
import Transactions from "../features/Transactions/Transactions";
import Welcome from "../ui-components/Welcome/Welcome";
import { useExpense } from "../contexts/ExpenseContext";
import { storeTransactionsLocal } from "../utils/localStorage";
import Categories from "../ui-components/Categories/Categories";

export default function AppRoutes() {
  const { expenses } = useExpense();

  useEffect(() => storeTransactionsLocal(expenses), [expenses]);

  const getRoutes = () => {
    if (expenses.length < 1) {
      return <Route path="/welcome" element={<Welcome />}></Route>;
    } else {
      return (
        <>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/categories" element={<Categories />} />
        </>
      );
    }
  };

  return (
    <Routes>
      {getRoutes()}
      <Route
        path="*"
        element={
          expenses.length < 1 ? (
            <Navigate to="/welcome" replace />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
    </Routes>
  );
}
