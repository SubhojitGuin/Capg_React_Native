import './App.css'
import AdminDashboardPage from './pages/AdminDashboardPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './MainLayout'
import CreateRequestPage from './pages/CreateRequestPage'
import LoginPage from './pages/LoginPage'
import AuthContextProvider from './context/AuthContextProvider'
import StudentDashboardPage from './pages/StudentDashboardPage'
import RequestDetailsPage from './pages/RequestDetailsPage'
import ProtectedRoute from './components/ProtectedRoute'
import RoleGuard from './components/RoleGuard'
import HomeRedirect from './components/HomeRedirect'

function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<ProtectedRoute><MainLayout /></ProtectedRoute>} >

            <Route index element={<HomeRedirect />} />

            <Route path="admin-dashboard" element={<RoleGuard allowedRoles={['admin']}><AdminDashboardPage /></RoleGuard>} />

            <Route path="student-dashboard" element={<RoleGuard allowedRoles={['student']}><StudentDashboardPage /></RoleGuard>} />
            <Route path="create-request" element={<RoleGuard allowedRoles={['student']}><CreateRequestPage/></RoleGuard>} />

            <Route path="request/:id" element={<RequestDetailsPage />} />
          </Route>

          <Route path="/login" element={<LoginPage />} />

          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App
