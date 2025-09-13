import React from "react";
import { useExpense } from "../../../../../../contexts/ExpenseContext";

import "./TransactionListHeader.css";
import { useLocation } from "react-router-dom";

export const TransactionListHeader = () => {
  const { setOpenAddTransactionDialog } = useExpense();

  const { pathname } = useLocation();

  return (
    <div id="action-button-container">
      <div className="section-title">
        {pathname.includes("transactions")
          ? "Transactions"
          : "Recent Transactions"}
      </div>
      <button id="add-btn" onClick={(e) => setOpenAddTransactionDialog(true)}>
        <span className="material-icons material-symbols-outlined">add</span>
        <span>Add</span>
      </button>
    </div>
  );
};
