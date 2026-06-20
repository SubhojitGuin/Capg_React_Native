import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateFilter } from '../Redux/EmployeeSlice';

export default function FilterComponent() {

  const dispatch = useDispatch();
  const activeFilter = useSelector((state) => state.employees.activeFilter);

  const isActive = (filter) => (filter === activeFilter) ? 'active' : '';

  return (
    <div className='d-flex justify-content-start align-items-center gap-2 mb-2 border shadow-sm px-2 py-3 rounded'>
      <h3>Filter By Status:</h3>
      <div className='d-flex justify-content-start align-items-center gap-2'>

        <button 
          onClick={() => dispatch(updateFilter('All'))} 
          className={`btn btn-outline-primary ${isActive('All')}`}
          style={{ width: '100px' }}
        >All</button>

        <button 
          onClick={() => dispatch(updateFilter('Going'))} 
          className={`btn btn-outline-success ${isActive('Going')}`}
          style={{ width: '100px' }}
        >Going</button>

        <button 
          onClick={() => dispatch(updateFilter('Not Going'))} 
          className={`btn btn-outline-danger ${isActive('Not Going')}`}
          style={{ width: '100px' }}
        >Not Going</button>

        <button 
          onClick={() => dispatch(updateFilter('Pending'))} 
          className={`btn btn-outline-warning ${isActive('Pending')}`}
          style={{ width: '100px' }}
        >Pending</button>

      </div>
    </div>
  )
}
