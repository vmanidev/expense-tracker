import React from "react";

import "./TransactionList.css";

export default function TransactionList() {
  return (
    <div>
      <div id="action-button-container">
        <div className="section-title">Recent Transactions</div>
        <button id="add-btn">
          <span className="material-icons material-symbols-outlined">add</span>
          <span>Add</span>
        </button>
      </div>

      <div id="transactionList-main-container"></div>
    </div>
  );
}
