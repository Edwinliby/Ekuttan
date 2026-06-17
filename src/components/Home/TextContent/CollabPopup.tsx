"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { IoClose } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";
import { useState } from "react";

export type CollabData = {
    img: StaticImageData;
    alt: string;
    link: string;
    year: string;
    projectCount: number;
    timeline: string;
    role?: string;
    brief?: string;
};

interface CollabPopupProps {
    data: CollabData[];
    onClose: () => void;
}

export default function CollabPopup({ data, onClose }: CollabPopupProps) {
    const [selectedWork, setSelectedWork] = useState<CollabData | null>(null);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--bg-start)]/40 backdrop-blur-xl p-4 sm:p-6 md:p-12"
        >
            <motion.div
                initial={{ scale: 0.95, y: 30, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 30, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-5xl h-[90vh] md:h-[85vh] bg-gradient-to-br from-[var(--bg-start)]/90 to-[var(--bg-end)]/90 border border-[var(--foreground)]/10 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col"
            >
                {/* Background glowing orbs */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                    <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-[var(--foreground)]/5 blur-[120px] rounded-full mix-blend-screen" />
                    <div className="absolute top-[60%] -right-[10%] w-[40%] h-[60%] bg-[var(--icon-color)]/5 blur-[120px] rounded-full mix-blend-screen" />
                </div>

                {/* Header */}
                <div className="relative flex items-center justify-between p-6 md:p-8 border-b border-[var(--foreground)]/10 bg-[var(--bg-start)]/30 backdrop-blur-md z-20">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--text-gradient-start)] to-[var(--text-gradient-end)] font-instrument tracking-tight">
                            Collaboration Journey
                        </h2>
                        <p className="text-sm md:text-base text-[var(--text-secondary)] mt-1 font-medium">A timeline of shared successes and projects</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="group p-3 rounded-full bg-[var(--foreground)]/5 hover:bg-[var(--foreground)]/10 border border-[var(--foreground)]/10 transition-all duration-300 text-[var(--foreground)]/70 hover:text-[var(--foreground)]"
                    >
                        <IoClose size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                    </button>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-6 md:p-12 relative z-10 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-[var(--foreground)]/10 hover:[&::-webkit-scrollbar-thumb]:bg-[var(--foreground)]/20 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
                    <div className="max-w-4xl mx-auto relative pb-20 pt-10">
                        {/* Vertical Line */}
                        <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--foreground)]/30 via-[var(--foreground)]/10 to-transparent transform md:-translate-x-1/2" />

                        {data.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
                                className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-16 md:mb-24 relative ${
                                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                            >
                                {/* Timeline Node */}
                                <div className="absolute left-[29px] md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[var(--bg-start)] border-[3px] border-[var(--foreground)]/50 rounded-full z-20 shadow-lg">
                                    <div className="absolute inset-0 rounded-full bg-[var(--foreground)]/30 animate-ping opacity-60" />
                                </div>

                                {/* Content Card */}
                                <div className={`w-full md:w-[calc(50%-3rem)] pl-[60px] md:pl-0 flex ${
                                    index % 2 === 0 ? "justify-start" : "md:justify-end"
                                }`}>
                                    <button
                                        onClick={() => setSelectedWork(item)}
                                        className="text-left group relative w-full bg-[var(--card-bg-start)]/60 backdrop-blur-xl border border-[var(--foreground)]/10 p-6 md:p-8 rounded-3xl hover:bg-[var(--card-bg-end)]/80 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-2xl cursor-pointer"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--foreground)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                                        
                                        {/* Hover Glow */}
                                        <div className="absolute -inset-[1px] bg-gradient-to-r from-[var(--foreground)]/10 to-[var(--icon-color)]/10 rounded-3xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 -z-10" />

                                        <div className="relative z-10">
                                            <div className="flex items-start justify-between mb-6">
                                                <div className="p-3 bg-[var(--bg-start)]/80 rounded-2xl w-16 h-16 flex items-center justify-center border border-[var(--foreground)]/10 shadow-inner group-hover:scale-110 transition-transform duration-500">
                                                    <Image src={item.img} alt={item.alt} className="object-contain filter drop-shadow-md" />
                                                </div>
                                                <div className="w-8 h-8 rounded-full bg-[var(--foreground)]/5 flex items-center justify-center border border-[var(--foreground)]/10 text-[var(--text-secondary)] group-hover:text-[var(--foreground)] group-hover:bg-[var(--foreground)]/10 transition-all duration-300">
                                                    <FiExternalLink size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                                                </div>
                                            </div>

                                            <div>
                                                <h3 className="text-2xl font-bold text-[var(--foreground)] capitalize mb-1 flex items-center gap-3">
                                                    {item.alt}
                                                </h3>
                                                <p className="text-sm text-[var(--text-secondary)] font-mono tracking-wider opacity-90">
                                                    {item.year} • {item.timeline}
                                                </p>
                                            </div>

                                            <div className="flex flex-wrap items-center gap-3 mt-6">
                                                <span className="px-4 py-1.5 rounded-full bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 text-xs font-medium text-[var(--foreground)]/80 backdrop-blur-md">
                                                    {item.projectCount} {item.projectCount === 1 ? 'Project' : 'Projects'}
                                                </span>
                                                {item.role && (
                                                    <span className="px-4 py-1.5 rounded-full bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 text-xs font-medium text-[var(--foreground)]/70 backdrop-blur-md">
                                                        {item.role}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </button>
                                </div>

                                {/* Date/Context Label (Opposite Side) */}
                                <div className={`w-full md:w-[calc(50%-3rem)] hidden md:flex items-center ${
                                    index % 2 === 0 ? "justify-end" : "justify-start"
                                }`}>
                                    <div className="relative">
                                        <span className="text-7xl lg:text-8xl font-black text-[var(--foreground)]/5 font-instrument tracking-tighter select-none">
                                            {item.year}
                                        </span>
                                        {item.role && (
                                            <div className={`absolute top-1/2 -translate-y-1/2 ${index % 2 === 0 ? '-right-8' : '-left-8'} text-[var(--foreground)]/20 font-mono text-sm whitespace-nowrap transform ${index % 2 === 0 ? 'rotate-90' : '-rotate-90'}`}>
                                                {item.role.toUpperCase()}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Detailed View Modal */}
                <AnimatePresence>
                    {selectedWork && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedWork(null)}
                            className="absolute inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[var(--bg-start)]/60 backdrop-blur-md"
                        >
                            <motion.div
                                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                                animate={{ scale: 1, y: 0, opacity: 1 }}
                                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                onClick={(e) => e.stopPropagation()}
                                className="relative w-full max-w-2xl bg-gradient-to-br from-[var(--card-bg-start)] to-[var(--card-bg-end)] border border-[var(--foreground)]/20 rounded-3xl shadow-2xl p-6 sm:p-10 overflow-hidden"
                            >
                                {/* Modal Glow */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--icon-color)]/10 blur-[80px] rounded-full pointer-events-none" />

                                <button
                                    onClick={() => setSelectedWork(null)}
                                    className="absolute top-6 right-6 p-2 rounded-full bg-[var(--foreground)]/5 hover:bg-[var(--foreground)]/10 text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors"
                                >
                                    <IoClose size={24} />
                                </button>

                                <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                                    <div className="w-24 h-24 shrink-0 bg-[var(--bg-start)] rounded-2xl flex items-center justify-center border border-[var(--foreground)]/10 shadow-inner p-4">
                                        <Image src={selectedWork.img} alt={selectedWork.alt} className="object-contain" />
                                    </div>
                                    
                                    <div className="flex-1">
                                        <h3 className="text-3xl font-bold text-[var(--foreground)] capitalize mb-2">
                                            {selectedWork.alt}
                                        </h3>
                                        <p className="text-sm text-[var(--icon-color)] font-mono mb-4">
                                            {selectedWork.role} • {selectedWork.year}
                                        </p>
                                        
                                        <div className="bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 rounded-xl p-5 mb-6">
                                            <p className="text-[var(--text-secondary)] leading-relaxed text-sm md:text-base">
                                                {selectedWork.brief || "Detailed description coming soon."}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <a
                                                href={selectedWork.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--foreground)] text-[var(--bg-start)] font-medium text-sm hover:-translate-y-1 transition-transform shadow-lg shadow-[var(--foreground)]/20"
                                            >
                                                Visit Website <FiExternalLink size={16} />
                                            </a>
                                            <span className="px-4 py-2 rounded-full border border-[var(--foreground)]/10 text-xs font-medium text-[var(--text-secondary)]">
                                                {selectedWork.projectCount} {selectedWork.projectCount === 1 ? 'Project' : 'Projects'}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
}
