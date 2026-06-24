import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [
      { 
        id: "p101", 
        name: "Basmati Rice 5kg", 
        category: "GROCERY", 
        price: 549, 
        stock: 30, 
        sku: "SKU-RICE-5KG", 
        taxRate: 5
      },
      { 
        id: "p205", 
        name: "Bluetooth Headphones", 
        category: "ELECTRONICS", 
        price: 1999, 
        stock: 12, 
        sku: "SKU-BT-HP-01", 
        taxRate: 18 
      },
      { 
        id: "p310", 
        name: "Cotton T-Shirt", 
        category: "CLOTHING", 
        price: 399, 
        stock: 50, 
        sku: "SKU-TEE-COT-XL", 
        taxRate: 5 
      },
      { 
        id: "p420", 
        name: "Ceramic Mug", 
        category: "HOME", 
        price: 199, 
        stock: 80, 
        sku: "SKU-MUG-CRM", 
        taxRate: 12
      }
    ],
    cart: [],
    orders: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cart.find(item => item.id === product.id);
      if (existingProduct) {
        if (existingProduct.quantity < product.stock) {
          existingProduct.quantity += 1;
        }
      } else {
        if (product.stock > 0) {
          state.cart.push({ ...product, quantity: 1 });
        }
      }
    },
    removeFromCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cart.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity -= 1;
        if (existingProduct.quantity === 0) {
          state.cart = state.cart.filter(item => item.id !== product.id);
        }
      }
    },
    deleteFromCart: (state, action) => {
      const product = action.payload;
      state.cart = state.cart.filter(item => item.id !== product.id);
    },
    placeOrder: (state) => {
      const order = {
        id: new Date().toISOString(),
        items: state.cart,
        total: state.cart.reduce((total, item) => 
          total + item.price * item.quantity * (1 + item.taxRate / 100), 0),
        timestamp: new Date().toISOString(),
      };

      state.cart.forEach(item => {
        const product = state.products.find(p => p.id === item.id);
        if (product) {
          product.stock -= item.quantity;
        }
      })

      state.orders.push(order);
      state.cart = [];
    }
  }
})

export const { addToCart, removeFromCart, deleteFromCart, placeOrder } = productSlice.actions;
export default productSlice.reducer;