'use client';

import Link from 'next/link';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import c1 from '@/../public/companies/2.webp';
import c2 from '@/../public/companies/3.webp';
import c3 from '@/../public/companies/1.webp';
import c4 from '@/../public/companies/4.webp';
import c5 from '@/../public/companies/5.webp';
import Booking from './book';

const companies = [
    { img: c1, alt: "onetac", link: "https://www.onetac.org/" },
    { img: c2, alt: "scaleupconclave", link: "https://scaleupconclave.com/" },
    { img: c3, alt: "volshauz", link: "https://volshauz.com/" },
    { img: c4, alt: "makemypass", link: "https://makemypass.com/" },
    { img: c5, alt: "mulearn", link: "https://mulearn.org/" },
];

const fadeInWithBlur = {
    hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1, ease: 'easeOut' } },
};

export default function Index() {
    const controls = useAnimation();

    const titles = ["Designer", "Developer"];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % titles.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full sm:w-fit h-fit flex flex-col items-start gap-6 sm:gap-10 xl:gap-22 justify-between">
            {/* Headings Section */}
            <div className="w-full flex flex-col">
                <Booking />
                <motion.p
                    variants={fadeInWithBlur}
                    initial="hidden"
                    animate="visible"
                    className="text-2xl xl:text-3xl font-semibold text-gradient mb-2"
                >
                    3 years of experience as
                </motion.p>
                <motion.div
                    variants={fadeInWithBlur}
                    initial="hidden"
                    animate="visible"
                    className="h-[80px] md:h-[105px] relative perspective-1000"
                    style={{ perspective: 1000 }}  // add 3D perspective
                >
                    <AnimatePresence mode="wait">
                        <motion.h1
                            key={titles[currentIndex]}
                            initial={{ rotateX: 90, opacity: 0 }}
                            animate={{ rotateX: 0, opacity: 1 }}
                            exit={{ rotateX: -90, opacity: 0 }}
                            transition={{ duration: 0.8, ease: [0.45, 0, 0.2, 1] }}
                            className="h-full absolute text-7xl xl:text-8xl font-bold text-transparent text-gradient origin-top"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            {titles[currentIndex]}
                        </motion.h1>
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Companies */}
            <motion.div variants={fadeInWithBlur} initial="hidden" animate="visible"
                className="w-full sm:w-fit flex flex-col items-start gap-2 sm:gap-3">
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