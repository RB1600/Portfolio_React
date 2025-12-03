// src/components/Testimonials.jsx
import React from "react"
import { motion } from "framer-motion"
import { testimonials } from "../data/testimonials"
import SectionHeader from "./SectionHeader"
import { fadeUp, staggerChildren } from "../utils/motionVariants"
import { FaQuoteLeft } from "react-icons/fa" // ✅ fixed import

export default function Testimonials() {
    return (
        <section
            id="testimonials"
            className="relative py-28 px-6 bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden"
        >
            {/* Subtle radial background accent */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.06),transparent_70%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_70%)]" />

            <div className="container mx-auto max-w-5xl text-center">
                {/* Section Header */}
                <SectionHeader
                    title="Testimonials"
                    subtitle="What clients and colleagues say about me"
                />

                {/* Testimonials Grid */}
                <motion.div
                    variants={staggerChildren}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            whileHover={{ scale: 1.03, y: -3 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                            className="relative flex flex-col justify-between h-full p-8 rounded-2xl bg-white/80 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
                        >
                            {/* Large Quote Icon (Background watermark style) */}
                            <div className="absolute -top-2 left-4 text-6xl text-blue-600/10 dark:text-cyan-400/10 select-none pointer-events-none">
                                <FaQuoteLeft />
                            </div>

                            {/* Feedback Text */}
                            <p className="italic text-gray-700 dark:text-gray-300 leading-relaxed mb-6 relative z-10">
                                “{t.feedback}”
                            </p>

                            {/* Divider */}
                            <div className="w-16 h-[2px] mx-auto mb-4 bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-cyan-400/0" />

                            {/* Name & Role */}
                            <div>
                                <h4 className="font-semibold text-lg text-blue-600 dark:text-cyan-400 mb-1">
                                    {t.name}
                                </h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{t.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Decorative bottom gradient line */}
                <motion.div
                    variants={fadeUp}
                    className="mt-16 w-full h-[2px] bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-cyan-400/0"
                />
            </div>
        </section>
    )
}
