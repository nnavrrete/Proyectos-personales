import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Main from './pages/main/index.jsx'
import Login from './pages/login/index.jsx'
import Register from './pages/register/index.jsx'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
