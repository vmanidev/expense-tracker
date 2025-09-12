import React from "react";
import PageHeader from "./ui-components/PageHeader/PageHeader";

import "./app.css";
import "./responsive.css";

import ExpenseProvider from "./contexts/ExpenseContext";
import CategoryContextProvider from "./contexts/CategoryContext";
import PageFooter from "./ui-components/PageFooter/PageFooter";
import AppRoutes from "./routes/AppRoutes";
import AddTransactionDialog from "./features/Transactions/components/AddTransaction/AddTransaction";

export default function App() {
  return (
    <ExpenseProvider>
      <CategoryContextProvider>
        <div id="app">
          <PageHeader />
          <AppRoutes />
          <PageFooter />
        </div>
        <AddTransactionDialog />
      </CategoryContextProvider>
    </ExpenseProvider>
  );
}
