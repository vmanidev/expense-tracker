import React from "react";
import { useExpense } from "../../../../../../contexts/ExpenseContext";

import "./TransactionListHeader.css";

export const TransactionListHeader = () => {
  const { setOpenAddTransactionDialog } = useExpense();

  return (
    <div id="action-button-container">
      <div className="section-title">Recent Transactions</div>
      <button id="add-btn" onClick={(e) => setOpenAddTransactionDialog(true)}>
        <span className="material-icons material-symbols-outlined">add</span>
        <span>Add</span>
      </button>
    </div>
  );
};
