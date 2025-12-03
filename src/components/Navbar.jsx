// src/components/Navbar.jsx
import React, { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import clsx from "clsx"
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi"

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

    // Smooth scroll handler
    const handleNavClick = (e, targetId) => {
        e.preventDefault()
        setOpen(false)

        if (location.pathname === "/") {
            const el = document.querySelector(targetId)
            if (el) {
                window.scrollTo({
                    top: el.offsetTop - 80,
                    behavior: "smooth",
                })
            }
        } else {
            // Navigate to home and anchor
            window.location.href = `/${targetId}`
        }
    }

    return (
        <header
            className={clsx(
                "fixed w-full z-50 transition-all duration-300",
                scrolled ? "backdrop-blur bg-white/70 dark:bg-slate-900/60 shadow" : "bg-transparent"
            )}
        >
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link
                    to="/"
                    className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent"
                >
                    &lt;Rohit /&gt;
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6 text-gray-800 dark:text-gray-200 font-medium">
                    <a href="#skills" onClick={(e) => handleNavClick(e, "#skills")} className="hover:text-blue-600 dark:hover:text-cyan-400">
                        Skills
                    </a>
                     <a href="#experience" onClick={(e) => handleNavClick(e, "#experience")} className="hover:text-blue-600 dark:hover:text-cyan-400">
                        Experience
                    </a>

                    <a href="#projects" onClick={(e) => handleNavClick(e, "#projects")} className="hover:text-blue-600 dark:hover:text-cyan-400">
                        Projects
                    </a>
                   
                    <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")} className="hover:text-blue-600 dark:hover:text-cyan-400">
                        Contact
                    </a>

                    {/* Theme toggle */}
                    <button
                        onClick={() => setDark((d) => !d)}
                        className="p-2 rounded hover:bg-slate-200 dark:hover:bg-slate-800 transition"
                    >
                        {dark ? <FiSun /> : <FiMoon />}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-2">
                    <button
                        onClick={() => setDark((d) => !d)}
                        className="p-2 rounded hover:bg-slate-200 dark:hover:bg-slate-800"
                    >
                        {dark ? <FiSun /> : <FiMoon />}
                    </button>
                    <button onClick={() => setOpen((o) => !o)}>
                        {open ? <FiX size={22} /> : <FiMenu size={22} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Dropdown */}
            {open && (
                <div className="md:hidden flex flex-col bg-white dark:bg-slate-900 px-6 pb-4 gap-3 font-medium text-gray-800 dark:text-gray-200">
                    <a href="#skills" onClick={(e) => handleNavClick(e, "#skills")} className="py-2 hover:text-blue-600 dark:hover:text-cyan-400">
                        Skills
                    </a>
                  
                    <a href="#experience" onClick={(e) => handleNavClick(e, "#experience")} className="py-2 hover:text-blue-600 dark:hover:text-cyan-400">
                        Experience
                    </a>

                    <a href="#projects" onClick={(e) => handleNavClick(e, "#projects")} className="py-2 hover:text-blue-600 dark:hover:text-cyan-400">
                        Projects
                    </a>
                   
                    <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")} className="py-2 hover:text-blue-600 dark:hover:text-cyan-400">
                        Contact
                    </a>
                </div>
            )}
        </header>
    )
}
