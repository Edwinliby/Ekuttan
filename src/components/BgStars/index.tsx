'use client'

import React, { useEffect, useRef, useState } from "react";

const StarrySky: React.FC = () => {
    const z1Ref = useRef<HTMLDivElement>(null);
    const z2Ref = useRef<HTMLDivElement>(null);
    const z3Ref = useRef<HTMLDivElement>(null);

    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const ratio = 0.05;

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setCoords({ x: e.pageX, y: e.pageY });
        };

        document.addEventListener("mousemove", handleMouseMove);

        const animate = () => {
            if (z1Ref.current) {
                z1Ref.current.style.transform = `translate(${coords.x * ratio}px, ${coords.y * ratio}px)`;
            }
            if (z2Ref.current) {
                z2Ref.current.style.transform = `translate(${(coords.x * ratio) / 2}px, ${(coords.y * ratio) / 2}px) rotate(217deg)`;
            }
            if (z3Ref.current) {
                z3Ref.current.style.transform = `translate(${(coords.x * ratio) / 3}px, ${(coords.y * ratio) / 3}px) rotate(71deg)`;
            }
            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, [coords]);

    const tileClasses = "absolute top-0 left-0 w-full h-full bg-repeat";

    const bgTileStyle = {
        backgroundSize: "512px 512px",
        // animation: "pulseOpacity 8s ease-in-out infinite",
    };

    return (
        <div className="fixed top-0 left-0 w-screen h-screen overflow-hidden -z-10">
            {/* Background layers */}
            <div ref={z3Ref} className="absolute w-[150vw] h-[150vw] left-[-50vw] top-[-50vw]">
                <div
                    className={`${tileClasses} bg-[url('/topleft.png')]`}
                    style={bgTileStyle}
                />
                <div
                    className={`${tileClasses} bg-[url('/topright.png')]`}
                    style={bgTileStyle}
                />
                <div
                    className={`${tileClasses} bg-[url('/bottomleft.png')]`}
                    style={bgTileStyle}
                />
                <div
                    className={`${tileClasses} bg-[url('/bottomright.png')]`}
                    style={bgTileStyle}
                />
            </div>

            <div ref={z2Ref} className="absolute w-[150vw] h-[150vw] left-[-50vw] top-[-50vw]">
                <div
                    className={`${tileClasses} bg-[url('/topleft.png')]`}
                    style={bgTileStyle}
                />
                <div
                    className={`${tileClasses} bg-[url('/topright.png')]`}
                    style={bgTileStyle}
                />
                <div
                    className={`${tileClasses} bg-[url('/bottomleft.png')]`}
                    style={bgTileStyle}
                />
                <div
                    className={`${tileClasses} bg-[url('/bottomright.png')]`}
                    style={bgTileStyle}
                />
            </div>

            <div ref={z1Ref} className="absolute w-[150vw] h-[150vw] left-[-50vw] top-[-50vw]">
                <div
                    className={`${tileClasses} bg-[url('/topleft.png')]`}
                    style={bgTileStyle}
                />
                <div
                    className={`${tileClasses} bg-[url('/topright.png')]`}
                    style={bgTileStyle}
                />
                <div
                    className={`${tileClasses} bg-[url('/bottomleft.png')]`}
                    style={bgTileStyle}
                />
                <div
                    className={`${tileClasses} bg-[url('/bottomright.png')]`}
                    style={bgTileStyle}
                />
            </div>
        </div>
    );
};

export default StarrySky;