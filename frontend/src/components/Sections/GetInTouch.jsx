import React from 'react'
import { useTheme } from '../../context/ThemeContext'
import { motion } from 'framer-motion'

function GetInTouch() {
    const { isDarkMode } = useTheme()

  return (
    <motion.div className={`${isDarkMode ? "bg-gray-950 text-white" : "bg-white text-gray-900"} flex flex-col items-center w-full h-full`}>

        <motion.div
        className="flex gap-3">
            <motion.h2
            className={`${isDarkMode ? "text-white" : "text-gray-900"} text-5xl mt-30`}
            >
                Get In
            </motion.h2>
            <motion.h2
            className="text-5xl font-medium text-blue-500"
            >
                Touch
            </motion.h2>
        </motion.div>
    </motion.div>
  )
}

export default GetInTouch
