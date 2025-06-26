import React from 'react'

function ProjectCard() {
    const { isDarkMode } = useTheme()

  return (
    <div className={`${isDarkMode ? "bg-gray-950 text-white" : "bg-white text-gray-900"} flex flex-col items-center`}>
      <h2>Project Name</h2>
    </div>
  )
}

export default ProjectCard
