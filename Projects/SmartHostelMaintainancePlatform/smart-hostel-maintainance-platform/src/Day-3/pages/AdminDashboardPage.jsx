import React from 'react'
import SummaryCard from '../components/SummaryCard'
import { fetchRequests } from '../services/RequestService';
import Dashboard from '../components/Dashboard';
import CategoryAnalytics from '../components/CategoryAnalytics';

export default function AdminDashboardPage() {

  const [requests, setRequests] = React.useState([]);
  const [summary, setSummary] = React.useState({
    total: 0,
    open: 0,
    inProgress: 0,
    resolved: 0,
    highPriorityOpen: 0,
  });

  const loadRequests = React.useCallback(() => {
    fetchRequests()
      .then((reqs) => {
        setRequests(reqs);

        const total = reqs.length;
        const open = reqs.filter((r) => r.status === 'Open').length;
        const inProgress = reqs.filter((r) => r.status === 'In Progress').length;
        const resolved = reqs.filter((r) => r.status === 'Resolved').length;
        const highPriorityOpen = reqs.filter((r) => r.priority === 'High' && r.status === 'Open').length;

        setSummary({ total, open, inProgress, resolved, highPriorityOpen });
      });
  }, []);

  React.useEffect(() => {
    loadRequests();
  }, [loadRequests]);

  return (
    <div className="container-fluid">
      <div className="container-fluid mt-3">
        <h1 className="fw-bold">Admin Dashboard</h1>
        <p className="text-muted">Raise complaints, track status and filter requests.</p>
      </div>

      <div className="d-flex gap-3 flex-row justify-content-between my-1 mx-2">
        <SummaryCard title="Total Requests" value={summary.total} color="blue" />
        <SummaryCard title="Open" value={summary.open} color="red" />
        <SummaryCard title="In Progress" value={summary.inProgress} color="yellow" />
        <SummaryCard title="Resolved" value={summary.resolved} color="green" />
        <SummaryCard title="High Priority (Open)" value={summary.highPriorityOpen} color="orange" />
      </div>

      <div className="mt-4 d-flex gap-4 flex-row">
        <CategoryAnalytics requests={requests} />
        <Dashboard requests={requests} onRefresh={loadRequests} />
      </div>
    </div>
  )
}
