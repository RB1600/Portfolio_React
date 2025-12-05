// src/components/ScrollProgress.jsx
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronUp } from 'react-icons/fi'

export default function ScrollProgress() {
    const [showTop, setShowTop] = useState(false)

    // Monitor scroll position to toggle visibility
    useEffect(() => {
        const handleScroll = () => setShowTop(window.scrollY > 400)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <AnimatePresence>
            {showTop && (
                <motion.button
                    onClick={scrollToTop}
                    initial={{ opacity: 0, y: 50, scale: 0.5 }}
                    animate={{ 
                        opacity: 1, 
                        y: 0, 
                        scale: 1,
                        transition: { type: "spring", stiffness: 200, damping: 20 }
                    }}
                    exit={{ opacity: 0, y: 50, scale: 0.5, transition: { duration: 0.2 } }}
                    whileHover={{ y: -5 }} // Simple lift effect on hover
                    className="
                        fixed 
                        bottom-5 right-5 md:bottom-8 md:right-8 
                        p-3 md:p-4 
                        rounded-full 
                        text-white shadow-lg shadow-blue-500/30 dark:shadow-cyan-400/20
                        bg-blue-600/90 hover:bg-blue-700 
                        dark:bg-cyan-500/90 dark:hover:bg-cyan-600
                        backdrop-blur-md 
                        border border-white/20 dark:border-white/10
                        z-[90] 
                        transition-colors duration-300
                        outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-cyan-300
                    "
                    aria-label="Scroll to top"
                >
                    {/* Icon: Slightly larger on desktop */}
                    <FiChevronUp className="w-5 h-5 md:w-6 md:h-6" />
                </motion.button>
            )}
        </AnimatePresence>
    )
}