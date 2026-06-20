import React from 'react'
import Child from './Child';

export default function Parent() {

  const [issues, setIssues] = React.useState([
    {
      id: 1,
      title: 'Login Issue',
      description: 'Unable to login with valid credentials',
      isResolved: false,
      timestamp: null
    },
    {
      id: 2,
      title: 'Page Load Error',
      description: 'Page takes too long to load',
      isResolved: false,
      timestamp: null
    },
    {
      id: 3,
      title: 'UI Bug',
      description: 'Button overlaps with text on mobile view',
      isResolved: false,
      timestamp: null
    },
    {
      id: 4,
      title: 'Data Sync Issue',
      description: 'Data not syncing across devices',
      isResolved: false,
      timestamp: null
    },
    {
      id: 5,
      title: 'Notification Delay',
      description: 'Notifications are delayed by several minutes',
      isResolved: false,
      timestamp: null
    }
  ]);

  const resolvedIssueCount = issues.filter(issue => issue.isResolved).length;
  const totalIssueCount = issues.length;
  
  const toggleIssueResolution = React.useCallback((issueId) => {
    setIssues(prevIssues => prevIssues.map(issue => {
      if (issue.id === issueId) {
        return { ...issue, isResolved: !issue.isResolved, timestamp: new Date() };
      }
      return issue;
    }));
  }, []);

  return (
    <div className="container p-2 d-flex flex-column align-items-center border rounded">
      <h1 className="text-bg-primary px-3 py-2 rounded w-100 text-center">Support Dashboard</h1>
      <div className="d-flex justify-content-around w-100 mb-3">
        <h2 className="text-bg-info px-2 py-1 rounded">Total Tickets: {totalIssueCount}</h2>
        <h2 className="text-bg-success px-2 py-1 rounded">Resolved Tickets: {resolvedIssueCount}</h2>
      </div>
      {
        (resolvedIssueCount === totalIssueCount) && (
          <div className="alert alert-success w-100 text-center" role="alert">
            All issues are resolved!
          </div>
        )
      }
      <div className="card-group d-flex flex-column justify-content-center align-items-center w-100">
        {
          issues.map(issue => (
            <Child key={issue.id} issue={issue} toggleIssueResolution={toggleIssueResolution} />
          ))
        }
      </div>
    </div>
  )
}
