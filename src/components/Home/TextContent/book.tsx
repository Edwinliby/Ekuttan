'use client';

import Link from 'next/link'
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { motion, useAnimation, AnimatePresence } from 'framer-motion';

export default function Book() {
    return (
        <Link
            href="https://cal.com/edwin-liby/project-discuss"
            target="_blank"
            rel="noopener noreferrer"
            className="z-10 flex items-start mb-4 md:mb-6"
        >
            <div className="group rounded-full border border-black/5 bg-neutral-50 text-xs text-white transition-all ease-in hover:cursor-pointer hover:bg-orange-50 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                <AnimatedShinyText className="inline-flex items-center justify-center px-3 py-1.5 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                    <span className="relative flex h-3 w-3 items-center justify-center mr-1">
                        <motion.span
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-flex h-full w-full rounded-full"
                            style={{ backgroundColor: '#4ade80' }}
                            animate={{
                                scale: [1, 1.5],
                                opacity: [0.8, 0],
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        />
                        <span
                            className="relative inline-flex rounded-full h-2 w-2"
                            style={{ backgroundColor: '#22c55e' }}
                        />
                    </span> &nbsp;
                    Available for New Projects | Click to Book a Call
                </AnimatedShinyText>
            </div>
        </Link>
    )
}
