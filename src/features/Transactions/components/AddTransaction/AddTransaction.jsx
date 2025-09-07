import React, { useEffect, useRef } from "react";

import "./addTransaction.css";

export default function AddTransaction({
  openAddTransactionDialog,
  setOpenAddTransactionDialog,
}) {
  const dialogRef = useRef(null);

  useEffect(
    () =>
      openAddTransactionDialog
        ? dialogRef.current.showModal()
        : dialogRef.current.close(),
    [openAddTransactionDialog]
  );

  const closeDialog = () => {
    setOpenAddTransactionDialog(false);
  };

  return (
    <dialog id="add-transaction-dialog" ref={dialogRef}>
      <h3>Add Transaction</h3>
      <form>
        <div id="title-field-wrapper">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" placeholder="Title" name="title" />
        </div>
        <div id="amount-field-wrapper">
          <label htmlFor="amount">Amount (&#8377;)</label>
          <input
            type="number"
            id="amount"
            placeholder="Amount (&#8377;)"
            name="amount"
          />
        </div>
        <div id="type-field-wrapper">
          <label htmlFor="type">Type</label>
          <select id="type" placeholder="Type" name="type">
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <div id="category-field-wrapper">
          <label htmlFor="category">Category</label>
          <select id="category" placeholder="Category" name="category">
            <option>Food</option>
            <option>Groceries</option>
          </select>
        </div>
        <div id="date-field-wrapper">
          <label htmlFor="amount">Date</label>
          <input type="date" id="date" placeholder="Date" name="date" />
        </div>
      </form>
      <div className="dialog-footer">
        <button className="add-btn">Add</button>
        <button className="cancel-btn" onClick={closeDialog}>
          Cancel
        </button>
      </div>
    </dialog>
  );
}
