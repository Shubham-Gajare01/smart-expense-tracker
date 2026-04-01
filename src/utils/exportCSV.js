export function exportToCSV(transactions) {
  const headers = ["Text", "Amount", "Category", "Date"];

  const rows = transactions.map((t) => [
    t.text,
    t.amount,
    t.category,
    t.date || "",
  ]);

  const csvContent =
    "data:text/csv;charset=utf-8," +
    [headers, ...rows].map((row) => row.join(",")).join("\n");

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");

  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "transactions.csv");
  document.body.appendChild(link);

  link.click();
}