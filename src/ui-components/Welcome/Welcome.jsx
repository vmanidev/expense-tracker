import React from "react";

import "./Welcome.css";
import { useExpense } from "../../contexts/ExpenseContext";

export default function Welcome() {
  const { setOpenAddTransactionDialog } = useExpense();

  return (
    <div id="welcome-main-container">
      <h1>Welcome to Expense Tracker</h1>
      <p id="info-txt">
        Keep track of your income and expenses in one place. It's simple, fast,
        and free!
      </p>
      <p>
        To get started, please click the <strong>Add Transaction</strong> button
        to begin.
      </p>
      <button
        id="welcome-add-btn"
        onClick={(e) => setOpenAddTransactionDialog(true)}
      >
        Add Transaction
      </button>
    </div>
  );
}
