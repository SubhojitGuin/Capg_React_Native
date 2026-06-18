import React from 'react'
import { useDispatch } from 'react-redux';
import { selectTicket } from '../TicketSlice';

export default function TicketItem({ ticket }) {

  const dispatch = useDispatch();
  
  const getPriorityBadgeColor = (priority) => {
    switch (priority?.toLowerCase()) {
      case 'high': return 'bg-danger'
      case 'medium': return 'bg-warning text-dark'
      default: return 'bg-info text-dark'
    }
  }

  return (
    <div className="card shadow-sm mb-3" style={{ width: '50%', height: '200px' }}>
      <div className="card-body d-flex flex-column">
        
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="card-title text-truncate mb-0 fw-bold">{ticket.issueTitle}</h5>
          <span 
            className="fs-4 lh-1 select-none" 
            style={{ color: ticket.starred ? '#ffc107' : '#e0e0e0' }}
          >
            {ticket.starred ? '★' : '☆'}
          </span>
        </div>

        <div className="text-muted small mb-2">
          ID: {ticket.id} &bull; Customer: {ticket.customerName}
        </div>

        <p className="card-text text-secondary small overflow-hidden mb-3" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
          {ticket.description}
        </p>

        <div className="mt-0">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="small text-muted">Status: <strong>{ticket.status}</strong></span>
            <span className={`badge ${getPriorityBadgeColor(ticket.priority)}`}>
              {ticket.priority}
            </span>
          </div>

          <button type="button" className="btn btn-primary btn-sm w-100" onClick={() => dispatch(selectTicket(ticket.id))}>
            View Details
          </button>
        </div>

      </div>
    </div>
  )
}
