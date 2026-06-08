import React, { useState } from 'react'
import { addProduct } from './api';

export default function AddProductForm() {

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0.0);
  const [rating, setRating] = useState(0.0);
  const [thumbnail, setThumbnail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const newProduct = {
      title: title,
      category: category,
      price: parseFloat(price),
      rating: parseFloat(rating),
      thumbnail: thumbnail
    }

    addProduct(newProduct)
    .then(() => {
      alert('Product added successfully');
      window.location.reload();
    });
  }

  return (
    <div className='col-md-6'>
      <div className='mb-3'>
        <h2>Add Product</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='title' className='form-label'>Title</label>
          <input type='text' id='title' className='form-control' value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className='mb-3'>
          <label htmlFor='category' className='form-label'>Category</label>
          <input type='text' id='category' className='form-control' value={category} onChange={(e) => setCategory(e.target.value)} required />
        </div>
        <div className='mb-3'>
          <label htmlFor='price' className='form-label'>Price</label>
          <input type='number' id='price' className='form-control' value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <div className='mb-3'>
          <label htmlFor='rating' className='form-label'>Rating</label>
          <input type='number' id='rating' className='form-control' value={rating} onChange={(e) => setRating(e.target.value)} required />
        </div>
        <div className='mb-3'>
          <label htmlFor='thumbnail' className='form-label'>Thumbnail</label>
          <input type='url' id='thumbnail' className='form-control' value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} required />
        </div>
        <button type='submit' className='btn btn-primary'>Add Product</button>
      </form>
    </div>
  )
}
