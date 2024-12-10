import React, { useState } from "react";
import "/home/crybaby/phase-2/week-1-phase-2/week-1/src/App.css"

const TransactionForm = ({ onAddTransaction }) => {
  const [formState, setFormState] = useState({
    description: "",
    amount: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTransaction(formState);
    setFormState({ description: "", amount: "", category: "" }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="description"
        value={formState.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <input
        type="number"
        name="amount"
        value={formState.amount}
        onChange={handleChange}
        placeholder="Amount"
        required
      />
      <input
        type="text"
        name="category"
        value={formState.category}
        onChange={handleChange}
        placeholder="Category"
        required
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
