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
      <div className="dialog-footer">
        <button className="add-btn">Add</button>
        <button className="cancel-btn" onClick={closeDialog}>
          Cancel
        </button>
      </div>
    </dialog>
  );
}
