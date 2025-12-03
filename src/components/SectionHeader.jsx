import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp } from '../utils/motionVariants'

export default function SectionHeader({ title, subtitle }) {
    return (
        <motion.div variants={fadeUp} className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-2">{title}</h2>
            {subtitle && <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{subtitle}</p>}
        </motion.div>
    )
}
