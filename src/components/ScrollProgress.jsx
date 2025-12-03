// src/components/ScrollProgress.jsx
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiChevronUp } from 'react-icons/fi'

export default function ScrollProgress() {
    const [showTop, setShowTop] = useState(false)

    useEffect(() => {
        const handleScroll = () => setShowTop(window.scrollY > 400)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={
                showTop
                    ? {
                        opacity: 1,
                        y: [0, -4, 0],
                        scale: 1,
                        transition: {
                            opacity: { duration: 0.4 },
                            y: { repeat: Infinity, duration: 2.5, ease: 'easeInOut' },
                        },
                    }
                    : { opacity: 0, y: 50, scale: 0.8 }
            }
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="
        fixed bottom-6 right-6 
        p-3 rounded-full 
        text-white shadow-lg 
        bg-blue-600/80 hover:bg-blue-700/90
        dark:bg-cyan-500/80 dark:hover:bg-cyan-600/90
        backdrop-blur-md 
        border border-white/20 dark:border-white/10
        transition-all duration-300 
        focus:outline-none focus:ring-2 focus:ring-blue-400/50 
        z-[99]
      "
            aria-label="Scroll to top"
        >
            <motion.div
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 250, damping: 12 }}
            >
                <FiChevronUp size={22} />
            </motion.div>
        </motion.button>
    )
}
