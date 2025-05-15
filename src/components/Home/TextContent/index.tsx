'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
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
    return (
        <div className="w-full md:w-[60%] xl:w-[55%] h-fit md:h-[20rem] xl:h-full xl:py-2 flex flex-col items-start gap-4 xs:gap-8 justify-between">
            {/* Headings Section */}
            <div className="flex flex-col">
                <motion.h1
                    variants={fadeInWithBlur}
                    initial="hidden"
                    animate="visible"
                    className="text-7xl xl:text-8xl font-bold text-[#171717]"
                >
                    Frontend
                </motion.h1>

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
                    3 years of experience
                </motion.p>
            </div>

            {/* Companies Section with Blur Animation */}
            <motion.div
                variants={fadeInWithBlur}
                initial="hidden"
                animate="visible"
                className="w-full sm:w-fit flex flex-col items-center gap-2 sm:gap-3"
            >
                <div className="w-full overflow-hidden relative shadow-lg rounded-3xl border-4 sm:border-[6px] border-white px-3 py-2 sm:px-4 bg-gradient-to-b from-[#F0F0F0] to-[#ffffff]">
                    <div className="flex gap-6 3xl:gap-10 items-center justify-between">
                        {companies.map((company) => (
                            <Link href={company.link} rel='noopener' target='_blank' key={company.alt} className="w-16 h-10 3xl:w-22">
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
                </div>
                <p className="text-[0.65rem] sm:text-sm text-[#797979] tracking-wide ">
                    Companies and communities I've collaborated with, and <b className='text-[#5b5b5b]'>many more</b>.
                </p>
            </motion.div>
        </div>
    );
}