import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function MonthlyChart() {
  const { transactions } = useContext(GlobalContext);

  const monthlyData = {};

  transactions.forEach((t) => {
    if (!t.date) return;

    const month = new Date(t.date).toLocaleString("default", {
      month: "short",
    });

    monthlyData[month] = (monthlyData[month] || 0) + t.amount;
  });

  const data = {
    labels: Object.keys(monthlyData),
    datasets: [
      {
        label: "Monthly Balance",
        data: Object.values(monthlyData),
        backgroundColor: "#3b82f6",
        borderRadius: 8,
      },
    ],
  };

  return (
    <div className="mb-6">
      <h3 className="text-lg mb-3 text-gray-300">Monthly Analytics</h3>
      <Bar data={data} />
    </div>
  );
}