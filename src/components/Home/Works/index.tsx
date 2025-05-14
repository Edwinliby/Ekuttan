'use client';

import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import { exp, works } from './const';

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
    return (
        <div className="w-full h-full flex flex-col md:flex-row 2xl:flex-col gap-3 xs:gap-5">
            {/* My Experience Card */}
            <motion.div
                variants={blurFadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="xs:h-full 2xl:h-fit w-full lg:w-1/2 2xl:w-full shadow-lg rounded-4xl border-4 sm:border-[6px] border-white pt-3 xs:pt-4 px-3 xs:px-4 bg-gradient-to-b from-[#F0F0F0] to-[#F5F5F5]"
            >
                <b className="z-10 w-fit relative shadow px-4 py-2 text-xs 2xl:text-sm rounded-3xl bg-white">
                    My Experience
                </b>

                <div className="overflow-x-auto 2xl:overflow-visible h-[5rem] xs:h-[7.5rem] md:h-full lg:h-[7.5rem] 2xl:h-fit relative pb-2">
                    <motion.span
                        variants={blurFadeIn}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true }}
                        className="origin-top z-0 absolute left-6.25 block w-0.5 2xl:w-[2.5px] bg-[#c0c0c0]
                        h-[calc(100%+6rem)] xs:h-[calc(100%+2rem)] sm:h-[70%] lg:h-[calc(100%+2rem)] 2xl:h-[80%]"
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
                                <b>{item.title}</b>
                                <p className="text-xs text-[#919191]">{item.time}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* My Works & Projects Card */}
            <motion.div
                variants={blurFadeIn}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="overflow-hidden w-full lg:w-1/2 2xl:w-full h-full relative shadow-lg rounded-4xl border-4 sm:border-[6px] border-white pt-3 xs:pt-4 bg-gradient-to-b from-[#F0F0F0] to-[#F5F5F5]"
            >
                <b className="z-10 w-fit relative left-3 xs:left-4 shadow px-4 py-2 text-xs 2xl:text-sm rounded-3xl bg-white">
                    My Works & Projects
                </b>

                <Marquee speed={50} gradient={false} pauseOnHover={true} className="overflow-hidden w-full h-full absolute bottom-0 left-0">
                    {works.map((item, i) => (
                        <motion.div
                            key={i}
                            variants={blurFadeIn}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className={`w-[6rem] h-[6rem] xs:w-[8rem] xs:h-[8rem] 3xl:w-[12rem] 3xl:h-[12rem] flex items-center justify-center ${i !== 0 ? '-ml-8' : ''}`}
                        >
                            <Image
                                src={item.src}
                                alt="company"
                                width={500}
                                height={500}
                                draggable={false}
                                className="w-fit h-fit saturate-0 active:saturate-100 hover:saturate-100 object-contain shadow-xl rounded -rotate-6 translate-y-2 hover:-translate-y-3 active:-translate-y-3 transition-all duration-300 ease-in-out"
                            />
                        </motion.div>
                    ))}
                </Marquee>
            </motion.div>
        </div>
    );
}
