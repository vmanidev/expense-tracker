import React, { createContext, useContext, useState } from "react";
import { DEFAULT_CATEGORIES } from "../constants/category";

const CategoryContext = createContext();

const CategoryContextProvider = ({ children }) => {
  const [categories, setCategories] = useState(DEFAULT_CATEGORIES);

  const addCategories = name => {
    console.log(name)
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
