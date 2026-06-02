import { useState } from "react";

export default function TaskStatus() {
  const [isCompleted, setIsCompleted] = useState(false);

  function toggleStatus(e) {
    setIsCompleted(e.target.checked);
  }

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h3>Complete React practice</h3>

      <label style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}>
        <input 
          type="checkbox" 
          checked={isCompleted} 
          onChange={toggleStatus} 
        />
        
        <span>
          {isCompleted ? "Task Completed" : "Task Not Completed"}
        </span>
      </label>
    </div>
  );
}