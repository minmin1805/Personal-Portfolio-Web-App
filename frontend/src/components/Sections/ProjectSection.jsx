import React from 'react'
import { useTheme } from '../../context/ThemeContext'
import { motion } from 'framer-motion'
import ProjectCard from './components/ProjectCard'
import { projects } from '../../utils/data'

function ProjectSection() {
    const { isDarkMode } = useTheme()


    
  return (
    <div className={`flex flex-col items-center w-full h-full ${isDarkMode ? "bg-gray-950 text-white" : "bg-white text-gray-900"}`}>

        
        <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ type: "spring", duration: 0.8, bounce: 0.2 }}

        className="flex flex-row mt-2 gap-4 mt-30"
        >
            <h2 className={`${isDarkMode ? "text-white" : "text-gray-900"} text-6xl font-medium`}>Recent</h2>
            <h2 className='text-6xl font-medium text-blue-500'>Projects</h2>
        </motion.div>

        <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} text-lg mt-5 text-center`}>Featured projects demonstrating my expertise in crafting user-focused web applications and overcoming technical challenges.
        </p>

        <motion.div
        className="grid md:grid-cols-3 sm:grid-cols-1 gap-4 mt-10 p-10"
        >
            {projects?.map((eachProject) => (
                <ProjectCard key={eachProject.id} project={eachProject} />
            ))}

        </motion.div>
      
    </div>
  )
}

export default ProjectSection
