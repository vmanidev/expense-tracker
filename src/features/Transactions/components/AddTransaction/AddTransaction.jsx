import React, { useEffect, useRef, useState } from "react";

import "./addTransaction.css";

import { useExpense } from "../../../../contexts/ExpenseContext";

export default function AddTransactionDialog() {
  const dialogRef = useRef(null);

  const { openDialog, expenses, setOpenDialog, addExpense } = useExpense();

  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    type: "",
    category: "",
    date: "",
  });

  useEffect(
    () =>
      openDialog ? dialogRef.current.showModal() : dialogRef.current.close(),
    [openDialog]
  );

  const closeDialog = () => {
    setOpenDialog(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    addExpense(formData);
    setOpenDialog(false);
    setFormData({ title: "", amount: "", type: "", category: "", date: "" });
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "amount" ? Number(value) : value, //convert amount string to number value
    }));
  };

  return (
    <dialog id="add-transaction-dialog" ref={dialogRef}>
      <h3>Add Transaction</h3>
      <form id="addExpenseForm" onSubmit={handleFormSubmit}>
        <div id="title-field-wrapper">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            placeholder="Ex. Shopping"
            name="title"
            value={formData.title}
            onChange={handleFormChange}
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
              value={formData.amount}
              onChange={handleFormChange}
              required
            />
          </div>
        </div>
        <div id="type-field-wrapper">
          <label htmlFor="type">Type</label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleFormChange}
            required
          >
            <option value="" disabled>
              Income/Expense
            </option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <div id="category-field-wrapper">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleFormChange}
            required
          >
            <option value="" disabled>
              Ex. Food, Groceries, etc.
            </option>
            <option value="food">Food</option>
            <option value="groceries">Groceries</option>
          </select>
        </div>
        <div id="date-field-wrapper">
          <label htmlFor="amount">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleFormChange}
            required
          />
        </div>
      </form>
      <div className="dialog-footer">
        <button className="add-btn" type="submit" form="addExpenseForm">
          Add
        </button>
        <button className="cancel-btn" onClick={closeDialog}>
          Cancel
        </button>
      </div>
    </dialog>
  );
}
