import React from "react"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import NoteFound from "./pages/NotFound"
import ProtectedRoute from "./components/ProtectedRoutes"

function Logout() {
  localStorage.clear()
  return <Navigate to='/login'/>
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
