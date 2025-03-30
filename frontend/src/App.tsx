// src/App.tsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import RingsCrud from './pages/RingsCrud'

function App() {
  const isAuthenticated = !!localStorage.getItem('token')

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            isAuthenticated ? <RingsCrud /> : <Navigate to="/login" replace />
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
