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
          <span className="income">Income</span>
          <span className="icon-text">
            <span className="material-icons material-symbols-outlined">
              currency_rupee
            </span>
            <span>{totalIncome}</span>
          </span>
        </div>
        <div id="expenses">
          <span className="expense">Expenses</span>
          <span className="icon-text">
            <span className="material-icons material-symbols-outlined">
              currency_rupee
            </span>
            <span>{totalExpenses}</span>
          </span>
        </div>
        <div id="balance">
          <span>Balance</span>
          <span className="icon-text">
            <span className="material-icons material-symbols-outlined">
              currency_rupee
            </span>
            <span>{balance}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
