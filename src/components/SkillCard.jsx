// src/components/SkillCard.jsx
import React from "react"
import { motion } from "framer-motion"
import { FiChevronRight } from "react-icons/fi"

export default function SkillCard({ category, items }) {
    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative flex flex-col justify-between w-full p-6 bg-white/80 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 backdrop-blur-sm overflow-hidden"
        >
            {/* Glow accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

            <div className="relative z-10">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-blue-600 dark:text-cyan-400 mb-4">
                    <FiChevronRight className="text-blue-500 dark:text-cyan-400" /> {category}
                </h3>

                <ul className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                        <li
                            key={skill}
                            className="px-3 py-1.5 text-sm font-medium bg-slate-100 dark:bg-slate-700 text-gray-800 dark:text-gray-200 rounded-full border border-transparent hover:border-blue-400 dark:hover:border-cyan-400 transition-colors"
                        >
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Subtle bottom glow line */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-cyan-400/0" />
        </motion.div>
    )
}
