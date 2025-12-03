// src/App.jsx
import React from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Skills from "./pages/Skills"
import ProjectDetails from "./pages/ProjectDetails"
import ScrollProgress from "./components/ScrollProgress"

export default function App() {
  return (
    <>
      <Navbar />
      <ScrollProgress />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>

      <Footer />
    </>
  )
}
