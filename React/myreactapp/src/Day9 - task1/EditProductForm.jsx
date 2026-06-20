import React from 'react'
import { updateProduct } from './api';

export default function EditProductForm({ editProduct, setEditProduct }) {

  function handleChange(e) {
    const { name, value } = e.target;
    setEditProduct({ ...editProduct, [name]: value })
  }

  function handleSubmit(event) {
    event.preventDefault();

    const updatedProduct = {
      id: editProduct.id,
      title: editProduct.title,
      category: editProduct.category,
      price: parseFloat(editProduct.price),
      rating: parseFloat(editProduct.rating),
      thumbnail: editProduct.thumbnail
    }

    updateProduct(editProduct.id, updatedProduct)
    .then(() => {
      alert('Product updated successfully');
      window.location.reload();
    });
  }

  return (
    <div className={editProduct.id === 0 ? 'd-none' : 'col-md-6'}>
      <div className='d-flex flex-row justify-content-between align-items-center mb-3'>
        <h2>Edit Product</h2>
        <button className='btn btn-sm btn-danger' onClick={() => setEditProduct({...editProduct, id: 0})}>X</button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='title' className='form-label'>Title</label>
          <input type='text' id='title' className='form-control' value={editProduct.title} onChange={handleChange} required />
        </div>
        <div className='mb-3'>
          <label htmlFor='category' className='form-label'>Category</label>
          <input type='text' id='category' className='form-control' value={editProduct.category} onChange={handleChange} required />
        </div>
        <div className='mb-3'>
          <label htmlFor='price' className='form-label'>Price</label>
          <input type='number' id='price' className='form-control' value={editProduct.price} onChange={handleChange} required />
        </div>
        <div className='mb-3'>
          <label htmlFor='rating' className='form-label'>Rating</label>
          <input type='number' id='rating' className='form-control' value={editProduct.rating} onChange={handleChange} required />
        </div>
        <button type='submit' className='btn btn-primary'>Update Product</button>
      </form>
    </div>
  )
}
