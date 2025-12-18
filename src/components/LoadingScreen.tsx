"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#f0f0f0] text-black"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-4 text-6xl md:text-8xl font-serif italic tracking-wider"
                style={{ fontFamily: 'var(--font-instrument-serif)' }}
            >
                Ciao
                <motion.span
                    animate={{ rotate: [0, 20, -10, 20, 0] }}
                    transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatDelay: 0.5
                    }}
                    style={{ originX: 0.7, originY: 0.7 }}
                    className="not-italic"
                >
                    👋
                </motion.span>
            </motion.h1>
        </motion.div>
    );
}
