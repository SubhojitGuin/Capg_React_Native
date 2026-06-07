import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

export default function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
    .then(response => setProducts(response.data.products))
    .catch(error => console.log(error));
  }, []);

  return (
    <div className='p-4'>
      <div className='mb-4 d-flex justify-content-end'>
        <button className='btn btn-info p-2'>+ Add Product</button>
      </div>
      <div className='d-flex flex-wrap gap-4'>
        {
          products.map(({id, title, category, price, rating, thumbnail}) => 
            <ProductCard 
              key={id}
              title={title} 
              category={category} 
              price={price} 
              rating={rating} 
              thumbnail={thumbnail} 
            />
          )
        }
      </div>
    </div>
  )
}
