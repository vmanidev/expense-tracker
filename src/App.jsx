import React from "react";
import PageHeader from "./components/PageHeader/PageHeader";
import Dashboard from "./features/Dashboard/Dashboard";

import "./app.css";
import "./responsive.css";

import ExpenseProvider from "./contexts/ExpenseContext";
import CategoryContextProvider from "./contexts/CategoryContext";

export default function App() {
  return (
    <ExpenseProvider>
      <CategoryContextProvider>
        <div id="app">
          <PageHeader></PageHeader>
          <Dashboard />
        </div>
      </CategoryContextProvider>
    </ExpenseProvider>
  );
}
