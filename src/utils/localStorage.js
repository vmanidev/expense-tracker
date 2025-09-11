export const storeTransactionsLocal = (transactions) => {
    console.log(transactions)
    localStorage.setItem("transactions", JSON.stringify(transactions));
}

export const getLocalTransactions = () =>
    JSON.parse(localStorage.getItem("transactions"));