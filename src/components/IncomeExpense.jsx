import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function IncomeExpense() {
  const { transactions } = useContext(GlobalContext);

  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter((t) => t.amount < 0)
    .reduce((acc, t) => acc + t.amount, 0);

  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      
      <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-xl text-center">
        <h4 className="text-green-400 text-sm">Income</h4>
        <p className="text-xl font-bold text-green-400">₹{income}</p>
      </div>

      <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl text-center">
        <h4 className="text-red-400 text-sm">Expense</h4>
        <p className="text-xl font-bold text-red-400">₹{Math.abs(expense)}</p>
      </div>

    </div>
  );
}