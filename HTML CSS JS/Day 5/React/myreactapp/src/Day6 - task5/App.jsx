import React from 'react'
import Dashboard from './Dashboard';
import ThemeContextProvider from './ThemeContext';

export default function App() {

  return (
    <ThemeContextProvider>
      <div style={{backgroundColor:'lightgray', padding: '20px', minHeight: '100vh', border: '1px solid black'}}>
        <Dashboard />
      </div>
    </ThemeContextProvider>
  )
}
