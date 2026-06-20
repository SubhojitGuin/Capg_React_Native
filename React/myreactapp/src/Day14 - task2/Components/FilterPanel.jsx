import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { setActiveFilter } from '../TicketSlice';

export default function FilterPanel() {

  const activeFilter = useSelector(state => state.tickets.activeFilter);
  const dispatch = useDispatch();

  return (
    <div className='d-flex flex-column gap-2 p-2 bg-light rounded shadow-sm mb-2' style={{ flex: '1', maxHeight: '110px' }}>
      <h2 className='text-center'>Filter Tickets</h2>
      <select
        name='filter'
        className="form-select form-select-sm mb-2"
        value={activeFilter}
        onChange={(e) => {
          dispatch(setActiveFilter(e.target.value));
        }}
      >
        <option value="All">All</option>
        <option value="Open">Open</option>
        <option value="In Progress">In Progress</option>
        <option value="Resolved">Resolved</option>
      </select>
    </div>
  )
}
