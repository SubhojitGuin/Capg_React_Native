import React from 'react'

function SummaryCard({ title, value, color }) {

  function getColor(color) {
    switch (color) {
      case "red":
        return "#dc3545";
      case "yellow":
        return "#ffc107";
      case "green":
        return "#28a745";
      case "orange":
        return "#fd7e14";
      default:
        return "#007bff";
    }
  }

  return (
    <div className="card mb-2" style={{ borderLeft: `5px solid ${getColor(color)}`, flex: '1' }}>
      <div className="card-body">
        <p className="card-text text-muted">{title}</p>
        <h5 className="card-title">{value}</h5>
      </div>
    </div>
  )
}

export default React.memo(SummaryCard);
