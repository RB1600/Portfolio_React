import React from "react"
import { motion } from "framer-motion"
import { FiArrowRight } from "react-icons/fi"

export default function ProjectCard({ title, description, tags, image }) {
    // Whole card lifts on hover; no scale, to avoid compounding the image zoom
    return (
        <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-blue-400/60 dark:hover:border-cyan-400/40 backdrop-blur-sm"
        >
            {/* Image — 16:9 frame matched to the project images so nothing is cropped */}
            {image && (
                <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-900">
                    <img
                        src={image}
                        alt={title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    {/* Bottom gradient: subtle by default, deepens on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-90" />
                </div>
            )}

            {/* Content */}
            <div className="flex flex-1 flex-col p-5 md:p-6">
                {/* Title */}
                <h3 className="mb-2 text-lg md:text-xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-cyan-400">
                    {title}
                </h3>

                {/* Description: capped at 3 lines for uniform card height */}
                <p className="mb-5 text-sm md:text-[0.95rem] leading-relaxed text-slate-600 dark:text-slate-400 line-clamp-3">
                    {description}
                </p>

                {/* Footer pinned to the bottom so every card lines up */}
                <div className="mt-auto">
                    {/* Tech stack tags */}
                    <div className="mb-4 flex flex-wrap gap-2">
                        {tags.map((tag, i) => (
                            <span
                                key={i}
                                className="rounded-full border border-slate-200 dark:border-slate-600 bg-slate-100 dark:bg-slate-700/60 px-2.5 py-1 text-xs font-medium tracking-wide text-slate-700 dark:text-slate-300"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Call to action (whole card is clickable; this is the affordance) */}
                    <div className="flex items-center gap-1.5 border-t border-slate-100 dark:border-slate-700/60 pt-4 text-sm font-semibold text-blue-600 dark:text-cyan-400">
                        <span>View Details</span>
                        <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
