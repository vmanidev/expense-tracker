import React, { useState } from "react";

import "./TransactionList.css";
import AddTransaction from "../AddTransaction/AddTransaction";

export default function TransactionList() {
  const [openAddTransactionDialog, setOpenAddTransactionDialog] =
    useState(false);
  return (
    <div>
      <div id="action-button-container">
        <div className="section-title">Recent Transactions</div>
        <button id="add-btn" onClick={(e) => setOpenAddTransactionDialog(true)}>
          <span className="material-icons material-symbols-outlined">add</span>
          <span>Add</span>
        </button>
      </div>
      <AddTransaction openAddTransactionDialog={openAddTransactionDialog} setOpenAddTransactionDialog={setOpenAddTransactionDialog}  />
      <div id="transactionList-main-container"></div>
    </div>
  );
}
