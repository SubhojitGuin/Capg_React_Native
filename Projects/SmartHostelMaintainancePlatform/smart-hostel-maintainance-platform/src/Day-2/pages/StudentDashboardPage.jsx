import React from 'react'
import SummaryCard from '../components/SummaryCard';
import SearchAndFiltersComponent from '../components/SearchAndFiltersComponent';
import { fetchCategories } from '../services/CategoryService';
import RequestList from '../components/RequestList';
import { fetchRequestsByStudent } from '../services/RequestService';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

export default function StudentDashboardPage() {

  const [categories, setCategories] = React.useState([]);
  const [searchConditions, setSearchConditions] = React.useState({
    searchText: '',
    category: '',
    status: ''
  });
  const [requests, setRequests] = React.useState([]);
  const [summary, setSummary] = React.useState({
    total: 0,
    open: 0,
    inProgress: 0,
    resolved: 0
  });
  const { user } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const loadRequests = React.useCallback(() => {
    if (user && user.id) {
      fetchRequestsByStudent(user.id)
        .then((reqs) => {
          setRequests(reqs);

          const total = reqs.length;
          const open = reqs.filter((r) => r.status === 'Open').length;
          const inProgress = reqs.filter((r) => r.status === 'In Progress').length;
          const resolved = reqs.filter((r) => r.status === 'Resolved').length;

          setSummary({ total, open, inProgress, resolved });
        });
    }
  }, [user]);

  React.useEffect(() => {
    loadRequests();

    fetchCategories()
      .then((data) => setCategories(data));
  }, [loadRequests]);

  const filteredRequests = React.useMemo(() => {
    return requests.filter((req) => {
      const matchesSearchText = req.title.toLowerCase().includes(searchConditions.searchText.toLowerCase());
      const matchesCategory = searchConditions.category ? req.category === searchConditions.category : true;
      const matchesStatus = searchConditions.status ? req.status === searchConditions.status : true;
      return matchesSearchText && matchesCategory && matchesStatus;
    });
  }, [requests, searchConditions]);

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
      </div>

      <div className="d-flex justify-content-start my-2 mx-2">
        <button className="btn btn-primary" onClick={() => navigate('/create-request')}>
          Create New Request
        </button>
      </div>


      <SearchAndFiltersComponent
        categories={categories} 
        searchConditions={searchConditions} 
        setSearchConditions={setSearchConditions}
      />

      <RequestList requests={filteredRequests} onRefresh={loadRequests} />
    </div>
  )
}
