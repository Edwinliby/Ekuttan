'use client'

import Image from "next/image";
import Pic from '@/../public/pic.webp';
import { motion, useMotionValue, animate } from "framer-motion";
import { useRef, useState } from "react";
import { FaLinkedinIn, FaGithub, FaXTwitter, FaEnvelope } from "react-icons/fa6";
import { useMediaQuery } from 'react-responsive';

const shineVariants = {
    initial: { x: '-150%', y: '-150%' },
    hover: { x: '150%', y: '150%' },
};

const links = [
    {
        icon: <FaGithub size={25} />,
        url: 'https://github.com/edwinliby'
    },
    {
        icon: <FaLinkedinIn size={25} />,
        url: 'https://www.linkedin.com/in/edwinliby/'
    },
    {
        icon: <FaXTwitter size={25} />,
        url: 'https://twitter.com/mauricioalvesdev'
    },
    {
        icon: <FaEnvelope size={25} />,
        url: 'mailto:edwinliby30@gmail.com'
    }
]

export default function ProfilePic() {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const isMobile = useMediaQuery({ maxWidth: 768 });

    const toggleClicked = () => setIsClicked(prev => !prev);
    const isActive = isHovered || isClicked;
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);
    const scale = useMotionValue(1);

    const mobileVariants = {
        rest: { opacity: 0, x: 40 },
        hovered: { opacity: 1, x: 0 },
    };

    const desktopVariants = {
        rest: { opacity: 0, y: 20 },
        hovered: { opacity: 1, y: 0 },
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        const card = cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const midX = rect.width / 2;
        const midY = rect.height / 2;

        const rotateMax = 6; // Max tilt angle

        const rotY = ((x - midX) / midX) * rotateMax; // Left/right tilt
        const rotX = -((y - midY) / midY) * rotateMax; // Up/down tilt

        rotateX.set(rotX);
        rotateY.set(rotY);
        scale.set(1.03);
    };

    const resetTilt = () => {
        animate(rotateX, 0, { type: 'spring', stiffness: 150, damping: 10 });
        animate(rotateY, 0, { type: 'spring', stiffness: 150, damping: 10 });
        animate(scale, 1, { type: 'spring', stiffness: 150, damping: 10 });
    };

    return (
        <motion.div
            className="hdden md:block relative"
            style={{ perspective: 1000 }}
            onClick={toggleClicked}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            layout
            animate={isActive ? 'hovered' : 'rest'}
            variants={{
                rest: { height: 'auto' },
                hovered: { height: 'auto' },
            }}
        >
            <motion.div
                ref={cardRef}
                className="relative w-fit h-[20rem] xl:h-full border-[6px] border-white bg-gradient-to-br from-[#FFFFFF] via-[#dfdfdf] to-[#C0C0C0] rounded-[2rem] overflow-hidden shadow-xl"
                style={{
                    rotateX,
                    rotateY,
                    scale,
                    transformStyle: 'preserve-3d',
                }}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => {
                    setIsHovered(false);
                    resetTilt();
                }}
            >
                {/* Shine effect */}
                <motion.div
                    className="absolute top-0 left-0 w-[150%] h-[200%] bg-white/30 blur-xl"
                    style={{ rotate: '45deg', zIndex: 5, pointerEvents: 'none' }}
                    variants={shineVariants}
                    initial="initial"
                    animate={isHovered ? "hover" : "initial"}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                />

                <img
                    src='/edwin.svg'
                    draggable={false}
                    alt="edwin liby"
                    className="w-18 h-18 sm:w-20 sm:h-20 object-contain absolute top-[20%] left-[35%] transform -translate-x-[35%] -translate-y-[20%] z-50"
                />

                {/* Image */}
                <Image
                    src={Pic}
                    alt="hero"
                    width={800}
                    height={800}
                    className="w-full h-full object-cover relative z-10 transition duration-500 ease-in-out"
                />
            </motion.div>

            <motion.div
                className="absolute top-8 right-4 transform sm:-top-18 sm:inset-x-0 sm:w-full sm:h-16 flex flex-col sm:flex-row gap-6 justify-center items-center"
                initial="rest"
                animate={isActive ? 'hovered' : 'rest'}
                variants={isMobile ? mobileVariants : desktopVariants}
                transition={{ duration: 0.4, ease: 'easeOut' }}
            >
                {
                    links.map((link, index) => (
                        <motion.a
                            key={index}
                            href={link.url}
                            whileHover={{ scale: 1.1, backgroundColor: '#F8F8F8' }}
                            className="rounded-lg sm:rounded-2xl border border-[#e0e0e0] w-10 h-10 p-2.5 sm:w-12 sm:h-12 flex items-center justify-center bg-white"
                        >
                            {link.icon}
                        </motion.a>
                    ))
                }
            </motion.div>
        </motion.div>
    );
}