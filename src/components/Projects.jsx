import React from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { projects } from "../data/projects"
import { fadeUp, staggerChildren } from "../utils/motionVariants"
import ProjectCard from "./ProjectCard"
import SectionHeader from "./SectionHeader"

export default function Projects() {
    const navigate = useNavigate()

    // Navigate to dynamic project detail page
    const handleCardClick = (id) => {
        navigate(`/projects/${id}`)
    }

    return (
        <section
            id="projects"
            // Responsive Padding: Reduced vertical padding on mobile (py-20), standard on desktop (md:py-28)
            className="relative py-20 md:py-28 px-4 md:px-6 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden"
        >
            {/* Subtle Radial Background Gradient */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.06),transparent_70%)] dark:bg-[radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.08),transparent_70%)]" />

            <div className="container mx-auto max-w-6xl">
                <motion.div
                    variants={staggerChildren}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }} // Reduced amount for earlier trigger on mobile
                >
                    <SectionHeader
                        title="Projects"
                        subtitle="A showcase of real-world work and creative builds"
                    />

                    {/* Responsive Grid Layout */}
                    <motion.div
                        variants={staggerChildren}
                        // Grid Layout: 1 column on mobile, 2 on tablet, 3 on desktop
                        // Spacing: Tighter gap on mobile (gap-6) vs wider on desktop (gap-8/10)
                        className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
                    >
                        {projects.map((p) => (
                            <motion.div
                                key={p.id}
                                variants={fadeUp}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                onClick={() => handleCardClick(p.id)}
                                // h-full ensures all cards in a row have the same height
                                className="cursor-pointer h-full"
                            >
                                <ProjectCard {...p} />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}