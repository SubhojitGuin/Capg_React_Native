import { createSlice } from "@reduxjs/toolkit";

const BookSlice = createSlice({
  name: "book",
  initialState: {
    bookName: "React Redux",
    numberOfBooks: 100
  },
  reducers: {
    purchase_book: (state) => {
      state.numberOfBooks -= 10;
    },
    sell_book: (state, action) => {
      state.numberOfBooks += Number(action.payload);
    }
  }
});

export const { purchase_book, sell_book } = BookSlice.actions;
export default BookSlice.reducer;