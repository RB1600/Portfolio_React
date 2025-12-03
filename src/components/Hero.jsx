// src/components/Hero.jsx
import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { fadeUp, staggerChildren } from "../utils/motionVariants"
import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi"
import Profile from '../assets/Profile.jpeg'

const roles = ["MERN Stack Developer", "Full-Stack Engineer", "UI Enthusiast"]

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
            className="relative flex flex-col items-center justify-center pt-20 pb-28 text-center overflow-hidden"
        >
            {/* Soft animated gradient background */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900" />
            <motion.div
                className="absolute -z-10 w-[500px] h-[500px] bg-blue-500/10 dark:bg-cyan-500/10 blur-3xl rounded-full top-10 left-1/2 -translate-x-1/2 animate-pulse"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 2 }}
            />

            <motion.div
                variants={staggerChildren}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="max-w-3xl mx-auto"
            >
                {/* Avatar */}
                <motion.div variants={fadeUp} className="relative flex justify-center mb-6">
                    <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-blue-500/30 to-cyan-400/30 rounded-full scale-110 -z-10 animate-pulse" />
                    <motion.img
                        src={Profile}
                        alt="Rohit Bansode"
                        className="w-40 h-40 md:w-48 md:h-48 rounded-full shadow-xl border-4 border-blue-600 dark:border-cyan-400 object-cover"
                        whileHover={{ scale: 1.06, rotate: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    />
                </motion.div>

                {/* Headline */}
                <motion.h1
                    variants={fadeUp}
                    className="text-5xl md:text-6xl font-extrabold mb-3 leading-tight tracking-tight"
                >
                    Hi, I’m{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                        Rohit Bansode
                    </span>
                </motion.h1>

                {/* Role / Tagline */}
                <motion.p variants={fadeUp} className="text-xl font-medium mb-4">
                    <Typewriter items={roles} />
                </motion.p>

                {/* Subtext */}
                <motion.p
                    variants={fadeUp}
                    className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto text-lg"
                >
                    I create high-performance web applications that blend clean code, intuitive
                    design, and modern technologies — turning ideas into elegant digital products.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={fadeUp}
                    className="flex flex-wrap justify-center gap-4 mb-10"
                >
                    <a
                        href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTNqhFqKLBKdfgkLFKvVXjXMgvqlRHcHRVnxZCzZLfJtvFchBxlXLzHfjCPqZDnHhZZBrL"
                        className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 transition-all shadow-md hover:shadow-lg"
                    >
                        Hire Me
                    </a>
                    <a
                        href="/Public/resume.pdf"
                        download
                        className="flex items-center gap-2 border border-slate-300 dark:border-slate-600 px-6 py-3 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                    >
                        <FiDownload /> Resume
                    </a>
                    <a
                        href="#projects"
                        className="border border-blue-600 dark:border-cyan-400 text-blue-600 dark:text-cyan-400 px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-slate-900 font-semibold transition"
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
                        href="mailto: rohitbansode1600@gmail.com"
                        aria-label="Email"
                        className="hover:text-blue-600 dark:hover:text-cyan-400 transition transform hover:scale-110"
                    >
                        <FiMail />
                    </a>
                </motion.div>

                {/* Floating Tagline line */}
                <motion.p
                    variants={fadeUp}
                    className="mt-10 text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400"
                >
                    Transforming Vision Into Scalable Reality   ~ Rohit
                </motion.p>
            </motion.div>
        </section>
    )
}
