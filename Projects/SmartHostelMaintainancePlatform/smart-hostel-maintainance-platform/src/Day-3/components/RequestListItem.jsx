import React from 'react'
import useAuthContext from '../hooks/useAuthContext';
import { updateRequestStatus } from '../services/RequestService';
import getFormattedDate from '../utils/getFormattedDate';
import { useNavigate } from 'react-router-dom';

function RequestListItem({ request, onRefresh }) {

  const { user, isAuthenticated } = useAuthContext();
  const navigate = useNavigate();

  function getStatusColor(status) {
    switch (status.toLowerCase()) {
      case "open":
        return "#dc3545";
      case "in progress":
        return "#ebb513";
      case "resolved":
        return "#28a745";
    }
  }

  function updateStatus(newStatus) {
    console.log(`Updating request ${request.id} to status: ${newStatus}`);
    updateRequestStatus(request.id, newStatus)
      .then(updatedRequest => {
        console.log('Request status updated:', updatedRequest);
        alert(`Request status updated to ${newStatus}`);
        
        if (onRefresh) {
          onRefresh();
        }
      })
      .catch(error => {
        console.error('Error updating request status:', error);
      });
  }

  return (
    <div className="request-list-item d-flex justify-content-between align-items-center" style={{ borderLeft: `5px solid ${getStatusColor(request.status)}` }}>
      <div>
        <h5>{request.title}</h5>
        <p className="text-muted">{request.category} • Room {request.roomNo}</p>
        <p className="text-muted">{getFormattedDate(request.createdAt)}</p>
      </div>

      <div className="d-flex flex-row align-items-end gap-1">
        <span className="tab bg-primary-subtle border border-primary text-primary">{request.priority}</span>
        {
          (isAuthenticated && user?.role === 'admin') ? (
            <select className="tab form-select form-select-sm rounded-pill fw-bold border-primary px-3" value={request.status} onChange={(e) => updateStatus(e.target.value)}>
              <option value="Open">Open</option>
              <option value="In Progress">In Progress</option>
              <option value="Resolved">Resolved</option>
            </select>
          ) : (
            <span className="tab bg-warning-subtle border border-warning" style={{ color: getStatusColor(request.status) }}>
              {request.status}
            </span>
          )
        }
        <button className="tab btn btn-sm btn-outline-primary" onClick={() => navigate(`/request/${request.id}`)}>
          View Details <i className="bi bi-arrow-right ms-2"></i>
        </button>
      </div>
    </div>
  )
}

export default React.memo(RequestListItem);