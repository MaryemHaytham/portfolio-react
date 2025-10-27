import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home/home.jsx'
import About from './components/About/about.jsx'
import Skills from './components/Skills/skills.jsx'
import Navbar from './components/Navbar/navbar.jsx'
import Experience from './components/Experince/experience.jsx'
import Education from './components/Education/education.jsx'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App


