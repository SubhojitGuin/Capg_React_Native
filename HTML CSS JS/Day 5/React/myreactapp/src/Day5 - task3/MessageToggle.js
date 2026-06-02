import { useState } from "react"

export default function MessageToggle() {
  const [isVisible, setProperty] = useState(false);

  function toggleProperty() {
    setProperty(prevIsVisible => prevIsVisible === true ? false : true);
  }

  return (
    <div>
        <button onClick={toggleProperty}>Click Me</button>
        <p style={{visibility: isVisible ? 'visible' : 'hidden'}}>This is a hidden message</p>
    </div>
  );
}