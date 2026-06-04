import './App.css';
import React, { useState } from 'react'
import Child from './Child';

export default function App() {
  const [isTracking, setIsTracking]=useState(false);
  const [orderId, setOrderId]=useState('FD1024');
  const [customer, setCustomer]=useState('Ananya');
  const [status, setStatus]=useState('Preparing');
  const [eta, setEta]=useState(30);
  const [priority, setPriority]=useState('Normal');
  
  return (
    <div className='App'>
      <div className='button-group'>
        <button onClick={() => setIsTracking(!isTracking)}>{isTracking ? 'Stop' : 'Start'} Tracking</button>
        <button onClick={() => setEta(eta - 1)}>Decrement ETA by 1 (Minor ETA Update)</button>
        <button onClick={() => setEta(eta - 5)}>Decrement ETA by 5 (Major ETA Update)</button>
        <select name="status" id="status" onChange={(e) => setStatus(e.target.value)} value={status}>
          <option value="Preparing">Preparing</option>
          <option value="Out for Delivery">Out for Delivery</option>
          <option value="Delivered">Delivered</option>
        </select>
        <button onClick={() => setPriority('High')}>Set Priority to High</button>
      </div>
      <div className='child-card-group'>
        {
          isTracking ? <Child orderId={orderId} customer={customer} status={status} eta={eta} priority={priority} /> : null
        }
      </div>
    </div>
  )
}
