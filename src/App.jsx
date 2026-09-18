import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Packages from './pages/Packages'
import About from './pages/About'
import Resorts from './pages/Resorts'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Router>
      <div className="w-full min-h-screen bg-gradient-to-b from-[#fbfaf6] to-[#eef6f5]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/Packages' element={<Packages />} />
          <Route path='/Resorts' element={<Resorts />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}
