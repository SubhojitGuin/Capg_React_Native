import './App.css'
import DashboardPage from './pages/DashboardPage'
import NavbarComponent from './components/NavbarComponent'

function App() {

  return (
    <div className="app-container container-fluid bg-primary-subtle pt-2">
      <NavbarComponent />
      <DashboardPage />
    </div>
  )
}

export default App
