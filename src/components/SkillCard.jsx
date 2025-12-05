// src/components/SkillCard.jsx
import React from "react"
import { motion } from "framer-motion"
import { FiChevronRight } from "react-icons/fi"

export default function SkillCard({ category, items }) {
    return (
        <motion.div
            // Animation: Smooth hover lift effect
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            // Layout: Responsive padding (p-5 on mobile, md:p-6 on desktop) & added 'group' class for child hover effects
            className="group relative flex flex-col justify-between w-full p-5 md:p-6 bg-white/80 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 backdrop-blur-sm overflow-hidden"
        >
            {/* Background Glow Accent: Visible on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

            <div className="relative z-10">
                {/* Category Header: Responsive font size */}
                <h3 className="flex items-center gap-2 text-lg md:text-xl font-bold text-blue-600 dark:text-cyan-400 mb-3 md:mb-4">
                    <FiChevronRight className="text-blue-500 dark:text-cyan-400" /> {category}
                </h3>

                {/* Skills List: Flex wrap for responsive layout */}
                <ul className="flex flex-wrap gap-2 md:gap-3">
                    {items.map((skill) => (
                        <li
                            key={skill}
                            // Tag Styling: Smaller text on mobile (text-xs) for better fit, larger on desktop (text-sm)
                            className="px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium bg-slate-100 dark:bg-slate-700 text-gray-700 dark:text-gray-200 rounded-full border border-slate-200 dark:border-slate-600 hover:border-blue-400 dark:hover:border-cyan-400 transition-colors cursor-default"
                        >
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Bottom Glow Line */}
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-cyan-400/0" />
        </motion.div>
    )
}