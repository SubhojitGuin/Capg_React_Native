import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateFilter } from '../Redux/EmployeeSlice';

export default function FilterComponent() {

  const dispatch = useDispatch();
  const activeFilter = useSelector((state) => state.employees.activeFilter);

  const isActive = (filter) => (filter === activeFilter) ? 'active' : '';

  return (
    <div className='d-flex justify-content-start align-items-center gap-2 mb-2 border border-2 p-2 rounded'>
      <h3>Filter By Status:</h3>
      <div className='d-flex justify-content-start align-items-center gap-2'>

        <button 
          onClick={() => dispatch(updateFilter('All'))} 
          className={`btn btn-outline-secondary ${isActive('All')}`}
        >All</button>

        <button 
          onClick={() => dispatch(updateFilter('Going'))} 
          className={`btn btn-outline-secondary ${isActive('Going')}`}
        >Going</button>

        <button 
          onClick={() => dispatch(updateFilter('Not Going'))} 
          className={`btn btn-outline-secondary ${isActive('Not Going')}`}
        >Not Going</button>

        <button 
          onClick={() => dispatch(updateFilter('Pending'))} 
          className={`btn btn-outline-secondary ${isActive('Pending')}`}
        >Pending</button>

      </div>
    </div>
  )
}
