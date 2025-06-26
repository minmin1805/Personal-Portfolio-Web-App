import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import HeroSection from './components/Sections/HeroSection'
import SkillSection from './components/Sections/SkillSection'

function App() {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <HeroSection />
        <SkillSection />
      </div>
    </ThemeProvider>
  )
}

export default App
