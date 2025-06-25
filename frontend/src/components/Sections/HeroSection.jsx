import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import PROFILE_IMAGE from "../../assets/images/Profile-Image.jpg";

function HeroSection() {
  const { isDarkMode } = useTheme();
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -100]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemsVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const imageVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        delay: 0.4,
      },
    },
  };

  return (
    <div>
      <div
        className={`lg:hidden min-h-screen transition-all duration-500 ${
          isDarkMode ? "bg-gray-950 text-white" : "bg-white text-gray-900"
        }`}
      >
        {/* Hero Content */}
        <motion.section
          id="home"
          style={{ y: heroY }}
          className="relative pt-32 pb-20 px-4"
        >
          <div className="max-w-4xl mx-auto">
            {/* Background animations */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className={`absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl opacity-10 ${
                isDarkMode ? "bg-blue-500" : "bg-blue-400"
              }`}
            />

            <motion.div
              animate={{
                scale: [1, 1.1, 1.1, 1],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className={`absolute bottom-20 left-20 w-48 h-48 rounded-full blur-3xl opacity-10 ${
                isDarkMode ? "bg-purple-500" : "bg-purple-400"
              }`}
            />

            {/* Main Content */}
            <div className="text-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                {/* Profile image */}
                <motion.div variants={itemsVariants} className="mb-8 relative">
                  <div className="relative w-36 h-36 mx-auto">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`w-32 h-32 mx-auto rounded-2xl overflow-hidden border-4 ${
                        isDarkMode ? "border-gray-800" : "border-gray-300"
                      } shadow-lg relative z-10`}
                    >
                      <img
                        src={PROFILE_IMAGE}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>

                    {/* Decorative ring 1 */}
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-0 w-36 h-36 rounded-2xl border-2 border-dashed border-blue-500/40"
                    />

                    {/* Decorative ring 2 */}
                    <motion.div
                      animate={{
                        rotate: [360, 0],
                      }}
                      transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-0 w-36 h-36 rounded-2xl border border-dotted border-purple-500/30"
                    />

                    {/* Decorative ring 3 - outer */}
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute -inset-2 w-40 h-40 rounded-2xl border border-solid border-cyan-500/20"
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  variants={itemsVariants}
                  className={`text-sm uppercase tracking-widest ${
                    isDarkMode ? "text-gray-500" : "text-gray-600"
                  } mb-4`}
                >
                  Full Stack Developer
                </motion.div>

                <motion.h1
                  variants={textVariants}
                  className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                >
                  <span
                    className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
                  >
                    Building digital
                  </span>
                  <br />
                  <span className="text-blue-500">experiences</span>
                  <br />
                  <span
                    className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
                  >
                    that matter
                  </span>
                </motion.h1>

                <motion.p
                  variants={textVariants}
                  className={`text-base md:text-lg ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  } mb-8 max-w-xl mx-auto font-light leading-relaxed`}
                >
                  I craft beautiful, functional web applications with modern
                  technologies and thoughtful user experience.
                </motion.p>

                {/* CTA buttons */}
                <motion.div
                  variants={itemsVariants}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                >
                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => scrollToSection("work")}
                    className="bg-blue-500 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors"
                  >
                    View Work
                  </motion.button>
                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => scrollToSection("contact")}
                    className={`border ${
                      isDarkMode ? "border-gray-700" : "border-gray-300"
                    } px-6 py-3 rounded-full transition-all duration-300 ${
                      isDarkMode
                        ? "text-gray-400 hover:text-white hover:border-gray-600"
                        : "text-gray-600 hover:text-gray-900 hover:border-gray-400"
                    }`}
                  >
                    Get in touch
                  </motion.button>
                </motion.div>

                {/* Social links */}
                <motion.div
                  variants={itemsVariants}
                  className="flex justify-center gap-4 mb-12"
                >
                  {[
                    { icon: FiGithub, href: "#" },
                    { icon: FiLinkedin, href: "#" },
                    { icon: Mail, href: "#" },
                  ].map((eachSocial, index) => (
                    <motion.a
                      key={index}
                      href={eachSocial.href}
                      whileHover={{ scale: 1.1, y: -3 }}
                      className={`p-3 rounded-full transition-colors ${
                        isDarkMode
                          ? "text-gray-400 hover:text-white hover:bg-gray-800"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                      }`}
                    >
                      <eachSocial.icon size={20} />
                    </motion.a>
                  ))}
                </motion.div>

                {/* Tech Stack */}
                <motion.div
                  variants={itemsVariants}
                  className="flex flex-wrap justify-center gap-2 text-sm"
                >
                  {[
                    "React",
                    "Node.js",
                    "MongoDB",
                    "JavaScript",
                    "TypeScript",
                  ].map((tech, index) => (
                    <span
                      key={index}
                      className={`${
                        isDarkMode ? "text-gray-600" : "text-gray-400"
                      }`}
                    >
                      {tech}
                      {index < 4 && <span className="mx-2">•</span>}
                    </span>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <ArrowDown
                size={20}
                className={`${isDarkMode ? "text-gray-600" : "text-gray-400"}`}
              />
            </motion.div>
          </div>
        </motion.section>
      </div>

      {/*Desktop View*/}
      <div
        className={`hidden lg:block h-screen w-full ${
          isDarkMode ? "bg-gray-950 text-white" : "bg-white text-gray-900"
        }`}
      >
        <div className="flex flex-row justify-between gap-20">
          {/*Left Side - Full Stack Developer Building digital experiences that matter...*/}
          <motion.div className="flex flex-col justify-center h-full p-40">
            <motion.h2
              className={`mb-15 text-3xl ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Full Stack Developer
            </motion.h2>

            <motion.div
              className={`mb-15 text-8xl font-medium ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              <motion.h2
                className={`mb-7 ${isDarkMode ? "text-white" : "text-gray-900"}`}
              >
                Building digital
              </motion.h2>
              <motion.h2
                className="mb-7 text-blue-500"
              >
                experiences
              </motion.h2>
              <motion.h2
                className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
              >
                that matter
              </motion.h2>
            </motion.div>


            <motion.p className={`text-base md:text-xl mb-15 ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  } mb-8 max-w-xl mx-auto font-light leading-relaxed `}>
                    I craft beautiful, functional web applications with modern
                    technologies and thoughtful user experience.
            </motion.p>


            <motion.div className="flex flex-row gap-4">
                <motion.button className="bg-blue-500 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-600 transition-colors">
                    View Work
                </motion.button>
                <motion.button className="border border-gray-300 px-8 py-4 rounded-full transition-all duration-300 text-gray-600 hover:text-gray-900 hover:border-gray-400">
                    Get in touch
                </motion.button>
            </motion.div>

            <motion.div className="flex flex-row mt-15 gap-15">
                <motion.a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <FiGithub size={24} />
                </motion.a>
                <motion.a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                    <FiLinkedin size={24} />
                </motion.a>
                <motion.a href="mailto:your@email.com" target="_blank" rel="noopener noreferrer">
                    <Mail size={24} />
                </motion.a>
            </motion.div>

          </motion.div>

          <motion.div></motion.div>

          {/*Right Side - Profile Image + Tech Stack*/}
          <motion.div className="flex flex-col items-center p-30 mt-40">
            <motion.div className="flex flex-row gap-15 mb-20 text-2xl">
                <motion.h2 className={`${isDarkMode ? "text-white" : "text-gray-900"}`}>React</motion.h2>
                <motion.h2 className={`${isDarkMode ? "text-white" : "text-gray-900"}`}>Node.js</motion.h2>
                <motion.h2 className={`${isDarkMode ? "text-white" : "text-gray-900"}`}>MongoDB</motion.h2>
                <motion.h2 className={`${isDarkMode ? "text-white" : "text-gray-900"}`}>JavaScript</motion.h2>

            </motion.div>

            {/* Profile Image with Decorative Rings */}
            <motion.div className="relative">
              <div className="relative w-72 h-72 mx-auto">
                {/* Profile Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`w-60 h-60 mx-auto rounded-2xl overflow-hidden border-4 ${
                    isDarkMode ? "border-gray-800" : "border-gray-300"
                  } shadow-lg relative z-10`}
                >
                  <img
                    src={PROFILE_IMAGE}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Decorative Ring 1 - Inner */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 w-72 h-72 rounded-2xl border-2 border-dashed border-blue-500/50"
                />

                {/* Decorative Ring 2 - Outer */}
                <motion.div
                  animate={{
                    rotate: [360, 0],
                  }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-3 w-78 h-78 rounded-2xl border border-dotted border-purple-500/40"
                />
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
