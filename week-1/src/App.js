// import React, { useState, useEffect } from "react";
import TransactionForm from "./components/TransactionForm";
import SearchBar from "./components/SearchBar";
import TransactionTable from "./components/TransactionTable";
// import { getTransactions, saveTransactions } from './utils/localStorage';



import React, { useState, useEffect } from "react";
import { getTransactions, saveTransactions } from "./utils/localStorage";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [newTransaction, setNewTransaction] = useState({
    description: "",
    amount: "",
    category: "",
  });

  useEffect(() => {
    const savedTransactions = getTransactions();
    setTransactions(savedTransactions);
  }, []);

  const addTransaction = () => {
    if (
      newTransaction.description &&
      newTransaction.amount &&
      newTransaction.category
    ) {
      const updatedTransactions = [...transactions, newTransaction];
      setTransactions(updatedTransactions);
      saveTransactions(updatedTransactions);
      setNewTransaction({ description: "", amount: "", category: "" });
    }
  };

  const filteredTransactions = transactions.filter(
    (transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.amount.toString().includes(searchTerm) ||
      transaction.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Transaction Tracker</h1>
      <input
        type="text"
        placeholder="Search transactions"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        <input
          type="text"
          placeholder="Description"
          value={newTransaction.description}
          onChange={(e) =>
            setNewTransaction({ ...newTransaction, description: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Amount"
          value={newTransaction.amount}
          onChange={(e) =>
            setNewTransaction({ ...newTransaction, amount: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Category"
          value={newTransaction.category}
          onChange={(e) =>
            setNewTransaction({ ...newTransaction, category: e.target.value })
          }
        />
        <button onClick={addTransaction}>Add Transaction</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.description}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
