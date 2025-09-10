import React from "react";

import "./TransactionList.css";
import AddTransactionDialog from "../AddTransaction/AddTransaction";
import { useExpense } from "../../../../contexts/ExpenseContext";

import { sortByDate, transformDate } from "../../../../utils/date";

export default function TransactionList() {
  const { expenses, removeExpense, setOpenDialog } = useExpense();

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
    return sortByDate(expenseList).map(
      ({ id, title, amount, type, category, date }) => {
        return (
          <li key={id}>
            <span>{transformDate(date)}</span>
            <span className="icon-text">
              <span
                className={`${
                  type === "income" ? "income" : "expense"
                } material-icons material-symbols-outlined`}
              >
                {type === "income" ? "call_made" : "call_received"}
              </span>
              <span className="capitalize">{title}</span>
            </span>
            <span className="icon-text">
              <span className="material-icons material-symbols-outlined">
                currency_rupee
              </span>
              <span>{amount}</span>
            </span>
            <span
              className={`capitalize ${
                type === "income" ? "income" : "expense"
              }`}
            >
              {type}
            </span>
            <span className="capitalize">{category}</span>
            <span
              id="delete-icon"
              className="material-icons material-symbols-outlined"
              onClick={(e) => removeExpense(id)}
            >
              delete_forever
            </span>
          </li>
        );
      }
    );
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
