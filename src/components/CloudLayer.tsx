"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimationFrame } from "framer-motion";
import { useEffect, useRef } from "react";

interface CloudLayerProps {
    src: string;
    speed?: number; // Speed of drift
    depth?: number; // Parallax depth (higher = moves more with mouse)
    className?: string; // Positioning classes
    opacity?: number;
}

export default function CloudLayer({ src, speed = 1, depth = 10, className, opacity = 0.8 }: CloudLayerProps) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth mouse movement
    const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    // Parallax transform
    const x = useTransform(smoothX, (value) => (value * depth) / 100);
    const y = useTransform(smoothY, (value) => (value * depth) / 100);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Center the coordinate system
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            mouseX.set(e.clientX - centerX);
            mouseY.set(e.clientY - centerY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            style={{ x, y }}
            className={`absolute pointer-events-none ${className}`}
        >
            <motion.img
                src={src}
                alt="cloud"
                className="w-full h-full object-contain"
                style={{ opacity }}
                animate={{
                    x: [0, 20 * speed, 0, -20 * speed, 0],   // Gentle drift horizontal
                    y: [0, -10 * speed, 0, 10 * speed, 0],  // Gentle drift vertical
                }}
                transition={{
                    duration: 20 / speed,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
            />
        </motion.div>
    );
}
