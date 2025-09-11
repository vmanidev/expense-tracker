import React, { createContext, useContext, useMemo, useState } from "react";

const ExpenseContext = createContext();

const ExpenseProvider = ({ children }) => {
  const [expenses, setExpense] = useState([]);
  const [openAddTransactionDialog, setOpenAddTransactionDialog] =
    useState(false);

  const addExpense = ({ title, amount, type, category, date }) => {
    setExpense((prev) => [
      ...prev,
      { id: prev.length + 1, title, amount, type, category, date },
    ]);
  };

  const removeExpense = (id) => {
    setExpense((prev) => prev.filter((expense) => expense.id !== id));
  };

  const totalIncome = useMemo(
    () =>
      expenses
        .filter(({ type }) => type === "income")
        .reduce((acc, { amount }) => acc + amount, 0),
    [expenses]
  );

  const totalExpenses = useMemo(
    () =>
      expenses
        .filter(({ type }) => type === "expense")
        .reduce((acc, { amount }) => acc + amount, 0),
    [expenses]
  );

  const balance = useMemo(
    () => totalIncome - totalExpenses,
    [totalIncome, totalExpenses]
  );

  return (
    <ExpenseContext.Provider
      value={{
        expenses,
        addExpense,
        removeExpense,
        totalIncome,
        totalExpenses,
        balance,
        openAddTransactionDialog,
        setOpenAddTransactionDialog,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

//custom hook to handle expense context
export const useExpense = () => useContext(ExpenseContext);

export default ExpenseProvider;
