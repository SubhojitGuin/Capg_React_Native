import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { purchase_book, sell_book } from './BookSlice';

export default function BookContainer() {

  const bookName = useSelector(state => state.book.bookName)
  const numberOfBooks = useSelector(state => state.book.numberOfBooks)
  const dispatch = useDispatch();

  const [numberOfBooksSold, setNumberOfBooksSold] = React.useState(0);

  return (
    <div>
      <h1>Book Container : {bookName}</h1>
      <p>Available Books: {numberOfBooks}</p>
      <button onClick={() => dispatch(purchase_book())}>Buy Book</button>
      <input 
        type="number" 
        placeholder='Number of Books sold' 
        value={numberOfBooksSold}
        onChange={(e) => setNumberOfBooksSold(e.target.value)}
      />
      <button onClick={() => dispatch(sell_book(numberOfBooksSold))}>Sell Book</button>
    </div>
  )
}
