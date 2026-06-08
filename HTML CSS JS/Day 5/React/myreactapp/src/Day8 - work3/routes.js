import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Dashboard from "./Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";
import NotFound from "./NotFound";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/home", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/dashboard",
    element: <Dashboard isLoggedIn={true} />,
    children: [
      { path: "admin", element: <ProtectedRoute><AdminDashboard /></ProtectedRoute> },
      { path: "user", element: <UserDashboard /> }
    ]
  },
  { path: "*", element: <NotFound /> }
]);