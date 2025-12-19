'use client';

import { HiOutlineDotsVertical } from "react-icons/hi";

type ProjectBadgeProps = {
    name: string;
    items: { img: { src: string } }[];
    className?: string;
    onClick?: () => void;
};

export default function ProjectBadge({ name, items, className, onClick }: ProjectBadgeProps) {
    return (
        <div
            onClick={onClick}
            className={`relative w-[10.5rem] sm:w-[12rem] h-[9rem] cursor-pointer group [perspective:1000px] ${className}`}
        >
            {/* Folder Tab */}
            <span className="absolute top-0 left-0 w-16 h-4 bg-[#ffffff] rounded-t-md rounded-br-[.1rem] z-0" />

            {/* Folder Back */}
            <div className="absolute bottom-0.5 w-full h-[91%] bg-gradient-to-t from-[#f0f0f0] to-[#ffffff] rounded-b-2xl rounded-tr-xl z-0" />

            {/* Inside Images - stacked */}
            <div className="absolute bottom-0.5 left-0 w-full h-[91%] rounded-b-2xl rounded-tr-xl z-0 p-4 pt-6 text-white text-sm">
                <div className="relative bottom-0.5 w-[60%] h-[70px] mx-auto group">
                    {items.slice(0, 2).map((item, index) => (
                        <img
                            key={index}
                            src={item.img.src}
                            alt="img"
                            className={`
                                absolute -top-0 left-4 transform -translate-x-1/2 h-[70px] object-cover rounded object-top
                                transition-transform duration-300 ease-in-out 
                                md:group-hover:-translate-y-18 md:hover:scale-110 shadow-xl
                                z-[${20 + index}]
                            `}
                            style={{
                                transform: `translateX(${index * 60}px)`,
                                rotate: `${index * 12}deg`,
                                width: `calc(90% + ${index * 5}%)`,
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Front Flap - flips backward */}
            <div className="
                absolute bottom-0.5 left-0 w-full h-[91%] bg-gradient-to-t from-[#f0f0f0] to-[#ffffff] backdrop-blur-xl inset-shadow-sm 
                rounded-b-xl rounded-tl-lg rounded-tr-xl z-20 shadow-[inset_0_-4px_8px_rgba(0,0,0,0.075)]
                flex items-start justify-between p-4 origin-bottom
                transition-transform duration-500 ease-in-out md:group-hover:[transform:rotateX(-30deg)] [transform-style:preserve-3d] [backface-visibility:hidden]"
            >
                <div className="relative -top-1">
                    <b className="text-sm md:text-base text-gray-800 font-semibold">{name}</b>
                    <p className="text-xs text-gray-600">{items.length} files</p>
                </div>
                <HiOutlineDotsVertical className="relative -right-1.5" />
            </div>
        </div>
    );
}