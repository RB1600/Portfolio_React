// src/pages/ProjectDetails.jsx
import React from "react"
import { useParams, Link } from "react-router-dom"
import { projects } from "../data/projects"
import { motion } from "framer-motion"
import { FiArrowLeft, FiGithub, FiExternalLink } from "react-icons/fi"

export default function ProjectDetails() {
    const { id } = useParams()
    const project = projects.find((p) => p.id === Number(id))



    if (!project)
        return <p className="text-center py-24 text-gray-500">Project not found</p>

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="py-24 px-6 container mx-auto max-w-3xl"
        >
            {/* Back Link */}
            <Link
                to="/"
                className="flex items-center gap-2 text-blue-600 dark:text-cyan-400 hover:underline mb-10"
            >
                <FiArrowLeft /> Back to Projects
            </Link>

            <h1 className="text-4xl font-bold mb-4 text-blue-600 dark:text-cyan-400">
                {project.title}
            </h1>

            <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                {project.description}
            </p>

            <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-xl shadow-lg mb-8"
            />

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, i) => (
                    <span
                        key={i}
                        className="px-3 py-1 text-sm bg-slate-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
                {project.githubLink && (
                    <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-5 py-2 bg-gray-100 dark:bg-slate-800 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 transition"
                    >
                        <FiGithub /> View Code
                    </a>
                )}
                {project.liveDemoLink && (
                    <a
                        href={project.liveDemoLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 transition"
                    >
                        <FiExternalLink /> Live Demo
                    </a>
                )}
            </div>
        </motion.section>
    )
}
