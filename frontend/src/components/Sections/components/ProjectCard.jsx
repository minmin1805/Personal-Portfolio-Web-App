import React from 'react'
import { useTheme } from '../../../context/ThemeContext'

function ProjectCard({project}) {
    const { isDarkMode } = useTheme()

  return (
    <div className={`${isDarkMode ? "bg-gray-900" : "bg-white"} border-1 border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden h-80`}>
        <div className="w-full h-1/2">
            <img 
                src={project.image} 
                alt={project.name} 
                className="w-full h-full object-cover rounded-t-2xl" 
            />
        </div>
        <div className="flex flex-col justify-center p-6">
            <h2 className={`${isDarkMode ? "text-white" : "text-gray-900"} text-lg font-medium`}>{project.name}</h2>
            <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} text-sm mt-2`}>{project.description}</p>
            <div className="flex gap-2 mt-4">
                {project.technologies?.map((tech, index) => (
                    <span key={index} className={`${isDarkMode ? "bg-gray-800 text-gray-200" : "bg-gray-100 text-gray-800"} px-2 py-1 rounded-md text-xs`}>{tech}</span>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ProjectCard
