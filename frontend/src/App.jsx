import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import HeroSection from './components/Sections/HeroSection'
import SkillSection from './components/Sections/SkillSection'
import ProjectSection from './components/Sections/ProjectSection'

function App() {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <HeroSection />
        <SkillSection />
        <ProjectSection />
      </div>
    </ThemeProvider>
  )
}

export default App
