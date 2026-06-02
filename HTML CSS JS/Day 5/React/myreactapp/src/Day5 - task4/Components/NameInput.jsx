import { useState } from "react";

export default function NameInput({ name, setName }) {
  return (
    <div className="student-form-element">
      <label htmlFor="name">Name:</label>
      <input 
        type="text" 
        id="name" 
        name="name" 
        placeholder="Enter your name" 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}