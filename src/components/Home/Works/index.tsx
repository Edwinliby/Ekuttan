'use client';

import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import line from '@/../public/curveLine.svg';
import { exp, works } from './const';
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";

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
    const [radius, setRadius] = useState(325)

    useEffect(() => {
        const handleResize = () => {
            const newRadius = window.innerWidth <= 700 ? 325 : 450;
            setRadius(newRadius);
        };

        handleResize(); // run once on mount

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="w-full h-full flex flex-col md:flex-row 2xl:flex-col gap-3 xs:gap-5">
            {/* My Experience Card */}
            <motion.div
                drag
                dragElastic={0.2}
                dragMomentum={false}
                animate={controls}
                onDragEnd={() => {
                    controls.start({ x: 0, y: 0, transition: { type: "spring", stiffness: 500, damping: 30 } });
                }}
                variants={blurFadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group sm:h-full 2xl:h-fit w-full lg:w-1/2 2xl:w-full shadow-lg rounded-3xl sm:rounded-4xl border-4 sm:border-[6px] border-white pt-3 xs:pt-4 px-3 xs:px-4 bg-gradient-to-b from-[#F0F0F0] to-[#ffffff]"
            >
                <b className="z-10 w-fit relative shadow px-4 py-2 text-xs 2xl:text-sm rounded-3xl bg-white">
                    <span>
                        <img src="/xp.webp" alt="xp" draggable={false} className='w-4 h-4 inline relative -top-0.5 mr-1 group-hover:animate-bounce' />
                        XP Stats
                    </span>
                </b>

                <div className="overflow-x-auto 2xl:overflow-visible h-[5rem] xs:h-[9rem] md:h-full lg:h-[7.5rem] xl:h-[9rem] 2xl:h-fit relative top-1 pb-2">
                    <motion.span
                        variants={blurFadeIn}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true }}
                        className="origin-top z-0 absolute left-6.25 block w-0.5 2xl:w-[2.5px] bg-[#c0c0c0]
                        h-[calc(100%+8rem)] 2xs:h-[calc(100%+5rem)] xs:h-[calc(100%+1rem)] sm:h-[70%] lg:h-[calc(100%+2rem)] xl:h-[calc(100%+1rem)] 2xl:h-[80%]"
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
                drag
                dragElastic={0.2}
                dragMomentum={false}
                animate={controls}
                onDragEnd={() => {
                    controls.start({ x: 0, y: 0, transition: { type: "spring", stiffness: 500, damping: 30 } });
                }}
                transition={{ delay: 0.2 }}
                variants={blurFadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="overflow-hidden group relative w-full lg:w-1/2 2xl:w-full h-[10rem] xs:h-[13rem] sm:h-full shadow-lg rounded-3xl sm:rounded-4xl border-4 sm:border-[6px] border-white pt-3 xs:pt-4 bg-gradient-to-b from-[#F0F0F0] to-[#ffffff]"
            >
                <b className="z-10 w-fit relative left-3 xs:left-4 shadow px-4 py-2 text-xs 2xl:text-sm rounded-3xl bg-white">
                    <span>
                        <img src="/craft.webp" alt="craft" draggable={false} className='w-4 h-4 inline relative -top-0.5 mr-1 group-hover:animate-bounce' />
                        Works & Projects
                    </span>
                </b>
                <Image
                    src={line}
                    alt="line"
                    width={500}
                    height={500}
                    draggable={false}
                    className="w-full h-fit absolute bottom-0 sm:bottom-8 lg:bottom-0 inset-x-0 z-0"
                />
                <OrbitingCircles
                    path={false}
                    radius={radius}
                    speed={0.5}
                    className='w-full h-full top-[225%] sm:top-[200%] xs:top-[170%] md:top-[195%] lg:top-[290%] xl:top-[230%]'
                >
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
                                className="w-fit h-fit object-contain shadow-xl rounded -rotate-6"
                            />
                        </motion.div>
                    ))}
                </OrbitingCircles>
            </motion.div>
        </div>
    );
}
