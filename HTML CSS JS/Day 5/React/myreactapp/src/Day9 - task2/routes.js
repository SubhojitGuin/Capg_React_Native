import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import RescueList from "./Components/RescueList";
import { getRescues } from "./apiService";
import RescueDetail from "./Components/RescueDetail";
import Overview from "./Components/Overview";
import MedicalLog from "./Components/MedicalLog";
import LocationHistory from "./Components/LocationHistory";
import Login from "./Components/Login";
import ControlRoomLayout from "./Components/ControlRoomLayout";
import ProtectedRoute from "./Components/ProtectedRoute";
import ActiveMissions from "./Components/ActiveMissions";
import TeamStatus from "./Components/TeamStatus";
import Reports from "./Components/Reports";
import Error from "./Components/Error";

export const router = createBrowserRouter([
  { 
    path: '/', 
    element: <Home /> 
  },
  {
    path: '/login',
    element: <Login />
  },
  { 
    path: '/rescues', 
    element: <RescueList />,
  },
  {
    path: '/rescues/:id',
    element: <RescueDetail />,
    children: [
      {
        path: 'overview',
        element: <Overview />,
      },
      {
        path: 'medical',
        element: <MedicalLog />,
      },
      {
        path: 'location-history',
        element: <LocationHistory />,
      },
    ]
  },
  {
    path: '/control-room',
    element: <ProtectedRoute><ControlRoomLayout /></ProtectedRoute>,
    children: [
      {
        path: 'active-missions',
        element: <ActiveMissions />
      },
      {
        path: 'team-status',
        element: <TeamStatus />
      },
      {
        path: 'reports',
        element: <Reports />
      }
    ]
  },
  {
    path: '*',
    element: <Error />
  },
])