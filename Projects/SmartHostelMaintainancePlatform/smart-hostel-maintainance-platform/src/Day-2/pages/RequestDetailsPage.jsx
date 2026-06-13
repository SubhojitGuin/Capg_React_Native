import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { fetchRequestById } from '../services/RequestService';
import getFormattedDate from '../utils/getFormattedDate';

export default function RequestDetailsPage() {

  const { id } = useParams();
  const [request, setRequest] = React.useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    fetchRequestById(id)
      .then(data => setRequest(data))
      .catch(error => console.error("Error fetching request details:", error));
  }, [id]);

  if (!request) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading request details...</span>
        </div>
        <p className="mt-2 text-muted">Loading request details...</p>
      </div>
    );
  }

  const getPriorityBadgeColor = (priority) => {
    switch (priority?.toLowerCase()) {
      case 'high': return 'bg-danger';
      case 'medium': return 'bg-warning text-dark';
      default: return 'bg-info text-dark';
    }
  };

  const getStatusBadgeColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'resolved': return 'bg-success';
      case 'in progress': return 'bg-warning text-dark';
      default: return 'bg-danger';
    }
  };

  return (
    <div className="container my-5" style={{ maxWidth: '800px' }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold mb-0 text-dark">Request Details</h2>
        <button className="btn btn-outline-secondary px-4 shadow-sm" onClick={() => navigate(-1)}>
          <i className="bi bi-arrow-left me-2"></i>Back
        </button>
      </div>

      <div className="card shadow-sm border-0 bg-light rounded-3">
        <div className="card-header bg-white border-bottom p-4">
          <span className="text-uppercase text-muted small fw-bold tracking-wider">Request Title</span>
          <h3 className="fw-bold text-primary mt-1 mb-0">{request.title}</h3>
        </div>

        <div className="card-body p-4 bg-white">
          <div className="row g-4">
            
            <div className="col-12 border-bottom pb-3">
              <span className="text-muted d-block small mb-1 fw-semibold">Description</span>
              <p className="text-secondary fs-6 mb-0">{request.description}</p>
            </div>

            <div className="col-md-6">
              <span className="text-muted d-block small mb-1 fw-semibold">Category</span>
              <span className="fw-medium text-dark">{request.category}</span>
            </div>

            <div className="col-md-6">
              <span className="text-muted d-block small mb-1 fw-semibold">Room Number</span>
              <span className="fw-medium text-dark">{request.roomNo}</span>
            </div>

            <div className="col-md-6">
              <span className="text-muted d-block small mb-1 fw-semibold">Priority</span>
              <span className={`badge ${getPriorityBadgeColor(request.priority)} px-3 py-2 rounded-pill`}>
                {request.priority}
              </span>
            </div>

            <div className="col-md-6">
              <span className="text-muted d-block small mb-1 fw-semibold">Status</span>
              <span className={`badge ${getStatusBadgeColor(request.status)} px-3 py-2 rounded-pill`}>
                {request.status}
              </span>
            </div>

            <div className="col-md-6">
              <span className="text-muted d-block small mb-1 fw-semibold">Student Name</span>
              <span className="fw-medium text-dark">{request.studentName}</span>
            </div>

            <div className="col-md-6">
              <span className="text-muted d-block small mb-1 fw-semibold">Created At</span>
              <span className="text-muted">{getFormattedDate(request.createdAt)}</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
