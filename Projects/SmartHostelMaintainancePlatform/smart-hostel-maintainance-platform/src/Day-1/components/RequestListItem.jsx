import React from 'react'

export default function RequestListItem({ request }) {

  function getStatusColor(status) {
    switch (status) {
      case "Open":
        return "#dc3545";
      case "In Progress":
        return "#ebb513";
      case "Resolved":
        return "#28a745";
    }
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getUTCDate();
    const month = date.toLocaleDateString('en-US', { 
      timeZone: 'UTC', 
      month: 'long' 
    });
    const year = date.getUTCFullYear();
    return `${day} ${month}, ${year}`;
  }

  return (
    <div className="request-list-item d-flex justify-content-between align-items-center" style={{ borderLeft: `5px solid ${getStatusColor(request.status)}` }}>
      <div>
        <h5>{request.title}</h5>
        <p className="text-muted">{request.category} • Room {request.roomNo}</p>
        <p className="text-muted">{formatDate(request.createdAt)}</p>
      </div>

      <div className="d-flex flex-row align-items-end gap-1">
        <span className="badge bg-primary-subtle border border-primary text-primary">{request.priority}</span>
        <span className="badge bg-warning-subtle border border-warning" style={{ color: getStatusColor(request.status), borderColor: getStatusColor(request.status)}}>
          {request.status}
        </span>
      </div>
    </div>
  )
}
