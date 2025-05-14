'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
    const [hydrated, setHydrated] = useState(false);
    const [weatherData, setWeatherData] = useState(() => {
        if (typeof window !== 'undefined') {
            const cached = localStorage.getItem('weatherData');
            if (cached) {
                const { icon, desc, timestamp } = JSON.parse(cached);
                if (Date.now() - timestamp < 30 * 60 * 1000) {
                    return { icon, desc };
                }
            }
        }
        return { icon: null, desc: '' };
    });

    const [currentTime, setCurrentTime] = useState(new Date());
    const [status, setStatus] = useState({ label: '', color: 'gray' });

    useEffect(() => {
        setHydrated(true); // ensures React state is ready
    }, []);

    useEffect(() => {
        const indiaNow = new Date(
            currentTime.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })
        );
        const start = new Date(indiaNow.setHours(9, 0, 0));
        const end = new Date(indiaNow.setHours(19, 0, 0));
        const oneHourBefore = new Date(start.getTime() - 60 * 60 * 1000);

        if (indiaNow >= start && indiaNow <= end) {
            setStatus({ label: 'Online', color: 'green' });
        } else if (indiaNow >= oneHourBefore && indiaNow < start) {
            setStatus({ label: 'Online Soon', color: 'orange' });
        } else {
            setStatus({ label: 'Offline', color: 'red' });
        }
    }, [currentTime]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 30000);
        return () => clearInterval(interval);
    }, []);

    // Weather fetch fallback
    useEffect(() => {
        if (!weatherData.icon) {
            fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=Kochi,in&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP}&units=metric`
            )
                .then((res) => res.json())
                .then((data) => {
                    if (data?.weather?.[0]) {
                        const icon = data.weather[0].icon;
                        const desc = data.weather[0].description;
                        localStorage.setItem(
                            'weatherData',
                            JSON.stringify({ icon, desc, timestamp: Date.now() })
                        );
                        setWeatherData({ icon, desc });
                    }
                });
        }
    }, [weatherData]);

    const colorMap = {
        green: ['#4ade80', '#22c55e'],
        orange: ['#fdba74', '#f97316'],
        red: ['#fca5a5', '#ef4444'],
        gray: ['#d1d5db', '#6b7280'],
    };

    const [outer, inner] = colorMap[status.color];

    if (!hydrated) return null; // Avoid hydration mismatch flash

    return (
        <nav className="fixed top-0 inset-x-0 w-full sm:h-16 px-2 pt-2.5 sm:p-4 flex items-center justify-between bg-transparent z-50 max-w-[1700px] mx-auto">
            <div className="inline-flex items-center gap-1 px-3 py-1 bg-white rounded-full shadow-2xs text-[10px] sm:text-xs">
                <span className="relative flex h-3 w-3 items-center justify-center">
                    <motion.span
                        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-full rounded-full"
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
                        className="relative rounded-full h-2 w-2"
                        style={{ backgroundColor: inner }}
                    />
                </span>
                <span className="font-bold text-black pl-1">
                    {status.label} <span className="text-gray-500">(9:00 — 19:00)</span>
                </span>
                |
                <span className="text-gray-600">
                    {new Intl.DateTimeFormat('en-GB', {
                        timeZone: 'Asia/Kolkata',
                        hour: '2-digit',
                        minute: '2-digit',
                        timeZoneName: 'short',
                    }).format(currentTime)}
                </span>
                {weatherData.icon && (
                    <img
                        src={`https://openweathermap.org/img/wn/${weatherData.icon}.png`}
                        alt="weather"
                        title={weatherData.desc}
                        className="w-5 h-5"
                    />
                )}
            </div>

            <p className="text-[10px] sm:text-sm font-bold float-right flex items-center gap-1">
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
