import React from "react"
import Hero from "../components/Hero"
import Skills from "./Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Testimonials from "../components/Testimonials"
import Experience from "../components/Experience"

export default function Home() {
    return (
        <main>
            <Hero />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
            <Testimonials />
        </main>
    )
}
