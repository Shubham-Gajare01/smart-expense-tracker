import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { FaTrash, FaArrowUp, FaArrowDown } from "react-icons/fa";

export default function TransactionList({ filter }) {
  const { transactions, deleteTransaction } = useContext(GlobalContext);

  const filteredTransactions =
    filter === "All"
      ? transactions
      : transactions.filter((t) => t.category === filter);

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 text-gray-200">
        📜 Transaction History
      </h3>

      <div className="space-y-3">
        {filteredTransactions.map((t) => (
          <div
            key={t.id}
            className={`flex justify-between items-center p-4 rounded-xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${
              t.amount > 0
                ? "bg-green-500/10 border-green-500/30"
                : "bg-red-500/10 border-red-500/30"
            }`}
          >
            {/* LEFT */}
            <div className="flex items-center gap-3">
              
              {/* ICON */}
              <div
                className={`p-2 rounded-full ${
                  t.amount > 0 ? "bg-green-500/20" : "bg-red-500/20"
                }`}
              >
                {t.amount > 0 ? (
                  <FaArrowUp className="text-green-400" />
                ) : (
                  <FaArrowDown className="text-red-400" />
                )}
              </div>

              {/* TEXT */}
              <div>
                <p className="font-semibold">{t.text}</p>
                <p className="text-sm text-gray-400">
                  {t.category} • {t.date}
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-4">
              
              {/* AMOUNT */}
              <span
                className={`font-bold text-lg ${
                  t.amount > 0 ? "text-green-400" : "text-red-400"
                }`}
              >
                ₹{t.amount}
              </span>

              {/* DELETE */}
              <button
                onClick={() => deleteTransaction(t.id)}
                className="text-gray-400 hover:text-red-500 hover:scale-110 transition"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}