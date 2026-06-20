import { configureStore } from "@reduxjs/toolkit";
import BookReducer from "./BookSlice";

const BookStore = configureStore({
  reducer: {
    book: BookReducer
  }
});

export default BookStore;