import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuidv4 } from "uuid";
import CustomSelect from "./CustomSelect";

export default function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("General");
  const [date, setDate] = useState("");

  const { addTransaction } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text || !amount || !date) {
      alert("Please fill all fields");
      return;
    }

    const newTransaction = {
      id: uuidv4(),
      text,
      amount: +amount,
      category,
      date,
    };

    addTransaction(newTransaction);

    setText("");
    setAmount("");
    setCategory("General");
    setDate("");
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 text-gray-200">
        ➕ Add New Transaction
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Description */}
        <div>
          <label className="text-sm text-gray-400">Description</label>
          <input
            type="text"
            placeholder="e.g. Grocery shopping"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full mt-1 p-3 rounded-xl bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>

        {/* Amount */}
        <div>
          <label className="text-sm text-gray-400">Amount</label>
          <input
            type="number"
            placeholder="+ income, - expense"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full mt-1 p-3 rounded-xl bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>

        {/* Category (🔥 CUSTOM DROPDOWN) */}
        <div>
          <label className="text-sm text-gray-400">Category</label>

          <CustomSelect
            options={["General", "Food", "Travel", "Shopping", "Salary"]}
            value={category}
            onChange={setCategory}
          />
        </div>

        {/* Date */}
        <div>
          <label className="text-sm text-gray-400">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full mt-1 p-3 rounded-xl bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full mt-4 bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-xl font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300"
        >
          ➕ Add Transaction
        </button>
      </form>
    </div>
  );
}