export const formatCurrency = (amount) => {
    return Intl.NumberFormat("en-IN", {
        currency: "INR",
        style: "currency"
    }).format(amount);
}