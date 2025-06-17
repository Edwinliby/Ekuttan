'use client';

import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { exp, works, projects } from './const';
import Folder from './folder';
import FolderPopup from './popup';

type FolderProps = {
    name: string;
    projects: string[];
};

// border style = shadow-lg rounded-3xl sm:rounded-4xl border-4 sm:border-[6px] border-white bg-gradient-to-b from-[#F0F0F0] to-[#ffffff]

// Reusable blur-in animation
const blurFadeIn = {
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
            <div className="w-full h-full flex flex-col md:flex-row 2xl:flex-col gap-3 xs:gap-5">
                {/* My Experience Card */}
                <motion.div
                    animate={controls}
                    variants={blurFadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="group sm:h-full 2xl:h-fit w-full lg:w-1/2 2xl:w-full pt-3 xs:pt-4 md:px-4"
                >
                    <b className="z-10 w-fit relative shadow px-4 py-2 text-xs 2xl:text-sm rounded-3xl bg-white">
                        <span>
                            <img src="/xp.webp" alt="xp" draggable={false} className='w-4 h-4 inline relative -top-0.5 mr-1 group-hover:animate-bounce' />
                            XP Stats
                        </span>
                    </b>

                    <div className="overflow-x-auto 2xl:overflow-visible h-fit md:h-full lg:h-[7.5rem] xl:h-[9rem] 2xl:h-fit relative top-1 pb-2">
                        <motion.span
                            variants={blurFadeIn}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 1.2 }}
                            viewport={{ once: true }}
                            className="origin-top z-0 absolute left-6.25 block w-0.5 2xl:w-[2px] bg-[#e0e0e0]
                        h-[80%] sm:h-[70%] lg:h-[calc(100%+2rem)] xl:h-[calc(100%+1rem)] 2xl:h-[80%]"
                        />

                        {exp.map((item, index) => (
                            <motion.div
                                key={item.id}
                                variants={blurFadeIn}
                                initial="hidden"
                                whileInView="visible"
                                transition={{ delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="z-10 relative flex items-start gap-4 pt-6 pl-5"
                            >
                                <span className="rounded-full w-3 h-3 bg-black" />
                                <div className="relative -top-1.5">
                                    <b className='text-sm lg:text-base tracking-wide'>{item.title}</b>
                                    <p className="text-[0.65rem] sm:text-xs text-[#919191]">{item.time}</p>
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
                    className="overflow-hidden flex flex-col gap-4 md:gap-8 w-full lg:w-1/2 2xl:w-full h-fit sm:h-full pt-2 md:pt-4 md:px-4"
                >
                    <b className="z-10 w-fit shadow px-4 py-2 text-xs 2xl:text-sm rounded-3xl bg-white">
                        <span>
                            <img src="/craft.webp" alt="craft" draggable={false} className='w-4 h-4 inline relative -top-0.5 mr-1 group-hover:animate-bounce' />
                            Works & Projects
                        </span>
                    </b>
                    <div className='flex justify-start ml-6 items-center gap-4 md:gap-6 mt-2 md:mt-0'>
                        <Folder name="Personal Projects" items={projects} onClick={() => setOpenFolder({ name: "Projects", items: projects })} />
                        <Folder name="Client Works" items={works} onClick={() => setOpenFolder({ name: "Works", items: works })} />
                    </div>
                </motion.div>
            </div>

            {openFolder && (
                <FolderPopup
                    name={openFolder.name}
                    items={openFolder.items}
                    onClose={() => setOpenFolder(null)}
                />
            )}
        </>
    );
}