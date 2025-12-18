'use client';

import Link from 'next/link';
import { motion, useAnimation, Variants } from 'framer-motion';
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

const companies = [
    { img: c1, alt: "mulearn", link: "https://mulearn.org/" },
    { img: c2, alt: "volshauz", link: "https://volshauz.com/" },
    { img: c3, alt: "scaleupconclave", link: "https://scaleupconclave.com/" },
    { img: c4, alt: "makemypass", link: "https://makemypass.com/" },
    { img: c5, alt: "onetac", link: "https://onetac.org/" },
    { img: c6, alt: "qseverse", link: "https://qseverse.com/" },
    { img: c7, alt: "elvcom", link: "https://elvcom.com/" },
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
    return (
        <div className="relative z-10 w-full sm:h-full flex flex-col items-center md:items-start gap-4 md:gap-10 xl:gap-22 justify-between py-2">
            <motion.div
                variants={fadeInWithBlur}
                initial="hidden"
                animate="visible"
                className='relative bottom-0.5 block sm:hidden'
            >
                <img src="/edwin.svg" alt="edwin spelling" className='absolute -top-9 -left-8 w-18 h-16' />
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
                    Worked with communities and delivered <b>14+</b> projects.
                </p>

                <motion.div
                    animate={controls}
                    className="w-full flex flex-wrap items-center justify-center sm:justify-start gap-4 xl:gap-6 py-2"
                >
                    {companies.map((company) => (
                        <Link href={company.link} rel='noopener' target='_blank' key={company.alt} className="group relative">
                            <motion.img
                                src={company.img.src}
                                alt={company.alt}
                                draggable={false}
                                width={100}
                                height={100}
                                whileHover={{ scale: 1.1 }}
                                className="w-16 h-8 sm:w-20 sm:h-10 object-contain cursor-pointer transition-all duration-300 ease-out"
                            />
                        </Link>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}