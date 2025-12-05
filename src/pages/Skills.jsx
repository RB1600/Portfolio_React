// src/components/Skills.jsx
import React from "react"
import { motion } from "framer-motion"
import { skills } from "../data/skills"
import SectionHeader from "../components/SectionHeader"
import SkillCard from "../components/SkillCard"
import { staggerChildren, fadeUp } from "../utils/motionVariants"

export default function Skills() {
    return (
        <section
            id="skills"
            // Responsive Padding: Reduced vertical padding on mobile (py-20) vs desktop (md:py-28)
            className="relative py-20 md:py-28 px-4 md:px-6 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden"
        >
            {/* Soft accent background */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.05),transparent_70%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.07),transparent_70%)]" />

            <div className="container mx-auto max-w-6xl">
                <SectionHeader
                    title="Skills"
                    subtitle="Technologies, frameworks & tools I use to build exceptional digital products"
                />

                <motion.div
                    variants={staggerChildren}
                    initial="hidden"
                    whileInView="show"
                    // Animation Trigger: Triggers earlier on mobile (0.1) so users don't see blank space
                    viewport={{ once: true, amount: 0.1 }}
                    // Responsive Grid: 
                    // 1. Spacing: gap-6 (mobile) -> gap-8 (tablet) -> gap-10 (desktop)
                    // 2. Margin: mt-12 (mobile) -> mt-16 (desktop)
                    className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 items-stretch"
                >
                    {skills.map((skill, i) => (
                        <motion.div 
                            key={i} 
                            variants={fadeUp} 
                            className="flex h-full" // Ensures the card takes full height of the grid row
                        >
                            <SkillCard category={skill.category} items={skill.items} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}