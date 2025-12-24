'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { formatTime } from '@/lib/utils';

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
    const [isClicked, setIsClicked] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const toggleClicked = () => setIsClicked(prev => !prev);

    const isActive = isHovered || isClicked;

    return (
        <motion.div
            onClick={toggleClicked}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative inline-flex items-center rounded-full text-[10px] sm:text-xs overflow-hidden cursor-pointer px-2 py-1 select-none"
            layout
            animate={isActive ? 'hovered' : 'rest'}
            variants={{
                rest: { width: 'auto' },
                hovered: { width: 'auto' },
            }}
        >
            <span className="pl-0.5 font-semibold">{statusLabel}</span>

            <motion.div
                className="flex items-center gap-1 ml-2 overflow-hidden"
                variants={{
                    rest: { opacity: 0, width: 0, marginLeft: 0 },
                    hovered: { opacity: 1, width: 'auto', marginLeft: 8 },
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
                <span className="text-[var(--text-secondary)] whitespace-nowrap">(9:00 — 19:00)</span>
                <span className="text-[var(--text-secondary)]">|</span>
                <span
                    className="text-[var(--text-secondary)] cursor-help whitespace-nowrap"
                    title={formatTime(currentTime, {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                        timeZoneName: 'long',
                    })}
                >
                    {formatTime(currentTime, {
                        hour: '2-digit',
                        minute: '2-digit',
                        timeZoneName: 'short',
                    })}
                </span>
                {iconCode && (
                    <div className="w-5 h-5 overflow-hidden relative">
                        <img
                            src={`https://openweathermap.org/img/wn/${iconCode}.png`}
                            alt="weather"
                            title={weatherDesc}
                            className="w-5 h-5 absolute top-0 left-0"
                            style={{
                                filter: 'drop-shadow(0 20px 0 var(--icon-color))',
                                transform: 'translateY(-20px)'
                            }}
                        />
                    </div>
                )}
            </motion.div>
        </motion.div>
    );
}