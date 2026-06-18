import React from 'react'
import SummaryCard from './SummaryCard'
import { useSelector } from 'react-redux';

export default function SummaryHeader() {

  const employees = useSelector((state) => state.employees.allEmployees);

  const totalEmployees = React.useMemo(() => employees.length, [employees]);
  const goingEmployees = React.useMemo(() => employees.filter((emp) => emp.status === 'Going').length, [employees]);
  const notGoingEmployees = React.useMemo(() => employees.filter((emp) => emp.status === 'Not Going').length, [employees]);
  const pendingEmployees = React.useMemo(() => employees.filter((emp) => emp.status === 'Pending').length, [employees]);
  
  return (
    <div className='d-flex gap-2 justify-content-between mb-2'>
      <SummaryCard title='Total Employees' value={totalEmployees} color='blue'/>
      <SummaryCard title='Going' value={goingEmployees} color='green'/>
      <SummaryCard title='Not Going' value={notGoingEmployees} color='red'/>
      <SummaryCard title='Pending' value={pendingEmployees} color='yellow'/>
    </div>
  )
}
