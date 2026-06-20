import React from 'react'

function Child({ issue, toggleIssueResolution }) {
  return (
    <div className="card m-2 border" style={{ width: '40rem' }}>
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h5 className="card-title">{issue.title}</h5>
          <p className="card-text">{issue.description}</p>
          {issue.timestamp && <p className="card-text">Time: {issue.timestamp.toLocaleString()}</p>}
        </div>
        <div>
          {
            issue.isResolved ? (
              <p className="btn btn-success">✅ Resolved</p>
            ) : (
              <button className="btn btn-primary" onClick={() => toggleIssueResolution(issue.id)}>Mark as Resolved</button>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default React.memo(Child);