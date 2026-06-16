import React, { useState, Suspense } from 'react'
import Loading from './Loading';

const AdminDashboard = React.lazy(() => 
  new Promise(resolve => {
    setTimeout(() => {
      resolve(import('./AdminDashboard'));
    }, 5000);
  })
);

export default function App() {
  // 1. Create a state to track if the dashboard should load
  const [showAdmin, setShowAdmin] = useState(false);

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary btn-lg"
        // 2. Set the state to true on click
        onClick={() => setShowAdmin(true)} 
      >
        Load Admin
      </button>
      
      {/* 3. Conditionally render inside Suspense */}
      {showAdmin && (
        <Suspense fallback={<Loading/>}>
          <AdminDashboard />
        </Suspense>
      )}
    </div>
  )
}


// Code splitting is a technique in React that allows you to split your code into smaller chunks, which can be loaded on demand. This can improve the performance of your application by reducing the initial load time and allowing users to only download the code they need for the current view.

// Suspense - Fallback UI