'use client';

import Link from 'next/link';
import { motion, useAnimation, Variants, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import c1 from '@/../public/companies/1.webp';
import c2 from '@/../public/companies/2.webp';
import c3 from '@/../public/companies/3.webp';
import c4 from '@/../public/companies/4.webp';
import c5 from '@/../public/companies/5.webp';
import c6 from '@/../public/companies/6.webp';
import c7 from '@/../public/companies/7.webp';
import Booking from './book';
import { IoMdMail } from "react-icons/io";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import CollabPopup, { CollabData } from './CollabPopup';

const companies: CollabData[] = [
    { img: c1, alt: "mulearn", link: "https://mulearn.org/", year: "2023", projectCount: 1, timeline: "Jun - Jan", role: "Contributor" },
    { img: c2, alt: "volshauz", link: "https://volshauz.com/", year: "2023", projectCount: 3, timeline: "Present", role: "Lead Frontend" },
    { img: c3, alt: "scaleupconclave", link: "https://scaleupconclave.com/", year: "2024", projectCount: 1, timeline: "Jan - Feb", role: "Web Developer" },
    { img: c4, alt: "makemypass", link: "https://makemypass.com/", year: "2023", projectCount: 2, timeline: "Aug - Dec", role: "UI Engineer" },
    { img: c5, alt: "onetac", link: "https://onetac.org/", year: "2022", projectCount: 1, timeline: "Mar - May", role: "Freelance" },
    { img: c6, alt: "qseverse", link: "https://qseverse.com/", year: "2022", projectCount: 1, timeline: "Sep - Nov", role: "Frontend Dev" },
    { img: c7, alt: "elvcom", link: "https://elvcom.com/", year: "2021", projectCount: 5, timeline: "Jan - Dec", role: "Founder" },
];

const fadeInWithBlur: Variants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 1, ease: 'easeOut' },
    },
};

const sentence = ["Build", "with", "Clarity", "Delivered", "with", "Speed"]

export default function Index() {
    const controls = useAnimation();
    const [showCollab, setShowCollab] = useState(false);

    return (
        <div className="relative z-10 w-full sm:h-full flex flex-col items-center md:items-start gap-4 md:gap-10 xl:gap-22 justify-between py-2">
            <motion.div
                variants={fadeInWithBlur}
                initial="hidden"
                animate="visible"
                className='relative bottom-0.5 block sm:hidden'
            >
                <img src="/edwin.svg" alt="edwin spelling" className='absolute -top-9 -left-8 w-18 h-16' style={{ color: 'var(--icon-color)' }} />
                <img src="/smallPic.webp" alt="small profile pic" className='rounded-xl border-2 border-white w-20 h-20 bg-white/10 backdrop-blur-md -rotate-6 animate-float' />
            </motion.div>

            {/* Headings Section */}
            <div className="w-full flex flex-col gap-4 sm:gap-6 items-center justify-center sm:items-start sm:justify-start ">
                <Booking />
                <div className="w-full flex flex-wrap gap-2 justify-center sm:justify-start">
                    {sentence.map((sentence, index) => (
                        <motion.h1
                            variants={fadeInWithBlur}
                            initial="hidden"
                            animate="visible"
                            key={index}
                            className="text-4xl sm:text-6xl lg:text-4xl xl:text-[2.85rem] sm:leading-tight font-bold text-gradient tracking-[-1.25px] transform-gpu backface-hidden"
                        >
                            {sentence}
                        </motion.h1>
                    ))}
                </div>
                <div className='flex items-center gap-3'>
                    <motion.a
                        variants={fadeInWithBlur}
                        initial="hidden"
                        animate="visible"
                        href="https://cal.com/edwin-liby/project-discuss"
                        target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 w-fit px-6 py-3 rounded-xl text-sm text-white font-semibold
                     bg-gradient-to-t from-gray-900 to-gray-600 
                     shadow-2xl shadow-white/50 hover:shadow-black/15 inset-shadow-sm inset-shadow-white/30 hover:-translate-y-1.5 transition duration-300 ease-in-out"
                    >
                        Book a Call <HiChatBubbleLeftRight />
                    </motion.a>
                    <motion.a
                        variants={fadeInWithBlur}
                        initial="hidden"
                        animate="visible"
                        href="mailto:hi@edwinliby.com"
                        target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 w-fit px-6 py-3 rounded-xl text-sm text-black/80 font-semibold
                        bg-gradient-to-t from-white/50 to-white/10 shadow-2xl shadow-black/15 inset-shadow-sm inset-shadow-white/30 
                        hover:-translate-y-1.5 transition duration-300 ease-in-out"
                    >
                        Chat via Mail<IoMdMail />
                    </motion.a>
                </div>
            </div>

            {/* Companies */}
            <motion.div variants={fadeInWithBlur} initial="hidden" animate="visible"
                className="w-full sm:w-fit flex flex-col items-center sm:items-start gap-2 sm:gap-3 p-4 md:p-0">
                <p className="text-center sm:text-left text-[0.65rem] sm:text-sm font-medium text-[var(--text-secondary)] leading-relaxed">
                    I have been in the industry for almost 3 years as a <b className='font-instrument font-semibold text-[var(--text-secondary)] tracking-wide'>Designer</b> & <b className='font-semibold'>Developer</b>.
                    Worked and collaborated with <b onClick={() => setShowCollab(true)} className='cursor-pointer underline decoration-dotted underline-offset-4 hover:text-[var(--foreground)] transition-colors duration-300'>{companies.length}+ companies</b>.
                </p>

                {/* <motion.div
                    animate={controls}
                    className="w-full flex flex-wrap items-center justify-center sm:justify-start gap-4 xl:gap-6 py-2"
                >
                    {companies.map((company) => (
                        <div onClick={() => setShowCollab(true)} key={company.alt} className="group relative cursor-pointer">
                            <motion.img
                                src={company.img.src}
                                alt={company.alt}
                                draggable={false}
                                width={100}
                                height={100}
                                whileHover={{ scale: 1.1 }}
                                className="w-16 h-8 sm:w-20 sm:h-10 object-contain transition-all duration-300 ease-out grayscale hover:grayscale-0 opacity-70 hover:opacity-100"
                            />
                        </div>
                    ))}
                </motion.div> */}
            </motion.div>

            <AnimatePresence>
                {showCollab && (
                    <CollabPopup data={companies} onClose={() => setShowCollab(false)} />
                )}
            </AnimatePresence>
        </div>
    );
}