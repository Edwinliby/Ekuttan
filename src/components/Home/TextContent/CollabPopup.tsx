"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { IoClose } from "react-icons/io5";

export type CollabData = {
    img: StaticImageData;
    alt: string;
    link: string;
    year: string;
    projectCount: number;
    timeline: string;
    role?: string;
};

interface CollabPopupProps {
    data: CollabData[];
    onClose: () => void;
}

export default function CollabPopup({ data, onClose }: CollabPopupProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 sm:p-8"
        >
            <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl h-[85vh] bg-gradient-to-br from-[var(--bg-start)] to-[var(--bg-end)] border border-[var(--text-secondary)]/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-[var(--text-secondary)]/10 bg-black/5">
                    <div>
                        <h2 className="text-2xl font-bold text-[var(--foreground)] font-instrument italic">Collaboration Journey</h2>
                        <p className="text-sm text-[var(--text-secondary)]">A timeline of shared successes and projects</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-[var(--foreground)]/10 transition-colors text-[var(--foreground)]"
                    >
                        <IoClose size={24} />
                    </button>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-6 relative">
                    {/* Vertical Line */}
                    <div className="space-y-12 sm:space-y-24 relative pb-12">
                        {/* Vertical Line */}
                        <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-purple-500 opacity-70 hidden sm:block" />
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[var(--foreground)]/20 sm:hidden block" />
                        {data.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`flex flex-col sm:flex-row items-center gap-8 ${index % 2 === 0 ? "sm:flex-row-reverse" : ""
                                    } relative`}
                            >
                                {/* Timeline Node (Desktop) */}
                                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500/50 rounded-full border border-blue-400 z-10 hidden sm:block shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                                    <div className="w-full h-full animate-ping bg-blue-400 rounded-full opacity-20" />
                                </div>

                                {/* Timeline Node (Mobile) */}
                                <div className="absolute left-[1.68rem] top-0 w-3 h-3 bg-blue-500 rounded-full border border-[var(--bg-start)] z-10 sm:hidden" />


                                {/* Content Card */}
                                <div className={`w-full sm:w-[calc(50%-2rem)] flex ${index % 2 === 0 ? "justify-start pl-[4rem] sm:pl-0" : "justify-start sm:justify-end pl-[4rem] sm:pl-0"}`}>
                                    <div className="bg-[var(--foreground)]/10 backdrop-blur-sm border border-[var(--foreground)]/20 p-5 rounded-xl hover:bg-[var(--foreground)]/15 transition-colors duration-300 w-full hover:border-blue-500/30 group shadow-lg">
                                        <div className="flex items-center gap-4 mb-3">
                                            <div className="p-2 bg-[var(--bg-start)]/50 rounded-lg w-12 h-12 flex items-center justify-center border border-[var(--text-secondary)]/20">
                                                <Image src={item.img} alt={item.alt} className="object-contain" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-[var(--foreground)] capitalize">{item.alt}</h3>
                                                <p className="text-xs text-blue-400 font-mono tracking-wider">{item.year} • {item.timeline}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4 text-sm text-[var(--text-secondary)] mt-2">
                                            <span className="px-3 py-1 rounded-full bg-[var(--bg-start)]/50 border border-[var(--text-secondary)]/20 text-xs font-medium">
                                                {item.projectCount} {item.projectCount === 1 ? 'Project' : 'Projects'}
                                            </span>
                                            {item.role && (
                                                <span className="px-3 py-1 rounded-full bg-[var(--bg-start)]/50 border border-[var(--text-secondary)]/20 text-xs text-[var(--text-secondary)] font-medium">
                                                    {item.role}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Date/Context Label (Opposite Side) */}
                                <div className={`w-full sm:w-[calc(50%-2rem)] hidden sm:flex ${index % 2 === 0 ? "justify-end text-right" : "justify-start text-left"}`}>
                                    <span className="text-4xl font-bold text-[var(--foreground)]/10 font-instrument">{item.year}</span>
                                </div>

                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
