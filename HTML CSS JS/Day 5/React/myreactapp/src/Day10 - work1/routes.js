import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./Login";
import Dashboard from "./Dashboard";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  }
])