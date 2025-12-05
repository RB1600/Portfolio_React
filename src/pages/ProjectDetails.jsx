// src/pages/ProjectDetails.jsx
import React, { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { projects } from "../data/projects"
import { motion } from "framer-motion"
import { FiArrowLeft, FiGithub, FiExternalLink, FiLayers, FiCheckCircle } from "react-icons/fi"

export default function ProjectDetails() {
    const { id } = useParams()
    const navigate = useNavigate()
    
    // Find project by ID (ensure type safety with Number())
    const project = projects.find((p) => p.id === Number(id))

    // Scroll to top on page load for better UX
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Fallback if project is not found
    if (!project) return (
        <div className="min-h-screen flex items-center justify-center text-slate-500 font-medium dark:text-slate-400">
            Project not found.
        </div>
    )

    return (
        <section className="relative min-h-screen py-20 md:py-28 px-4 md:px-6 bg-slate-50 dark:bg-slate-950 overflow-hidden leading-relaxed">
            
            {/* --- 1. Ambient Background Effects (Responsive Glow) --- */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-400/20 dark:bg-blue-900/20 blur-[80px] md:blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-400/20 dark:bg-cyan-900/20 blur-[80px] md:blur-[100px]" />
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                
                {/* --- 2. Back Button --- */}
                <motion.button
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => navigate(-1)}
                    className="group flex items-center gap-2 mb-8 md:mb-12 px-4 py-2 rounded-lg bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 transition-all shadow-sm"
                >
                    <FiArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" /> 
                    <span>Back to projects</span>
                </motion.button>

                {/* --- 3. Split Layout Grid --- */}
                {/* Layout: Stacked on mobile (grid-cols-1), Split on desktop (lg:grid-cols-12) */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-start"
                >
                    
                    {/* === LEFT COLUMN: Image & Action Buttons (7 Columns) === */}
                    <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8">
                        
                        {/* Image Frame with Glow */}
                        <div className="relative group rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl shadow-blue-900/5 dark:shadow-blue-900/20 border border-slate-200/50 dark:border-slate-700/50 bg-slate-100 dark:bg-slate-800/50">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="relative z-10 w-full h-auto object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-[1.02]"
                            />
                        </div>

                        {/* Action Buttons */}
                        {/* Stack on tiny screens, side-by-side on small tablets+ */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                            {project.liveDemoLink && (
                                <a
                                    href={project.liveDemoLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group flex items-center justify-center gap-3 px-6 py-3.5 md:py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-xl md:rounded-2xl font-bold text-base md:text-lg shadow-lg shadow-blue-500/20 transition-all transform hover:-translate-y-1"
                                >
                                    <FiExternalLink className="text-xl group-hover:rotate-12 transition-transform" /> 
                                    <span>Live Demo</span>
                                </a>
                            )}
                            {project.githubLink && (
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group flex items-center justify-center gap-3 px-6 py-3.5 md:py-4 bg-white dark:bg-slate-900 text-slate-800 dark:text-white border-2 border-slate-200 dark:border-slate-700 hover:border-slate-900 dark:hover:border-slate-100 rounded-xl md:rounded-2xl font-bold text-base md:text-lg shadow-md transition-all transform hover:-translate-y-1"
                                >
                                    <FiGithub className="text-xl group-hover:rotate-12 transition-transform"/> 
                                    <span>Source Code</span>
                                </a>
                            )}
                        </div>
                    </div>

                    {/* === RIGHT COLUMN: Details & Info (5 Columns) === */}
                    <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8 lg:py-2">
                        
                        <div>
                            {/* Tech Stack Pills */}
                            <div className="flex flex-wrap items-center gap-2 mb-4 md:mb-6">
                                <FiLayers className="text-blue-500 dark:text-cyan-400 text-lg shrink-0 mr-2" />
                                {project.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-2.5 py-1 md:px-3 md:py-1 text-xs md:text-sm font-semibold rounded-lg bg-blue-50 dark:bg-slate-800/80 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-slate-700"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Main Title: Smaller on mobile, Larger on desktop */}
                            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-white dark:via-blue-200 dark:to-white leading-tight">
                                {project.title}
                            </h1>
                        </div>

                        {/* Description */}
                        <div className="prose prose-base md:prose-lg dark:prose-invert text-slate-600 dark:text-slate-300 leading-relaxed">
                            <p>{project.description}</p>
                        </div>

                        {/* Extra Details Box (Glassmorphism) */}
                        <div className="p-5 md:p-6 rounded-2xl md:rounded-3xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/20 dark:border-slate-700/30 shadow-lg shadow-slate-200/20 dark:shadow-none">
                            <h3 className="text-base md:text-lg font-bold text-slate-800 dark:text-slate-100 mb-3">
                                Key Highlights
                            </h3>
                            <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-sm md:text-base">
                                <li className="flex items-start gap-3">
                                    <FiCheckCircle className="text-green-500 mt-1 shrink-0" /> 
                                    <span>Fully Responsive & Mobile Friendly</span>
                                </li>
                                <li className="flex items-start gap-3">
                                     <FiCheckCircle className="text-green-500 mt-1 shrink-0" />
                                    <span>Optimized Performance & Clean Code</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    )
}