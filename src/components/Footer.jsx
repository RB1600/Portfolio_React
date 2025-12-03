// src/components/Footer.jsx
import React from "react"
import { motion } from "framer-motion"
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi"

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="relative py-10 px-6 bg-gradient-to-t from-slate-100 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border-t border-slate-200/60 dark:border-slate-800/80 overflow-hidden">
            {/* Subtle radial glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/5 dark:bg-cyan-500/10 blur-3xl rounded-full -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="container mx-auto flex flex-col items-center justify-center gap-6 text-center"
            >
                {/* Brand / Logo */}
                <motion.h3
                    whileHover={{ scale: 1.05 }}
                    className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent"
                >
                    &lt;Rohit.Dev /&gt;
                </motion.h3>

                {/* Social Links */}
                <div className="flex gap-6 text-2xl text-gray-600 dark:text-gray-300">
                    {/* GitHub */}
                    <a
                        href="https://github.com/RB1600"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="hover:text-blue-600 dark:hover:text-cyan-400 transition transform hover:scale-110"
                    >
                        <FiGithub />
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/rpb16/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="hover:text-blue-600 dark:hover:text-cyan-400 transition transform hover:scale-110"
                    >
                        <FiLinkedin />
                    </a>

                    {/* ✅ Fixed Mail Link — no blank page */}
                    <a
                        href="mailto:rohitb1600@gmail.com?subject=Let's%20Connect&body=Hi%20Rohit,%0D%0A%0D%0A"
                        rel="noopener noreferrer"
                        aria-label="Email"
                        className="hover:text-blue-600 dark:hover:text-cyan-400 transition transform hover:scale-110"
                    >
                        <FiMail />
                    </a>
                </div>

                {/* Divider Line */}
                <div className="w-32 h-[2px] bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-cyan-400/0 my-3" />

                {/* Copyright */}
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    © {currentYear} &lt;Rohit.Dev /&gt; All rights reserved.
                </p>
            </motion.div>
        </footer>
    )
}
