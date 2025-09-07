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
          <input
            type="text"
            id="title"
            placeholder="Ex. Shopping"
            name="title"
            required
          />
        </div>
        <div id="amount-field-wrapper">
          <label htmlFor="amount">Amount</label>
          <div id="amount-input-wrapper">
            <span className="material-icons material-symbols-outlined">
              currency_rupee
            </span>
            <input
              type="number"
              id="amount"
              placeholder="Ex. &#8377;1000"
              name="amount"
              required
            />
          </div>
        </div>
        <div id="type-field-wrapper">
          <label htmlFor="type">Type</label>
          <select id="type" name="type" required>
            <option value="" selected disabled>
              Income/Expense
            </option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <div id="category-field-wrapper">
          <label htmlFor="category">Category</label>
          <select id="category" name="category" required>
            <option value="" selected disabled>
              Ex. Food, Groceries, etc.
            </option>
            <option>Food</option>
            <option>Groceries</option>
          </select>
        </div>
        <div id="date-field-wrapper">
          <label htmlFor="amount">Date</label>
          <input type="date" id="date" name="date" required />
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
