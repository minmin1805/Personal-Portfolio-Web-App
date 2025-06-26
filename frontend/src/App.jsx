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
        <div id="home" className="scroll-mt-24"><HeroSection /></div>
        <div id="about" className="scroll-mt-24"><AboutMe /></div>
        <div id="skills" className="scroll-mt-24"><SkillSection /></div>
        <div id="work" className="scroll-mt-24"><ProjectSection /></div>
        <div id="contact" className="scroll-mt-24"><GetInTouch /></div>
      </div>
    </ThemeProvider>
  )
}

export default App
