import React, { createContext, useContext, useState } from "react";
import { DEFAULT_CATEGORIES } from "../constants/category";

const CategoryContext = createContext();

const CategoryContextProvider = ({ children }) => {
  const [categories, setCategories] = useState(DEFAULT_CATEGORIES);

  return (
    <CategoryContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => useContext(CategoryContext);

export default CategoryContextProvider;
