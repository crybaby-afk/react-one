export const saveTransactions = (transactions) => {
  localStorage.setItem("transactions", JSON.stringify(transactions));
};

export const getTransactions = () => {
  const transactions = localStorage.getItem("transactions");
  return transactions ? JSON.parse(transactions) : [];
};
