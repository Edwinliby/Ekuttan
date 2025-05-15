'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { formatIndiaTime } from '@/utils/timeUtils';

const colorMap: Record<string, [string, string]> = {
    green: ['#4ade80', '#22c55e'],
    orange: ['#fdba74', '#f97316'],
    red: ['#fca5a5', '#ef4444'],
    gray: ['#d1d5db', '#6b7280'],
};

interface Props {
    statusColor: 'green' | 'orange' | 'red' | 'gray';
    statusLabel: string;
    iconCode: string | null;
    weatherDesc: string;
    currentTime: Date;
}

export default function StatusIndicator({
    statusColor,
    statusLabel,
    iconCode,
    weatherDesc,
    currentTime,
}: Props) {
    const [outer, inner] = colorMap[statusColor];
    const [isClicked, setIsClicked] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const toggleClicked = () => setIsClicked(prev => !prev);

    const isActive = isHovered || isClicked;

    return (
        <motion.div
            onClick={toggleClicked}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative inline-flex items-center bg-white rounded-full text-[10px] sm:text-xs overflow-hidden cursor-pointer px-2 py-1 select-none"
            layout
            animate={isActive ? 'hovered' : 'rest'}
            variants={{
                rest: { width: 'auto' },
                hovered: { width: 'auto' },
            }}
        >
            <span className="relative flex h-3 w-3 items-center justify-center mr-1">
                <motion.span
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-flex h-full w-full rounded-full"
                    style={{ backgroundColor: outer }}
                    animate={{
                        scale: [1, 2],
                        opacity: [0.8, 0],
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <span
                    className="relative inline-flex rounded-full h-2 w-2"
                    style={{ backgroundColor: inner }}
                />
            </span>
            <span className="pl-0.5 font-bold text-black">{statusLabel}</span>

            <motion.div
                className="flex items-center gap-1 ml-2 overflow-hidden"
                variants={{
                    rest: { opacity: 0, width: 0, marginLeft: 0 },
                    hovered: { opacity: 1, width: 'auto', marginLeft: 8 },
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
                <span className="text-gray-500 whitespace-nowrap">(9:00 — 19:00)</span>
                <span className="text-gray-400">|</span>
                <span
                    className="text-gray-600 cursor-help whitespace-nowrap"
                    title={formatIndiaTime(currentTime, {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                        timeZoneName: 'long',
                    })}
                >
                    {formatIndiaTime(currentTime, {
                        hour: '2-digit',
                        minute: '2-digit',
                        timeZoneName: 'short',
                    })}
                </span>
                {iconCode && (
                    <img
                        src={`https://openweathermap.org/img/wn/${iconCode}.png`}
                        alt="weather"
                        title={weatherDesc}
                        className="w-5 h-5"
                    />
                )}
            </motion.div>
        </motion.div>
    );
}