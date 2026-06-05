// src/components/Education.jsx
import React from "react"
import { motion } from "framer-motion"
import SectionHeader from "./SectionHeader"
import { education } from "../data/education"
import { fadeUp, staggerChildren } from "../utils/motionVariants"
import { FiBookOpen } from "react-icons/fi"

export default function Education() {
    return (
        <section
            id="education"
            className="relative py-28 px-6 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden"
        >
            {/* Decorative background accent */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.05),transparent_70%)] dark:bg-[radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.07),transparent_70%)]" />

            <div className="container mx-auto max-w-5xl">
                <SectionHeader
                    title="Education"
                    subtitle="Academic background and qualifications"
                />

                <motion.div
                    variants={staggerChildren}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="relative mt-16 border-l border-slate-300 dark:border-slate-700 pl-6 space-y-12"
                >
                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            variants={fadeUp}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-4"
                        >
                            {/* Timeline dot */}
                            <span className="absolute -left-[11px] top-2 w-5 h-5 bg-blue-600 dark:bg-cyan-500 rounded-full shadow-md flex items-center justify-center">
                                <FiBookOpen className="text-white text-sm" />
                            </span>

                            {/* Card */}
                            <div className="rounded-2xl bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300 p-6">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                                    <h3 className="text-lg font-semibold text-blue-600 dark:text-cyan-400">
                                        {edu.degree}
                                    </h3>
                                    <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                                        {edu.period}
                                    </span>
                                </div>

                                <p className="text-gray-800 dark:text-gray-200 font-medium mb-2">
                                    {edu.institution} <span className="text-gray-500">— {edu.location}</span>
                                </p>

                                {edu.grade && (
                                    <span className="inline-block px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-gray-800 dark:text-gray-200 rounded-full">
                                        {edu.grade}
                                    </span>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
