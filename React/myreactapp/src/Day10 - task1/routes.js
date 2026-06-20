import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Support from "./Support";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/support',
    element: <Support />
  }
]);