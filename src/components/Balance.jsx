import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Balance() {
  const { transactions } = useContext(GlobalContext);

  const total = transactions.reduce((acc, t) => acc + t.amount, 0);

  return (
    <div className="text-center mb-6">
      <h2 className="text-gray-400 text-sm">Your Balance</h2>
      <h1 className="text-3xl font-bold text-white">₹{total}</h1>
    </div>
  );
}