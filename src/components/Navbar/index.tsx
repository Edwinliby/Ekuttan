'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
    const [statusColor, setStatusColor] = useState<'green' | 'orange' | 'red' | 'gray'>('gray');
    const [iconCode, setIconCode] = useState<string | null>(null);
    const [weatherDesc, setWeatherDesc] = useState<string>('');
    const [currentTime, setCurrentTime] = useState<Date>(new Date());
    const [statusLabel, setStatusLabel] = useState<string>('Checking...');

    const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHERMAP;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 30000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const fetchWeather = async (): Promise<void> => {
            try {
                const res = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=Kochi,in&appid=${API_KEY}&units=metric`
                );
                const data = await res.json();

                if (data?.weather?.[0]) {
                    setIconCode(data.weather[0].icon);
                    setWeatherDesc(data.weather[0].description);
                } else {
                    console.warn('Unexpected weather response:', data);
                }
            } catch (err) {
                console.error('Failed to fetch weather:', err);
            }
        };

        if (API_KEY) fetchWeather();
    }, [API_KEY]);

    const getIndiaTime = (date: Date): Date =>
        new Date(date.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));

    const formatIndiaTime = (date: Date, options: Intl.DateTimeFormatOptions) => {
        return new Intl.DateTimeFormat('en-GB', {
            timeZone: 'Asia/Kolkata',
            ...options,
        }).format(date);
    };

    useEffect(() => {
        const indiaNow = getIndiaTime(currentTime);

        const year = indiaNow.getFullYear();
        const month = indiaNow.getMonth();
        const date = indiaNow.getDate();

        const start = new Date(year, month, date, 9, 0, 0);
        const end = new Date(year, month, date, 19, 0, 0);
        const oneHourBefore = new Date(start.getTime() - 60 * 60 * 1000);

        if (indiaNow >= start && indiaNow <= end) {
            setStatusColor('green');
            setStatusLabel('Online');
        } else if (indiaNow >= oneHourBefore && indiaNow < start) {
            setStatusColor('orange');
            setStatusLabel('Online Soon');
        } else {
            setStatusColor('red');
            setStatusLabel('Offline');
        }
    }, [currentTime]);

    const colorMap: Record<string, [string, string]> = {
        green: ['#4ade80', '#22c55e'],
        orange: ['#fdba74', '#f97316'],
        red: ['#fca5a5', '#ef4444'],
        gray: ['#d1d5db', '#6b7280'],
    };

    const [outer, inner] = colorMap[statusColor];

    return (
        <nav className="fixed top-0 inset-x-0 w-full sm:h-16 px-2 pt-2.5 sm:p-4 bg-transparent z-50 max-w-[1920px] mx-auto">
            {iconCode &&
                <motion.div
                    className="inline-flex items-center gap-1 px-3 py-1 bg-white rounded-full shadow-2xs text-[10px] sm:text-xs"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                    layout
                >
                    <span className="relative flex h-3 w-3 items-center justify-center">
                        <motion.span
                            className="absolute inline-flex h-full w-full rounded-full"
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
                        ></span>
                    </span>
                    <span className="font-bold text-black pl-1">
                        {statusLabel} <span className="text-gray-500">(9:00 — 19:00)</span>
                    </span>
                    |
                    <span
                        className="text-gray-600 cursor-help"
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
                    <img
                        src={`https://openweathermap.org/img/wn/${iconCode}.png`}
                        alt="weather"
                        title={weatherDesc}
                        className="w-5 h-5 cursor-help"
                    />
                </motion.div>
            }

            <p className="text-[10px] sm:text-sm relative top-2 sm:top-1 float-right font-bold flex items-center gap-1">
                Chengannur, KL
                <img
                    src="https://flagcdn.com/16x12/in.png"
                    alt="India Flag"
                    className="w-4 h-auto"
                />
            </p>
        </nav>
    );
}