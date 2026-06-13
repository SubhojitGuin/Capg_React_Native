import React from 'react'

function SearchAndFiltersComponent({ categories, searchConditions, setSearchConditions }) {
  return (
    <div className="search-filter rounded-3 px-4 pt-3 mb-2">
      <div>
        <h4 className="fw-bold">Search & Filters</h4>
      </div>
      
      <div className="d-flex justify-content-between gap-3 mb-3">
        <div style={{ flex: 1 }}>
          <label htmlFor="search" className="form-label">Search by Title</label>
          <input 
            type="text" 
            className="form-control mb-3" 
            id="search" 
            placeholder="Enter title" 
            value={searchConditions.searchText}
            onChange={(e) => setSearchConditions({...searchConditions, searchText: e.target.value})}
          />
        </div>

        <div style={{ flex: 1 }}>
          <label htmlFor="categoryFilter" className="form-label">Category</label>
          <select 
            id="categoryFilter" 
            className="form-select"
            value={searchConditions.category}
            onChange={(e) => setSearchConditions({...searchConditions, category: e.target.value})}
          >
            <option value="">All</option>
            {categories.map(({name}) => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select>
        </div>

        <div style={{ flex: 1 }}>
          <label htmlFor="statusFilter" className="form-label">Status</label>
          <select 
            id="statusFilter" 
            className="form-select"
            value={searchConditions.status}
            onChange={(e) => setSearchConditions({...searchConditions, status: e.target.value})}
          >
            <option value="">All</option>
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
          </select>
        </div>

        <div style={{ flex: 1 }}>
          <label htmlFor="priorityFilter" className="form-label">Priority</label>
          <select
            id="priorityFilter"
            className="form-select"
            value={searchConditions.priority}
            onChange={(e) => setSearchConditions({...searchConditions, priority: e.target.value})}
          >
            <option value="">All</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div style={{ flex: 1 }}>
          <label htmlFor="sortByFilter" className="form-label">Sort By</label>
          <div className="d-flex align-items-center gap-2">
            <select
              id="sortByFilter"
              className="form-select"
              value={searchConditions.sortBy}
              onChange={(e) => setSearchConditions({...searchConditions, sortBy: e.target.value})}
            >
              <option value="createdAt">Created At</option>
              <option value="title">Title</option>
            </select>

            <button 
              className="btn btn-sm btn-outline-secondary shadow-sm p-2"
              onClick={() => setSearchConditions({
                ...searchConditions, 
                sortOrder: searchConditions.sortOrder === 'asc' ? 'desc' : 'asc'
              })}
            >
              {searchConditions.sortOrder === 'asc' ? <i className="bi bi-arrow-down"></i> : <i className="bi bi-arrow-up"></i>}
            </button>
          </div>
        </div>

        <div className="d-flex align-items-center mt-3">
          <button 
            className="btn btn-outline-secondary shadow-sm"
            onClick={() => setSearchConditions({ searchText: '', category: '', status: '', priority: '', sortBy: 'createdAt', sortOrder: 'desc' })}
          >
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  )
}

export default React.memo(SearchAndFiltersComponent);
