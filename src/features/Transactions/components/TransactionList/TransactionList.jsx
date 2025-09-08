import React, { useState } from "react";

import "./TransactionList.css";
import AddTransactionDialog from "../AddTransaction/AddTransaction";
import { useExpense } from "../../../../contexts/ExpenseContext";

export default function TransactionList() {
  const { expenses, setOpenDialog } = useExpense();

  const TransactionListHeader = () => {
    return (
      <div id="action-button-container">
        <div className="section-title">Recent Transactions</div>
        <button id="add-btn" onClick={(e) => setOpenDialog(true)}>
          <span className="material-icons material-symbols-outlined">add</span>
          <span>Add</span>
        </button>
      </div>
    );
  };

  const getExpenseList = (expenseList) => {
    return expenseList.map(({ id, title, amount, type, category, date }) => {
      return (
        <li key={id}>
          <span id="expense-title">
            <span
              className={`${
                type === "income" ? "income" : "expense"
              } material-icons material-symbols-outlined`}
            >
              {type === "income" ? "call_made" : "call_received"}
            </span>
            <span>{title}</span>
          </span>
          <span>&#8377;{amount}</span>
          <span>{type}</span>
          <span>{category}</span>
          <span>{date}</span>
        </li>
      );
    });
  };

  return (
    <div>
      <AddTransactionDialog />
      <TransactionListHeader />
      <div id="transactionList-main-container">
        <ul>{getExpenseList(expenses)}</ul>
      </div>
    </div>
  );
}
