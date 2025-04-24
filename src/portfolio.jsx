import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import { MdHomeFilled, MdSchool, MdWork, MdCode, MdWeb } from "react-icons/md";
import {
  TbBrandJavascript,
  TbBrandReact,
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandTailwind,
  TbBrandNodejs,
  TbBrandGit,
  TbBrandTypescript,
  TbBrandRedux,
  TbBrandVite,
  TbBrandVscode,
  TbBrandGithub,
} from "react-icons/tb";
import {
  SiMongodb,
  SiPostgresql,
  SiReactrouter,
  SiExpress,
  SiFastapi,
  SiPython,
  SiAppwrite,
  SiVercel,
  SiGithub,
  SiApachenetbeanside,
} from "react-icons/si";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse movement for spotlight effect only
  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const navbarItems = [
    { id: "home", label: "Home", icon: MdHomeFilled },
    { id: "about", label: "About", icon: MdWork },
    { id: "skills", label: "Skills", icon: MdCode },
    { id: "projects", label: "Projects", icon: MdWeb },
    { id: "education", label: "Education", icon: MdSchool },
  ];

  return (
    <motion.div
      className="bg-black text-white min-h-screen font-sans antialiased relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-5" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-purple-500/10 blur-3xl"
        animate={{
          x: [0, -70, 0],
          y: [0, 100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Background Spotlight Effect - kept this as it's a nice visual effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-10"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(100, 149, 237, 0.05), transparent 50%)`,
        }}
      />

      {/* Fixed Navbar with solid background */}
      <motion.nav
        className="fixed top-0 left-0 w-full z-40 pt-4 pb-4 bg-black backdrop-blur-sm border-none border-gray-800/50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
      >
        <div className="container mx-auto px-6 md:px-12">
          <ul className="flex justify-center items-center space-x-10">
            {navbarItems.map((item) => (
              <motion.li
                key={item.id}
                className={`relative group cursor-pointer ${
                  activeSection === item.id
                    ? "text-blue-400"
                    : "text-gray-500 hover:text-blue-300"
                }`}
                onClick={() => setActiveSection(item.id)}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute -top-10 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs rounded-md py-1 px-3 opacity-0 group-hover:opacity-100"
                  initial={{ y: 10, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                </motion.span>
                <item.icon className="h-8 w-8 md:h-8 md:w-8" />
                {activeSection === item.id && (
                  <motion.div
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full"
                    layoutId="navIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.nav>

      <div className="container mx-auto px-6 md:px-12 py-16 relative z-20">
        {/* Enhanced Home Section */}
        <AnimatePresence mode="wait">
          {activeSection === "home" && (
            <motion.section
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="min-h-[calc(100vh-120px)] flex flex-col justify-center items-center"
            >
              {/* Hero Section with improved layout */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 w-full mt-8">
                {/* Left Side Content */}
                <div className="md:col-span-3 flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mb-2"
                  >
                    <span className="text-lg text-green-400 font-medium tracking-wide font-mono">
                      Hello, my name is
                    </span>
                  </motion.div>

                  <motion.h1
                    className="text-5xl md:text-7xl font-bold mt-2 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.4,
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    Muhammad Ubaid ur Rehman
                  </motion.h1>
                  

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="mb-6"
                  >
                    <div className="relative h-14 overflow-hidden mt-6">
                      <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-indigo-500 to-emerald-500"></div>
                      <p className="text-2xl md:text-3xl font-semibold text-gray-200 pl-4 border-l-4 border-transparent">
                        <span className="text-indigo-300">Full-Stack</span>{" "}
                        JavaScript Developer
                      </p>
                    </div>
                  </motion.div>

                  <motion.p
                    className="text-lg md:text-xl text-green-200 mb-8 max-w-2xl mt-6 font-mono"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    Building elegant digital experiences with modern web
                    technologies.
                  </motion.p>

                  {/* Buttons and CTA area with improved styling */}
                  <div className="space-y-6">
                    <motion.div
                      className="flex space-x-8 mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                    >
                      <motion.a
                        href="https://github.com/Snowden-0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative"
                        whileHover={{ scale: 1.2, y: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaGithub className="h-8 w-8 text-gray-300 hover:text-blue-400 transition-colors duration-300" />
                        <motion.span
                          className="absolute -top-10 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs rounded-md py-1 px-3 opacity-0 pointer-events-none"
                          initial={{ y: 10, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                        >
                          GitHub
                        </motion.span>
                      </motion.a>
                      <motion.a
                        href="https://www.linkedin.com/in/ubaidurr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative"
                        whileHover={{ scale: 1.2, y: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaLinkedin className="h-8 w-8 text-gray-300 hover:text-blue-400 transition-colors duration-300" />
                        <motion.span
                          className="absolute -top-10 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs rounded-md py-1 px-3 opacity-0 pointer-events-none"
                          initial={{ y: 10, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                        >
                          LinkedIn
                        </motion.span>
                      </motion.a>
                      <motion.a
                        href="mailto:uurrehman735@gmail.com"
                        className="relative"
                        whileHover={{ scale: 1.2, y: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaEnvelope className="h-8 w-8 text-gray-300 hover:text-blue-400 transition-colors duration-300" />
                        <motion.span
                          className="absolute -top-10 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs rounded-md py-1 px-3 opacity-0 pointer-events-none"
                          initial={{ y: 10, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                        >
                          Email
                        </motion.span>
                      </motion.a>
                    </motion.div>

                    {/* CTA Button - Enhanced */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.4, duration: 0.6 }}
                    >
                      <motion.a
                        href="/Resume.pdf"
                        download
                        className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white overflow-hidden rounded-lg shadow-lg"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        {/* Button shine effect */}
                        <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>

                        {/* Button content */}
                        <span className="relative flex items-center font-medium text-lg">
                          <FaDownload className="mr-2" />
                          Download Resume
                          <motion.span
                            className="ml-2"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                          >
                            →
                          </motion.span>
                        </span>
                      </motion.a>
                    </motion.div>
                  </div>
                </div>

                {/* Right Side Decorative Element */}
                <div className="md:col-span-2 flex items-center justify-center relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="w-full h-full relative"
                  >
                    {/* Decorative code frame */}
                    <div className="w-full h-full max-h-96 bg-gray-900/70 backdrop-blur-sm rounded-xl p-4 border border-gray-800 shadow-xl overflow-hidden">
                      <div className="flex items-center mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <div className="ml-4 text-gray-400 text-sm">
                          developer.js
                        </div>
                      </div>

                      <div className="text-sm font-mono space-y-2 text-gray-300">
                        <div>
                          <span className="text-purple-400">const</span>{" "}
                          <span className="text-green-400">developer</span>{" "}
                          <span className="text-white">=</span>{" "}
                          <span className="text-indigo-400">{"{"}</span>
                        </div>
                        <div className="pl-4">
                          <span className="text-emerald-400">name</span>:{" "}
                          <span className="text-yellow-300">
                            'Muhammad Ubaid ur Rehman'
                          </span>
                          ,
                        </div>
                        <div className="pl-4">
                          <span className="text-emerald-400">role</span>:{" "}
                          <span className="text-yellow-300">
                            'Software Engineer'
                          </span>
                          ,
                        </div>
                        <div className="pl-4">
                          <span className="text-emerald-400">skills</span>: [
                          <span className="text-yellow-300">'React'</span>,{" "}
                          <span className="text-yellow-300">'JavaScript'</span>,{" "}
                          <span className="text-yellow-300">'Node.js'</span>],
                        </div>
                        <div className="pl-4">
                          <span className="text-emerald-400">location</span>:{" "}
                          <span className="text-yellow-300">'Islamabad'</span>,
                        </div>
                        <div className="pl-4">
                          <span className="text-purple-400">code</span>:{" "}
                          <span className="text-indigo-400"> </span>{" "}
                          <span className="text-indigo-400">{"{"}</span>
                        </div>
                        <div className="pl-8">
                          <span className="text-purple-400">return</span>{" "}
                          <span className="text-yellow-300">
                            'creative solutions'
                          </span>
                          ;
                        </div>
                        <div className="pl-4">
                          <span className="text-indigo-400">{"}"}</span>,
                        </div>
                        <div className="pl-4">
                          <span className="text-purple-400">learnNewTech</span>:{" "}
                          <span className="text-indigo-400">function</span>(){" "}
                          <span className="text-indigo-400">{"{"}</span>
                        </div>
                        <div className="pl-8 whitespace-nowrap overflow-hidden">
                          <motion.span
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatType: "loop",
                            }}
                            className="inline-block whitespace-nowrap"
                          >
                            <span className="text-purple-400">this</span>.
                            <span className="text-emerald-400">skills</span>.
                            <span className="text-blue-400">push</span>(
                            <span className="text-yellow-300">
                              'new technology'
                            </span>
                            );
                          </motion.span>
                        </div>
                        <div className="pl-4">
                          <span className="text-indigo-400">{"}"}</span>
                        </div>
                        <div>
                          <span className="text-indigo-400 ">{"}"}</span>;
                        </div>
                      </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-indigo-500/20 rounded-full blur-lg"></div>
                    <div className="absolute -top-4 -left-4 w-20 h-20 bg-purple-500/20 rounded-full blur-lg"></div>
                  </motion.div>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* About Section - Enhanced with animations */}
        <AnimatePresence mode="wait">
          {activeSection === "about" && (
            <motion.section
              key="about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="min-h-screen flex flex-col justify-center py-20"
            >
              <motion.h2
                className="text-4xl font-bold mb-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                About <span className="text-blue-400">Me</span>
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="bg-gray-900/40 backdrop-blur-sm p-8 rounded-xl shadow-glow border border-gray-800"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                    Who I am
                  </h3>
                  <ul className="text-xl text-gray-300 leading-relaxed list-disc list-inside space-y-2">
                    <li>Highly motivated Computer Science enthusiast</li>
                    <li>A Curious fellow </li>
                    <li>Always learning and pushing boundaries</li>
                    <li>Resilient mindset</li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="bg-gray-900/40 backdrop-blur-sm p-8 rounded-xl shadow-glow border border-gray-800"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                    My passion
                  </h3>
                  <ul className="text-xl text-gray-300 leading-relaxed list-disc list-inside space-y-2">
                    <li>Powering projects with JS, React & AI</li>
                    <li>
                      Architecting responsive UIs with React, Tailwind & modern
                      tools
                    </li>
                    <li>Building RESTful APIs using Node.js, Express</li>
                    <li>Crafting elegant solutions to tough problems</li>
                  </ul>
                </motion.div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Skills Section - With animated skill bars */}
        <AnimatePresence mode="wait">
          {activeSection === "skills" && (
            <motion.section
              key="skills"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="min-h-screen flex flex-col justify-center py-20"
            >
              <motion.h2
                className="text-4xl font-bold mb-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Technical <span className="text-blue-400">Skills</span>
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="bg-gray-900/40 backdrop-blur-sm p-6 rounded-xl shadow-glow border border-gray-800"
                >
                  <h3 className="font-semibold mb-6 text-xl text-blue-400">
                    Programming Languages
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { icon: TbBrandJavascript, name: "JavaScript" },
                      { icon: TbBrandHtml5, name: "HTML5" },
                      { icon: TbBrandCss3, name: "CSS3" },
                      { icon: SiPython, name: "Python" },
                      { icon: TbBrandTypescript, name: "TypeScript" },
                    ].map((skill, index) => (
                      <motion.span
                        key={index}
                        className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/30"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "rgba(59, 130, 246, 0.2)",
                        }}
                      >
                        {skill.icon && (
                          <skill.icon className="mr-2 h-5 w-5 text-blue-400" />
                        )}
                        {skill.name}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="bg-gray-900/40 backdrop-blur-sm p-6 rounded-xl shadow-glow border border-gray-800"
                >
                  <h3 className="font-semibold mb-6 text-xl text-blue-400">
                    Libraries & Frameworks
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { icon: TbBrandReact, name: "React.js" },
                      { icon: TbBrandNodejs, name: "Node.js" },
                      { icon: SiExpress, name: "Express.js" },
                      { icon: SiFastapi, name: "FastApi" },
                      { icon: TbBrandTailwind, name: "Tailwind CSS" },
                      { icon: TbBrandRedux, name: "Redux" },
                      { icon: SiReactrouter, name: "React-Router" },
                    ].map((skill, index) => (
                      <motion.span
                        key={index}
                        className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-800/30"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "rgba(139, 92, 246, 0.2)",
                        }}
                      >
                        {skill.icon && (
                          <skill.icon className="mr-2 h-5 w-5 text-purple-400" />
                        )}
                        {skill.name}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="bg-gray-900/40 backdrop-blur-sm p-6 rounded-xl shadow-glow border border-gray-800"
                >
                  <h3 className="font-semibold mb-6 text-xl text-blue-400">
                    Databases
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { icon: SiMongodb, name: "MongoDB" },
                      { icon: SiPostgresql, name: "PostgreSQL" },
                    ].map((skill, index) => (
                      <motion.span
                        key={index}
                        className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-gradient-to-r from-green-900/30 to-teal-900/30 border border-green-800/30"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: 0.3 + index * 0.1,
                          duration: 0.4,
                        }}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "rgba(52, 211, 153, 0.2)",
                        }}
                      >
                        {skill.icon && (
                          <skill.icon className="mr-2 h-5 w-5 text-green-400" />
                        )}
                        {skill.name}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="bg-gray-900/40 backdrop-blur-sm p-6 rounded-xl shadow-glow border border-gray-800"
                >
                  <h3 className="font-semibold mb-6 text-xl text-blue-400">
                    Tools
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { icon: TbBrandGit, name: "Git" },
                      { icon: SiGithub, name: "GitHub" },
                      { icon: TbBrandVscode, name: "VS Code" },
                      { icon: SiApachenetbeanside, name: "Apache NetBeans" },
                      { icon: TbBrandVite, name: "Vite" },
                      { icon: SiAppwrite, name: "AppWrite" },
                      { icon: SiVercel, name: "Vercel" },
                    ].map((skill, index) => (
                      <motion.span
                        key={index}
                        className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-gradient-to-r from-gray-900/30 to-slate-900/30 border border-gray-700/30"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "rgba(107, 114, 128, 0.2)",
                        }}
                      >
                        {skill.icon && (
                          <skill.icon className="mr-2 h-5 w-5 text-blue-600" />
                        )}
                        {skill.name}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Projects Section - With interactive cards */}
        <AnimatePresence mode="wait">
          {activeSection === "projects" && (
            <motion.section
              key="projects"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="min-h-screen flex flex-col justify-center py-20"
            >
              <motion.h2
                className="text-4xl font-bold mb-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                My <span className="text-blue-400">Projects</span>
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Web Based Maze Game",
                    description:
                      "Implemented core JavaScript logic for maze generation and implemented matter.js for in game physics. Improved problem-solving skills and gained experience in JavaScript.",
                    tags: ["React", "JavaScript", "CSS"],
                    link: "https://github.com/Snowden-0/Maze",
                  },
                  {
                    title: "Intelligent PDF Search Application",
                    description:
                      "Working on the frontend for a Role Based AI-powered web application that allows users to search and retrieve context-aware answers from multiple PDF documents using vector search and LLMs. Built a responsive UI using React and Tailwind CSS. ",
                    tags: ["React", "Framer-motion", "TailwindCSS", "FastApi", "PostgreSQL", "Vite"],
                    link: "https://github.com/BlackShadow7166/pdf-search-engine-frontend",
                  },
                  {
                    title: "Full-Stack Blog Application",
                    description:
                      "Developed a blog application with React and Tailwind CSS for a dynamic UI. Integrated Appwrite for backend support, including user authentication and database management. Implemented features like user registration, login, post creation, editing and deleting posts.",
                    tags: ["React", "TailwindCSS", "Appwrite", "Redux", "Vite", "MongoDB"],
                    link: "https://github.com/Snowden-0/blogApp",
                  },
                  {
                    title: "Currency Converter Application ",
                    description:
                      "Effortlessly convert currencies in real-time with this React app, built using Vite. Injected React built-in hooks along with custom hooks to enhance app performance.",
                    tags: ["JavaScript", "React", "Tailwind", "Vite"],
                    link: "https://github.com/Snowden-0/currencyConverter",
                  },
                  {
                    title: "Task Management Application",
                    description:
                      "Created a Todo Application using react and tailwind. Used Context-API to manage states in components. User can create, delete and update and mark the completed tasks. ",
                    tags: ["React", "TailwindCSS", "ContextApi", "Vite"],
                    link: "https://github.com/Snowden-0/todoContext",
                  },
                  {
                    title: "Attendence Management System",
                    description:
                      "Created a GUI based Desktop Application in JAVA using JDBC. Gained hands-on expertise on Java and its technologies",
                    tags: ["Java", "JDBC"],
                    link: "https://github.com/Snowden-0/Attendance-Management-System",
                  },
                ].map((project, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-gray-900/60 to-blue-900/20 backdrop-blur-sm p-6 rounded-xl border border-gray-800/50 shadow-glow group relative overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    whileHover={{
                      y: -10,
                      boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
                    }}
                  >
                    {/* Project glow effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-all duration-700"></div>

                    <h3 className="text-xl font-bold mb-3 text-blue-400">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300"
                    >
                      View Project
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="ml-1"
                      >
                        →
                      </motion.span>
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* --- Education Section (Timeline Format) --- */}
        <AnimatePresence mode="wait">
          {activeSection === "education" && (
            <motion.section
              key="education"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="min-h-screen flex flex-col justify-center items-center py-20 px-4" // Added padding-x
            >
              <motion.h2
                className="text-4xl font-bold mb-16 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Education & <span className="text-cyan-400">Certifications</span>
              </motion.h2>

              <div className="relative w-full max-w-4xl mx-auto">
                {/* Vertical Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-800/30 via-blue-800/30 to-purple-800/30 rounded-full transform -translate-x-1/2 hidden md:block"></div>

                {[
                  {
                    title: "BS Computer Science",
                    organization: "International Islamic University, Islamabad",
                    period: "2021 - 2025",
                    description:
                      "Focusing on software engineering, data structures, algorithms, and web technologies.",
                    icon: MdSchool,
                    side: "left",
                  },
                  {
                    title: "The Modern JavaScript Bootcamp",
                    organization: "Udemy",
                    period: "2023",
                    description:
                      "Learnt about what javascript is all about and modern practices.",
                    icon: MdCode,
                    side: "right",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className={`mb-12 flex ${
                      item.side === "left"
                        ? "md:flex-row"
                        : "md:flex-row-reverse"
                    } w-full items-start`}
                    initial={{
                      opacity: 0,
                      x: item.side === "left" ? -100 : 100,
                    }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.3 + index * 0.2,
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                  >
                    {/* Content Block */}
                    <div className="w-full md:w-5/12 px-4 py-6 bg-gray-900/60 backdrop-blur-md rounded-lg shadow-lg border border-gray-700/50 hover:border-cyan-600/60 transition-colors duration-300">
                      <div className="flex items-center mb-2">
                        <div
                          className={`w-8 h-8 rounded-full bg-gradient-to-br ${
                            item.side === "left"
                              ? "from-cyan-500 to-blue-600"
                              : "from-purple-500 to-indigo-600"
                          } flex items-center justify-center mr-3 shadow-md`}
                        >
                          <item.icon className="w-4 h-4 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-cyan-300">
                          {item.title}
                        </h3>
                      </div>
                      <h4 className="text-base font-medium mb-2 text-white ml-11">
                        {item.organization}
                      </h4>
                      <span className="inline-block px-2.5 py-0.5 mb-3 ml-11 text-xs text-cyan-200 bg-cyan-900/40 rounded-full border border-cyan-800/40">
                        {item.period}
                      </span>
                      <p className="text-sm text-gray-300 leading-relaxed ml-11">
                        {item.description}
                      </p>
                    </div>

                    {/* Connector Dot (Desktop only) */}
                    <div className="hidden md:flex w-2/12 justify-center items-start pt-8">
                      <div
                        className={`w-4 h-4 rounded-full bg-gradient-to-br ${
                          item.side === "left"
                            ? "from-cyan-500 to-blue-600"
                            : "from-purple-500 to-indigo-600"
                        } shadow-lg ring-4 ring-black`}
                      ></div>
                    </div>

                    {/* Spacer for alignment (Desktop only) */}
                    <div className="hidden md:block w-5/12"></div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Portfolio;
