import React, { createContext, useContext, useState } from "react";
import { DEFAULT_CATEGORIES } from "../constants/category";
import { getLocalCategories } from "../utils/localStorage";

const CategoryContext = createContext();

const CategoryContextProvider = ({ children }) => {
  const [categories, setCategories] = useState(
    getLocalCategories() ?? DEFAULT_CATEGORIES
  );

  const addCategories = ({ category, type }) => {
    setCategories((prev) => {
      const newCategory = {
        text: category,
        value: category.replace(/[^A-Za-z0-9_]/g, "").toLowerCase(), //unique value
      };
      if (type === "income") {
        return {
          ...prev,
          income: [...prev.income, newCategory],
        };
      } else {
        return {
          ...prev,
          expense: [...prev.expense, newCategory],
        };
      }
    });
  };

  const removeCategory = (id) =>
    setCategories((prev) => ({
      ...prev,
      income: prev.income.filter(({ value }) => value !== id),
      expense: prev.expense.filter(({ value }) => value !== id),
    }));

  const CATEGORY_MAP = [...categories.expense, ...categories.income].reduce(
    (acc, obj) => ({ ...acc, [obj.value]: obj.text }),
    {}
  );

  return (
    <CategoryContext.Provider
      value={{ categories, addCategories, removeCategory, CATEGORY_MAP }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => useContext(CategoryContext);

export default CategoryContextProvider;
