import React from 'react'
import { useTheme } from '../../context/ThemeContext'
import { motion } from 'framer-motion'

function ProjectSection() {
    const { isDarkMode } = useTheme()

    
  return (
    <div className={`flex flex-col items-center w-full h-full ${isDarkMode ? "bg-gray-950 text-white" : "bg-white text-gray-900"}`}>

        <motion.h2 
        className={`${isDarkMode ? "text-white" : "text-gray-900"} text-lg mt-30`}
        >
            FEATURED WORK
        </motion.h2>


      
    </div>
  )
}

export default ProjectSection
