import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function ResetButton() {
  const { clearAllTransactions } = useContext(GlobalContext);

  return (
    <button
      onClick={() => {
        if (confirm("Delete all transactions?")) {
          clearAllTransactions();
        }
      }}
      className="w-full bg-red-600 hover:bg-red-700 p-3 rounded-xl font-semibold transition"
    >
      🗑 Reset All Data
    </button>
  );
}