'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import c1 from '@/../public/companies/2.webp';
import c2 from '@/../public/companies/3.webp';
import c3 from '@/../public/companies/1.webp';
import c4 from '@/../public/companies/4.webp';
import c5 from '@/../public/companies/5.webp';

const companies = [c1, c2, c3, c4, c5];

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
        <div className="w-full md:w-[60%] xl:w-fit h-fit md:h-[20rem] xl:h-full xl:py-2 flex flex-col gap-6 xs:gap-8 justify-between">
            {/* Headings Section */}
            <div className="flex flex-col">
                <motion.h1
                    variants={fadeInWithBlur}
                    initial="hidden"
                    animate="visible"
                    className="text-7xl xl:text-8xl font-bold text-transparent text-gradient"
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
                className="flex flex-col xl:gap-2"
            >
                <p className="text-xs xs:text-sm xl:text-base text-gradient tracking-wide">
                    companies and community i have worked with
                </p>

                <div className="flex gap-6 3xl:gap-10 items-center justify-between">
                    {companies.map((company) => (
                        <div key={company.src} className="w-16 h-16 3xl:w-22 3xl:h-22">
                            <Image
                                src={company}
                                alt="company"
                                width={100}
                                height={100}
                                className="w-full h-full object-contain py-5 sm:py-4.5"
                            />
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}