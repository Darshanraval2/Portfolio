import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './Compontas/Home/Home'
import About from './Compontas/About/About'
import Navbar from './Compontas/Navbar/Navbar'
import Contact from './Compontas/Contact/Contact'
import Projects from './Compontas/Projects/Projects'
import ParticleBackground from './Compontas/ParticleBackground/ParticleBackground'
import Loading from './Compontas/Loading/Loading'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <BrowserRouter>
      <div style={{ position: 'relative' }}>
        <ParticleBackground />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        {isLoading && <Loading />}
      </div>
    </BrowserRouter>
  )
}

export default App

