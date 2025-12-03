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
            className="relative py-28 px-6 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden"
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
                    viewport={{ once: true, amount: 0.3 }}
                    className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch"
                >
                    {skills.map((skill, i) => (
                        <motion.div key={i} variants={fadeUp} className="flex">
                            <SkillCard category={skill.category} items={skill.items} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
