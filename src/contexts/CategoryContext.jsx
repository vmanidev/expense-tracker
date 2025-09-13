import React, { createContext, useContext, useState } from "react";
import { DEFAULT_CATEGORIES } from "../constants/category";

const CategoryContext = createContext();

const CategoryContextProvider = ({ children }) => {
  const [categories, setCategories] = useState(DEFAULT_CATEGORIES);

  const CATEGORY_MAP = [...categories.expense, ...categories.income]
    .map(({ text, value }) => ({ [value]: text }))
    .reduce((acc, obj) => ({ ...acc, ...obj }), {});

  return (
    <CategoryContext.Provider
      value={{ categories, setCategories, CATEGORY_MAP }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => useContext(CategoryContext);

export default CategoryContextProvider;
