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
            className={`relative w-[12rem] h-[9rem] cursor-pointer group [perspective:1000px] ${className}`}
        >
            {/* Folder Tab */}
            <span className="absolute top-0 left-0 w-16 h-4 bg-[#8d8d8d] rounded-t-md rounded-br-[.1rem] z-0" />

            {/* Folder Back */}
            <div className="absolute bottom-0.5 w-full h-[91%] bg-[#8d8d8d] rounded-b-2xl rounded-tr-xl z-0" />

            {/* Inside Images - stacked */}
            <div className="absolute bottom-0.5 left-0 w-full h-[91%] overflow-hidden rounded-b-2xl rounded-tr-xl z-0 p-4 pt-6 text-white text-sm">
                <div className="relative bottom-0.5 w-[100%] h-[100px] mx-auto">
                    {items.map((item, index) => (
                        <img
                            key={index}
                            src={item.img.src}
                            alt="img"
                            className={`
                                absolute -top-1 left-1/2 transform -translate-x-1/2 h-[100px] object-cover rounded object-top
                                transition-transform duration-300 ease-in-out
                                hover:-translate-y-4
                                z-[${index + 1}]
                            `}
                            style={{
                                transform: `translateY(${index * 8}px)`,
                                width: `calc(90% + ${index * 5}%)`,
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Front Flap - flips backward */}
            <div className="
                absolute bottom-0.5 left-0 w-full h-[91%] bg-[#707070]/10 backdrop-blur-xl inset-shadow-sm inset-shadow-white/30
                rounded-b-xl rounded-tl-lg rounded-tr-xl z-20 shadow-[inset_0_-4px_8px_rgba(255,255,255,0.5)]
                flex items-start justify-between p-4 text-white origin-bottom
                transition-transform duration-500 ease-in-out group-hover:[transform:rotateX(-60deg)] [transform-style:preserve-3d] [backface-visibility:hidden]"
            >
                <div className="relative -top-1">
                    <b className="text-sm md:text-base">{name}</b>
                    <p className="text-xs text-white/90">{items.length} files</p>
                </div>
                <HiOutlineDotsVertical className="relative -right-1.5"/>
            </div>
        </div>
    );
}
