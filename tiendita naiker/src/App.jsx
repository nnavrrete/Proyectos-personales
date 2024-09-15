import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import './App.css'
import Main from './pages/main/index.jsx'
import Login from './pages/login/index.jsx'
import Register from './pages/register/index.jsx'

const PageWrapper = ({ children }) => {
  const pageVariants = {
    initial: { opacity: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)' },
    in: { opacity: 1, backgroundColor: 'rgba(0, 0, 0, 0)' },
    out: { opacity: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)' }
  }
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.2 }}
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
      }}
    >
      {children}
    </motion.div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Main /></PageWrapper>} />
        <Route path="/login" element={<PageWrapper><Login /></PageWrapper>} />
        <Route path="/register" element={<PageWrapper><Register /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}

export default App
