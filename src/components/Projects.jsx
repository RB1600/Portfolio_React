// src/components/Projects.jsx
import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { projects } from "../data/projects"
import { fadeUp, staggerChildren } from "../utils/motionVariants"
import ProjectCard from "./ProjectCard"
import SectionHeader from "./SectionHeader"

export default function Projects() {
    return (
        <section
            id="projects"
            className="relative py-28 px-6 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden"
        >
            {/* Background gradient */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.06),transparent_70%)] dark:bg-[radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.08),transparent_70%)]" />

            <div className="container mx-auto max-w-6xl">
                <motion.div
                    variants={staggerChildren}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <SectionHeader
                        title="Projects"
                        subtitle="A showcase of real-world work and creative builds"
                    />

                    {/* Projects Grid */}
                    <motion.div
                        variants={staggerChildren}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
                    >
                        {projects.map((p) => (
                            <motion.div
                                key={p.id}
                                variants={fadeUp}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            >
                                {/* ✅ Card links to /projects/:id */}
                                <Link to={`/projects/${p.id}`}>
                                    <ProjectCard {...p} />
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
