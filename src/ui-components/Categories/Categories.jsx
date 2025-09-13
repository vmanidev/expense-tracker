import React, { useRef, useState } from "react";

import "./Categories.css";
import { useCategory } from "../../contexts/CategoryContext";

export default function Categories() {
  const { categories, addCategories } = useCategory();
  const [formData, setFormData] = useState({
    category: "",
    type: "",
  });

  const editBtn = () => (
    <span className="edit-icon link material-icons material-symbols-outlined">
      edit
    </span>
  );

  const deleteBtn = () => (
    <span className="delete-icon material-icons material-symbols-outlined">
      delete_forever
    </span>
  );

  const getIncomeCategories = () => {
    return categories.income.map(({ text, value }, index) => (
      <li key={`${value}_${index}`} value={value}>
        <span>{text}</span>
        {editBtn()}
        {deleteBtn()}
      </li>
    ));
  };

  const getExpenseCategories = () => {
    return categories.expense.map(({ text, value }, index) => (
      <li key={`${value}_${index}`} value={value}>
        <span>{text}</span>
        {editBtn()}
        {deleteBtn()}
      </li>
    ));
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.type === "" || formData.category === "") return;
    addCategories(formData);
  };

  return (
    <>
      <div className="section-title">Categories</div>
      <div id="category-container">
        <div className="categories">
          <span className="section-title">Income</span>
          <ul>{getIncomeCategories()}</ul>
        </div>
        <div className="categories">
          <span className="section-title">Expenses</span>
          <ul>{getExpenseCategories()}</ul>
        </div>
        <div id="add-category">
          <span className="section-title">Add New Categories</span>
          <input
            name="category"
            id="category-name"
            type="text"
            placeholder="Ex: Food, Shopping, etc."
            value={formData.category}
            onChange={handleFormChange}
            required
          />
          <select
            name="type"
            id="category-type"
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
          <button className="add-btn" type="submit" onClick={handleFormSubmit}>
            Add
          </button>
        </div>
      </div>
    </>
  );
}
