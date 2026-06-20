import { useState } from "react";

export default function Like() {
  const [likeCount, setLikeCount] = useState(0);

  function incrementLikeCount() {
    setLikeCount(likeCount + 1);
  }

  return (
    <div>
      <button onClick={incrementLikeCount}>Like</button>
      <p>Like: {likeCount}</p>
    </div>
  );
}