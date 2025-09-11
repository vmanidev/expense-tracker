export const storeTransactionsLocal = (transactions) => localStorage.setItem("transactions", JSON.stringify(transactions));

export const getLocalTransactions = () => JSON.parse(localStorage.getItem("transactions"));