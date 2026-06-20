import React from 'react';
import { deleteProduct } from './api';

export default function ProductCard({ id, title, category, price, rating, thumbnail, addToCart, setEditProduct }) {

  function handleDelete() {
    deleteProduct(id)
      .then(() => {
        alert('Product deleted successfully!');
        window.location.reload();
      })
      .catch(error => console.error(error));
  }

  function handleEdit() {
    setEditProduct({
      id: id,
      title: title,
      category: category,
      price: price,
      rating: rating,
      thumbnail: thumbnail,
    });
  }

  function handleAddToCart() {
    addToCart({
      id: id,
      title: title,
      category: category,
      price: price,
      rating: rating,
      thumbnail: thumbnail
    })
  }

  return (
    <div className='card shadow p-3 rounded' style={{ width: '24rem' }}>
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
            <button className='btn btn-warning' onClick={handleEdit}>Edit</button>
            <button className='btn btn-danger' onClick={handleDelete}>Delete</button>
            <button className='btn btn-info' onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}
