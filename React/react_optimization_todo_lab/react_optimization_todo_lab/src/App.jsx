import React, { Suspense, useState } from "react";
import { requests as initialRequests } from "./data/requests";
import SearchBar from "./components/SearchBar";
import FilterPanel from "./components/FilterPanel";
import SummaryCards from "./components/SummaryCards";
import RequestList from "./components/RequestList";
// import AnalyticsPanel from "./components/AnalyticsPanel";
// import ReportPanel from "./components/ReportPanel";
import RequestForm from "./components/RequestForm";
import useDebounce from "./hooks/useDebounce";

const AnalyticsPanel = React.lazy(() => import("./components/AnalyticsPanel"));
const ReportPanel = React.lazy(() => import("./components/ReportPanel"));

function App() {
  console.log("App re-rendered");

  const [requests, setRequests] = useState(initialRequests);
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [selectedRequest, setSelectedRequest] = useState(null);
  const debouncedSearchText = useDebounce(searchText, 400);

  const [formData, setFormData] = useState({
    residentName: "",
    mobile: "",
    area: "",
    category: "",
    description: "",
    priority: "",
    visitDate: "",
  });

  // TODO 1:
  // Students must optimize filtered and sorted requests using useMemo.
  const filteredRequests = React.useMemo(() => {
    let result = requests.filter((req) => {
      return (
        req.area.toLowerCase().includes(debouncedSearchText.toLowerCase()) ||
        req.category.toLowerCase().includes(debouncedSearchText.toLowerCase())
      );
    });

    if (statusFilter) {
      result = result.filter((req) => req.status === statusFilter);
    }

    if (sortBy === "priority") {
      result = [...result].sort((a, b) => a.priority.localeCompare(b.priority));
    }

    if (sortBy === "date") {
      result = [...result].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    return result;
  }, [requests, debouncedSearchText, statusFilter, sortBy]);

  // TODO 2:
  // Students must convert these handlers to useCallback wherever useful.
  const handleViewDetails = React.useCallback((request) => {
    setSelectedRequest(request);
  }, []);

  const handleResolve = React.useCallback((id) => {
    const updated = requests.map((req) =>
      req.id === id ? { ...req, status: "Resolved" } : req
    );
    setRequests(updated);
  }, [requests]);

  // TODO 3:
  // Students should analyze and improve the controlled form rendering.
  const handleInputChange = React.useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleSearchChange = React.useCallback((value) => {
    setSearchText(value);
  }, []);

  const handleStatusChange = React.useCallback((value) => {
    setStatusFilter(value);
  }, []);

  const handleSortChange = React.useCallback((value) => {
    setSortBy(value);
  }, []);

  const handleFormSubmit = React.useCallback((e) => {
    e.preventDefault();

    const newRequest = {
      id: requests.length + 1,
      residentName: formData.residentName,
      area: formData.area,
      category: formData.category,
      description: formData.description,
      priority: formData.priority,
      status: "Open",
      assignedWorker: "N/A",
      createdAt: new Date().toISOString().split("T")[0],
    };

    setRequests((prev) => [...prev, newRequest]);

    setFormData({
      residentName: "",
      mobile: "",
      area: "",
      category: "",
      description: "",
      priority: "",
      visitDate: "",
    });
  }, [formData, requests]);

  return (
    <div className="app-container">
      <h1>Neighborhood Service Request Dashboard - Optimization Lab</h1>

      <div className="card">
        <span className="tag">useMemo</span>
        <span className="tag">useCallback</span>
        <span className="tag">React.memo</span>
        <span className="tag">lazy loading</span>
        <span className="tag">controlled components</span>
        <span className="tag">debounce</span>
        <p>
          Students must analyze the application and implement the required optimization technique in the right place.
        </p>
      </div>

      <SummaryCards requests={requests} />

      <SearchBar searchText={searchText} onSearch={handleSearchChange} />

      <FilterPanel
        statusFilter={statusFilter}
        sortBy={sortBy}
        onStatusChange={handleStatusChange}
        onSortChange={handleSortChange}
      />

      <RequestForm formData={formData} onChange={handleInputChange} onSubmit={handleFormSubmit} />

      <RequestList
        requests={filteredRequests}
        onViewDetails={handleViewDetails}
        onResolve={handleResolve}
      />

      {/* TODO 4:
          Students must lazy load AnalyticsPanel and ReportPanel using React.lazy and Suspense.
      */}
      <Suspense fallback={<div>Loading Analytics...</div>}>
        <AnalyticsPanel requests={requests} />
      </Suspense>

      <Suspense fallback={<div>Loading Report...</div>}>
        <ReportPanel selectedRequest={selectedRequest} />
      </Suspense>

      <div className="card">
        <h3 className="section-title">Student Deliverables</h3>
        <ol>
          <li>Identify unnecessary re-renders using console logs.</li>
          <li>Apply useMemo for expensive derived data.</li>
          <li>Apply useCallback for stable function references.</li>
          <li>Use React.memo where needed.</li>
          <li>Implement lazy loading and Suspense for heavy components.</li>
          <li>Optimize the form by splitting and memoizing fields.</li>
          <li>Optionally add debounced search.</li>
        </ol>
      </div>
    </div>
  );
}

export default App;
