import { useState } from 'react';
import CustomHookDemo from './CustomHookDemo';
import useOnlineStatus from './useOnlineStatus';
 
// export default function App() {
//     const {count,increment,decrement} = CustomHookDemo();
 
//   return (
//     <div>
//         <h1>Count: {count}</h1>
//         <button onClick={increment}>Increment</button>
//         <button onClick={decrement}>Decrement</button>
//     </div>
//   )
// }
 
export default function App() {
 
    const isOnline = useOnlineStatus();
 
  return (
    <div>
      {isOnline ? 'Online' : 'Offline'}
    </div>
  )
}
 