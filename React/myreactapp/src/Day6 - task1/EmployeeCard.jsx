import React from 'react'

export default function EmployeeCard({ employee }) {
  return (
    <div class="employee-card">
      <h2>Name: {employee.name}</h2>
      <p>Role: {employee.role}</p>
      <p>Department: {employee.department}</p>
      <p>Location: {employee.location}</p>
    </div>
  )
}
