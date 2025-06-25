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
        <div className="flex items-center gap-4">
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
    </div>
  </motion.nav>
  );
}

export default Navbar;
