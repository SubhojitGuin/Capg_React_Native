import React from 'react'

function CategoryAnalytics({ requests = [] }) {
  const categoryCounts = React.useMemo(() => {
    const counts = {};
    requests.forEach((req) => {
      if (req.category) {
        counts[req.category] = (counts[req.category] || 0) + 1;
      }
    });
    return counts;
  }, [requests]);

  const totalRequests = requests.length;

  return (
    <div className="card shadow-sm border-0 col-md-4 bg-white rounded-3">
      <div className="card-header bg-white border-bottom py-3 rounded-top-3">
        <h5 className="card-title fw-bold text-dark mb-0">
          Category Analytics
        </h5>
      </div>
      
      <div className="card-body py-4 bg-white rounded-bottom-3">
        {totalRequests === 0 ? (
          <div className="text-center py-3 text-muted">
            <p className="mb-0 fs-6">No data available yet</p>
          </div>
        ) : (
          Object.entries(categoryCounts).map(([category, count]) => {
            const percentage = totalRequests > 0 ? Math.round((count / totalRequests) * 100) : 0;

            return (
              <div key={category} className="mb-4 last-mb-0">

                <div className="d-flex justify-content-between align-items-center mb-1">
                  <span className="text-capitalize text-dark fw-semibold small">
                    {category}
                  </span>
                  <span className="badge bg-primary-subtle text-primary rounded-pill px-2.5 py-1 fw-bold">
                    {count} ({percentage}%)
                  </span>
                </div>
                
                <div className="progress" style={{ height: '8px' }}>
                  <div 
                    className="progress-bar bg-primary rounded" 
                    role="progressbar" 
                    style={{ width: `${percentage}%` }} 
                    aria-valuenow={percentage} 
                    aria-valuemin="0" 
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default React.memo(CategoryAnalytics);