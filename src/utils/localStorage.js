export const storeTransactionsLocal = (transactions) => localStorage.setItem("transactions", JSON.stringify(transactions));

export const getLocalTransactions = () => JSON.parse(localStorage.getItem("transactions"));

export const storeCategoriesInLocal = (categories) => localStorage.setItem("categories", JSON.stringify(categories));

export const getLocalCategories = () => JSON.parse(localStorage.getItem("categories"));