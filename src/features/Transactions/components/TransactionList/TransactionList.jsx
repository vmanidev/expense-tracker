import React, { useState } from "react";

import "./TransactionList.css";
import AddTransactionDialog from "../AddTransaction/AddTransaction";
import { useExpense } from "../../../../contexts/ExpenseContext";

export default function TransactionList() {
  const { expenses, setOpenDialog } = useExpense();
  return (
    <div>
      <div id="action-button-container">
        <div className="section-title">Recent Transactions</div>
        <button id="add-btn" onClick={(e) => setOpenDialog(true)}>
          <span className="material-icons material-symbols-outlined">add</span>
          <span>Add</span>
        </button>
      </div>
      <AddTransactionDialog />
      <div id="transactionList-main-container">{JSON.stringify(expenses)}</div>
    </div>
  );
}
