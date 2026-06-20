import React from 'react'
import Dashboard from './Dashboard';

export default function App() {
  const [theme, setTheme] = React.useState('light');
  const toggleTheme = () => {
    setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div style={{backgroundColor:'lightgray', padding: '20px', minHeight: '100vh', border: '1px solid black'}}>
      <Dashboard theme={theme} toggleTheme={toggleTheme} />
    </div>
  )
}
