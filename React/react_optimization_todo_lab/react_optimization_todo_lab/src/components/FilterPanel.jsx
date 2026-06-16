import React from "react";

const SelectField = React.memo(function SelectField({ name, value, onChange, options }) {
  return (
    <select name={name} value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
});

const statusOptions = [
  { value: "", label: "All Status" },
  { value: "Open", label: "Open" },
  { value: "Assigned", label: "Assigned" },
  { value: "In Progress", label: "In Progress" },
  { value: "Resolved", label: "Resolved" },
];

const sortOptions = [
  { value: "", label: "Sort By" },
  { value: "priority", label: "Priority" },
  { value: "date", label: "Date" },
];

function FilterPanel({ statusFilter, sortBy, onStatusChange, onSortChange }) {
  console.log("FilterPanel re-rendered");

  const handleStatusChange = React.useCallback((event) => {
    onStatusChange(event.target.value);
  }, [onStatusChange]);

  const handleSortChange = React.useCallback((event) => {
    onSortChange(event.target.value);
  }, [onSortChange]);

  return (
    <div className="card">
      <h3>Filters</h3>

      <SelectField
        name="status"
        value={statusFilter}
        onChange={handleStatusChange}
        options={statusOptions}
      />

      <SelectField
        name="sort"
        value={sortBy}
        onChange={handleSortChange}
        options={sortOptions}
      />

      <div className="todo-box">
        <strong>TODO:</strong> Prevent unnecessary re-renders using proper memoization strategy.
      </div>
    </div>
  );
}

export default React.memo(FilterPanel);
