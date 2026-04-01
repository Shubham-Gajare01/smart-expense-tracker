import CustomSelect from "./CustomSelect";

export default function Filter({ setFilter }) {
  return (
    <div className="mb-4">
      <CustomSelect
        options={["All", "General", "Food", "Travel", "Shopping", "Salary"]}
        value={"All Categories"}
        onChange={setFilter}
      />
    </div>
  );
}