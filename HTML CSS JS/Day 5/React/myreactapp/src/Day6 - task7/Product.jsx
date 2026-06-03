import React from 'react'

export default function Product({ product, key }) {
  return (
    <div key={key} className="card">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <div>
        <span>₹ {product.price}</span>
        <span>⭐{product.rating}</span>
      </div>
    </div>
  )
}
