import React, { useState } from "react"
import emailjs from "@emailjs/browser"
import toast from "react-hot-toast"
import { motion } from "framer-motion"
import { fadeUp, staggerChildren } from "../utils/motionVariants"
import { FiSend, FiMail, FiUser, FiMessageCircle } from "react-icons/fi"

export default function Contact() {
    const [loading, setLoading] = useState(false)

    const sendEmail = async (e) => {
        e.preventDefault()
        setLoading(true)
        const form = e.target

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name.value,
                    from_email: form.email.value,
                    message: form.message.value,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )

            toast.success("✅ Message sent successfully!")
            form.reset()
        } catch (error) {
            console.error("EmailJS Error:", error)
            toast.error("❌ Failed to send message.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <section
            id="contact"
            className="relative py-28 px-6 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden"
        >
            <div className="container mx-auto max-w-3xl text-center">
                <motion.div
                    variants={staggerChildren}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.h2
                        variants={fadeUp}
                        className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent mb-3"
                    >
                        Let’s Work Together
                    </motion.h2>
                    <motion.p
                        variants={fadeUp}
                        className="text-gray-600 dark:text-gray-400 mb-10 text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
                    >
                        Great things happen when creativity meets collaboration — let’s turn your ideas into something extraordinary.
                    </motion.p>

                    <motion.form
                        onSubmit={sendEmail}
                        variants={fadeUp}
                        className="relative bg-white/80 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm hover:shadow-lg backdrop-blur-md p-8 flex flex-col gap-6 transition-all duration-300"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-400/5 to-transparent rounded-2xl pointer-events-none" />

                        <label className="flex flex-col text-left">
                            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                                <FiUser /> Name
                            </span>
                            <input
                                name="name"
                                required
                                placeholder="Your name"
                                className="mt-2 w-full px-4 py-3 rounded-lg bg-transparent border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400 outline-none transition-all"
                            />
                        </label>

                        <label className="flex flex-col text-left">
                            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                                <FiMail /> Email
                            </span>
                            <input
                                name="email"
                                type="email"
                                required
                                placeholder="you@example.com"
                                className="mt-2 w-full px-4 py-3 rounded-lg bg-transparent border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400 outline-none transition-all"
                            />
                        </label>

                        <label className="flex flex-col text-left">
                            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                                <FiMessageCircle /> Message
                            </span>
                            <textarea
                                name="message"
                                rows="5"
                                required
                                placeholder="Write your message..."
                                className="mt-2 w-full px-4 py-3 rounded-lg bg-transparent border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400 outline-none transition-all resize-none"
                            />
                        </label>

                        <motion.button
                            type="submit"
                            disabled={loading}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="mt-2 flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            {loading ? "Sending..." : <>Send Message <FiSend size={18} /></>}
                        </motion.button>
                    </motion.form>
                </motion.div>
            </div>
        </section>
    )
}
