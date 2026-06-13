import React from 'react'
import useAuthContext from '../hooks/useAuthContext';
import SummaryCard from '../components/SummaryCard';
import { fetchRequestsByStudent } from '../services/RequestService';
import { Link, useNavigate } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import getFormattedDate from '../utils/getFormattedDate';

export default function StudentDashboardPage() {

  const [requests, setRequests] = React.useState([]);
  const [summary, setSummary] = React.useState({
    total: 0,
    open: 0,
    inProgress: 0,
    resolved: 0,
    highPriority: 0,
  });
  const [latestRequest, setLatestRequest] = React.useState(null);
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case 'Open': return 'bg-danger';
      case 'In Progress': return 'bg-warning text-dark';
      case 'Resolved': return 'bg-success';
      default: return 'bg-secondary';
    }
  };

  const loadRequests = React.useCallback(() => {
    if (user && user.id) {
      fetchRequestsByStudent(user.id)
        .then((reqs) => {
          const total = reqs.length;
          const open = reqs.filter((r) => r.status === 'Open').length;
          const inProgress = reqs.filter((r) => r.status === 'In Progress').length;
          const resolved = reqs.filter((r) => r.status === 'Resolved').length;
          const highPriority = reqs.filter((r) => r.priority === 'High' && r.status !== 'Resolved').length;

          setSummary({ total, open, inProgress, resolved, highPriority });

          const sortedRequests = [...reqs].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

          setLatestRequest(sortedRequests[0] || null);
          setRequests(sortedRequests);
        });
    }
  }, [user]);

  React.useEffect(() => {
    loadRequests();
  }, [loadRequests]);

  return (
    <div className="container-fluid">
      <div className="container-fluid mt-3">
        <h1 className="fw-bold">Student Dashboard</h1>
        <p className="text-muted">Raise complaints, track status and filter requests.</p>
      </div>

      <div className="d-flex gap-3 flex-row justify-content-between my-1 mx-2">
        <SummaryCard title="Total Requests" value={summary.total} color="blue" />
        <SummaryCard title="Open" value={summary.open} color="red" />
        <SummaryCard title="In Progress" value={summary.inProgress} color="yellow" />
        <SummaryCard title="Resolved" value={summary.resolved} color="green" />
        <SummaryCard title="High Priority" value={summary.highPriority} color="orange" />
      </div>

      <div className="d-flex justify-content-start mx-2 mb-3">
        <button className="btn btn-primary" onClick={() => navigate('/create-request')}>
          <i class="bi bi-plus me-1"></i>Create New Request
        </button>
      </div>

      {latestRequest && (
        <div className="card border-primary-subtle bg-light shadow-sm mb-4">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
              <div>
                <span className="badge bg-primary mb-2">Most Recent Request</span>
                <h4 className="fw-bold mb-1 text-dark">{latestRequest.title}</h4>
                <p className="mb-0 text-muted small">
                  Category: <span className="fw-semibold text-dark text-capitalize">{latestRequest.category}</span> 
                  {' • '} Filed on: {getFormattedDate(latestRequest.createdAt)}
                </p>
              </div>
              <div className="d-flex align-items-center gap-3">
                <span className={`badge ${getStatusBadgeColor(latestRequest.status)} px-3 py-2 fs-6 rounded-pill`}>
                  {latestRequest.status}
                </span>
                <Link to={`/request/${latestRequest.id}`} className="btn btn-outline-primary btn-sm">
                  View Details →
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <Dashboard requests={requests} onRefresh={loadRequests} />
    </div>
  )
}
