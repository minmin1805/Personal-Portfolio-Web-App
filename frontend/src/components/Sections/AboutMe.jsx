import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'


function AboutMe() {
    const { isDarkMode } = useTheme()

  return (
    <div>
        <motion.div className={`${isDarkMode ? "bg-gray-950 text-white" : "bg-white text-gray-900"} flex flex-col items-center w-full h-full `} >
            <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ type: "spring", duration: 0.8, bounce: 0.2 }}
            className={`${isDarkMode ? "text-white" : "text-gray-900"} text-6xl font-medium mt-20`}>
                About <span className='text-blue-500'>Me</span>
            </motion.h2>
            <motion.div className='flex flex-col gap-4 items-center justify-center h-full' >
            </motion.div>

            <div className="flex flex-col items-center mt-10">
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ type: "spring", duration: 0.8, bounce: 0.2 }}
                    className={`${isDarkMode ? "bg-gray-900" : "bg-white"} rounded-2xl shadow-lg p-8 max-w-4xl border border-gray-200 dark:border-gray-700`}
                >
                    <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} text-lg leading-relaxed`}>
                        Hi, I'm Minh Doan, a passionate Computer Science student at Northeastern University with a strong foundation in software development and a keen interest in creating impactful digital solutions. I've gained valuable real-world experience through my software development internship at FPT IS in Vietnam, where I contributed to enterprise applications for public transportation systems. Currently, I'm working as a Software Engineer Intern at Edventure Design, where I help program their innovative education solutions. When I'm not coding or studying, I enjoy expressing my creativity through playing musical instruments, discovering new cuisines and flavors from different cultures, and staying active on the basketball court. These diverse interests help me maintain a balanced perspective and often inspire fresh approaches to problem-solving in my technical work.
                    </p>
                </motion.div>
            </div>
            
        </motion.div>
    </div>
  )
}

export default AboutMe
