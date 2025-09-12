import React from "react";
import PageHeader from "./ui-components/PageHeader/PageHeader";
import Dashboard from "./features/Dashboard/Dashboard";

import "./app.css";
import "./responsive.css";

import ExpenseProvider from "./contexts/ExpenseContext";
import CategoryContextProvider from "./contexts/CategoryContext";
import PageFooter from "./ui-components/PageFooter/PageFooter";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <ExpenseProvider>
      <CategoryContextProvider>
        <div id="app">
          <PageHeader />
          <AppRoutes />
          <PageFooter />
        </div>
      </CategoryContextProvider>
    </ExpenseProvider>
  );
}
