'use client';

import { useState } from 'react';
import { motion, useAnimation, Variants, AnimatePresence } from 'framer-motion';
import { exp, works, projects } from './const';
import Folder from './folder';
import FolderPopup from './popup';

// Reusable blur-in animation
const blurFadeIn: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
        filter: 'blur(10px)',
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.8,
            ease: 'easeOut',
        },
    },
};

export default function Work() {
    const controls = useAnimation();
    const [openFolder, setOpenFolder] = useState<null | { name: string; items: any[] }>(null);

    return (
        <>
            <div className="w-full sm:h-full flex flex-col md:flex-row lg:flex-col gap-3 xs:gap-5 lg:pl-8 2xl:pl-0">
                {/* My Experience Card */}
                <motion.div
                    animate={controls}
                    variants={blurFadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="hidden sm:block group sm:h-full lg:h-fit w-full lg:w-full pt-3 xs:pt-4"
                >
                    <b className="z-10 w-fit relative shadow shadow-black/5 px-4 py-2 text-xs 2xl:text-sm font-semibold rounded-3xl bg-[var(--foreground)]/10 border border-[var(--text-secondary)]/20 backdrop-blur-md text-[var(--foreground)]">
                        <span>
                            <img src="/xp.svg" alt="xp" draggable={false} className='w-4 h-4 inline relative -top-0.5 mr-1 group-hover:animate-bounce' />
                            XP Stats
                        </span>
                    </b>

                    <div className="overflow-x-auto 2xl:overflow-visible h-fit md:h-full lg:h-fit relative top-1 pb-2">
                        <motion.span
                            variants={blurFadeIn}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 1.2 }}
                            viewport={{ once: true }}
                            className="origin-top z-0 absolute top-0.5 left-6.25 block w-0.5 xl:w-[2px] bg-[#ffffff]
                        h-[80%] sm:h-[70%] lg:h-[80%]"
                        />

                        {exp.map((item, index) => (
                            <motion.div
                                key={item.id}
                                variants={blurFadeIn}
                                initial="hidden"
                                whileInView="visible"
                                transition={{ delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="z-10 relative flex items-start gap-4 pt-6 pl-5 group"
                            >
                                <span className="rounded-full w-3 h-3 bg-white" />
                                <div className="relative -top-1.5">
                                    <b className='text-sm lg:text-base font-semibold'>{item.title}</b>
                                    <p className="text-[0.65rem] sm:text-xs text-[var(--text-secondary)]">{item.time}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* My Works & Projects Card */}
                <motion.div
                    animate={controls}
                    transition={{ delay: 0.2 }}
                    variants={blurFadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="overflow-hidden flex flex-col items-center justify-center sm:items-start sm:justify-start gap-4 md:gap-8 w-full lg:w-full h-fit sm:h-full pt-2 md:pt-4"
                >
                    <b className="z-10 w-fit shadow shadow-black/5 border border-[var(--text-secondary)]/20 px-4 py-2 text-xs 2xl:text-sm rounded-3xl bg-[var(--foreground)]/10 backdrop-blur-md font-semibold text-[var(--foreground)]">
                        <span>
                            <img src="/craft.svg" alt="craft" draggable={false} className='w-4 h-4 inline relative -top-0.5 mr-1 group-hover:animate-bounce' />
                            My Works & Projects
                        </span>
                    </b>
                    <div className='flex justify-start lg:ml-6 items-center gap-4 md:gap-6 mt-2 md:mt-0'>
                        <Folder name="Fun Projects" items={projects} onClick={() => setOpenFolder({ name: "Projects", items: projects })} />
                        <Folder name="Client Works" items={works} onClick={() => setOpenFolder({ name: "Works", items: works })} />
                    </div>
                </motion.div>
            </div>

            <AnimatePresence>
                {openFolder && (
                    <FolderPopup
                        name={openFolder.name}
                        items={openFolder.items}
                        onClose={() => setOpenFolder(null)}
                    />
                )}
            </AnimatePresence>
        </>
    );
}