import React, { useEffect, useState, useRef } from 'react'

export default function App() {
  const myinput = useRef();
  function handleSubmit(e) {
    e.preventDefault()
    console.log(myinput.current.value)
  }
  return (
    <div>
      <form action="" method="post" onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter your name' id="name" ref={myinput} />
        <br />
        <input type="text" placeholder='Enter your email' id="email" value="hello@example.com" />
        <br />
        <input type="text" placeholder='Enter your password' id="password" />
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}