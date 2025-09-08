import React from "react";

import "./summary.css";
import { useExpense } from "../../../../contexts/ExpenseContext";

export default function Summary() {
  const { totalIncome, totalExpenses, balance } = useExpense();

  return (
    <div>
      <div id="summary-header">
        <div className="section-title">Summary</div>
        <select id="year-select-field">
          <option>2025</option>
          <option>2024</option>
          <option>2023</option>
        </select>
      </div>
      <div id="summary-main-container">
        <div id="income">
          <span>Income</span>
          <span>&#8377; {totalIncome}</span>
        </div>
        <div id="expenses">
          <span>Expenses</span>
          <span>&#8377; {totalExpenses}</span>
        </div>
        <div id="balance">
          <span>Balance</span>
          <span>&#8377; {balance}</span>
        </div>
      </div>
    </div>
  );
}
