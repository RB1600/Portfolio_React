import React, { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import clsx from "clsx"
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi"
import { AnimatePresence, motion } from "framer-motion"

export default function Navbar() {
    const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark")
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        document.documentElement.classList.toggle("dark", dark)
        localStorage.setItem("theme", dark ? "dark" : "light")
    }, [dark])

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30)
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const handleNavClick = (e, targetId) => {
        e.preventDefault()
        setOpen(false)

        setTimeout(() => {
            if (location.pathname === "/") {
                const el = document.querySelector(targetId)
                if (el) {
                    const offset = 80
                    const bodyRect = document.body.getBoundingClientRect().top
                    const elementRect = el.getBoundingClientRect().top
                    const elementPosition = elementRect - bodyRect
                    const offsetPosition = elementPosition - offset

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                    })
                }
            } else {
                window.location.href = `/${targetId}`
            }
        }, 300)
    }

    const navLinks = [
        { name: "Skills", href: "#skills" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ]

    return (
        <header
            className={clsx(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b",
                scrolled
                    ? "backdrop-blur-md bg-white/70 dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 shadow-sm"
                    : "bg-transparent border-transparent"
            )}
        >
            <nav className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
                <Link
                    to="/"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent tracking-tight hover:scale-105 transition-transform"
                >
                    &lt;Rohit /&gt;
                </Link>

                <div className="hidden md:flex items-center gap-8 text-gray-700 dark:text-gray-200 font-medium text-sm">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}

                    <button
                        onClick={() => setDark(!dark)}
                        aria-label="Toggle Theme"
                        className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition text-gray-700 dark:text-gray-200"
                    >
                        {dark ? <FiSun /> : <FiMoon />}
                    </button>
                </div>

                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={() => setDark(!dark)}
                        aria-label="Toggle Theme"
                        className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-gray-700 dark:text-gray-200"
                    >
                        {dark ? <FiSun /> : <FiMoon />}
                    </button>
                    <button
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle Menu"
                        className="text-gray-800 dark:text-white"
                    >
                        {open ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shadow-lg overflow-hidden"
                    >
                        <div className="flex flex-col p-4 gap-4 text-center font-medium text-gray-800 dark:text-gray-200">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="py-3 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors hover:text-blue-600 dark:hover:text-cyan-400"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}