import React from 'react'

export default function ListComp() {
  // const empNames = ["Ayon", "Aniruddh"]
  const emps = [
    {empId: 101, empName: "Ayon"},
    {empId: 102, empName: "Aniruddh"}
  ]

  const empList = emps.map(emp => <h4>The Employee Name is {emp.empName} and the Employee ID is {emp.empId}</h4>)
  return (
    <div>
      {
        // empNames.map(emp => <h4>The Employee Name is {emp}</h4>)
        empList
      }
    </div>
  )
}
