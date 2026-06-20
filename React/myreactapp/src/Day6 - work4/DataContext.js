
// Context API in React allows you to share data across components without having to pass props down manually at every level. It is useful for managing global state or data that needs to be accessed by multiple components in a React application.

import { createContext } from 'react';

export const DataContext = createContext();

// function DataContextProvider({ children }) {
//   const [data, setData] = useState("Hello, World!");

//   return (
//     <DataContext.Provider value={{ data, setData }}>
//       {children}
//     </DataContext.Provider>
//   );
// }