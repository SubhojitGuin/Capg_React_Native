import React, { useRef } from 'react';

export default function App() {
  const myColor = useRef(null);
  const inputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    inputRef.current.style.backgroundColor =
      myColor.current.value || 'lightgray';
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter color"
          ref={myColor}
        />
        <br />

        <input
          type="text"
          placeholder="Input box"
          ref={inputRef}
        />
        <br />

        <button type="submit">Change BGC</button>
      </form>
    </div>
  );
}