import { useEffect } from "react";

export default function Child({ orderId, customer, status, eta, priority }) {

  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  useEffect(() => {
    console.log("Component Updated");
  });

  return (
    <div className="child-card">
      <h2>Order ID: {orderId}</h2>
      <h3>Customer: {customer}</h3>
      <h4>Status: {status}</h4>
      <h4>ETA: {eta} mins</h4>
      <h4>Priority: <span className={priority}>{priority}</span></h4>
    </div>
  )
}

