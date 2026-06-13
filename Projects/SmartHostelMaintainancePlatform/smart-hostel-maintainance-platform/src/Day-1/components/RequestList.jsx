import React from 'react'
import RequestListItem from './RequestListItem';

export default function RequestList({ requests }) {

  return (
    <div className="request-list container-fluid pt-3 pb-2">
      <div className="mb-3">
        <h4>Request List</h4>
      </div>

      <div className="overflow-auto request-list-group">
        {
          (requests.length === 0) ? 
          (
            <div className="text-center py-5">
              <h5 className="text-muted">No requests found.</h5>
            </div>
          ) :
          requests.map((request) =>
            <RequestListItem key={request.id} request={request} />
          )
        }
      </div>
    </div>
  )
}
