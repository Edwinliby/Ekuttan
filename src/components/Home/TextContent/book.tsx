'use client';

import { motion, Variants } from 'framer-motion';

const fadeInWithBlur: Variants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 1, ease: 'easeOut' },
    },
};
export default function Book() {
    return (
        <motion.a
            variants={fadeInWithBlur}
            initial="hidden"
            animate="visible"
            href="https://cal.com/edwin-liby/project-discuss"
            target="_blank"
            rel="noopener noreferrer"
            className="z-10 flex items-start"
        >
            <div className="inline-flex items-center justify-center transition ease-out text-xs sm:text-sm font-semibold text-[var(--foreground)] hover:text-gray-900">
                <span className="relative flex h-4.5 w-4.5 items-center justify-center">
                    <motion.span
                        className="bg-green-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-flex h-full w-full rounded-full"
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
                        className="relative inline-flex rounded-full h-2 w-2 bg-green-500"
                    />
                </span> &nbsp;
                Available for New Projects
            </div>
        </motion.a>
    )
}