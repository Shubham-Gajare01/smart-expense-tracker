import { useState } from "react";
import { GlobalProvider } from "./context/GlobalState";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import Chart from "./components/Chart";
import Filter from "./components/Filter";
import MonthlyChart from "./components/MonthlyChart";
import ExportButton from "./components/ExportButton";
import ResetButton from "./components/ResetButton";


function App() {
  const [filter, setFilter] = useState("All");

  return (
    <GlobalProvider>
      <div className="min-h-screen p-4 text-white">

        <div className="max-w-6xl mx-auto space-y-6">

          {/* HEADER */}
          <Header />

          {/* BALANCE + INCOME */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass hover-card p-6">
              <Balance />
            </div>

            <div className="glass hover-card p-6">
              <IncomeExpense />
            </div>
          </div>

          {/* CHARTS */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass hover-card p-4">
              <Chart />
            </div>

            <div className="glass hover-card p-4">
              <MonthlyChart />
            </div>
          </div>

          {/* ACTIONS */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="glass p-3 relative z-50">
              <ExportButton />
            </div>

            <div className="glass p-3 relative z-50">
              <Filter setFilter={setFilter} />
            </div>
          </div>

          {/* HISTORY */}
          <div className="glass p-4 hover-card">
            <TransactionList filter={filter} />
          </div>

          <div className="grid md:grid-cols-3 gap-4">
        <div className="glass p-3">
        <ExportButton />
      </div>

        <div className="glass p-3">
        <Filter setFilter={setFilter} />
      </div>

        <div className="glass p-3">
          <ResetButton />
        </div>
      </div>

          {/* ADD */}
          <div className="glass p-4 hover-card">
            <AddTransaction />
          </div>

        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;