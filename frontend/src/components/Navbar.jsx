import React from "react";
import { useState } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Code2, Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
  <motion.nav
    style={{ opacity: 1 }}
    className={`fixed top-0 w-full z-50 p-4 ${
      isDarkMode ? "bg-gray-950" : "bg-gray-50"
    } backdrop-blur-md border-b ${
      isDarkMode ? "border-gray-800" : "border-gray-200"
    }`}
  >

    <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
        className="flex items-center gap-2"
        whileHover={{scale: 1.05}}
        >
            <Code2 size={24} className="text-blue-500"/>
            <span className={`text-lg font-medium ${isDarkMode ? "text-white" : "text-gray-900"}`}>Personal Portfolio</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4">
            {["Home", "Skills", "Work", "About", "Contact"].map((eachItem) => (
                <motion.button
                key={eachItem}
                    whileHover={{y: -2}}
                    onClick={() => scrollToSection(eachItem.toLowerCase())}
                    className={`text-sm uppercase tracking-wider ${isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"}`}>
                    {eachItem}
                </motion.button>
            ))}

            <motion.button
            whileHover={{y: -2}}
            onClick={() => toggleDarkMode(isDarkMode ? "light" : "dark")}
            className={`text-sm uppercase tracking-wider ${isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"}`}
            >
                {isDarkMode ? <Sun size={24}/> : <Moon size={24}/>}
            </motion.button>
        </div>

        {/* Mobile menu buttons */}
        <div className="md:hidden flex items-center space-x-2">
            <motion.button
            whileHover={{scale: 1.1}}
            onClick={() => toggleDarkMode(isDarkMode ? "light" : "dark")}
            className={`p-2 rounded-full transition-colors duration-300 ${isDarkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-200 hover:bg-gray-300"}`}
            >
                {isDarkMode ? <Sun size={18}/> : <Moon size={18}/>}
            </motion.button>

            <motion.button
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.95}}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-full transition-colors ${isDarkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-200 hover:bg-gray-300"}`}
            >
                {isMenuOpen ? <X size={20}/> : <Menu size={20}/>}
            </motion.button>
        </div>

    </div>

    {/* Mobile Menu  */}
    <AnimatePresence>
        {isMenuOpen && (
            <motion.div
            initial={{opacity: 0, y: -10}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -10}}
            transition={{duration: 0.2}}
            className={`absolute top-full left-0 right-0 md:hidden mx-4 mt-2 p-4 rounded-lg shadow-lg ${isDarkMode ? "bg-gray-900/95" : "bg-white/95"} backdrop-blur-md border ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}
            >
                <div className="flex flex-col space-y-3">
                    {["Home", "Skills", "Work", "About", "Contact"].map((eachItem) => (
                        <motion.button
                        key={eachItem}
                        whileHover={{x: 5}}
                        whileTap={{scale: 0.95}}
                        onClick={() => scrollToSection(eachItem.toLowerCase())}
                        className={`text-left py-3 px-2 text-sm uppercase tracking-wider transition-colors ${isDarkMode ? "text-gray-300 hover:text-white hover:bg-gray-800/50" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/50"} rounded-md`}
                        >
                            {eachItem}
                        </motion.button>
                    ))}
                </div>
            </motion.div>
        )}
    </AnimatePresence>
  </motion.nav>
  );
}

export default Navbar;
