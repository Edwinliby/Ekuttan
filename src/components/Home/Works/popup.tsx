'use client';

import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

type FolderPopupProps = {
    name: string;
    items: any[];
    onClose: () => void;
};

export default function FolderPopup({ name, items, onClose }: FolderPopupProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 md:px-16 overflow-hidden"
        >
            <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className='relative bg-gradient-to-br from-[var(--bg-start)] to-[var(--bg-end)] w-full md:w-[80%] h-[90%] md:h-[85%] py-8 px-6 rounded-2xl border border-white/20 shadow-2xl flex flex-col'
            >
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--text-secondary)]/20">
                    <h2 className="text-3xl font-serif italic font-bold text-[var(--foreground)]" style={{ fontFamily: 'var(--font-instrument-serif)' }}>{name}</h2>
                    <button onClick={onClose} className="bg-[var(--foreground)] text-[var(--bg-start)] px-6 py-2 rounded-full text-sm font-semibold transition-transform hover:scale-105 hover:opacity-90 active:scale-95 shadow-lg">
                        Close
                    </button>
                </div>

                <div className='flex-1 overflow-y-auto pr-2'>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-8 ">
                        {items.map((item, i) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                key={i}
                                className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl border border-[var(--text-secondary)]/20 transition-all duration-300 bg-white/5"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-6">
                                    <h3 className="text-white font-bold text-xl mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
                                    <div className="flex flex-wrap gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                        {item.tags?.map((tag: string, idx: number) => (
                                            <span key={idx} className="text-[10px] uppercase tracking-wider font-medium bg-white/20 backdrop-blur-md text-white px-2 py-1 rounded-full border border-white/10">
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
            </motion.div>
        </motion.div>
    );
}