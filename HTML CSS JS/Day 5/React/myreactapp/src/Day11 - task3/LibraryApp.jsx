import React, { useCallback } from 'react'
import BookList from './BookList';

export default function LibraryApp() {

  const [books, setBooks] = React.useState([
    "React Basics",
    "JavaScript Essentials",
    "Node.js Intro"
  ]);

  const [favourites, setFavourites] = React.useState([]);

  const [titleColor, setTitleColor] = React.useState("blue");

  // ----Option 2----
  const markAsFavourite = useCallback((book) => {
    setFavourites(prevFavourites => prevFavourites.includes(book) ? prevFavourites : [...prevFavourites, book])
  }, []);

  // const markAsFavourite = useCallback((book) => {
  //   ----Option 1----
  //   setFavourites(prevFavourites => {
  //     if (!prevFavourites.includes(book)) {
  //       return [...prevFavourites, book];
  //     }
  //     return prevFavourites;
  //   });

  //  ----Bad Option----
  //   if (!favourites.includes(book)) {
  //     setFavourites([...favourites, book])
  //   }
  // }, []);

  return (
    <div>
      <BookList books={books} markAsFavorite={markAsFavourite} />
      <h2 style={{ color: titleColor }}>My Favourite Books</h2>
      <ul>
        {
          favourites.map((book, index) => <li key={index}>{book}</li>)
        }
      </ul>
      <button onClick={() => setTitleColor(titleColor => titleColor === "blue" ? "red" : "blue")}>Toggle Title Color</button>
    </div>
  )
}
