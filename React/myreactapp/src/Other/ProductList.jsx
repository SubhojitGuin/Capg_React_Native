import React from 'react'
import './ProductList.css'
import ProductCard from './ProductCard'

export default function ProductList() {
  const products = [
    { id: 1, name: "Laptop", price: 50000, inStock: true },
    { id: 2, name: "Mobile", price: 20000, inStock: false },
    { id: 3, name: "Headphones", price: 3000, inStock: true }
  ]
  return (
    <div className="product-list">
      {products.length === 0 ? (<p>No products available.</p>) : (
        products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  )
}
