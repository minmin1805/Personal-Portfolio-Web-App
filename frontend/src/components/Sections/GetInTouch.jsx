import React from 'react'
import { useTheme } from '../../context/ThemeContext'
import { motion } from 'framer-motion'

function GetInTouch() {
    const { isDarkMode } = useTheme()

  return (
    <motion.div className={`${isDarkMode ? "bg-gray-950 text-white" : "bg-white text-gray-900"} flex flex-col items-center w-full h-full`}>

        <motion.div
        className="flex gap-1 mt-10 justify-center items-center">
            <motion.h2
            className={`${isDarkMode ? "text-white" : "text-gray-900"} text-5xl`}
            >
                Get In
            </motion.h2>

            <motion.h2
            className="text-5xl font-medium text-blue-500"
            >
                Touch
            </motion.h2>

        </motion.div>

        <motion.div
        className='flex flex-row gap-20 mt-10 justify-center items-center'
        >
            {/* Send me a message */}
            <motion.div className={`${isDarkMode ? "bg-gray-900" : "bg-gray-100"} px-10 py-8 border-1 rounded-2xl shadow-lg`}>
                <motion.h2
                className={`${isDarkMode ? "text-white" : "text-gray-900"} text-2xl font-medium`}>
                    Send me a message
                </motion.h2>
                <div className="flex flex-row gap-2 mt-4 mb-2">
                    <input type="text" placeholder="Name" className={`${isDarkMode ? "bg-gray-900" : "bg-white"} p-2 border-1 border-gray-100 rounded-md w-1/2`} />
                    <input type="email" placeholder="Email" className={`${isDarkMode ? "bg-gray-900" : "bg-white"} p-2 border-1 border-gray-100 rounded-md w-1/2`} />
                </div>
                    <textarea placeholder="Message" className={`${isDarkMode ? "bg-gray-900" : "bg-white"} p-2 border-1 border-gray-100 rounded-md w-full mt-4`} />
                <button className={`${isDarkMode ? "bg-blue-500" : "bg-blue-500"} text-white p-2 rounded-md mt-4 w-full hover:bg-blue-600 transition-all duration-300`}>Send</button>
            </motion.div>

            {/* Contact information */}
            <motion.div className="pl-1 pr-20">
                <motion.h2 className={`${isDarkMode ? "text-white" : "text-gray-900"} text-2xl font-medium`}>
                    Contact information
                </motion.h2>
                <motion.div
                className="flex flex-col gap-2 mt-4 mb-2 w-full">
                    <motion.div className={`${isDarkMode ? "bg-gray-900" : "bg-gray-100"} flex flex-col p-5 border-1 border-gray-400 rounded-2xl`}>
                        <motion.h2 className={`${isDarkMode ? "text-white" : "text-gray-900"} text-xl font-medium`}>
                            Location
                        </motion.h2>
                        <motion.h2 className="text-gray-500">Massachusetts, USA</motion.h2>
                    </motion.div>

                    <motion.div className={`${isDarkMode ? "bg-gray-900" : "bg-gray-100"} flex flex-col p-5 border-1 border-gray-400 rounded-2xl`}>
                        <motion.h2 className={`${isDarkMode ? "text-white" : "text-gray-900"} text-xl font-medium`}>
                            Email
                        </motion.h2>
                        <motion.h2 className="text-gray-500">doanlyminh2005@@gmail.com</motion.h2>
                    </motion.div>

                    <motion.div className={`${isDarkMode ? "bg-gray-900" : "bg-gray-100"} flex flex-col p-5 border-1 border-gray-400 rounded-2xl`}>
                        <motion.h2 className={`${isDarkMode ? "text-white" : "text-gray-900"} text-xl font-medium`}>
                            Phone
                        </motion.h2>
                        <motion.h2 className="text-gray-500">+1 (617)516-5610</motion.h2>
                    </motion.div>
                </motion.div>
            </motion.div>

        </motion.div>
    </motion.div>
  )
}

export default GetInTouch
