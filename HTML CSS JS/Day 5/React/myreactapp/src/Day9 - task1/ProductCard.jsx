import React from 'react'

export default function ProductCard({ title, category, price, rating, thumbnail }) {
  return (
    <div className='card shadow p-3 rounded' style={{ width: '18rem' }}>
      <img src={thumbnail} className='card-img-top' alt={title} style={{ height: '280px', objectFit: 'cover' }} />
      <div className='card-body d-flex flex-column justify-content-between gap-2 bg-light'>
        <div>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text text-muted'>{category}</p>
        </div>
        <div>
          <div className='d-flex flex-row justify-content-between align-items-end'>
            <p className='fw-bold'>$ {price}</p>
            <p className='text-bg-success m-2 rounded-2 p-2'>{rating} ★</p>
          </div>
          <div className='d-flex flex-row justify-content-between'>
            <button className='btn btn-warning'>Edit</button>
            <button className='btn btn-danger'>Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}
