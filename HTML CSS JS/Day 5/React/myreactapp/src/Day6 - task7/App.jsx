import './App.css';
import React from 'react';
import Product from './Product';

export default function App() {

  const [products, setProducts] = React.useState([
    { name: "Laptop", description: "It's a laptop", price: 1000, rating: 4.5 },
    { name: "Phone", description: "It's a phone", price: 500, rating: 4.2 },
    { name: "Tablet", description: "It's a tablet", price: 300, rating: 4.0 }
  ]);

  return (
    <div className='App'>
      {
        products.map((product, index) => <Product product={product} key={index}/>)
      }
    </div>
  )
}
