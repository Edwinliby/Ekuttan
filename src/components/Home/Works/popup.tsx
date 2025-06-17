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
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black/10 backdrop-blur z-50 md:px-16 overflow-auto">
            <div className='relative bg-white w-full md:w-[80%] h-full py-16 px-4'>
                <button onClick={onClose} className="absolute top-6 right-4 bg-black text-white px-4 py-2 rounded-lg z-50">
                    Close
                </button>
                <div className='bg-amber-100 '>
                    <h2 className="text-2xl font-bold mb-4">{name}</h2>
                </div>
            </div>
        </div>
    );
}