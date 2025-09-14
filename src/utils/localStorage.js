export const storeTransactionsLocal = (transactions) =>
    localStorage.setItem("transactions", JSON.stringify(transactions))

export const getLocalTransactions = () =>
    handleParsingError(localStorage.getItem("transactions"));

export const storeCategoriesInLocal = (categories) =>
    localStorage.setItem("categories", JSON.stringify(categories))

export const getLocalCategories = () =>
    handleParsingError(localStorage.getItem("categories"));

const handleParsingError = (data) => {
    try {
        const parsedData = JSON.parse(data);
        return parsedData;
    } catch (error) {
        return null;
    }
};
