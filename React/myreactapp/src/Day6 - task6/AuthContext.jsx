import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {

  const [username, setUsername] = useState("Varsha");
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const toggleLogIn = () => setIsLoggedIn(!isLoggedIn);

  return (
    <AuthContext.Provider value={{ username, isLoggedIn, toggleLogIn }}>
      {children}
    </AuthContext.Provider>
  );
}
