'use client';

import { useEffect, useState } from 'react';
import StatusIndicator from './StatusIndicator';
import LocationInfo from './LocationInfo';
import { getIndiaTime } from '@/lib/utils';

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

    useEffect(() => {
        const indiaNow = getIndiaTime(currentTime);
        const year = indiaNow.getFullYear();
        const month = indiaNow.getMonth();
        const date = indiaNow.getDate();

        const start = new Date(year, month, date, 10, 0, 0);
        const end = new Date(year, month, date, 21, 0, 0);
        const oneHourBefore = new Date(start.getTime() - 60 * 60 * 1000);

        if (indiaNow >= start && indiaNow <= end) {
            setStatusColor('green');
            setStatusLabel('🔥 Work mode ON');
        } else if (indiaNow >= oneHourBefore && indiaNow < start) {
            setStatusColor('orange');
            setStatusLabel('🪥 Online Soon');
        } else {
            setStatusColor('red');
            setStatusLabel('💤 Work mode OFF');
        }
    }, [currentTime]);

    return (
        <nav className="fixed top-0 inset-x-0 w-full sm:h-16 px-2 pt-2.5 sm:p-4 bg-transparent z-50 max-w-[1920px] mx-auto">
            <StatusIndicator
                statusColor={statusColor}
                statusLabel={statusLabel}
                iconCode={iconCode}
                weatherDesc={weatherDesc}
                currentTime={currentTime}
            />
            <LocationInfo />
        </nav>
    );
}