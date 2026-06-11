import React from 'react'

function BookList({ books, markAsFavorite }) {
  return (
    <div>
      {
        console.log("BookList rendered")
      }
      <h1>Book List</h1>
      {
        books.map((book, index) => {
          return (
          <div key={index}>
            <h3>{book}</h3>
              <button onClick={() => markAsFavorite(book)}>Mark as Favorite</button>
          </div>
          )
        })
      }
    </div>
  )
}

export default React.memo(BookList);