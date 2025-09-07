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
          <input id="title" placeholder="Title" name="title" />
        </div>
        <div id="amount-field-wrapper">
          <label htmlFor="amount">Amount (&#8377;)</label>
          <input id="amount" placeholder="Amount (&#8377;)" name="amount" />
        </div>
        <div id="type-field-wrapper">
          <label htmlFor="type">Type</label>
          <input id="type" placeholder="Type" name="type" />
        </div>
        <div id="category-field-wrapper">
          <label htmlFor="category">Category</label>
          <input id="category" placeholder="Category" name="category" />
        </div>
        <div id="date-field-wrapper">
          <label htmlFor="amount">Date (&#8377;)</label>
          <input id="date" placeholder="Date" name="date" />
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
