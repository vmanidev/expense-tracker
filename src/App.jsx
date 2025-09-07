import React from "react";
import PageHeader from "./components/PageHeader/PageHeader";
import Dashboard from "./features/Dashboard/Dashboard";

import "./app.css";

import ExpenseProvider from "./contexts/ExpenseContext";

export default function App() {
  return (
    <ExpenseProvider>
      <div id="app">
        <PageHeader></PageHeader>
        <Dashboard />
      </div>
    </ExpenseProvider>
  );
}
