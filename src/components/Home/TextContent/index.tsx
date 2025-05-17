'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import c1 from '@/../public/companies/2.webp';
import c2 from '@/../public/companies/3.webp';
import c3 from '@/../public/companies/1.webp';
import c4 from '@/../public/companies/4.webp';
import c5 from '@/../public/companies/5.webp';
import { IoIosInformationCircleOutline } from "react-icons/io";

const companies = [
    {
        img: c1,
        alt: "onetac",
        link: "https://www.onetac.org/"
    },
    {
        img: c2,
        alt: "scaleupconclave",
        link: "https://scaleupconclave.com/"
    },
    {
        img: c3,
        alt: "volshauz",
        link: "https://volshauz.com/"
    },
    {
        img: c4,
        alt: "makemypass",
        link: "https://makemypass.com/"
    },
    {
        img: c5,
        alt: "mulearn",
        link: "https://mulearn.org/"
    },
];

// Shared animation
const fadeInWithBlur = {
    hidden: {
        opacity: 0,
        y: 20,
        filter: 'blur(8px)',
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 1,
            ease: 'easeOut',
        },
    },
};

export default function Index() {
    const controls = useAnimation();
    const [isClicked, setIsClicked] = useState(false);
    return (
        <div className="w-full sm:w-fit h-fit flex flex-col items-start gap-4 sm:gap-14 justify-between">
            {/* Headings Section */}
            <div className="flex flex-col">
                <div
                    onMouseEnter={() => setIsClicked(true)}
                    onMouseLeave={() => setIsClicked(false)}
                    className="relative group w-fit"
                >
                    <motion.h1
                        variants={fadeInWithBlur}
                        initial="hidden"
                        animate="visible"
                        className="relative w-fit text-7xl xl:text-8xl font-bold text-[#171717]"
                    >
                        Adaptive
                        <IoIosInformationCircleOutline
                            size={15}
                            className="absolute bottom-0 -right-5 text-black/50 cursor-pointer"
                        />
                    </motion.h1>

                    {/* Tooltip */}
                    <AnimatePresence>
                        {isClicked && (
                            <motion.div
                                key="tooltip"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="w-max max-w-xs tracking-wider absolute bottom-0 -right-10 bg-[#171717]/50 backdrop-blur-sm text-white text-xs p-2 rounded-md"
                            >
                                I use <b>"Adaptive"</b> to reflect my flexibility across technologies, quick learning ability, and readiness to work beyond just frontend tasks.
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <motion.h1
                    variants={fadeInWithBlur}
                    initial="hidden"
                    animate="visible"
                    className="text-7xl xl:text-8xl font-bold text-transparent text-gradient mt-1"
                >
                    Developer
                </motion.h1>

                <motion.p
                    variants={fadeInWithBlur}
                    initial="hidden"
                    animate="visible"
                    className="text-2xl xl:text-3xl font-semibold text-gradient mt-4 sm:mt-6"
                >
                    with 3 years of experience
                </motion.p>
            </div>

            {/* Companies Section with Blur Animation */}
            <motion.div
                variants={fadeInWithBlur}
                initial="hidden"
                animate="visible"
                className="w-full sm:w-fit flex flex-col items-center gap-2 sm:gap-3"
            >
                <motion.div
                    drag
                    dragElastic={0.2}
                    dragMomentum={false}
                    animate={controls}
                    onDragEnd={() => {
                        controls.start({ x: 0, y: 0, transition: { type: "spring", stiffness: 500, damping: 30 } });
                    }}
                    className="w-full overflow-hidden relative shadow-lg rounded-3xl border-4 sm:border-[6px] border-white px-3 py-2 sm:px-4 bg-gradient-to-b from-[#F0F0F0] to-[#ffffff]"
                >
                    <div className="flex gap-6 3xl:gap-10 items-center justify-between">
                        {companies.map((company) => (
                            <Link href={company.link} rel='noopener' target='_blank' key={company.alt} className="w-16 h-10 md:w-11 xl:w-16 3xl:w-22">
                                <motion.img
                                    src={company.img.src}
                                    alt={company.alt}
                                    draggable={false}
                                    width={100}
                                    height={100}
                                    whileHover={{ scale: 1.2 }}
                                    className="w-full h-full object-contain py-2 sm:py-1.5"
                                />
                            </Link>
                        ))}
                    </div>
                </motion.div>
                <p className="text-[0.65rem] lg:text-sm text-[#797979] tracking-wide ">
                    Companies and communities I've collaborated with, and <b className='text-[#5b5b5b]'>many more</b>.
                </p>
            </motion.div>
        </div>
    );
}