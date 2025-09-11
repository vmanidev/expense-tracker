import React, { useEffect, useRef, useState } from "react";

import "./addTransaction.css";

import { useExpense } from "../../../../contexts/ExpenseContext";
import { useCategory } from "../../../../contexts/CategoryContext";

export default function AddTransactionDialog() {
  const dialogRef = useRef(null);

  const { openAddTransactionDialog, setOpenAddTransactionDialog, addExpense } =
    useExpense();

  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    type: "expense",
    category: "",
    date: "",
  });

  const { categories, setCategories } = useCategory();

  useEffect(
    () =>
      openAddTransactionDialog
        ? dialogRef.current.showModal()
        : dialogRef.current.close(),
    [openAddTransactionDialog]
  );

  const closeDialog = () => {
    setOpenAddTransactionDialog(false);
    resetForm();
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    addExpense(formData);
    setOpenAddTransactionDialog(false);
    resetForm();
  };

  const resetForm = () =>
    setFormData({
      title: "",
      amount: "",
      type: "expense",
      category: "",
      date: "",
    });

  const maxDateSelection = () => {
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 1); //exclude present date and disable future dates only
    return maxDate.toISOString().split("T")[0];
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "amount" ? Number(value) : value, //convert amount string to number value
    }));
  };

  const getCategories = (type) => categories[type];

  const renderCategories = (type) => {
    return (
      <>
        <option value="" disabled>
          {type === "income"
            ? "Ex. Salary, Bonus, etc."
            : "Ex. Food, Groceries, etc."}
        </option>
        {getCategories(type).map(({ text, value }) => {
          return (
            <option key={value} value={value}>
              {text}
            </option>
          );
        })}
      </>
    );
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
            maxLength="15"
            required
          />
        </div>
        <div id="amount-field-wrapper">
          <label htmlFor="amount">Amount</label>
          <div className="icon-text">
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
            {renderCategories(formData.type)}
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
            max={maxDateSelection()}
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
