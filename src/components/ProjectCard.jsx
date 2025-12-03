import React from "react"
import { motion } from "framer-motion"

export default function ProjectCard({
   
    title,
    description,
    tags,
    image,
}) {
    return (
        <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
            className="group relative flex flex-col overflow-hidden rounded-2xl bg-white/80 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-500 backdrop-blur-sm w-full h-full"
        >
            {/* Image */}
            {image && (
                <div className="relative h-48 overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="object-cover w-full  transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
            )}

            {/* Content */}
            <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                    <h3 className="text-lg font-bold text-blue-600 dark:text-cyan-400 mb-2 tracking-tight group-hover:underline underline-offset-4">
                        {title}
                    </h3>

                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4 line-clamp-3">
                        {description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag, i) => (
                            <span
                                key={i}
                                className="px-2.5 py-1 text-xs rounded-full bg-slate-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 font-medium tracking-wide"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* ✅ View Details Button - Changed from Link to Div */}
                <div className="mt-6">
                    <div
                        className="inline-block w-full text-center px-5 py-2.5 rounded-full bg-blue-600 text-white font-semibold group-hover:bg-blue-700 dark:bg-cyan-500 dark:group-hover:bg-cyan-600 transition-all duration-300 shadow hover:shadow-lg"
                    >
                        View Details
                    </div>
                </div>
            </div>

            {/* Glow Border */}
            <motion.div
                className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/40 dark:group-hover:border-cyan-400/40 rounded-2xl transition-all duration-300"
            />
        </motion.div>
    )
}