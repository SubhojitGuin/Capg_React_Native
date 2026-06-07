import React from 'react'

export default function ProductCard({ product }) {

  const addToCartButton = <button className='add-to-cart-btn'>Add to Cart</button>
  const outOfStockMessage = <p className='out-of-stock'>Out of Stock</p>

  return (
    <div className='product-card'>
      <h3>{product.name}</h3>
      <p>Price: <strong>₹{product.price}</strong></p>
      {product.inStock ? addToCartButton : outOfStockMessage}
    </div>
  )
}
