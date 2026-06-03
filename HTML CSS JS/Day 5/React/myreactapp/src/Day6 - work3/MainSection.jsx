import React from 'react'

export default function MainSection({ theme, toggleTheme }) {
  return (
    <div style={{ padding: '20px', backgroundColor: theme === 'light' ? '#f0f0f0' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <h2>Current Theme is: {theme}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}
