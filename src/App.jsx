import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import Home from './pages/Home'

import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

function App() {
  return (
    <Router>
      <div className="font-sans text-gray-800 dark:bg-gray-900 dark:text-white">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        <Footer />
        <BackToTopButton />
      </div>
    </Router>
  )
}

export default App

// Same BackToTopButton code
const BackToTopButton = () => {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all duration-300 rounded-md flex items-center gap-2"
        aria-label="Back to Top"
      >
        <ArrowUp className="w-5 h-5" />
        <span className="hidden sm:inline">Top</span>
      </button>
    )
  )
}
