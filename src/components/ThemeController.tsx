"use client";

import { useEffect, useState } from "react";

export default function ThemeController() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        const updateTheme = () => {
            const hour = new Date().getHours();
            const root = document.documentElement;

            // Morning: 05:00 - 11:00
            // Day: 11:00 - 16:00
            // Evening: 16:00 - 19:00
            // Night: 19:00 - 05:00

            if (hour >= 5 && hour < 11) {
                // Morning: Soft Blue Gradient
                root.style.setProperty("--bg-start", "#dbeafe"); // blue-100
                root.style.setProperty("--bg-end", "#eff6ff"); // blue-50
                root.style.setProperty("--foreground", "#1e3a8a"); // blue-900

                // Text Colors - Dark
                root.style.setProperty("--text-gradient-start", "#000000");
                root.style.setProperty("--text-gradient-end", "#7F7F7F");
                root.style.setProperty("--text-secondary", "#797979");

                // Card Colors - Light
                root.style.setProperty("--card-bg-start", "#f0f0f0");
                root.style.setProperty("--card-bg-end", "#ffffff");
            } else if (hour >= 11 && hour < 16) {
                // Day: Bright Sky Gradient
                root.style.setProperty("--bg-start", "#60a5fa"); // blue-400
                root.style.setProperty("--bg-end", "#bfdbfe"); // blue-200
                root.style.setProperty("--foreground", "#0f172a"); // slate-900

                // Text Colors - Dark
                root.style.setProperty("--text-gradient-start", "#000000");
                root.style.setProperty("--text-gradient-end", "#475569");
                root.style.setProperty("--text-secondary", "#4b5563"); // gray-600

                // Card Colors - Light
                root.style.setProperty("--card-bg-start", "#e2e8f0");
                root.style.setProperty("--card-bg-end", "#f8fafc");
            } else if (hour >= 16 && hour < 20) {
                // Evening: Twilight Blue Gradient
                root.style.setProperty("--bg-start", "#4338ca"); // indigo-700
                root.style.setProperty("--bg-end", "#60a5fa"); // blue-400
                root.style.setProperty("--foreground", "#eff6ff"); // blue-50

                // Text Colors - Light
                root.style.setProperty("--text-gradient-start", "#FFFFFF");
                root.style.setProperty("--text-gradient-end", "#cbd5e1"); // slate-300
                root.style.setProperty("--text-secondary", "#e2e8f0"); // slate-200

                // Card Colors - Dark
                root.style.setProperty("--card-bg-start", "#1e293b"); // slate-800
                root.style.setProperty("--card-bg-end", "#334155"); // slate-700
            } else {
                // Night: Deep Dark Gradient
                root.style.setProperty("--bg-start", "#0f172a"); // slate-900
                root.style.setProperty("--bg-end", "#1e1b4b"); // indigo-950
                root.style.setProperty("--foreground", "#f8fafc"); // slate-50

                // Text Colors - Light
                root.style.setProperty("--text-gradient-start", "#FFFFFF");
                root.style.setProperty("--text-gradient-end", "#94a3b8"); // slate-400
                root.style.setProperty("--text-secondary", "#cbd5e1"); // slate-300

                // Card Colors - Dark
                root.style.setProperty("--card-bg-start", "#0f172a");
                root.style.setProperty("--card-bg-end", "#1e293b");
            }
        };

        updateTheme();
        // Update every minute to catch hour changes
        const interval = setInterval(updateTheme, 60000);
        return () => clearInterval(interval);
    }, []);

    // Prevent flash of incorrect theme if possible, but for now returned null is fine
    // as the effect runs immediately on client mount.
    return null;
}
