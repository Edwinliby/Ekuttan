'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose, IoChevronBack, IoChevronForward } from 'react-icons/io5';

type FolderPopupProps = {
    name: string;
    items: any[];
    onClose: () => void;
};

export default function FolderPopup({ name, items, onClose }: FolderPopupProps) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;
            if (e.key === 'ArrowRight') {
                setSelectedIndex((prev) => (prev !== null && prev < items.length - 1 ? prev + 1 : prev));
            } else if (e.key === 'ArrowLeft') {
                setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
            } else if (e.key === 'Escape') {
                setSelectedIndex(null);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex, items.length]);

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex !== null && selectedIndex < items.length - 1) setSelectedIndex(selectedIndex + 1);
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex !== null && selectedIndex > 0) setSelectedIndex(selectedIndex - 1);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 px-4 md:px-16 overflow-hidden"
        >
            <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className='relative bg-gradient-to-br from-[var(--bg-start)] to-[var(--bg-end)] w-full md:w-[80%] h-[90%] md:h-[85%] pt-6 px-4 md:px-6 rounded-2xl border border-white/20 shadow-2xl flex flex-col overflow-hidden'
            >
                <div className="flex items-center justify-between pb-4 border-b border-[var(--foreground)]/10">
                    <h2 className="text-3xl font-serif italic font-bold text-[var(--foreground)]" style={{ fontFamily: 'var(--font-instrument-serif)' }}>{name}</h2>
                    <button onClick={onClose} className="bg-[var(--foreground)] text-[var(--bg-start)] px-6 py-2 rounded-full text-sm font-semibold transition-transform hover:scale-105 hover:opacity-90 active:scale-95 shadow-lg">
                        Close
                    </button>
                </div>

                <div className='flex-1 overflow-y-auto pt-6 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-[var(--foreground)]/10 hover:[&::-webkit-scrollbar-thumb]:bg-[var(--foreground)]/20 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent'>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-8 ">
                        {items.map((item, i) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                key={i}
                                onClick={() => setSelectedIndex(i)}
                                className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl border border-[var(--foreground)]/10 transition-all duration-300 bg-[var(--foreground)]/5 cursor-pointer"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 md:via-black/40 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-3 md:p-6">
                                    <h3 className="text-white font-bold text-lg md:text-xl mb-1 md:mb-2 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
                                    <div className="flex flex-wrap gap-2 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                        {item.tags?.map((tag: string, idx: number) => (
                                            <span key={idx} className="text-[8px] md:text-[10px] uppercase tracking-wider font-medium bg-white/20 backdrop-blur-md text-white px-2 py-1 rounded-full border border-white/10">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <img
                                    src={item.img.src}
                                    alt={item.title || "project"}
                                    draggable={false}
                                    className="w-full aspect-video object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Gallery View Overlay */}
                <AnimatePresence>
                    {selectedIndex !== null && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute inset-0 z-50 flex flex-col bg-[var(--bg-start)]/95 backdrop-blur-xl rounded-2xl overflow-hidden"
                        >
                            {/* Gallery Header */}
                            <div className="flex items-center justify-between p-6 border-b border-[var(--foreground)]/10">
                                <h3 className="text-2xl font-bold text-[var(--foreground)]">{items[selectedIndex].title}</h3>
                                <button 
                                    onClick={() => setSelectedIndex(null)}
                                    className="p-2 rounded-full bg-[var(--foreground)]/5 hover:bg-[var(--foreground)]/10 text-[var(--foreground)] transition-colors"
                                >
                                    <IoClose size={24} />
                                </button>
                            </div>

                            {/* Gallery Content */}
                            <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
                                {/* Image Area with Navigation */}
                                <div className="flex-1 relative flex items-center justify-center p-4 md:p-8 group bg-black/5">
                                    <AnimatePresence mode="wait">
                                        <motion.img
                                            key={selectedIndex}
                                            initial={{ opacity: 0, x: 50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -50 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            src={items[selectedIndex].img.src}
                                            alt={items[selectedIndex].title}
                                            className="w-full h-full object-contain drop-shadow-2xl"
                                        />
                                    </AnimatePresence>

                                    {/* Prev/Next Buttons */}
                                    <button
                                        onClick={handlePrev}
                                        disabled={selectedIndex === 0}
                                        className="absolute left-4 md:left-8 p-3 rounded-full bg-[var(--bg-start)]/80 text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--bg-start)] disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-lg backdrop-blur-md z-10"
                                    >
                                        <IoChevronBack size={24} />
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        disabled={selectedIndex === items.length - 1}
                                        className="absolute right-4 md:right-8 p-3 rounded-full bg-[var(--bg-start)]/80 text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--bg-start)] disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-lg backdrop-blur-md z-10"
                                    >
                                        <IoChevronForward size={24} />
                                    </button>
                                </div>

                                {/* Sidebar Info */}
                                <div className="w-full md:w-80 lg:w-96 p-6 md:p-8 bg-gradient-to-b from-transparent to-[var(--foreground)]/5 border-t md:border-t-0 md:border-l border-[var(--foreground)]/10 overflow-y-auto">
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {items[selectedIndex].tags?.map((tag: string, idx: number) => (
                                            <span key={idx} className="text-xs uppercase tracking-wider font-medium bg-[var(--foreground)]/10 text-[var(--foreground)] px-3 py-1.5 rounded-full border border-[var(--foreground)]/10">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    <h4 className="text-lg font-bold text-[var(--foreground)] mb-3">About this Project</h4>
                                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                                        {items[selectedIndex].brief || "Every pixel and line of code here has a story. I'm currently documenting the journey behind this project—from the initial spark to the final polish. Full case study coming soon."}
                                    </p>
                                    
                                    {/* Optionally add a link if one exists */}
                                    {items[selectedIndex].link && (
                                        <a
                                            href={items[selectedIndex].link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block w-full py-3 px-4 text-center rounded-xl bg-[var(--foreground)] text-[var(--bg-start)] font-semibold hover:opacity-90 transition-opacity shadow-lg"
                                        >
                                            View Live Project
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
}