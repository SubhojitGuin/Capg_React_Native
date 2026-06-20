import './App.css';
import React from 'react';
import Product from './Product';

export default function App() {

  const numbers = [1, 2, 3, 4, 5];

  return (
    <div className='App'>
      {
        numbers.map(num => <Product key={num} id={num} />)
      }
    </div>
  )
}
