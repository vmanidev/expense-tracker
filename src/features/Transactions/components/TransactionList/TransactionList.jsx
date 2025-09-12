import React, { useEffect } from "react";

import "./TransactionList.css";

import { useExpense } from "../../../../contexts/ExpenseContext";

import { sortByDate, transformDate } from "../../../../utils/date";
import { formatCurrency } from "../../../../utils/currency";
import { CATEGORY_MAP } from "../../../../constants/category";
import { storeTransactionsLocal } from "../../../../utils/localStorage";
import { TransactionListHeader } from "./components/TransactionListHeader/TransactionListHeader";
import { Link } from "react-router-dom";

export default function TransactionList({ limit }) {
  const { expenses, removeExpense } = useExpense();

  useEffect(() => storeTransactionsLocal(expenses), [expenses]);

  const getExpenseList = (expenseList) => {
    return sortByDate(expenseList)
      .slice(0, limit)
      .map(({ id, title, amount, type, category, date }, index) => {
        return (
          <li key={`${id}_${index}`}>
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
            <span>{formatCurrency(amount)}</span>
            <span
              className={`capitalize ${
                type === "income" ? "income" : "expense"
              }`}
            >
              {type}
            </span>
            <span>{CATEGORY_MAP[category]}</span>
            <span
              id="delete-icon"
              className="material-icons material-symbols-outlined"
              onClick={(e) => removeExpense(id)}
            >
              delete_forever
            </span>
          </li>
        );
      });
  };

  return (
    <div>
      <TransactionListHeader />
      <div id="transactionList-main-container">
        <ul>{getExpenseList(expenses)}</ul>
      </div>
      {limit && (
        <Link className="link" to="/transactions">
          <span className="icon-text">
            <span>View all transactions</span>
            <span className="material-icons material-symbols-outlined">
              chevron_right
            </span>
          </span>
        </Link>
      )}
    </div>
  );
}
