import React from "react";
import TransactionList from "./components/TransactionList/TransactionList";
import { Link } from "react-router-dom";

export default function Transactions() {
  return (
    <>
      <TransactionList />
      <Link className="link" to="/dashboard">
        <span className="icon-text">
          <span className="material-icons material-symbols-outlined">
            chevron_left
          </span>
          <span>Back to Dashboard</span>
        </span>
      </Link>
    </>
  );
}
