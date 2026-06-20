import React, { useEffect, useState } from 'react';
import { getProducts } from './api';
import ProductCard from './ProductCard';
import AddProductForm from './AddProductForm';
import EditProductForm from './EditProductForm';

export default function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [editProduct, setEditProduct] = useState({
    id: 0,
    title: '',
    category: '',
    price: 0.0,
    rating: 0.0,
    thumbnail: '',
  });
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    getProducts()
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  }, []);

  function addToCart(product) {
    setCart((prevCart) => 
        (prevCart.includes(product))
        ? prevCart
        : [ ...prevCart, product]
    );

    if (cart.filter((prod) => prod.id === product.id).length === 0) {
      setCart([...cart, product])
    }
  }

  const filteredProducts = products.filter((product) => 
    product.title.toLowerCase().includes(searchText.toLowerCase()));

  return (
    <div className='p-4'>
      <div>
        <h1 className='text-center mb-4'>Product Management</h1>
      </div>
      <div>
        <h3>Cart Count: {cart.length}</h3>
      </div>
      <div>
        <input type="search" name="searchProduct" id="searchProduct" className='form-control m-5' value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder='Search Products...'/>
      </div>
      <h2>Product List</h2>
      <div className='d-flex flex-wrap gap-4'>
        {
          (filteredProducts.length === 0) ? 
          <h4>No products found.</h4> :
          filteredProducts.map(({id, title, category, price, rating, thumbnail}) => 
            <ProductCard 
              key={id}
              id={id}
              title={title} 
              category={category} 
              price={price} 
              rating={rating} 
              thumbnail={thumbnail}
              addToCart={addToCart}
              setEditProduct={setEditProduct}
            />
          )
        }
      </div>
      <div className='mt-5 d-flex flex-row gap-3'>
        <AddProductForm />
        <EditProductForm 
          editProduct={editProduct}
          setEditProduct={setEditProduct}
        />
      </div>
    </div>
  )
}
