import React, { createContext, useContext, useState } from "react";
import { DEFAULT_CATEGORIES } from "../constants/category";

const CategoryContext = createContext();

const CategoryContextProvider = ({ children }) => {
  const [categories, setCategories] = useState(DEFAULT_CATEGORIES);

  const addCategories = ({ category, type }) => {
    setCategories((prev) => {
      const newCategory = {
        text: category,
        value: category.replace(/[^A-Za-z0-9_]/g, "").toLowerCase(),
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

  const CATEGORY_MAP = [...categories.expense, ...categories.income].reduce(
    (acc, obj) => ({ ...acc, [obj.value]: obj.text }),
    {}
  );

  return (
    <CategoryContext.Provider
      value={{ categories, addCategories, CATEGORY_MAP }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => useContext(CategoryContext);

export default CategoryContextProvider;
