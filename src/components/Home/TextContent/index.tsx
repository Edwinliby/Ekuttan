'use client';

import Link from 'next/link';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import c1 from '@/../public/companies/2.webp';
import c2 from '@/../public/companies/3.webp';
import c3 from '@/../public/companies/1.webp';
import c4 from '@/../public/companies/4.webp';
import c5 from '@/../public/companies/5.webp';

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
    return (
        <div className="w-full sm:w-fit h-fit flex flex-col items-start gap-6 sm:gap-10 xl:gap-22 justify-between">
            {/* Headings Section */}
            <div className="flex flex-col">
                <div className="relative group w-fit">
                    <motion.h1
                        variants={fadeInWithBlur}
                        initial="hidden"
                        animate="visible"
                        className="relative w-fit text-6xl md:text-7xl font-light font-instrument text-[#2c0347] flex items-baseline"
                    >
                        Web Designer
                        <p className='rotate-12 relative top-6 left-2 text-2xl font-light font-neue text-[#171717]'>&</p>
                    </motion.h1>
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
                className="w-full sm:w-fit flex flex-col items-start gap-2 sm:gap-3"
            >
                <p className="text-[0.65rem] lg:text-sm text-[#797979] tracking-wide ">
                    Companies and communities I've collaborated with, and <b className='text-[#5b5b5b]'>many more</b>.
                </p>
                <motion.div
                    drag
                    dragElastic={0.2}
                    dragMomentum={false}
                    animate={controls}
                    onDragEnd={() => {
                        controls.start({ x: 0, y: 0, transition: { type: "spring", stiffness: 500, damping: 30 } });
                    }}
                    className="w-full relative py-2"
                >
                    <div className="flex gap-4 sm:gap-6 xl:gap-8 3xl:gap-10 items-center justify-between">
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
            </motion.div>
        </div>
    );
}