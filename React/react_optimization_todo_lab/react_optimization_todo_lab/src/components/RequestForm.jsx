import React from "react";

const TextField = React.memo(function TextField({ name, placeholder, value, onChange, type = "text" }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
});

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

const TextAreaField = React.memo(function TextAreaField({ name, placeholder, value, onChange }) {
  return (
    <textarea name={name} placeholder={placeholder} value={value} onChange={onChange} />
  );
});

const categoryOptions = [
  { value: "", label: "Select Category" },
  { value: "Water Leakage", label: "Water Leakage" },
  { value: "Garbage Pickup", label: "Garbage Pickup" },
  { value: "Streetlight Issue", label: "Streetlight Issue" },
  { value: "Road Damage", label: "Road Damage" },
  { value: "Drainage Blockage", label: "Drainage Blockage" },
];

const priorityOptions = [
  { value: "", label: "Select Priority" },
  { value: "Low", label: "Low" },
  { value: "Medium", label: "Medium" },
  { value: "High", label: "High" },
];

function RequestForm({ formData, onChange, onSubmit }) {
  console.log("RequestForm re-rendered");

  return (
    <div className="card">
      <h3>New Request Form</h3>
      <form onSubmit={onSubmit} className="form-grid">
        <TextField
          name="residentName"
          placeholder="Resident Name"
          value={formData.residentName}
          onChange={onChange}
        />

        <TextField
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={onChange}
        />

        <TextField name="area" placeholder="Area" value={formData.area} onChange={onChange} />

        <SelectField
          name="category"
          value={formData.category}
          onChange={onChange}
          options={categoryOptions}
        />

        <SelectField
          name="priority"
          value={formData.priority}
          onChange={onChange}
          options={priorityOptions}
        />

        <TextField
          type="date"
          name="visitDate"
          value={formData.visitDate}
          onChange={onChange}
        />

        <TextAreaField
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={onChange}
        />

        <button type="submit">Add Request</button>
      </form>

      <div className="todo-box">
        <strong>TODO:</strong> Split this form into smaller field components and optimize the controlled component behavior.
      </div>
    </div>
  );
}

export default React.memo(RequestForm);
