import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import HeroSection from './components/Sections/HeroSection'
import SkillSection from './components/Sections/SkillSection'
import ProjectSection from './components/Sections/ProjectSection'
import GetInTouch from './components/Sections/GetInTouch'
import AboutMe from './components/Sections/AboutMe'

function App() {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <HeroSection />
        <AboutMe />
        <SkillSection />
        <ProjectSection />
        <GetInTouch />
      </div>
    </ThemeProvider>
  )
}

export default App
