// src/components/Hero.jsx
import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { fadeUp, staggerChildren } from "../utils/motionVariants"
import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi"
import Profile from '../assets/Profile.jpeg'

const roles = ["MERN Stack Developer", "Full-Stack Engineer", "UI Enthusiast"]

// Typewriter Component
function Typewriter({ items, speed = 120, pause = 1400 }) {
    const [i, setI] = useState(0)
    const [slice, setSlice] = useState("")
    const [typing, setTyping] = useState(true)

    useEffect(() => {
        let timeout
        if (typing) {
            if (slice.length < items[i].length)
                timeout = setTimeout(() => setSlice(items[i].slice(0, slice.length + 1)), speed)
            else timeout = setTimeout(() => setTyping(false), pause)
        } else {
            if (slice.length > 0) timeout = setTimeout(() => setSlice(slice.slice(0, -1)), speed / 2)
            else {
                setTyping(true)
                setI((p) => (p + 1) % items.length)
            }
        }
        return () => clearTimeout(timeout)
    }, [items, i, slice, typing, speed, pause])

    return (
        <span className="text-blue-600 dark:text-cyan-400 font-semibold">
            {slice}
            <span className="animate-pulse">|</span>
        </span>
    )
}

export default function Hero() {
    return (
        <section
            id="hero"
            // Responsive Padding: Adjusted vertical padding for mobile (py-12) vs desktop (md:pt-32) to prevent content being too low
            className="relative flex flex-col items-center justify-center pt-24 pb-16 md:pt-32 md:pb-32 px-4 text-center overflow-hidden min-h-[90vh]"
        >
            {/* Soft animated gradient background */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900" />
            
            {/* Background Glow Blob: Reduced size on mobile (w-64) to avoid overwhelming the screen */}
            <motion.div
                className="absolute -z-10 w-64 h-64 md:w-[500px] md:h-[500px] bg-blue-500/10 dark:bg-cyan-500/10 blur-3xl rounded-full top-20 left-1/2 -translate-x-1/2 animate-pulse"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 2 }}
            />

            <motion.div
                variants={staggerChildren}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="max-w-3xl mx-auto flex flex-col items-center"
            >
                {/* Avatar Section */}
                <motion.div variants={fadeUp} className="relative flex justify-center mb-6 md:mb-8">
                    <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-blue-500/30 to-cyan-400/30 rounded-full scale-110 -z-10 animate-pulse" />
                    <motion.img
                        src={Profile}
                        alt="Rohit Bansode"
                        // Responsive Image: Smaller on mobile (w-32) vs Larger on desktop (md:w-48)
                        className="w-32 h-32 md:w-48 md:h-48 rounded-full shadow-xl border-4 border-blue-600 dark:border-cyan-400 object-cover"
                        whileHover={{ scale: 1.06, rotate: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    />
                </motion.div>

                {/* Headline */}
                <motion.h1
                    variants={fadeUp}
                    // Responsive Typography: text-4xl for mobile prevents word breaking, text-6xl for desktop impact
                    className="text-4xl md:text-6xl font-extrabold mb-3 leading-tight tracking-tight text-slate-900 dark:text-white"
                >
                    Hi, I’m{" "}
                    <br className="md:hidden" /> {/* Force break on mobile only if needed */}
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent whitespace-nowrap">
                        Rohit Bansode
                    </span>
                </motion.h1>

                {/* Role / Tagline */}
                <motion.p variants={fadeUp} className="text-lg md:text-2xl font-medium mb-5 md:mb-6 h-8 md:h-10 text-slate-700 dark:text-slate-200">
                    <Typewriter items={roles} />
                </motion.p>

                {/* Subtext */}
                <motion.p
                    variants={fadeUp}
                    className="text-gray-600 dark:text-gray-300 mb-8 max-w-xl md:max-w-2xl mx-auto text-base md:text-lg leading-relaxed px-2"
                >
                    I create high-performance web applications that blend clean code, intuitive
                    design, and modern technologies — turning ideas into elegant digital products.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={fadeUp}
                    className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 w-full md:w-auto"
                >
                    
                    <a
                        href="/Public/resume.pdf"
                        download
                        className="flex items-center justify-center gap-2 border border-slate-300 dark:border-slate-600 px-6 py-3 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition text-slate-800 dark:text-slate-200 w-full sm:w-auto"
                    >
                        <FiDownload /> Resume
                    </a>
        
        <a
                        href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTNqhFqKLBKdfgkLFKvVXjXMgvqlRHcHRVnxZCzZLfJtvFchBxlXLzHfjCPqZDnHhZZBrL"
                        target="_blank" 
                        rel="noreferrer"
                        className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 transition-all shadow-md hover:shadow-lg w-full sm:w-auto"
                    >
                        Hire Me
                    </a>

                    <a
                        href="#projects"
                        className="border border-blue-600 dark:border-cyan-400 text-blue-600 dark:text-cyan-400 px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-slate-900 font-semibold transition w-full sm:w-auto"
                    >
                        View Work
                    </a>
                </motion.div>

                {/* Social Icons */}
                <motion.div
                    variants={fadeUp}
                    className="flex justify-center gap-6 text-gray-600 dark:text-gray-300 text-2xl"
                >
                    <a
                        href="https://github.com/RB1600"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="hover:text-blue-600 dark:hover:text-cyan-400 transition transform hover:scale-110"
                    >
                        <FiGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/rpb16/ "
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="hover:text-blue-600 dark:hover:text-cyan-400 transition transform hover:scale-110"
                    >
                        <FiLinkedin />
                    </a>
                    <a
                        href="mailto:rohitbansode1600@gmail.com" // Removed extra space for better compatibility
                        aria-label="Email"
                        className="hover:text-blue-600 dark:hover:text-cyan-400 transition transform hover:scale-110"
                    >
                        <FiMail />
                    </a>
                </motion.div>

                {/* Floating Tagline line */}
                <motion.p
                    variants={fadeUp}
                    className="mt-10 md:mt-16 text-xs md:text-sm uppercase tracking-widest text-gray-400 dark:text-gray-500"
                >
                    Transforming Vision Into Scalable Reality   ~ Rohit
                </motion.p>
            </motion.div>
        </section>
    )
}