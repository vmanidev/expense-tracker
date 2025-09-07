import React, { createContext, useContext, useState } from "react";

const ExpenseContext = createContext();

const ExpenseProvider = ({ children }) => {
  const [expenses, setExpense] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);

  const addExpense = ({ title, amount, type, category, date }) => {
    setExpense((prev) => [
      ...prev,
      { id: prev.length + 1, title, amount, type, category, date },
    ]);
  };

  return (
    <ExpenseContext.Provider
      value={{ expenses, addExpense, openDialog, setOpenDialog }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

//custom hook to handle expense context
export const useExpense = () => useContext(ExpenseContext);

export default ExpenseProvider;
