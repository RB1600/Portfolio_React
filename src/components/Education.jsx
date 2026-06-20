// src/components/Education.jsx
import React from "react"
import { motion } from "framer-motion"
import SectionHeader from "./SectionHeader"
import { education } from "../data/education"
import { fadeUp, staggerChildren } from "../utils/motionVariants"
import { FiBookOpen, FiMapPin, FiAward, FiCalendar } from "react-icons/fi"

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
                    className="relative mt-16 border-l border-slate-300 dark:border-slate-700 pl-6 space-y-10"
                >
                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            variants={fadeUp}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-4"
                        >
                            {/* Timeline dot */}
                            <span className="absolute -left-[11px] top-6 w-5 h-5 bg-blue-600 dark:bg-cyan-500 rounded-full shadow-md flex items-center justify-center ring-4 ring-white dark:ring-slate-950">
                                <FiBookOpen className="text-white text-[11px]" />
                            </span>

                            {/* Card */}
                            <div className="rounded-2xl bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg hover:border-blue-400/50 dark:hover:border-cyan-400/40 transition-all duration-300 p-6">
                                {/* Header: degree + period */}
                                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between mb-3">
                                    <h3 className="text-lg md:text-xl font-bold text-blue-600 dark:text-cyan-400">
                                        {edu.degree}
                                    </h3>
                                    <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-slate-100 dark:bg-slate-700/60 px-3 py-1 text-xs font-semibold text-slate-600 dark:text-slate-300 whitespace-nowrap">
                                        <FiCalendar className="shrink-0" /> {edu.period}
                                    </span>
                                </div>

                                {/* Institution + location */}
                                <p className="text-base font-semibold text-slate-900 dark:text-white">
                                    {edu.institution}
                                </p>
                                <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
                                    <FiMapPin className="shrink-0" /> {edu.location}
                                </p>

                                {/* Awarding university */}
                                {edu.university && (
                                    <p className="mt-3 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                                        <FiAward className="shrink-0 text-blue-500 dark:text-cyan-400" />
                                        {edu.university}
                                    </p>
                                )}

                                {/* Grade */}
                                {edu.grade && (
                                    <span className="mt-4 inline-block rounded-full border border-blue-100 dark:border-slate-600 bg-blue-50 dark:bg-slate-700 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-cyan-300">
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
