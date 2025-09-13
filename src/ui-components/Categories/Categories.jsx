import React from "react";

import "./Categories.css";
import { useCategory } from "../../contexts/CategoryContext";

export default function Categories() {
  const { categories } = useCategory();

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
    return categories.income.map(({ text, value }) => (
      <li key={value} value={value}>
        <span>{text}</span>
        {editBtn()}
        {deleteBtn()}
      </li>
    ));
  };

  const getExpenseCategories = () => {
    return categories.expense.map(({ text, value }) => (
      <li key={value} value={value}>
        <span>{text}</span>
        {editBtn()}
        {deleteBtn()}
      </li>
    ));
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
      </div>
    </>
  );
}
