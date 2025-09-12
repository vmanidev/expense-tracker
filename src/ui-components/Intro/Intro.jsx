import React from "react";

import "./Intro.css";
import { useExpense } from "../../contexts/ExpenseContext";

export default function Intro() {
  const { setOpenAddTransactionDialog } = useExpense();

  return (
    <div id="intro-main-container">
      <h1>Welcome to Expense Tracker</h1>
      <p id="info-txt">
        Keep track of your income and expenses in one place. It's simple, fast,
        and free!
      </p>
      <p>
        To get started, please click the <strong>Add Transaction</strong> button
        to begin.
      </p>
      <button id="intro-add-btn" onClick={(e) => setOpenAddTransactionDialog(true)}>
        Add Transaction
      </button>
    </div>
  );
}
