import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./ProductSlice";

const ProductStore = configureStore({
  reducer: {
    products: ProductReducer,
  },
});

export default ProductStore;