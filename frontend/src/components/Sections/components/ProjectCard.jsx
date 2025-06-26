import React from 'react'
import { useTheme } from '../../../context/ThemeContext'

function ProjectCard({project}) {
    const { isDarkMode } = useTheme()

  return (
    <div className={`${isDarkMode ? "bg-gray-900" : "bg-white"} border-1 border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden h-90`}>
        <div className="relative w-full h-[60%] group">
            <img 
                src={project.image} 
                alt={project.name} 
                className="w-full h-full object-cover rounded-t-2xl transition-all duration-300 group-hover:blur-sm" 
            />
            <div className="absolute inset-0 rounded-t-2xl bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"></div>
            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <a
                    href={project.deployedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded-full font-medium flex items-center gap-2 shadow-lg hover:bg-blue-700 transition"
                >
                    Live Demo
                </a>
                <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white text-white px-4 py-2 rounded-full font-medium flex items-center gap-2 shadow-lg bg-white/10 hover:bg-white/20 transition"
                >
                    GitHub
                </a>
            </div>
        </div>
        <div className="flex flex-col justify-center p-5 py-3">
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
