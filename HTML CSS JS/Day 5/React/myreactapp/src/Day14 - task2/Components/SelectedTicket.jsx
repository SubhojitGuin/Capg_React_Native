import React from 'react'
import { useDispatch } from 'react-redux';
import { selectTicket, starOrUnstarTicket, updatePriority, updateTicketStatus } from '../TicketSlice';

export default function SelectedTicket({ ticket }) {

  const dispatch = useDispatch();

  return (
    <div className='container-fluid'>
      <div className='card'>
        <div className='card-header d-flex justify-content-between align-items-center'>
          <h5 className='card-title'>Ticket Details <span 
            className="fs-4 lh-1 select-none" 
            style={{ color: ticket.starred ? '#ffc107' : '#e0e0e0', cursor: 'pointer' }}
            onClick={() => dispatch(starOrUnstarTicket(ticket.id))}
          >
            {ticket.starred ? '★' : '☆'}
          </span></h5>
          
          <button type="button" className="btn-close m-2" aria-label="Close" onClick={() => dispatch(selectTicket(null))}></button>
        </div>
        <div className='card-body'>
          <p className='card-text'><strong>ID:</strong> {ticket.id}</p>
          <p className='card-text'><strong>Title:</strong> {ticket.issueTitle}</p>
          <p className='card-text'><strong>Description:</strong> {ticket.description}</p>
          <p className='card-text'><strong>Customer:</strong> {ticket.customerName}</p>
          <div className='d-flex align-items-center mb-2'>
            <label className='me-2'><strong>Status:</strong></label>
            <select 
              className='form-select form-select-sm d-inline-block w-auto'
              value={ticket.status}
              onChange={(e) => dispatch(updateTicketStatus({ id: ticket.id, status: e.target.value }))}
            >
              <option value="Open">Open</option>
              <option value="In Progress">In Progress</option>
              <option value="Resolved">Resolved</option>
            </select>
          </div>
          <div className='d-flex align-items-center mb-2'>
            <label className='me-2'><strong>Priority:</strong></label>
            <select 
              className='form-select form-select-sm d-inline-block w-auto'
              value={ticket.priority}
              onChange={(e) => dispatch(updatePriority({ id: ticket.id, priority: e.target.value }))}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <p className='card-text'><strong>Assigned To:</strong> {ticket.assignedTo}</p>
        </div>
      </div>
    </div>
  )
}
