import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'
import { 
  SiJavascript, 
  SiPython, 
  SiCplusplus, 
  SiReact, 
  SiNodedotjs, 
  SiTailwindcss, 
  SiVite, 
  SiMongodb, 
  SiHtml5, 
  SiCss3,
  SiDrizzle
} from 'react-icons/si'
import { FaJava, FaCode } from 'react-icons/fa'

function SkillSection() {
    const { isDarkMode } = useTheme()

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    }

    const iconVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: { 
            scale: 1, 
            opacity: 1, 
            transition: { 
                type: "spring", 
                stiffness: 260, 
                damping: 20 
            } 
        },
    }

    // Languages data with icons and colors
    const languages = [
        { name: 'Java', icon: FaJava, color: '#f89820' },
        { name: 'Python', icon: SiPython, color: '#3776ab' },
        { name: 'C++', icon: SiCplusplus, color: '#00599c' },
        { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
        { name: 'DrRacket', icon: FaCode, color: '#9f1d20' },
    ]

    // Frameworks/Technologies data with icons and colors
    const frameworks = [
        { name: 'React', icon: SiReact, color: '#61dafb' },
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'Tailwind', icon: SiTailwindcss, color: '#06b6d4' },
        { name: 'Vite', icon: SiVite, color: '#646cff' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
        { name: 'Drizzle ORM', icon: SiDrizzle, color: '#c5f74f' },
        { name: 'HTML/CSS', icon: SiHtml5, color: '#e34f26' },
    ]


  return (
    <div className={`flex flex-col items-center w-full h-full ${isDarkMode ? "bg-gray-950 text-white" : "bg-white text-gray-900"}`}>
        <motion.h2
        className={`${isDarkMode ? "text-white" : "text-gray-900"} text-lg mt-20`}
        >
            TECHNICAL EXPERTISE
        </motion.h2>
        <motion.div className="flex flex-row mt-10">
            <motion.h2
            className={`${isDarkMode ? "text-white" : "text-gray-900"} text-6xl font-medium`}
            >
                Skills & 
            </motion.h2>

            <motion.h2
            className="text-blue-500 text-6xl font-medium"
            >
                Technologies
            </motion.h2>

        </motion.div>
        <motion.p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} text-lg mt-10 mb-15`}>
                A comprehensive toolkit for building modern, scalable web applications from concept to deployment.
            </motion.p>

            

        {/* Languages Section */}
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mt-16"
        >
            <motion.h2
                variants={itemVariants}
                className={`text-3xl lg:text-4xl font-medium mb-8 text-center ${
                    isDarkMode ? "text-white" : "text-gray-900"
                }`}
            >
                Languages
            </motion.h2>

            <motion.div 
                className="flex flex-wrap justify-center gap-8 lg:gap-12 max-w-4xl mx-auto"
                variants={containerVariants}
            >
                {languages.map((eachLanguage, index) => (
                    <motion.div
                        key={eachLanguage.name}
                        variants={iconVariants}
                        whileHover={{ 
                            scale: 1.1, 
                            y: -2,
                            transition: { duration: 0.2 } 
                        }}
                        className="flex flex-col items-center group cursor-pointer"
                    >
                        <div 
                            className={`p-6 rounded-2xl shadow-lg transition-all duration-300 ${
                                isDarkMode 
                                    ? "bg-gray-800 hover:bg-gray-700" 
                                    : "bg-white hover:bg-gray-50"
                            } border-2 border-transparent hover:border-opacity-30`}
                            style={{ 
                                "--hover-border-color": eachLanguage.color,
                                borderColor: "var(--hover-border-color)"
                            }}
                        >
                            <eachLanguage.icon 
                                size={48} 
                                style={{ color: eachLanguage.color }}
                                className="transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                        <span 
                            className={`mt-3 text-sm font-medium transition-colors duration-300 ${
                                isDarkMode 
                                    ? "text-gray-400 group-hover:text-white" 
                                    : "text-gray-600 group-hover:text-gray-900"
                            }`}
                        >
                            {eachLanguage.name}
                        </span>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>

        {/* Frameworks/Technologies Section */}
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mt-20"
        >
            <motion.h2
                variants={itemVariants}
                className={`text-3xl lg:text-4xl font-medium mb-8 text-center ${
                    isDarkMode ? "text-white" : "text-gray-900"
                }`}
            >
                Frameworks / Technologies
            </motion.h2>

            <motion.div 
                className="flex flex-wrap justify-center gap-8 lg:gap-12 max-w-5xl mx-auto"
                variants={containerVariants}
            >
                {frameworks.map((framework, index) => (
                    <motion.div
                        key={framework.name}
                        variants={iconVariants}
                        whileHover={{ 
                            scale: 1.1, 
                            y: -8,
                            transition: { duration: 0.2 } 
                        }}
                        className="flex flex-col items-center group cursor-pointer"
                    >
                        <div 
                            className={`p-6 rounded-2xl shadow-lg transition-all duration-300 ${
                                isDarkMode 
                                    ? "bg-gray-800 hover:bg-gray-700" 
                                    : "bg-white hover:bg-gray-50"
                            } border-2 border-transparent hover:border-opacity-30`}
                            style={{ 
                                "--hover-border-color": framework.color,
                                borderColor: "var(--hover-border-color)"
                            }}
                        >
                            <framework.icon 
                                size={48} 
                                style={{ color: framework.color }}
                                className="transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                        <span 
                            className={`mt-3 text-sm font-medium transition-colors duration-300 ${
                                isDarkMode 
                                    ? "text-gray-400 group-hover:text-white" 
                                    : "text-gray-600 group-hover:text-gray-900"
                            }`}
                        >
                            {framework.name}
                        </span>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>




    </div>
  )
}

export default SkillSection
