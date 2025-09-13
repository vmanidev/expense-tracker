import React, { useRef, useState } from "react";

import "./Categories.css";
import { useCategory } from "../../contexts/CategoryContext";
import { Link } from "react-router-dom";

export default function Categories() {
  const { categories, addCategories, removeCategory } = useCategory();
  const [formData, setFormData] = useState({
    category: "",
    type: "",
  });

  const editBtn = (value) => (
    <span className="edit-icon link material-icons material-symbols-outlined">
      edit
    </span>
  );

  const deleteBtn = (value) => (
    <span
      className="delete-icon material-icons material-symbols-outlined"
      onClick={(e) => deleteCategory(value)}
    >
      delete_forever
    </span>
  );

  const getIncomeCategories = () => {
    return categories.income.map(({ text, value }, index) => (
      <li key={`${value}_${index}`} value={value}>
        <span>{text}</span>
        {editBtn(value)}
        {deleteBtn(value)}
      </li>
    ));
  };

  const getExpenseCategories = () => {
    return categories.expense.map(({ text, value }, index) => (
      <li key={`${value}_${index}`} value={value}>
        <span>{text}</span>
        {editBtn(value)}
        {deleteBtn(value)}
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

  const deleteCategory = (id) => removeCategory(id);

  return (
    <>
      <div className="section-title">Categories</div>

      <div id="category-container">
        {categories.income.length > 0 && (
          <div className="categories">
            <span className="section-title">Income</span>
            <ul>{getIncomeCategories()}</ul>
          </div>
        )}

        {categories.expense.length > 0 && (
          <div className="categories">
            <span className="section-title">Expenses</span>
            <ul>{getExpenseCategories()}</ul>
          </div>
        )}

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
