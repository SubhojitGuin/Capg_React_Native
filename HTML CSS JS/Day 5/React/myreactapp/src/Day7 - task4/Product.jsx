import React, { useEffect } from 'react'

export default function Product({ id }) {

  const [product, setProduct] = React.useState({});

  async function fetchProduct() {
    const response = await fetch(`https://dummyjson.com/product/${id}`);
    const data = await response.json();
    setProduct(data);
  }

  useEffect(() => fetchProduct(), []);

  return (
    <div className="card">
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <div>
        <span>₹ {product.price}</span>
        <span>⭐{product.rating}</span>
      </div>
    </div>
  )
}
