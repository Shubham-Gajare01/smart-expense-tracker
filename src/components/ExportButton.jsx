import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { exportToCSV } from "../utils/exportCSV";

export default function ExportButton() {
  const { transactions } = useContext(GlobalContext);

  return (
    <button
  onClick={() => exportToCSV(transactions)}
  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 p-3 rounded-xl font-semibold hover:opacity-90 transition"
>
  📤 Export CSV
</button>
  );
}